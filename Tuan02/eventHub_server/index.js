const express = require ('express');
const port = 4000;

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('This is homepage');
})

app.listen(port, () =>{
    console.log("Server is running on port ", port);
})