
import userDao from '../models/persistance/user.dao.js';


// Create a function to add a user

const getUser = (userId) => {
  userDao.get(userId); // Call the insert method from the userDao object

};

const updateUser = (userId) => {
  userDao.insert(userId); // Call the insert method from the userDao object

};

const addUser = (details) => {
  return userDao.insert(details); // Call the insert method from the userDao object

};


const removeUser = (userId) => {
  userDao.remove(userId); // Call the insert method from the userDao object

}

export default {
  getUser,
  updateUser,
  addUser,
  removeUser

}