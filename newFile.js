mongoose.connect("mongodb://localhost:27017/HRM")
    .then(() => console.log("db connected succesfully"))
    .catch((err) => console.log(err));
