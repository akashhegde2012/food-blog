var mongoose=require('mongoose');

var recepieSchema =new mongoose.Schema({
    title: String,
    content: String,
    like: Number,
    // user :{
    //     id:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'User'
    //     },
    //     username:String
    // },
    category: String,
    type: String,
    image: String,
    createdAt:{
        type:Date,
        default:new Date()
    }
});

module.exports =mongoose.model('Recepie',recepieSchema);