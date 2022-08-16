require('dotenv').config();
const mongoose = require("mongoose");
const PWD = encodeURIComponent(process.env.PWD)
exports.dbConn = async ()=>{
    try{
    const dbURL = `mongodb+srv://${process.env.USER_NAME}:`+PWD+`@cluster0.sms8r.mongodb.net/productdb?retryWrites=true&w=majority`
    await mongoose.connect(dbURL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    console.log(`Database connected`);
}catch(err){
    console.log(`Database connection error ${err.message}`);
}
}

