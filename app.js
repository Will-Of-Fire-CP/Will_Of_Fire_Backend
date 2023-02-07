const express = require('express');
const cors = require('cors');
// const pool = require("./db");

const app = new express();
const friendRequestsRouter = require("./routes/friendRequestsRouter.js")

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/friend_requests', friendRequestsRouter)

app.listen(3000);
