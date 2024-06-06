const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let cusotmer1 = new Customer({
    name: "Rahul kumar",
  });

  let order1 = await Order.findOne({ item: "chips" });
  let order2 = await Order.findOne({ item: "choclate" });

  cusotmer1.order.push(order1);
  cusotmer1.order.push(order2);

  let result = await cusotmer1.save();
  console.log(result);
};

const addOrders = async () => {
  let result = await Order.insertMany([
    { item: "Samosa", price: 12 },
    { item: "chips", price: 10 },
    { item: "choclate", price: 40 },
  ]);
  console.log(result);
};

const findCustomer = async () => {
  let result = await Customer.find({});
  console.log(result);
};

const findCustomerWithOrderDetails = async () => {
  let result = await Customer.find({}).populate("order");
  console.log(result);
};

// addOrders();
// addCustomer();
// findCustomer();
findCustomerWithOrderDetails();