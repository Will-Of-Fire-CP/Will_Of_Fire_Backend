const express = require('express');
const cors = require('cors');
// const pool = require("./db");

const app = new express();

const friendRequestsRouter = require("./routes/friendRequestsRouter.js")
const accounts = require('./routes/accountsRouter')
const friendRouter = require('./routes/friendRouter')
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/accounts', accounts)
app.use('/friend_requests', friendRequestsRouter)
app.use('/friend', friendRouter)

app.listen(3000);
