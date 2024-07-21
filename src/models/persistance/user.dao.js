
import userData from './data/users.data.js'; // Import the users object from the users.data.js file

// Create a function to insert data into the database

const get = (userId) => {

  const findUser = users.find((user) => {
    if (users.id === userId) {
      return user;
    }
    return null;
  });
 
  return findUser; // Return the details object 
};

// Create a function to getAll data from the database

const getAll = () => {
  return userData; // Return the users array

};


// Create a function to update data in the database
/*
const update = (newDetails) => {
  users.map(user, index) => {
  if (user.id === newDetails.id) {
    
  }
  }
 
};
*/

export const insert = (details) => {
  const newUser = { id: users.length + 1, ...details }; // Create a new user object with the details object
  users.push(newUser); // Add the details object to the users array
  return newUser; // Return the details object
};

// Create a function to delete data from the database

const remove = (userId) => {
  const deleteUser = (user, index) => {
    if (user.id === userId) {
      users.splice(index, 1); // Remove the user object from the users array
      return true;
    }
    return false;
  };
  return users.find(deleteUser); // Find the user object with the specified userId
  //return doesUserExist; // Return the doesUserExist object
};


export default {
  get,
  getALL,
  update,
  insert,
  remove,
}