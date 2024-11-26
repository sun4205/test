const http = require("http");
// const server = http.createServer((request, response) => {
//   console.log("The response is here");
//   console.log(request);
//   console.log(response);

//   res.statusCode = 200;
//   res.statusMessage = "OK";
//   res.setHeader("Content-Type", "text/plain");

//   res.write("Hello, ");
//   res.write("world!");

//   res.end();
// });
// server.listen(3000);

// const http = require('http');
// const {PORT = 3000} = process.env;


const markup = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Y do U 🖤 2 code</title>
    <meta charset="UTF-8">
    <style>
      .container {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 100px;
      }

      p {
        font-family: sans-serif;
        font-size: 90px;
        margin: 0;
      }

      img {
        width: 512px;
        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p><font color="red">Y</font>&nbsp;do<br>U&nbsp;🖤<br>2&nbsp;code</p>
      <img src="https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_code.gif" alt="my code">
    </div>
  </body>
  </html>
`;

// const server = http.createServer((req,res)=>{
//   res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//   res.end(markup);
  
// });
// server.listen(PORT);

//exporting moduls
const someFunction = () => {
  console.log('I was exported!');
};

const someValue = 42;

module.exports = {
  someFunction,
  someValue
};

//importing
const { someFunction, someValue } = require('./utils');

//working with module
const fs = require('fs');

fs.readFile('data.json', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('data: ', data.toString('utf8'));
});

//create folder
fs.mkdir('incomingData/data', (err) => {
  if (err) console.log(err);
});

//write data
fs.writeFile('data.json', JSON.stringify([1, 2, 3]), (err) => {
  if (err) console.log(err);
});

//delete data
fs.unlink('data.json', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('The file was deleted!'); 
});

//working with streams
const reader = fs.createReadStream('./in.txt', { encoding: 'utf8' });
const writer = fs.createWriteStream('./out.txt', { encoding: 'utf8' });

reader.on('data', (chunk) => {
  writer.write(chunk);
});

// when all data is read, signal to Node that 
// we no longer need the writable stream
reader.on('end', () => {
  writer.end();
});
reader.on('error', (err) => {
  console.log(err);
});

//express setting up routing
const express = require('express');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

const animals = [
  {
    kind: 'dog',
    breed: 'chihuahua'
  },
  {
    kind: 'dog',
    breed: 'bloodhound'
  },
  {
    kind: 'dog',
    breed: 'german shepherd'
  },
  {
    kind: 'cat',
    breed: 'abyssinian'
  },
  {
    kind: 'cat',
    breed: 'dwelf'
  },
  {
    kind: 'cat',
    breed: 'highlander'
  }
];

app.get('/animals', (req, res) => {
  
  let result = animals;

  
  if (req.query.kind) {
    result = result.filter(item => item.kind === req.query.kind)
  }

  if (req.query.breed) {
    result = result.filter(item => item.breed === req.query.breed)
  }

  res.send(result);
});

app.listen(PORT, () => {
  console.log('Link to the server:');
  console.log(BASE_PATH);
});




