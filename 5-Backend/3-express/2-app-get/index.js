const express = require('express');
const app = express();

let port = 8000;

app.listen(port, () => {
    console.log(`app is running on ${port}`);
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/apple", (req, res) => {
    res.send("Apple Page");
});

app.get("/banana", (req, res) => {
    res.send("Banana Page");
});

//if above path doesnt matches then this is called as it is '*'.
app.get("*", (req, res) => {
    res.send("this path does not exist");
})

app.post("/bananap", (req, res) => {
    res.send("You sent a post req to /bananap")
})

