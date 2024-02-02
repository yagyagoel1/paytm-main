const bcrypt = require("bcrypt");



const saltRounds = 10;
const hashData = async (data) => {
    const hashedData = await bcrypt.hash(data, saltRounds);
    return hashedData

}

const verifyData = async (password, hashedPassword) => {
    const result = await bcrypt.compare(password, hashedPassword)

    return result;
}

module.exports = { hashData, verifyData };