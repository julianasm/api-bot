const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/list_facts", (req, res) => {
    fs.readFile(__dirname + '/' + 'facts.json', 'utf8', (err, data) => {
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });