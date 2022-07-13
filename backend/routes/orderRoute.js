const {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} = require("../controllers/orderController");
const auth = require("../middleware/authJwt");
const admin = require("../middleware/admin");
const Router = require("express").Router();
const OrderModel = require("../GYMModules/orderSchema");
const OrderRouter = Router;


OrderRouter.route("/").post(auth, addOrderItems);
OrderRouter.route("/myorders").get(auth, getMyOrders);
OrderRouter.route("/:id").get(auth, getOrderById);
OrderRouter.route("/:id/pay").put(auth, updateOrderToPaid);

module.exports = OrderRouter;
