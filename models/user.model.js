const mongoose = require('../common/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    phoneNumber:String,
    address:String,
    userType:Number,
    favourites:[String]    
});

const UsersSchema = mongoose.model('users',userSchema);

exports.createUser = (userData) => {
    const user = new UsersSchema(userData);
    return user.save();
}

exports.getUserByEmailPassword = (email,password) => {
    const users = UsersSchema.find({"email":email, "password":password});
    return users;
}

exports.addFav = (userId, productId) => {
    const result = UsersSchema.findOneAndUpdate ({_id:userId}, {$addToSet:{"favourites":productId}}, {new: true});
    return result;    
}


exports.removeFav = (userId, productId) => {
    const result = UsersSchema.findOneAndUpdate ({_id:userId}, {$pull:{"favourites":productId}}, {new: true});
    return result;    
}

exports.getUser= (id) => {
    const users = UsersSchema.find({"_id":id});
    return users;
}