const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");

//Connection Details
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kuldeep",
  database: "delta_app",
});

//Checking connection
try {
  connection.connect((err) => {
    if (err) {
      throw err;
    } else {
      //Successfull connection with database.
      console.log("Successfull connection with database");
      //Starting Server.
      app.listen(8080, () => {
        console.log("Listining to port 8080....");
      });
    }
  });
} catch (err) {
  console.log("#Initial-Connection-ERROR: ", err);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Show total users
app.get("/", (req, res) => {
  const totalUsers = getTotalDbUsers((err, totalUsers) => {
    if (err) {
      console.log("ERROR");
    } else {
      res.render("home.ejs", { totalUsers: totalUsers });
    }
  });
});

//Show users
app.get("/user", (req, res) => {
  getUsersData((err, userData) => {
    if (err) {
      console.log(err);
    } else {
      res.render("showusers.ejs", { userData: userData });
    }
  });
});

//Add users
app.post("/user", (req, res) => {
  const { username, email, password } = req.body;
  let query = `insert into user values('${uuidv4()}','${username}','${email}','${password}')`;
  connection.query(query, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/user");
    }
  });
});

//route to add user form
app.get("/newUser", (req, res) => {
  res.render("addusers");
});

//Edit username
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `select * from user where id = '${id}'`;
  try {
    connection.query(query, (err, result, fields) => {
      if (err) {
        throw err;
      } else {
        let user = result[0];
        res.render("edit", { user });
      }
    });
  } catch (err) {
    console.log("Error ==> ", err);
  }
});

//route to delete the user
app.post("/user/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  res.render("deleteuser", { id });
});

//Delete user
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { verifyEmail, verifyPassword } = req.body;
  getUsersDataById(id, (err, userData) => {
    if (err) {
      console.log(err);
    } else {
      console.log(userData);
      let email = userData[0].email;
      let password = userData[0].password;
      if (email === verifyEmail) {
        if (password === verifyPassword) {
          deleteUserById(id, (err, resultStatus) => {
            if (err) {
              console.log(err);
            } else {
              console.log(resultStatus);
              res.redirect("/user");
            }
          });
        } else {
          res.send("Please enter correct password");
        }
      } else {
        res.send("Please enter correct email");
      }
    }
  });
});

//Update Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, userName: newUserName } = req.body;
  let query = `select * from user where id = '${id}'`;

  try {
    connection.query(query, (err, result, fields) => {
      if (err) {
        throw err;
      } else {
        let user = result[0];
        if (formPass != user.password) {
          res.send("Wrong Password");
        } else {
          let query2 = `update user set username='${newUserName}' where id='${id}'`;
          connection.query(query2, (err, result) => {
            if (err) throw err;
            res.redirect("/user");
          });
        }
      }
    });
  } catch (err) {
    console.log("Error ==> ", err);
  }
});

//DB:Get user id Route
function getTotalDbUsers(callback) {
  let totalUsers;
  let query = "select count(id) as total_rows from user";
  // let query2 = "select count(*) from user";
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log("Get total database user error => ", err);
      return callback(err, null);
    } else {
      totalUsers = results[0].total_rows;
      return callback(null, totalUsers);
    }
  });
}

//DB:Get user Data Route
function getUsersData(callback) {
  let usersData;
  let query = "select id, username, email from user";
  connection.query(query, (err, result, fields) => {
    if (err) {
      console.log("getUserData ERROR =>", err);
      return callback(err, null);
    } else {
      usersData = result;
      return callback(null, usersData);
    }
  });
}

//DB:Get user Data by id
function getUsersDataById(uid, callback) {
  let query = `select username, email, password from user where id='${uid}'`;
  connection.query(query, (err, result) => {
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, result);
    }
  });
}

//DB:Delete user by uid
function deleteUserById(uid, callback) {
  let query = `delete from user where id = '${uid}'`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      console.log(result);
      callback(null, result);
    }
  });
}
