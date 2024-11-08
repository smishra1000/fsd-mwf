// const fs = require("fs")

// fs.writeFile("greet.txt","hello goodmorning",function(err,data){
//     if(err)
//         console.log("some error")
//     console.log("file written succecsffuly")
// })

const os = require("os");

console.log(os.arch())
console.log(os.totalmem())
console.log(os.freemem())

