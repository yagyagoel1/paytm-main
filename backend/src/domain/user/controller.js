const userModel = require("./model");
const { hashData, verifyData } = require("../../util/hashData");
const createToken = require("../../util/createToken");

const addUser = async (username, password, firstName, lastName) => {
    if (await userModel.findOne({ username })) {
        throw Error("user already exists");
    }
    const hashedPassword = await hashData(password);

    const createdUser = await userModel.create({
        username: username,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
    })
    return createdUser._id;
}

const verifyUser = async (
    username, password) => {

    const userexists = await userModel.findOne({ username: username });

    if (!userexists) {

        throw Error("Invalid username or password");
    }

    if (! await verifyData(password, userexists.password)) {
        throw Error("Invalid username or password")
    };
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
            lastName:
                { $regex: `^${filter}` }, lastName:
                { $regex: `^${filter}` }
        }]
    }).select('username firstName lastName _id');
    return users;

}
module.exports = { addUser, verifyUser, updateUser, findUser };