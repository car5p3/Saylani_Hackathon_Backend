const {
  addCourse,
  getCourses,
  courseById,
  updateById,
  deleteById,
} = require("../services/course.service");

const createCourse = async (req, res) => {
  try {
    const newCourse = await addCourse(req.body);
    if (!newCourse)
      return res.status(500).json({ message: "Course is not Added" });

    return res
      .status(200)
      .json({
        success: true,
        message: "Course Added Successfully",
        data: newCourse,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const updateCourse = await getCourses();
    if (!updateCourse)
      return res.status(400).json({ message: "No! Courses Found." });

    return res.status(200).json(updateCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseById=async(req,res)=>{
  try {
    const courseId=req.params.courseId
    const response=await courseById(courseId)
    if (!response)
      return res.status(400).json({
        success: false,
        message: `Could not find course by this ${courseId} id `,
      });

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateCourseById = async (req, res) => {
  try {
    const updateCourse = await updateById(req.body);
    if (!updateCourse)
      return res.status(404).json({ message: "Course is not Updated" });
    return res.status(201).json(updateCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCourseById = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteCourse = await deleteById(id);
    if (!deleteCourse)
      return res
        .status(404)
        .json({ message: `Course is not deleted by this ${id} id` });
    return res.status(201).json(deleteCourse);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
