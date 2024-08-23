const express = require("express");
const route = express.Router();
const authenticated = require("../Middlewares/auth.js");
const {
  login,
  createApplicant,
  getSingleApplicantById,
  getAllApplicant,
  getApplicantByCnic,
  getApplicantByRollno,
  deleteApplicantByCnic,
  updateApplicantByCnic,
} = require("../controllers/admin.controller.js");
const {
  createCourse,
  getAllCourses,
  updateCourseById,
  deleteCourseById,
  getCourseById
} = require("../controllers/course.controller.js");

route.post("/login", login);
route.post("/create-applicant",authenticated,createApplicant); // checking
route.get("/get-applicant/:applicantId", authenticated, getSingleApplicantById);
route.get("/get-applicant-by-cnic/:cnic", authenticated, getApplicantByCnic);
route.get(
  "/get-applicant-by-rollno/:rollno",
  authenticated,
  getApplicantByRollno
);
route.get("/get-all-applicants",authenticated, getAllApplicant);
route.delete(
  "/delete-applicant-by-cnic/:cnic",
  authenticated,
  deleteApplicantByCnic
);
route.put("/update-applicant-by-cnic", authenticated, updateApplicantByCnic);
route.post("/create-course", authenticated, createCourse);
route.get("/get-all-courses",authenticated, getAllCourses);
route.get("get-course-by-id/:courseId",authenticated, getCourseById)
route.put("/update-course-by-id", authenticated, updateCourseById);
route.delete("/delete-course-by-id/:id", authenticated, deleteCourseById);

module.exports = { route };