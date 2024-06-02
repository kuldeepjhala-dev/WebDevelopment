const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    throw new ExpressError(401, "ACCESS DENIED");
  }
};

app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
  console.log("----------Error-1----------");
  let { status = 500, message } = err;
  res.status(status).send(message);
  // next(err);
});

// app.use((err, req, res, next) => {
//   console.log("----------Error-2----------");
//   next(err);
// });

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen("8080", (req, res) => {
  console.log("Listining on port 8080..");
});
