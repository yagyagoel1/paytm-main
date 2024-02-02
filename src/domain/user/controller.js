const userModel = require("./model");
const { hashData} = require("../../util/hashData");

const addUser = async ({username,password,firstName,LastName})=>{
    if(await userModel.findOne({username}))
       {
        throw Error("user already exists");
       }
    const hashedPassword =  await hashData(password);
    const createdUser = await userModel.create({
        username : username,
        password : hashedPassword,
        firstName : firstName,
        LastName : LastName
    })
    return createdUser._id;
}

module.exports = {addUser};