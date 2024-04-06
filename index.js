const express = require("express");
const app = express();
const port = 4000;

const User=require("./Model/UserModel.js")
require("./db/connection.js");
app.use(express.json());


app.post("/user", async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.status(201).json(data);
      } catch (error) {
        res.status(500).json({sucess:false,msg:error.message});
      }
});

app.get("/user", async (req, res) => {

    try {
        const data = await User.find({});
        res.status(201).json({sucess:true,msg:data});
      } catch (error) {
        res.status(500).json({sucess:false,msg:error.message});
      }
});

app.get("/user/:id", async (req, res) => {
  try {
 
    const user = await User.findById(req.params.id);
    res.status(201).json({sucess:true,msg:user});
  } catch (error) {
    res.status(500).json({sucess:false,msg:error.message});
  }
});

app.put("/user/:id", async (req, res) => {
  try {

    const user = await User.findByIdAndUpdate(req.params.id, req.body);
   
    res.status(201).json({sucess:true,msg:"User Udated Sucessfully"});
  } catch (error) {
    res.status(500).json({sucess:false,msg:error.message });
  }
});
app.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(201).json({sucess:true,msg:user});
  } catch (error) {
    res.status(500).json({sucess:false,msg:error.message });
  }
});

app.listen(port, () => {
  console.log(`server connected sucessfully ${port}`);
});
