
// console.log("1")
// console.log("2")
// console.log("3")


// console.log("1")

// setTimeout(()=>{
//     console.log("2")
// },0)

// console.log("3")


// function orderNow(){
//     setTimeout(()=>{
//         console.log("order done")
//     },3000)
// }

// function payNow(){
//     console.log("payment done")
// }

// function playMusic(){
//     console.log("playing music")
// }

// orderNow();// taking 5 min of time
// payNow();
// playMusic();




// function add(a,b){
//     //5 min
//     return a+b
// }

// add();

// console.log("compute done")

// callback,promise,async -await

// callback------------
// when you pass a function as an argument  to other function, from there you call it back--


// function orderNow(cb){
//     setTimeout(()=>{
//         console.log("order done")
//         cb()
//     },3000)
// }

// function payNow(){
//     console.log("payment done")
// }

// function playMusic(){
//     console.log("playing music")
// }

// orderNow(payNow);// taking 5 min of time
// // payNow();
// playMusic();


// event loop-----200%


// what is promise? why promise came 

// function orderNow() {
//     let itemInstock = true;
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (itemInstock) {
//                 console.log("order done")
//                 resolve()
//             }else{
//                 reject("item sold out")
//             }

//         }, 3000)
//     })

// }


// function payNow() {
//     console.log("payment done")
// }

// function playMusic() {
//     console.log("playing music")
// }


// orderNow().then(function () {
//     payNow();
// }).catch(function(err){
//     console.log(err)
// })

// playMusic();

// let p1 = new Promise(function(resolve,reject){
//     reject("hii")
// })

// console.log(p1)


// // p1-----pending
// // fullfilled
// // reject



// new Promise(function(resolve,rejct){
//     reol
// })



// function getUsers(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("getting users")
//             resolve([
//                 {
//                     id:1,
//                     name:"test1",
//                     age:20
//                 },
//                 {
//                     id:2,
//                     name:"test2",
//                     age:22
//                 }
//             ])
//         },2000)
//     })
    
// }



// function displayUsers(){
//     console.log("diplaying users")
// }

// getUsers().then(function(res){
//     console.log("data recieved from db",res)
//     displayUsers();
// })




// read file , print data from file


// print other document






