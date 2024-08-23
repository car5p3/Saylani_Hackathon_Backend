const mongoose=require("mongoose")
const ApplicantModel=require("./applicant.model.js")
const AdminModel=require("./admin.model.js")
const CourseModel=require("./course.model.js")

const db={}
db.mongoose=mongoose
db.Applicant=ApplicantModel
db.Admin=AdminModel
db.Course=CourseModel

module.exports=db