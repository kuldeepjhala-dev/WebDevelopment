const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("This is a middleware  - 1");
  next();
  console.log("Anythig after next() will also be executed");
});

app.use((req, res, next) => {
  console.log("This is a middleware  - 2");
  next();
});

//In this middleware we have not defined the path. So it will execute on every req
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

//this middleware will called when url-path will be "localhost:8080/random/something/somethig/.../../"
app.use("/random", (req, res, next) => {
  console.log("I am /random middleware");
  next();
});

//Middleware defined and stored in variable
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    res.send("ACCESS NOT GRANTED");
  }
};

app.get("/random", (req, res) => {
  res.send("This is a random page.");
});

//variable passed as argument inorder to call the middleware before the (req,res).... function.
app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.use((req, res) => {
  res.status(404).send("page not found!");
});

app.listen(8080, () => {
  console.log("server listining to port 8080");
});
