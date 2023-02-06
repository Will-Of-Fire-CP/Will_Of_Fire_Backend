const express = require('express');
const app = new express();
const pool = require("./db");

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/here_is_me', (req, res) => {
    res.send('Hello World! TWO');
});

app.get("/posts", async (req, res) => {
    const posts = await pool.query("SELECT * FROM uers_data;");
    res.send({posts} );
});


app.listen(5000);
