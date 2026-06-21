const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const router = require("./routes/todoRoutes");


const live_url ="mongodb+srv://Harbornbor:db_Harbornbor01@cluster0.sb7x8lt.mongodb.net/todoDB?appName=Cluster0"
 const local_url =  "mongodb://localhost:27017/todoDB"
 mongoose.connect(local_url)
.then(()=> console.log("mongdb connected"))
.catch((error) => console.log("unable to connect mongodb",error.message));

const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;

app.use("/todos", router);
app.get('/', (req , res) =>{
    res.send("api is up and running")
});

app.listen(port); 
console.log(`api is at ${port} listening`); 