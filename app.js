const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf')
const cors = require('cors');

const pdfTemplate = require('./documents/pdf');

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//POST - PDF Generation and Fetching Data from Client

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('test.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
})

//GET - Send the Genertated PDF to the Client

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/test.pdf`)
})

app.listen(port, () => console.log(`Running on Port Number: ${port}`));