let express=require('express');
let router=express.Router()
router.get("/viewemp",(req,res)=>{
    res.send("viewemp route called");
})
router.post("/assign-task",(req,res)=>{
    res.send("assign-taskrouter called");
})
router.delete("/deleteemp",(req,res)=>{
    res.send("deleteemp router called");
})
router.get("/viewtask",(req,res)=>{
    res.send("viewtask router called");
})
module.exports=routers;