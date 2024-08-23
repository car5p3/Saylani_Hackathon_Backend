const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApplicantSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique:true,
      required: true,
    },
    cnic: {
      type: Number,
      unique:true,
      required: true,
    },
    contact: {
      type:Number,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    feeStatus: {
      type: String,
      default: "unpaid"
    },
    rollNo: {
      type: String,
      unique: true
    },
    result: {
      type: String,
      default: "Pending...",
    },
  },
  { timestamps: true }
);


const ApplicantModel = mongoose.model("Applicant", ApplicantSchema);

module.exports = ApplicantModel;
