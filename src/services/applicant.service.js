const ApplicantModel = require("../models/applicant.model.js");
const Counter = require("../models/counter.model.js");

const newApplicant = async (data) => {
  try {
    const exist = await ApplicantModel.findOne({cnic:data.cnic});
    if(exist){
      return null
    }
    let checkCounter =await Counter.findOneAndUpdate(
        { id: "autoval" },
        { $inc: { seq: 1 } }
      );
      let seqId;
      if (checkCounter == null) {
        const newVal =await new Counter({ id: "autoval", seq: 1 });
        newVal.save();
        seqId = 1;
      } else {
        seqId = ++checkCounter.seq;
      }
    const response =await ApplicantModel.create({
        fullname: data.fullname,
        email: data.email,
        cnic:data.cnic,
        contact:data.contact,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        address: data.address,
        qualification: data.qualification,
        profileImg: data.profileImg,
        course: data.course,
        feeStatus: data.feeStatus,
        rollNo: seqId
    });
    return response;
  } catch (error) {
    throw error
  }
};

const getApplicantById = async (applicantId) => {
  try {
    const response = await ApplicantModel.findById({_id: applicantId});
    return response;
  } catch (error) {
    throw error;
  }
};

const allApplicants = async () => {
  try {
    const response = await ApplicantModel.find({});
    return response;
  } catch (error) {
    throw new Error();
  }
};

const getByCnic = async (cnicNo) => {
  try {
    const response = await ApplicantModel.findOne({cnic: cnicNo});
    return response;
  } catch (error) {
    throw error;
  }
}

const getByRollno = async (rollNo) => {
  try {
    const response = await ApplicantModel.findOne({rollNo: rollNo});
    return response;
  } catch (error) {
    throw error;
  }
}

const updateByCnic=async(data)=>{
  try{
    const response=await ApplicantModel.findOneAndUpdate({cnic:data.cnic},data)
    return response;
  } catch(error){
    throw error;
  }
}

const deleteByCnic = async (deleteApplicantCnic)=>{
  try{
    const response= await ApplicantModel.deleteOne({cnic:deleteApplicantCnic})
    return response
  } catch (error){
    throw error;
  }
}
module.exports = {
  newApplicant,
  getApplicantById,
  allApplicants,
  getByCnic,
  getByRollno,
  updateByCnic,
  deleteByCnic,
};
