const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((res) => {
    console.log("connection Successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

app.get("/", (req, res) => {
  res.send("root is working");
});

//asyncWrap is used to handle errors
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//Index Route
app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  })
);

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//Create Route
app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  })
);

//Show Route => Error handled using async wrap
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(500, "Chat not found"));
    }
    res.render("show.ejs", { chat });
  })
);

// //Show Route ==> Error handled using try-catch
// app.get("/chats/:id", async (req, res, next) => {
//   try {
//     let { id } = req.params;
//     let chat = await Chat.findById(id);
//     if (!chat) {
//       next(new ExpressError(500, "Chat not found"));
//     }
//     res.render("show.ejs", { chat });
//   } catch (err) {
//     next(err);
//   }
// });

//Edit Route
app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  })
);

//Update Route
app.put(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg, updated_at: new Date() },
      { runValidators: true, new: true }
    );
    res.redirect("/chats");
  })
);

//Delete Route
app.delete(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.deleteOne({ _id: id });
    res.redirect("/chats");
  })
);

const handelValidationError = (err) => {
  console.log("This was a Validation Error. Please follow rules");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log("Error-Name : ", err.name);
  if (err.name === "ValidationError") {
    err = handelValidationError(err);
  }
  next(err);
});

//Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error Occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("server is listining on port 8080");
});
