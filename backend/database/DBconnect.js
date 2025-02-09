const mongoose = require('mongoose');

async function DBconnect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/')
        console.log("Connected to database successfully");
    }
    catch(err){
        console.log(err);
    }

}

module.exports = DBconnect;