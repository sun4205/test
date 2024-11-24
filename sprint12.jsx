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





