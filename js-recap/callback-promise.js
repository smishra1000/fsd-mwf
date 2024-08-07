// callback promise async await


// what is callback? 
// let users = []

// function getUsers(fn) {
//     // get users from api
//     setTimeout(() => {
//         fn([
//             {
//                 id: 1, name: "sameer", age: 30
//             },
//             {
//                 id: 2, name: "test2", age: 32
//             },
//     ])
//     }, 3000)

// }


// function displayUsers(users) {
//    console.log("got users=",users)
// }



// let users = getUsers(displayUsers);


// function getName(){
//     return "sameer"
// }

// function greetMe(name){
//     console.log("hi good mroning",name)
// }
// let name = getName();
// greetMe(name)



//callback--
// let student = {
//     show:function(){
//         console.log("hii")
//     }
// }


// function show(){
//     console.log("hii")
// }

// console.log(student.show())





// function fetchData(callback){
//     setTimeout(()=>{
       
//         callback("hi data")
//     },2000)
// }

// function printData(data){
//     console.log(data)
// }

// // let result = fetchData();// so while executing this js engine will pick printData
// // printData(result);

// fetchData(printData)



// // task 1 task 2

// uisng promise---



// function fetchData(){
//     let isNetwork = false
//     return new Promise(((resolve,reject)=>{
//         setTimeout(()=>{
//             if(isNetwork){
//                 resolve("hi data")
//             }else{
//                 reject("no netwrok available")
//             }
            
//         },2000)
//     }))
// }

// function printData(data){
//     console.log(data)
// }

// fetchData().then((data)=>{
//     printData(data)
// }).catch((err)=>{
//     console.log(err)
// })

// function getUsers(){
//     return new Promise((resolve,reject)=>{
//         fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//             return res.json()
//         }).then((data)=>{
//             resolve(data)
//         })
//     })
   
// }

// function printUsers(users){
//     console.log("users recieved=",users)
// }

// getUsers().then((res)=>{
//     printUsers(res)
// })



// using async await

// async function getUsers(){
//     let data = await fetch("https://jsonplaceholder.typicode.com/users");
//     let users = await data.json();
//     printUsers(users)
// }

// getUsers();

// function printUsers(users){
//     console.log("users recieved=",users)
// }

