const Koa = require('koa');
const app = new Koa();

// const port = 5000; 
// const cors = require('cors');
// // const pool = require('./db.js');


// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.use(async ctx => {
    ctx.body = 'Hello World aaa';
});

app.listen(5000);
