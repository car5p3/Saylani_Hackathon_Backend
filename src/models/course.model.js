const mongoose=require("mongoose")

const {Schema}=mongoose

const CourseSchema=new Schema({
    courseName:{
        type:String,
        required:true,
    },
    testFormUrl:{
        type:String,
    },
    applicant:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Applicant"
        }
    ]
})

const Course=mongoose.model("Course",CourseSchema)

module.exports=Course;