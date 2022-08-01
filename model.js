const mongoose = require('mongoose');

let crud = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('crud',crud);