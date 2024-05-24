const express = require("express");
const app = express();
const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");
const mongoURl = "mongodb://127.0.0.1:27017/airbnb";

main()
  .then(() => {
    console.log("Connected with database");
    app.listen(8080, () => {
      console.log("Server is listining to port 8080");
    });
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoURl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initilised");
};

initDB();
