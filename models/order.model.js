const mongoose = require('../common/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
   user:{ type: mongoose.Schema.Types.ObjectId, ref: 'users' },
   status:Number,
   quantity:Number,
   product:{ type: mongoose.Schema.Types.ObjectId, ref: 'products' },
   sellerId:String,
   placedDate:String,
   deliveryDate:String
});

const OrdersSchema = mongoose.model('orders',OrderSchema);

exports.newOrder = (ordersData) => {
    const orders = OrdersSchema.insertMany(ordersData);
    return orders;
}
exports.getOrdersByUserId = (userId) => {
    const orders = OrdersSchema.find({"user":userId}).populate('user').populate('product');
    return orders;
}
exports.getOrderById = (id) => {
    const orders = OrdersSchema.find({"_id":id}).populate('user').populate('product');
    return orders;
}
exports.updateOrder = (id,orderData) => {
    const result =  OrdersSchema.findOneAndUpdate ({_id:id},orderData,{new: true}).populate('user').populate('product');
    return result;    
}
exports.deleteOrder = (id) => {
    const result = OrdersSchema.findOneAndDelete({_id:id});
    return result;
}
exports.getOrderBySellerId = (sellerId) => {
    const orders = OrdersSchema.find({"sellerId":sellerId}).populate('user').populate('product');
    return orders;
}