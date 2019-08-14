const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const testSchema = new Schema({
    ttile:{
        type:String,
        unique:true,
        required:true
    },
    contend:{
        type:String,
        required:true
    }
})
const test = mongoose.model('test',testSchema)
module.exports = test