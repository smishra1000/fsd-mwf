const express  = require("express");


const app = express();

app.get("/",(req,res)=>{
    res.send(["test1","test2","test3","test4"])
})

app.get("/movies",(req,res)=>{
    res.send("get methods")
    res.send(["abc","def"])
})

app.post("/movies",(req,res)=>{
    //some code
    res.send("post methods")
})

app.delete("/movies",(req,res)=>{
    res.send("delete methods")
})

app.put("/movies",(req,res)=>{
    res.send("put method")
})

app.get("/user",(req,res)=>{
    res.send({id:101,age:30,name:"test1"})
})

app.delete("/user",(req,res)=>{
    res.send("user deleted successfully")
})

app.get("/nearbyresturant",(req,res)=>{
    res.send([{id:101,name:"Kritunga",rating:3.4},{id:102,name:"Pista House",rating:3.4}])
})

app.get("/students",(req,res)=>{
res.send([{id:"1",name:"test1",roll:123,age:30},{id:"2",name:"test2",roll:123,age:30},{id:"3",name:"test3",roll:123,age:30},{id:"4",name:"test4",roll:123,age:30}])
})

app.listen(5000,(req,res)=>{
    console.log("server is running at 5000")
})

// http://localhost:5000/movies