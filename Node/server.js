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
      if (error) {
        throw err;
      } else {
        response.status(200).json({ volunteers: result.rows });
      }
    }
  );
});

app.get("/locations", (request, response) => {
  db.query("SELECT id, city, country FROM locations", (error, result) => {
    if (error) {
      throw error;
    } else {
      response.status(200).json({ locations: result.rows });
    }
  });
});

app.get("/status", (request, response) => {
  db.query("SELECT status FROM volunteers", (error, result) => {
    if (error) {
      throw error;
    } else {
      response.status(200).json({ volunteers: result.rows });
    }
  });
});

app.post("/volunteersExample", (request, response) => {
  let fn = request.body.firstName;
  let ls = request.body.lastName;
  let em = request.body.email;
  let ph = request.body.phone;
  let st = request.body.status;

  let sql =
    "INSERT INTO volunteers (firstName, lastName, email, phone, status)" +
    " VALUES ($1, $2, $3, $4, $5)" +
    " RETURNING id";
  // (" RETURNING id");
  db.query(sql, [fn, ls, em, ph, st], (err, result) => {
    if (err === undefined) {
      let newID = result.row[0].id;
      response.sendStatus(200).json({
        id: newID
      });
    } else {
      response.status(500).json({ error: err });
    }
  });
});
app.post("/volunteers2", async (req, res) => {
  try {
    let fn = req.body.firstName;
    let ls = req.body.lastName;
    let em = req.body.email;
    let ph = req.body.phone;
    let sql =
      "INSERT INTO volunteers (firstname, lastname, email, phone) VALUES ($1, $2, $3, $4) RETURNING id";
    await db.query(sql, [fn, ls, em, ph], (err, result) => {
      if (err != undefined) {
        throw err;
      } else {
        let newID = result.rows[0].id;
        res.status(200).json({
          id: newID
        });
      }
    });
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
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
