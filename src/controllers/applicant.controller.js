const { newApplicant, getByCnic, getByRollno} = require("../services/applicant.service.js")

const createApplicant=async(req,res)=>{
    try{
        const addApplicant=await newApplicant(req.body);
        if(!addApplicant) return res.status(400).json({success:false,message:"Applicant is not Added"})
        return res.status(200).json({success:true,message:"Applicant Added Successfully",data:addApplicant})
    }catch(error){
        return res.status(500).json({type:"warning",message:error.message,data:null})
    }
}

const getApplicantByCnic = async (req,res)=>{
    try{
        let cnic = req.params.cnic;
        const getApplicant = await getByCnic(cnic);
        if(!getApplicant){
            return res.status(400).json({success: false, message:"Applicant not found by ",cnic});
        }
        return res.status(200).json({success: true ,data:getApplicant});
    } catch(error){
        return res.status(500).json({type:"warning",message:error.message})
    }
}
const getApplicantByRollNo = async (req,res)=>{
    try{
        let rollNo = req.params.rollno;
        const getApplicant = await getByRollno(rollNo);
        if(!getApplicant){
            return res.status(400).json({success: false, message:"Applicant not found by ",rollNo});
        }
        return res.status(200).json({success: true ,data:getApplicant});
    } catch(error){
        return res.status(500).json({type:"warning",message:error.message})
    }
}

module.exports={
    createApplicant,
    getApplicantByCnic,
    getApplicantByRollNo
}