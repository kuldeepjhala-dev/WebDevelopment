const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection Successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("user", userSchema);

//Insert in mongoose
// const user2 = new User({
//   name: "Eve",
//   email: "eve@yahoo.in",
//   age: 48,
// });
// user2
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Insert Many in mongoose
// User.insertMany([
//   {
//     name: "tony",
//     email: "tony@gmail.com",
//     age: 40,
//   },
//   {
//     name: "peter",
//     email: "peter@gmail.com",
//     age: 30,
//   },
//   {
//     name: "Bruce",
//     email: "bruce@gmail.com",
//     age: 47,
//   },
// ]).then((res) => {
//   console.log(res);
// });

//Find all
// User.find({})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Find by query
// User.find({ age: { $gt: 47 } })
//   .then((result) => {
//     //We can again apply some filtering on 'result'.
//     result.forEach((user) => {
//       console.log(user.name);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//FindOne by id
// User.findOne({ _id: "6645b58b97d7d1f50132cc94" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// FindByID
// User.findById("6645b58b97d7d1f50132cc94")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//updateone
// User.updateOne({ name: "Bruce" }, { age: 49 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//updateMany - only returns ack of updation
// User.updateMany({ age: { $gt: 45 } }, { age: 50 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//findOneAndUpdate - it returns the document(beforeUpdated) when it updates that document. _
// User.findOneAndUpdate({ name: "Bruce" }, { age: 30 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//op: Old document, in db the value id updated
// {
//   _id: new ObjectId('6645b746ee543e671ca95082'),
//   name: 'Bruce',
//   email: 'bruce@gmail.com',
//   age: 50,
//   __v: 0
// }

//findOneAndUpdate - it returns the document(Updated) when it updates that document.
// User.findOneAndUpdate({ name: "Bruce" }, { age: 99 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//op: New document, and in db the values is also updated
// {
//   _id: new ObjectId('6645b746ee543e671ca95082'),
//   name: 'Bruce',
//   email: 'bruce@gmail.com',
//   age: 99,
//   __v: 0
// }

//findIDAndUpdate
// User.findByIdAndUpdate(
//   "6645b746ee543e671ca95082",
//   {
//     email: "Kuldeep@gmail.com",
//   },
//   { new: true }
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//op:
// {
//   _id: new ObjectId('6645b746ee543e671ca95082'),
//   name: 'Bruce',
//   email: 'Kuldeep@gmail.com',
//   age: 99,
//   __v: 0
// }

//deleteOne - returns acknowledgement of deletedCount
// User.deleteOne({ name: "Bruce" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//deleteMany - returns acknowledgement of deletedCount
// User.deleteMany({ age: { $gte: 50 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//findByIdAndDelete
User.findByIdAndDelete("6645b746ee543e671ca95081").then((res) => {
  console.log(res);
});

//findOneAndDelete
User.findOneAndDelete({ age: 40 }).then((res) => console.log(res));
