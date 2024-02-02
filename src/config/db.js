const mongoose = require("mongoose");
require("dotenv").config();
const {MONGOOSE_URL} = process.env;
const connectToDb = async () =>{
    try {
        await mongoose.connect(MONGOOSE_URL);
        console.log("db connected");
    } catch (error) {
        console.log("unable to connect to the db"+error);
    }
}
connectToDb();