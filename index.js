const express = require('express');

const app = express();

const PORT = 5001;

app.get('/', (req, res) => {
    res.send('Pong!');
})

app.listen(PORT, () => {
    console.log("The server has been started on http://localhost:5001");
})