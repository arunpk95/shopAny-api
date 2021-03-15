const mongoose = require('../common/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    phoneNumber:String,
    address:String,
    userType:Number    
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