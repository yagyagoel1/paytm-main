const userModel = require("./model");
const { hashData, verifyData } = require("../../util/hashData");
const createToken = require("../../util/createToken");
const accountModel = require("../accounts/model");

const addUser = async (username, password, firstName, lastName) => {
    const userexists = await userModel.findOne({ username })
    if (userexists) {
        throw Error("user already exists");
    }
    const hashedPassword = await hashData(password);
    //create a new user 
    const createdUser = await userModel.create({
        username: username,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
    })
    //update the balance
    await accountModel.create({
        userId: createdUser._id,
        balance: Math.floor(Math.random() * (10000 - 1) + 1)
    })
    return createdUser._id;
}

const verifyUser = async (
    username, password) => {
    //to check and confirm the existing user 
    const userexists = await userModel.findOne({ username: username });

    if (!userexists) {

        throw Error("Invalid username or password");
    }

    if (! await verifyData(password, userexists.password)) {
        throw Error("Invalid username or password")
    };
    //creating a jwt token 
    const token = await createToken({
        userId: userexists._id,
        firstName: userexists.firstName,
        LastName: userexists.LastName,
        username: userexists.username,
    });

    await userModel.updateOne({ username }, { token: token });
    return token;
}
const updateUser = async (data, userId) => {
    const updatedUser = await userModel.updateOne({ _id: userId },
        { $set: data });
    if (!updatedUser) {
        throw Error("error while updating the information");
    }
}
const findUser = async (filter) => {
    const users = await userModel.find({
        $or: [{
            firstName:
                { $regex: `^${filter}` }},{ lastName:
                { $regex: `^${filter}` }
        }]
    }).select('username firstName lastName _id');
    return users;

}
module.exports = { addUser, verifyUser, updateUser, findUser };