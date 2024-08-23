const mongoose=require("mongoose")

const {Schema}=mongoose;

const CounterSchema=new Schema({
    id:{
        type:String,
    },
    seq:{
        type:Number,
    }
})

const Counter=mongoose.model("Counter",CounterSchema)

module.exports=Counter;