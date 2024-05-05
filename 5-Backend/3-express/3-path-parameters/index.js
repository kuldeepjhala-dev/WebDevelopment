const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`app is running on port no ${port} `);
})

//Path Parameters
//:username means a variable. It contains any value and it is sored in key:value pair in 'req.params' parameter.
app.get("/:username/:id", (req, res) => {
    console.log(req.params); //req.paras is a object.
    //Object destructuring.
    let { username, id } = req.params;
    console.log("username:", username);
    console.log("id:", id);
    const htmlStr = `<h1>Hello, welcome to the page of @${username}.</h1>`;
    res.send(htmlStr);
});
