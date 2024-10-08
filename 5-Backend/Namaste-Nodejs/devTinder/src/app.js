const express = require("express");

const app = express();

// app.use((req, res) => {
//   res.send("hello from the server - 1");
// });

app.use("/a", (req, res) => {
  res.send("hello from the server - 2");
});

app.use("/kuldeep", (req, res) => {
  res.send("hello kuldeep");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
