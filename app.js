const express = require('express');
const cors = require('cors');
const pool = require("./db");

const app = new express();
const friendRequestsRouter = require("./routes/friendRequestsRouter.js")

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/here_is_me', (req, res) => {
    res.send('Hello World! TWO');
});

app.use('/firend_requests', friendRequestsRouter)
app.listen(5000);
