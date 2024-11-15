const fs = require('fs');

// Reading and writing using asynchrnous nature

// console.log("1")

// fs.readFile("sameer.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("content from file is",data)
//     }
// })

// // console.log("2")


// // writing data inside file

// fs.appendFile("sameer.txt"," i am a full stack developer",function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file written successfully")
//     }
// })




// reading writing uisng synchronous nature

// let data = fs.readFileSync("sameer.txt","utf-8");
// console.log(data)
// let result =  fs.appendFileSync("sameer.txt","i am a teacher")
// console.log("file updated successfully")
// console.log("3")


// delete file 

fs.unlink("sameer.txt",function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log("file deleted successfully")
    }
})

// reading file after deletion 

fs.readFile("sameer.txt","utf-8",function(err,data){
    if(err){
        console.log("error got while raeding file",err)
    }else{
        console.log("content from file is=",data)
    }
})

// error first callback function


// assignment : File operations uisng asynchcous but use promise/ callback, async await 



