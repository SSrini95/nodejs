const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'))
app.use(bodyparser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})

app.get('/dishes', (req, res, next) => {
    res.end("will send all the dishes to u")
})


app.post('/dishes', (req, res, next) => {
    res.end("Created");
})


app.put('/dishes', (req, res, next) => {
    res.end("Updated")
})


app.delete('/dishes', (req, res, next) => {
    res.end("delete")
})


app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {

    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")
    res.end("<html><body><h1>Hello World</h1></body></html>")
})

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
});