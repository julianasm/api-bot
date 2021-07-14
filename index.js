const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
  res.end('Hello World!');
});


// adicionar o id na url como uma variavel
// pegar objeto aleatorio
app.get("/list_facts/:id", (req, res) => {
    fs.readFile(__dirname + '/' + 'facts.json', 'utf8', (err, data) => {
        console.log(data)
        const jsonData = JSON.parse(data)
        res.json(jsonData[req.params.id]);
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });