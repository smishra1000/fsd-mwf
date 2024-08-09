// object prototype 



// let obj = {
//     id:1,
//     email:"test1@gmail.com"
// }

// let obj2 = {
//     id:2,
//     email:"test2@gmail.com"
// }


// Object.prototype.sayHi = function(){
//     console.log("hiii")
// }
// console.log(obj)
// console.log(obj2)

// console.log(obj.__proto__)

// console.log(obj2.sayHi())

// let str1 = "sameer";

// console.log(str1.__proto__)

// console.log(str1.toUpperCase())
// // str1----String----Object


// prototype chaining--

// emp----Employee-----Object------null


// let emp = {
//     id:101
// }

// console.log(emp.__proto__===Object.prototype)


// Object.prototype.sayHi = function(){
//     console.log("hiii")
// }
// emp.sayHi();

// let str = "sameer";

// String.prototype.toUpperCase = function(){
//     console.log("i am new uppercase")
// }


// console.log(String.prototype.prototype)



// function User(){
//     this.age = 20
// }

// Object.prototype.email="test1@gmail.com"

// let u1 = new User();

// console.log(u1)

// // console.log(u1.__proto__.__proto__.__proto__)


// console.log(u1.email);//
// // u1.__proto__.__proto__

// let arr = [2,3,4,5]

// // arr.map((item)=>{

// // })

// // console.log(arr.__proto__)

// Array.prototype.saySameer = function(){
//     console.log("saying sameer")
// }

// arr.saySameer();

//polyfills----

// Array.prototype.mymap = function(callback){
//     let arr = [];

//     for(let i=0;i<this.length;i++){
//         arr.push(callback(this[i]))
//     }
//     return arr;
// }

// let arr = [1,2,3,4]

// let newArr = arr.mymap((item)=>{
//     return item*2;
// })

// let newArr2 = arr.map((item)=>{
//     return item*2;
// })

// console.log(newArr,newArr2)
















