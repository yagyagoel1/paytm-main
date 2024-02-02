const userModel = require("./model");
const { hashData,verifyData} = require("../../util/hashData");

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

const verifyUser = async ({
    username,password
})=>{
    const userexists=await userModel.findOne({username});
    if(!userexists)
    {
        throw Error("Invalid username or password");
    }
    if(! await verifyData(password,userexists.password))
    {
        throw Error("Invalid username or password")
    };
}

module.exports = {addUser,verifyUser};