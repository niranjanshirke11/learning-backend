const mongoose=require("mongoose")

const postschema=new mongoose.Schema({
    image:String,
    caption:String,
})

module.exports=mongoose.model("post",postschema)  //"post is the name of collection"