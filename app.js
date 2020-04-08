const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const port = process.env.port || 8081;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port, () => console.log(`Running on Port Number: ${port}`));