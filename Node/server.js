const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Pool = require("pg").Pool; // initialise a connection pool
const db = new Pool({
  // establish a new connection
  user: "cyf", // Your user name
  host: "localhost",
  database: "cyf", // ... username again.
  password: "cyf",
  port: 5432
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.get("/volunteers", (request, response) => {
  db.query(
    // "SELECT firstname, lastname, email FROM volunteers",
    "SELECT * FROM volunteers",
    (error, result) => {
      result.rows.forEach(row => {
        console.log(
          row.firstname,
          row.lastname,
          row.email,
          row.phone,
          row.weekendAvailability,
          row.weekdayAvailability,
          row.otherAvailability,
          row.classAvailability,
          row.otherSkills,
          row.locationID
        );
      });
      response.status(200).json({ volunteers: result.rows });
    }
  );
});
app.get("/dashboardName", (request, response) => {
  db.query(
    "SELECT id, firstName, lastName FROM  volunteers",
    (error, result) => {
      response.status(200).json({ volunteers: result.rows });
    }
  );
});

app.get("/locations", (request, response) => {
  db.query("SELECT id, city, country FROM locations", (error, result) => {
    response.status(200).json({ locations: result.rows });
  });
});

app.get("/status", (request, response) => {
  db.query("SELECT status FROM volunteers", (error, result) => {
    response.status(200).json({ volunteers: result.rows });
  });
});

app.post("/volunteers", (request, response) => {
  let fn = request.body.firstName;
  let ls = request.body.lastName;
  let em = request.body.email;
  let ph = request.body.phone;
  let wea = request.body.weekendAvailability;
  let wda = request.body.weekdayAvailability;
  let oa = request.body.otherAvailability;
  let ca = request.body.classAvailability;
  let os = request.body.otherSkills;
  let li = request.body.locationID;
  let st = request.body.status;
  // let sd = request.body.submissionDate;
  //let cm = request.body.comments;
  // let wed = request.body.welcomeEmailDate;
  // let oed = request.body.onboardEmailDate;

  let sql =
    "INSERT INTO volunteers (firstName, lastName, email, phone," +
    " weekendAvailability, weekdayAvailability, otherAvailability, " +
    " classAvailability, otherSkills, locationID, status, submissionDate)" +
    " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, current_time)" +
    " RETURNING id";

  db.query(
    sql,
    [fn, ls, em, ph, wea, wda, oa, ca, os, li, st],
    (err, result) => {
      if (err) {
        response.status(500).json({ error: err });
      } else {
        let newID = result.row[0].id;
        let sql2 =
          "INSERT INTO skillLevels (volunteerID, skillID, skillLevel)" +
          " VALUES ($1, $2, $3)";
        //db.query(sql2, [newID]) //this query needs to be inside a loop
        //because volunteers can have multiple skills
        response.status(200).json({
          id: newID //returns volunteer id
        });
      }
    }
  );
});

const SERVER_PORT = process.env.PORT || 8000;
app.listen(SERVER_PORT, function() {
  console.log(
    `Server is listening on port ${SERVER_PORT}. Ready to accept requests!`
  );
});
