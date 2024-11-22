// let p1 = document.getElementById("p1")

// let p2 = document.getElementById("p2")

// p1.addEventListener("click",()=>{
//     console.log("parent clciked")
// })

// // p2.addEventListener("click",()=>{
// //     console.log("p2 clicked")
// // })

// let a = document.getElementById("a1")
// a.addEventListener("click",(event)=>{
//     //console.log("body clciked")
//     //event.preventDefault();
//     console.log("clicked a tag")
// })

// // what is this in javascript


// function goToPage(event){
//     event.preventDefault();
//     console.log("clicked a tag")
// }

// // // clousre example
// // function outerFunction() {
// //     let counter = 0;
  
// //     return function innerFunction() {
// //       counter++;
// //       console.log(counter);
// //     };
// // }



// // let data = outerFunction();

// // console.log(data())


// // //let countre= 0




// // function greet(){
// //     let axx = 10;
// //     console.log("hi good morning")
// //     console.log(axx)
// //     return function inner(){
// //         console.log(axx)
// //     }
// // }


// // let r = greet()

// // console.log(r)
// // r();


// // function ouetrfn(){
// //     let xy =10;
// //     return function innerfn(){
// //         console.log(xy)
// //     }
// // }

// // let data = ouetrfn();

// // data();


// let student = {
//     id:101,
//     name:"test1"
// }

// console.log(Object.keys(student))
// console.log(Object.entries(student))
// console.log(Object.values(student))
// let st2 = Object.assign({},student)

// let st3 = Object.create(st2)

// console.log(st2)

// console.log(st3)




let a = 10;
let b = 0;



try{
    console.log("hiii")
}catch(err){
    console.log(err)
}finally{
console.log("hiiii")
}

