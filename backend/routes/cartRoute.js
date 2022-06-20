


const {
    deleteItem,
    getItem,
    } = require('../controllers/cartController')
const Router = require("express").Router();
const cartRouter=Router


cartRouter.delete('/:id', deleteItem)
cartRouter.get('/:id', getItem)
module.exports= cartRouter