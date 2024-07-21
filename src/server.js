// ES modules in Node.js
// ? Import the Express module using ES6 import syntax
import express from 'express';
import { StatusCodes } from 'http-status-codes';

// Create an instance of an Express application
const app = express();
const port = 3000;  // Set the port number for the server to listen on

const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
};

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Set up a GET route with an arrow function
app.get('/hello', (req, res) => {
  res.status(StatusCodes.OK);
  res.send({ message: 'Node JS Framework! What is the problem' } ); // Send a response to the client
});

/** 
// Set up a POST route with an arrow function to add data
app.post('/data', (req, res) => {
  console.log(req.body); // The parsed JSON data is stored in the req.body object
  res.status(StatusCodes.CREATED).json({ message: 'Data processed', main: req.body });
});
**/

// Set up a POST route with an arrow function to add data

app.post('/add', (req, res) => {
  const data = [];
  data.push(req.body);
  res.status(StatusCodes.CREATED);
  res.send({ status: STATUS.SUCCESS, data});  // Send a response to the client
});

app.listen(port, () => {
  console.log(`Hey, Server is running on port http://localhost:${port}`);
});






























































