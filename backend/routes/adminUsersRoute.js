const {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
} = require('../controllers/UsersController.js')
const Router = require('express').Router;
 
// initialize express router
const UsersRouter = Router();

// GET request for a list of all 
UsersRouter.get('/Users', getUsers);

// GET request for one (specified by its ID)
UsersRouter.get('/User/:id', getUser);

UsersRouter.post('/addUser', addUser);

UsersRouter.put('/updateUser/:id', updateUser);

UsersRouter.delete('/deleteUser/:id', deleteUser);

module.exports = UsersRouter;