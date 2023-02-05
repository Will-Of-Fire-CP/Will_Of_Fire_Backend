// const Koa = require('koa');
// const app = new Koa();

const express = require('express');
const app = new express();

// const port = 5000; 
// const cors = require('cors');
// // const pool = require('./db.js');

// app.use(express.json());
// app.use(cors());
// app.use(async ctx => {
//     ctx.body = 'Hello World aaa';
// });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000);
