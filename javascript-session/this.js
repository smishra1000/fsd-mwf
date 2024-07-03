// "this"  in js----this is referes to cuurent context /object where your function execute


// console.log(a);//undefined
// var a = 9;
// console.log(a);//9


// [var a = undefined,a=9,9]

// console.log(this);
// rules about "this"
/* 
1. at gloabl level this refers to window--

*/

// console.log(this.a);
// console.log(window.a);
// console.log(a);


// function show(){
//     console.log("hi i am show fn")
// }

// show();
// window.show();
// this.show();

// 

// let obj = {
//     name:"test1",
//     showName:function(){
//         console.log("hi i am showName")
//         console.log(this); // obj

//     },
//     showAge:function(){
//         console.log("i am age fn")
//         console.log(this)//obj
//     }
// }
// obj.showName()
// obj.showAge();


// let emp = {
//     name:"test1",
//     age:20,
//     emai:"test1@gmail.com",
//     showInfo:function(){
//         console.log("hi i am isnide obj")
//         console.log(this)
//     }
// }

// emp.showInfo()

// function display(){
//     console.log(this);//window
// }

// display();

// 

// let user = {
//     name:"sameer",
//     roll:"123",
//     show:function(){
//         console.log(this);// user obj
//     }
// }

// user.show();

// let student = {
//     roll:"101",
//     showInfo:function(){
//         console.log(this);//
//     }
// }

// student.showInfo();


// 3rd rule--- inside object if you have method--inside that method any inner
// function  then this refers to window

// let user2 = {
//     name:"test2",
//     showName:function(){
//         console.log(this);// this will refers to user2
//         function show2(){
//             console.log(this);// window
//         }

//         show2();
//     }
// }
// user2.showName();

// 4th rule--- arrow function  does'nt have their own this---
//it takes "this" from it surrounding env;

// function add1(){
// console.log("hi i am normal fn")
// }

// let add2 = (a,b)=>{
//     console.log("hi i am arrow fn",a+b)
// }

// add1();
// add2(10,20);

// function add(){
//     return "hi"
// }

// let add = ()=> "hi"

// console.log(add())



// rule 4; inside arrow function if it is method  this refers to window object.
// reason is arrow function doesn't have their own "this" it takes "this" from surrondings env
// let student = {
//     name:"test2",
//     showName:function(){
//         console.log(this);// student
//     },
//     showName2:()=>{
//         console.log(this);// window
//     }
// }
// student.showName();
// student.showName2();


// // rule 5--

// let student = {
//     name:"test10",
//     showName:function(){
//         console.log(this); // studenet

//        let show2 = ()=>{
//             console.log(this);// student
//        } 
//        show2();
//     }
// }

// student.showName();
// rule 6--


function User(){
    console.log(this)
}

let r = new User();// create {}  and assign "this"----{}
let r2 = new User();

console.log(r);//undefined


// 




