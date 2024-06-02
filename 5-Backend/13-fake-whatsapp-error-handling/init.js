const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then((res) => {
    console.log("connection Successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChat = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "mohan",
    msg: "Hello how are you?",
    created_at: new Date(),
  },
  {
    from: "radha",
    to: "krishana",
    msg: "Radhee radheee",
    created_at: new Date(),
  },
  {
    from: "ram",
    to: "sita",
    msg: "sita ji, namaste",
    created_at: new Date(),
  },
  {
    from: "hanuman",
    to: "vanar_sena",
    msg: "jai shree ram",
    created_at: new Date(),
  },
];

Chat.insertMany(allChat);
