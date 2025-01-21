const express = require("express");

const Auth = require("../models/auth")


const router  = express.Router();


router.post("/signup",async (req,res)=>{

    const {email,password} = req.body
    // 1. validate data which passed by client
            if(!req.body.email || !req.body.password){
                res.send({msg:"plesase enter your email and password"})
            }
            // 2. check email exist or not 
            let user = await Auth.findOne({email:req.body.email})
            console.log(user)
            if(user){
                res.send({msg:"Alredy registered"})
            }
            // if not then create an account in db
            else{
                
                const newUser = new Auth({
                    email,
                    password,
                    role:"user"
                })
                newUser.save()
                res.send("signup successfully")

            }
})

router.post("/login",async (req,res)=>{
    // 1. validate empty emial and pasword
    const  {email,password} = req.body;
    if(!email || !password){
        res.send("empty email and password")
    }
    
    //2. check emial exist or not 
    const user = await Auth.findOne({email:email});
     // if email not exist then send msg that user not found
        if(!user){
                res.send({msg:"user not found"})
        }else{
            // if email exist then check for password-entered passord and saved pasword
            if(password===user.password){
                // if password match then login successfully
                res.send({msg:"Login successfully"})
            }else{
                // if password not match then send error wrong password 
                res.send({msg:"Invalid password"})
            }
        }
})





module.exports = router