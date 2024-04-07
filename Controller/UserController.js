const User=require("../Model/UserModel")
const getAllUser=async(req,res)=>{
    
    try {
        const user = await User.find({});
        res.status(201).json({sucess:true,msg:user});
      } catch (error) {
        res.status(500).json({sucess:false,msg:error.message});
      }
}
const getUserById=async(req,res)=>{
    try {
 
        const user = await User.findById(req.params.id);
        res.status(201).json({sucess:true,msg:user});
      } catch (error) {
        res.status(500).json({sucess:false,msg:error.message});
      }
}
const createUser=async(req,res)=>{
    try {

        const user = await User.create(req.body);
        res.status(201).json({sucess:true,msg:"User Created Successfully"});
      } catch (error) {
        res.status(500).json({sucess:false,msg:error.message});
      }
}
const updateUser=async(req,res)=>{
    try {

        const user = await User.findByIdAndUpdate(req.params.id, req.body);
       
        res.status(201).json({sucess:true,msg:"User Updated Successfully"});
      } catch (error) {
        res.status(500).json({sucess:false,msg:error.message });
      }
}
const deleteUser=async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(201).json({sucess:true,msg:"User Deleted Successfully"});
      } catch (error) {
        res.status(500).json({sucess:false,msg:error.message });
      }
}

module.exports={getAllUser,getUserById,createUser,updateUser,deleteUser};