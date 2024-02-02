const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        
        
    },
    password: {
        type: String,
       
       
    },
    firstName: {
        type: String,
       
        
    },
    lastName: {
        type: String,
       
        
    }
});
    const userModel = new mongoose.model("User",userSchema);

    module.exports = userModel;