const express = require("express");
const app = express();
const Pool = require("pg").Pool; // initialise a connection pool

const db = new Pool({
  // establish a new connection
  user: "cyf", // Your user name
  host: "localhost",
  database: "cyf", // ... username again.
  password: "cyf",
  port: 5432
});

app.use(express.static("public"));

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

app.post("/api", (request, response) => {});

app.listen(3000, () => {
  console.log("server started on port 3000.");
});
