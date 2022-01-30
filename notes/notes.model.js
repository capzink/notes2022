const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
    {
    content:{
        type:String,
        required:true
    },
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User',
    //     required:true
    // },
},
{
    timestamps:true
}
)

module.exports = mongoose.model("Notes", noteSchema);