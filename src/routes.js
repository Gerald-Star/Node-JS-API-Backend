// ES modules in Node.js
// ? Import the Express module using ES6 import syntax
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service.js'; // Import the userServices object from the services.js file

const router = express.Router(); // Create a new router object
const port = 3000;  // Set the port number for the server to listen on


const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
}; // Create a constant object to store status messages 



// Set up a GET route with an arrow function
router.get('/hello', (req, res) => {
  res.status(StatusCodes.OK);
  res.send({ body: 'Node JS Framework! What is the problem' }); // Send a response to the client
});

/** 
// Set up a POST route with an arrow function to add data
app.post('/data', (req, res) => {
  console.log(req.body); // The parsed JSON data is stored in the req.body object
  res.status(StatusCodes.CREATED).json({ message: 'Data processed', main: req.body });
});
**/
// Set up a POST route with an arrow function to add data 

router.post('/add', (req, res) => {
  // const data = [];
  //To validate what is coming from the client side ( remove first the data.push(req.body); 
  /*data.push(req.body); // The parsed JSON data is stored in the req.body object*/
  const { body: user } = req; // Destructure the body object from the request object
  const addedUser = userService.addUser(user); // Call the addUser method from the service object
  /*
  if (!user.name) {  
    res.status(StatusCodes.BAD_REQUEST);
    res.send({ status: STATUS.ERROR, message: 'Name and age are required' });
    return;
  }*/ 

  res.status(StatusCodes.CREATED);
  res.send({ status: STATUS.SUCCESS, message: 'addedUser', });
  return;// Send a response to the client
});


export default router; // Export the router object to be used in the server.js file