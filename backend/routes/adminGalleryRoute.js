const {
    getImages,
    getImage,
    addImage,
    updateImage,
    deleteImage
} = require('../controllers/ImagesController.js')
const Router = require('express').Router;
 
// initialize express router
const ImagesRouter = Router();

// GET request for a list of all
ImagesRouter.get('/Images', getImages);

// GET request for one (specified by its ID)
ImagesRouter.get('/Image/:id', getImage);

// POST request to add
ImagesRouter.post('/addImage', addImage);

// PUT request to update (specified by its ID)
ImagesRouter.put('/updateImage/:id', updateImage);

// DELETE request to delete (specified by its ID)
ImagesRouter.delete('/deleteImage/:id', deleteImage);

module.exports = ImagesRouter;