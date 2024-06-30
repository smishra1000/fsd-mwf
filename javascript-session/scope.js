// scope is area/region where your variable will b accessible
// var a = 10;
// let x =30;
// const z = 100;

// we have 3 types of scope--- global scope / function scope  / block scope

// global scope---


// console.log(a,x,z)

// function display(){
//     console.log(a,x,z)
// }


// display();

// function scope varibales---only accessbile inside function 


// function greet(){
//     let local1 = "hi good  morning"
//     const local2="hi good evening"
//     var local3 = "hi good afternoon"

//     console.log(local1,local2,local3)
// }

// greet();

//console.log(local1,local2,local3)


// block scope varibales---this features addded in es6--let const only you can create block scope varibales

// {
//     let block1 = "hii"
//     const block2 = "hello"
//     // var block3 = "hey"

//     console.log(block1,block2)
// }

// console.log(block3)

// let x =10;
// let y = 20;
// var z = 300;

// function display(){
//     let x=100;
//     console.log(z);//300
//     console.log(x);//100
//     {
//         let y = 200;
//         console.log(y);//200
//         console.log(z);//300
//     }
//     console.log(y);//20
//     console.log(z);//300
// }
// display();

// console.log(z);//300
// 300
// scope.js:55 100
// scope.js:58 200
// scope.js:59 300
// scope.js:61 20
// scope.js:62 300
// scope.js:66 300


// {
//     var x =20;
//     let y = 40;
//     console.log(x,y);//20,40
// }

// console.log(x);//20
// //console.log(y);//error

// function show(){
//     console.log(x);//error
//     //console.log(y);//error
// }
// show();

// function display(){
//     let x = 100;
//     var y=200;
//     console.log(x);//100
//     console.log(y);//200
//     if( true){
//         let x  =1000;
//         var y = 2000;
//         console.log(x);//1000
//         console.log(y);//2000
//     }

//     console.log(x);//100
//     console.log(y);//200/2000
// }


// display();
// console.log(y);//200/error


