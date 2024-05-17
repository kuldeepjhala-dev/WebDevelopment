const express = require("express");
const app = express();
const path = require("path");

// express(listen(8000, (req, res) => {
//     console.log(`Connection Established @port-no 8000`);
// }));

app.listen(8000, (req, res) => {
  console.log(`Connection Established @port-no 8000`);
});

// app.use(express.static("public")); //it will take files from public folder by default. But we need to run server from its directory
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js"))); //we can create more folders in public folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//home.ejs file will be opened.
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  // res.render("rolldice.ejs", { diceValue: diceValue });
  //shorter syntax
  res.render("rolldice.ejs", { diceValue });
});

//url:http://localhost:8000/ig/kuldeep
//passing the kuldeep value from url to the next ejs page.
app.get("/ig/:username", (req, res) => {
  let followers = ["salman", "sarukh", "amir", "narendra", "trump"];
  let { username } = req.params;
  res.render("instagram.ejs", { username, followers });
});

//extracting the specific value from json data and sending to client.
//extracting specific value by passing parameters in path.
app.get("/ig2/:username", (req, res) => {
  console.log(req.param);
  let { username } = req.params;
  let data = require("./data.json");
  let specificUserData = data[username];
  // if (specificUserData) {
  //     res.render("instagram2.ejs", { data: specificUserData });
  // }
  // else {
  //     // console.log(specificUserData); //op: undefined
  //     res.render("error.ejs");
  // }

  // --------------------------------
  if (specificUserData === undefined) {
    res.render("error.ejs");
  } else {
    res.render("instagram2.ejs", { data: specificUserData });
  }
});
