const jwt = require("jsonwebtoken");
const {JWTEXPIRY,JWTKEY} = process.env;

const createToken = async (data)=>{try {
    const token = await jwt.sign(data,JWTKEY,{
        expiresIn : JWTEXPIRY
    });
    return token;
} catch (error) {
    throw Error("unable to sign the token ");
}}
module.exports = createToken; 