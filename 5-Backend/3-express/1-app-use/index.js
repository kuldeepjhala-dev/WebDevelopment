var express = require('express');
var app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
    // console.log('server started and it continuously listens for incoming req');
});

app.use((req, res) => {
    // console.log("request received");
    // console.log(req)

    //sending response to cliend. (simple text response)
    //you can only send one res.
    // res.send("This is my first response");

    // sending object to client
    // res.send(
    //     {
    //         fruit: "apple",
    //         color: "red"
    //     }
    // );

    //sending html element to clien
    let htmlCode = "<h1> Fruits</h1><ul><li>Mango</li><li>banana</li></ul>";
    res.send(htmlCode);
});

