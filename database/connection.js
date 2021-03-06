const mongoose = require('mongoose');

module.exports = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,useUnifiedTopology: true}); 
        console.log("Database is connected");
    }catch(error){
        console.log("Database connective Error ", error);
        throw new Error(error);
    }
}