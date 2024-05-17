const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "kuldeep",
});

//Normal query
// let q = "show tables";
// try {
//   connection.query(q, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log(result);
//       console.log(result.length);
//       console.log(result[0]);
//       console.log(result[1]);
//     }
//   });
// } catch (err) {
//   console.log("ERROR: ", err);
// }

// Using placeholders
//insert single data into table.
// let q = "insert into user (id, username, email, password) values (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// try {
//   connection.query(q, user, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log(result);
//     }
//   });
// } catch (err) {
//   console.log("ERROR: ", err);
// }

//inserting multiple data into table
// let q = "insert into user (id, username, email, password) values ?";
// let user2 = ["123a", "123_newusera", "abc@gmail.coma", "abca"];
// let user3 = ["123b", "123_newuserb", "abc@gmail.comb", "abcb"];
// let user4 = ["123d", "123_newuserd", "abc@gmail.comd", "abcd"];
// let users = [user2, user3, user4];
// try {
//   connection.query(q, [users], (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log(result);
//     }
//   });
// } catch (err) {
//   console.log("ERROR: ", err);
// }

//Below function is returning an object
// let getRandomUserObj = () => {
//   return {
//     userID: faker.datatype.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

//This function is returning an array.
let getRandomUserArr = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//inserting multiple data into table, using faker package.
let q = "insert into user (id, username, email, password) values ?";
let users = [];
for (i = 0; i < 10; i++) {
  let dummyArray = getRandomUserArr();
  users.push(dummyArray);
}
console.log(users);
try {
  connection.query(q, [users], (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
    }
  });
} catch (err) {
  console.log("ERROR: ", err);
}