const asyncHandler=require("express-async-handler")
const OrderModel=require("../../GYMModules/orderSchema")



const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await OrderModel.find({}).populate("user", "id name");
  res.json(orders);
});

module.exports = {
  updateOrderToDelivered,
  getOrders,
};