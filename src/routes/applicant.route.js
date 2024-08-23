const express = require("express");
const authenticated =require("../Middlewares/auth.js")
const {
  createApplicant,
  getApplicantByCnic,
  getApplicantByRollNo
} = require("../controllers/applicant.controller.js");
const { getAllCourses } = require("../controllers/course.controller.js");
const route = express.Router();

route.post("/create-applicant", createApplicant);
route.get("/get-applicant-by-cnic/:cnic", getApplicantByCnic);
route.get("/get-applicant-by-rollno/:rollno", getApplicantByRollNo);
route.get("/get-courses",getAllCourses)

module.exports = { route };
