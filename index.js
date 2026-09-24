let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproutes=require('./routes/emp_route');
mongoose.connect("mongodb://localhost:27017/HRM")
 .then(()=>console.log("Database connected succesfully"))
 .catch(()=>console.log(err));
app.use(express.json());
app.use("/api/emp",emproutes);
app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})