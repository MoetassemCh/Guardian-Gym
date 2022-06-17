const {
    getExercises,
    getExercise,
    addExercise,
    updateExercise,
    deleteExercise
} = require('../controllers/ExercisesController.js')

const Router = require('express').Router;
 
// initialize express router
const ExercisesRouter = Router();

// GET request for a list of all
ExercisesRouter.get('/Exercises', getExercises);

// GET request for one (specified by its ID)
ExercisesRouter.get('/Exercise/:id', getExercise);

// POST request to add
ExercisesRouter.post('/addExercise', addExercise);

// PUT request to update (specified by its ID)
ExercisesRouter.put('/updateExercise/:id', updateExercise);

// DELETE request to delete (specified by its ID)
ExercisesRouter.delete('/deleteExercise/:id', deleteExercise);

module.exports = ExercisesRouter;