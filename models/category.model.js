const mongoose = require('../common/mongoose.service').mongoose;
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    categoryName: String
})

const CategoriesSchema = mongoose.model('categories',CategorySchema);

exports.createNewCategory = (categoryData) => {
    const category = new CategoriesSchema(categoryData);
    return category.save();
}

exports.getCategoryByCategoryId = (categoryID) => {
    const categories = CategoriesSchema.findOne({"_id":categoryID});
    return categories;
}
exports.updateCategory = (id,CategoryData) => {
    const result =  CategoriesSchema.findOneAndUpdate ({_id:id},CategoryData,{new: true});
    return result;    
}
exports.deleteCategory = (id) => {
    const result = CategoriesSchema.findOneAndDelete({_id:id});
    return result;
}

exports.getCategories = () => {
    const categories = CategoriesSchema.find({});
    return categories;
}