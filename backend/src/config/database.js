const mongoose = require("mongoose")

async function connectotdb(){
    mongoose.connect(process.env.MONGO_URI)
    console.log("mongo is connected succesfully");
    
}

module.exports = connectotdb