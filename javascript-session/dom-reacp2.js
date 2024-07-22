// dom---document object model

//any element which created in html will appear as node/object in browser meemory
// dom is all about manipulating elemnt/creation/deletion/insertion/updation

//dom api are collections of functions--

/// How to access an element
// getElementById,getElementsByClassName, getElemensByName,getElemenetsByTag,
// querySelector--
// querySelctorAll

// let pelement = document.getElementById("p1");

// console.log(typeof pelement)

// pelement.style.color="red"

// 
// let pelemenets =document.getElementsByClassName("para");

// console.log(pelemenets)

// Array.from(pelemenets).forEach(element => {
//     console.log(element)
//     element.style.color="green"
// });


// let array = [10,20,30,40]

// // for(let i=0;i<array.length;i++){
// //     console.log(array[i])
// // }

// // array.forEach((item)=>{
// //     console.log(item)
// // })

// let p1 = document.querySelector("#p1");

// console.log(p1)

// let allp = document.getElementsByTagName("p");

// console.log(allp)

// creation and insertion in dom----------------------------

let x = document.createElement("p");
x.textContent="hi i am paragraph";
x.id="p1"
x.classList=["para1"]
x.style.color="blue"
document.body.appendChild(x)

// x.addEventListener("mouseover",function(){
//     x.style.color="green"
//     x.style.fontSize="20px"
// })




