const bcrypt = require("bcrypt");



const saltRounds = 10;
const hashData =async  (data)=>{
    await bcrypt.hash(data,saltRounds,(err,hash)=>{
    if(err)
    {
        throw Error("some unexpected error has occured");
    }
    else{
        return hash;
    }
})};

const verifyData = async(password,hashedPassword)=>{ bcrypt.compare(password,hashedPassword,(err,result)=>{
    return result;
})};

module.exports ={hashData,verifyData};