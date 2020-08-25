const mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({

    name: {
        type : String,
        required :true,
        default : "item0"
    },
    date :{
        type : Date,
        default : Date.now
    }
});

var Item = mongoose.model('item',itemSchema);
module.exports = Item ; 
