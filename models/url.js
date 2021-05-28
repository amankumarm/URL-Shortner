const mongoose=require('mongoose')
const Schema= mongoose.Schema;

const urlschema= new Schema({
    link:{
        type:String,
        required:true
    },
    shortname:{
        type:String,
        required:true
    }
})

const Url=mongoose.model('Url',urlschema)
module.exports=Url;