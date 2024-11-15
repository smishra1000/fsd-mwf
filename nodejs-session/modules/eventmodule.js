const events = require('events');

const eventEmitter = new events.EventEmitter();




// eventEmitter.on("paymentDone",function(data){
//     console.log("after paymnet recievd itm= ",data)
// })

// eventEmitter.emit("paymentDone",{orderId:101,itemName:"LG TV",price:2000})

// eventEmitter.on("2secdone",function(){
//     console.log("please excecute settimout callback function")
// })

// eventEmitter.emit("2secdone")

// const fs = require("fs");

// fs.readFile("greet.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// eventEmitter.on("filereaddone",function(filedata){
//     console.log(filedata)
// })

// eventEmitter.emit("filereaddone","hello goodmorning")


