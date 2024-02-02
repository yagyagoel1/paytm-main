const userModel = require("./model");
const { hashData} = require("../../util/hashData");
const userExists = async (username)=>{
       if(await userModel.findOne(username))
       {
        throw error("user already exists");
       }

}
const addUser = async ({username,password,firstName,LastName})=>{
    userExists(username);
    const hashedPassword =  await hashData(password);
    await userModel.create({
        username : username,
        password : hashedPassword,
        firstName : firstName,
        LastName : LastName
    });
}

module.exports = {addUser};