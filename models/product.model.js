const mongoose = require('../common/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const productSchema = new Schema({
   name:String,
   description:String,
   quantity:Number,
   price:Number,
   rating:Number,
   deliveryFee:Number,
   discount:Number,
   expectedDeliveryDate:Number,
   images:[String],
   sellerId:String,
   categoryId:String,
});

const ProductsSchema = mongoose.model('products',productSchema);

exports.createNewProduct = (productData) => {
    const product = new ProductsSchema(productData);
    return product.save();
}
exports.getProductsbySellerId = (sellerId) => {
    const products = ProductsSchema.find({"sellerId":sellerId});
    return products;
}
exports.getProductsByCategoryId = (categoryID) => {
    const products = ProductsSchema.find({"categoryId":categoryID});
    return products;
}
exports.updateProduct = (id,productData) => {
    const result =  ProductsSchema.findOneAndUpdate ({_id:id},productData,{new: true});
    return result;    
}
exports.deleteProduct = (id) => {
    const result = ProductsSchema.findOneAndDelete({_id:id});
    return result;
}

exports.getProducts = (fromPrice,toPrice, filterCategory) => {
    if(filterCategory === "")
    {
        const products = ProductsSchema.find({"price":{$gte: fromPrice, $lte: toPrice}});
        return products;
    }
    else
    {
        const products = ProductsSchema.find({"price":{$gte: fromPrice, $lte: toPrice},"categoryId":filterCategory});
        return products;
    }
}

exports.getByIds = (ids) => {
    const products = ProductsSchema.find({"_id":{ $in: ids } });
    return products;
}

exports.getById = (id) => {
    const product = ProductsSchema.findById(id);
    return product;
}
