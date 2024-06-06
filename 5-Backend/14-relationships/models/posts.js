const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user1 = new User({
    username: "Rahul kumar",
    email: "rahul@gmail.com",
  });
  let post1 = new Post({
    content: "Image link",
    likes: 29,
  });
  let post2 = new Post({
    content: "code link",
    likes: 99,
  });
  let post3 = new Post({
    content: "coupen link",
    likes: 10,
  });
  post1.user = user1._id;
  post2.user = user1._id;
  post3.user = user1._id;

  await user1.save();
  await post1.save();
  await post2.save();
  await post3.save();
};

addData();

//https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design
