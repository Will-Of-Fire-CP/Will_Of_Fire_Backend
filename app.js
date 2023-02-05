const express = require('express');
const app = new express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/here_is_me', (req, res) => {
    res.send('Hello World! TWO');
});
app.listen(5000);
