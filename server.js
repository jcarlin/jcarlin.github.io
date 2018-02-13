const path = require('path');
const express = require('express');
const app = express();


const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(path.join(__dirname, '/')));

app.listen(8081);

console.log('Express app started at http://localhost:8081');
