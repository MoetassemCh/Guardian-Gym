
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
}=require('../controllers/OrderController2') 
const { protect, admin } =require('../middleware/authmiddleware') 

const Router = require("express").Router();
  const OrderRouter = Router;

OrderRouter.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
OrderRouter.route('/myorders').get(protect, getMyOrders)
OrderRouter.route('/:id').get(protect, getOrderById)
OrderRouter.route('/:id/pay').put(protect, updateOrderToPaid)
OrderRouter.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)


module.exports = OrderRouter;