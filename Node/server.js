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
app.get("/", (request, response) => {
  db.query(
    "SELECT firstname, lastname, email FROM volunteers",
    (error, result) => {
      result.rows.forEach(row => {
        console.log(row.firstname, row.lastname, row.email);
      });
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
  //let li = request.body.locationID;
  let st = request.body.status;
  let sd = request.body.submissionDate;
  let cm = request.body.comments;
  let wed = request.body.welcomeEmailDate;
  let oed = request.body.onboardEmailDate;

  let sql =
    "INSERT INTO volunteers (firstName, lastName, email, phone, status)" +
    " VALUES ($1, $2, $3, $4, $5)" +
    " RETURNING id";

  db.query(sql, [fn, ls, em, ph, st], (err, result) => {
    if (err) {
      response.status(500).json({ error: err });
    } else {
      let newID = result.row[0].id;
      response.status(200).json({
        id: newID
      });
    }
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000.");
});
