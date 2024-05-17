const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Plese enter the positive value"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"], //It means that we can only store the value of category either 'fiction' or 'non-fiction'
  },
  genre: [String],
});

const book = mongoose.model("book", bookSchema);

// const book1 = new book({
//   title: "Class XII",
//   author: "RD Sharma",
//   price: 1200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//updating the value of price with negative value
book
  .findByIdAndUpdate(
    "6645e55de30da0c259db7608",
    { price: -11 },
    { runValidators: true } //schema validation are again checked with updated value
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message); //gives the error mention in 'min: [1, "Plese enter the positive value"],'
  });
//op: Plese enter the positive value
