const {
  getOrders,
  updateOrderToDelivered,
} = require("../../controllers/admin/AorderC");
const auth = require("../../middleware/authJwt");
const admin = require("../../middleware/admin");
const Router = require("express").Router();
const OrderModel = require("../../GYMModules/orderSchema");
const OrderAdmin = Router;

OrderAdmin.route("/").get(auth, admin, getOrders);
OrderAdmin.route("/:id/deliver").put(auth, admin, updateOrderToDelivered);

module.exports = OrderAdmin;
