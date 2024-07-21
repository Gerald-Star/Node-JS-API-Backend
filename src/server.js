// ES modules in Node.js
// ? Import the Express module using ES6 import syntax
import express from 'express';
//import { StatusCodes } from 'http-status-codes';
import appRoutes from './routes.js'; // Import the approutes middleware from the routes folder

// Create an instance of an Express application
const app = express();
const port = 3001;  // Set the port number for the server to listen on


// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use('/v1', appRoutes); // Use the approutes middleware for all routes starting with /v1


// ? Separate all this code to another file
// Set up a GET route with an arrow function


app.listen(port, () => {
  console.log(`Hey, Server is running on port http://localhost:${port}`);
});






























































