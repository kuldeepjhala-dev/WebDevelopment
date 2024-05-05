const express = require('express');
const app = express();

const port = 3000;

app.listen(port, (req, res) => {
    console.log(`Listening at port ${port}`);
});

//URL = http://localhost:3000/query?q=apple&color=red
app.get("/query", (req, res) => {
    console.log(req.query);
});

//op: { q: 'apple', color: 'red' }

//URL = http://localhost:3000/fruit?q=apple
app.get("/fruit", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send(`Nothing searched`);
    }
    res.send(`Your fruit is ${q}`);
});
//op: Your fruit is apple