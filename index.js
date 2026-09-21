let express=require('express');
let app=express();
let emproutes=require(./routes/emp_route');
app.use("/api/emp",emproutes);
app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})