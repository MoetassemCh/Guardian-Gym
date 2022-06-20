const cartModels = require('../GYMModules/cartitemSchema')


const getItem = async(req, res) =>{
    const Item = await cartModels.findById(req.params.id) 

    if(!Item){
        res.status(400)
        throw new Error('Product not found')
    }
    res.status(200).json(Item)
}


const deleteItem = async(req, res) =>{
    const Item = await cartModels.findById(req.params.id) 

    if(!Item){
        res.status(400)
        throw new Error('Product not found')
    }

    await Item.remove()
    res.status(200).json({id: req.params.id})
}

module.exports={
    deleteItem,
    getItem,
}