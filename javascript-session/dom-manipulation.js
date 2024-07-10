// what is dom

// 1> getElementById-- used to get element by its id attribute

// let div = document.getElementById("box1");
// console.log(typeof div)
// div.style.border="2px solid red";
// div.style.width="400px"
// div.style.height="300px"
// div.style.padding="10px"


// 2 getElementsByClass--

// let boxes = document.getElementsByClassName("head-box");
// console.log(boxes)


// getElementsByTag

// let tags = document.getElementsByTagName("div");
// console.log(tags)

// getElementsByname

// let fname= document.getElementsByName("fname")
// console.log(fname)

// querySelector 

// let box = document.querySelector("#box1")

// console.log(box)

// querySelectorAll

// let boxes2 = document.querySelectorAll(".head-box")

// console.log(boxes2)

// let list = document.querySelectorAll("ul li")

// console.log(list)


// dom create api

// creaetElement--
// let para = document.createElement("p");
// console.log(para)
// para.textContent="Hi i am paragraph"
// para.style.color="red"
// para.style.fontSize="30px"

// document.body.appendChild(para)

// let employess = ["sameer","deepthi","chandu","indu"]
// let ul = document.createElement("ul")
// ul.style.listStyle="none"
// for(let i=0;i<employess.length;i++){
//     let li = document.createElement("li")
//     li.textContent=employess[i]
//     li.style.padding="10px";
//     li.style.margin="5px"
//     li.style.height="20px"
//     li.style.background="grey"
//     ul.appendChild(li)
// }

// document.body.appendChild(ul)


// remove element
// let div =document.getElementById("box1")
// div.remove();

// event handler---


// let div =document.createElement("div")

// div.style.width="200px"
// div.style.height="100px"
// div.style.border="2px solid red"
// div.textContent="i m box";


// document.body.appendChild(div)

// let hideBtn = document.createElement("button")
// hideBtn.textContent="Hide me"
// document.body.appendChild(hideBtn)

// let showBtn = document.createElement("button")
// showBtn.textContent="Show me"
// document.body.appendChild(showBtn)

// hideBtn.addEventListener("click",()=>{
//     div.style.display="none"
// })

// showBtn.addEventListener("click",()=>{
//     div.style.display="block"
// })


// create todo form and display in list

let todos = [];
let label = document.createElement("label");
label.textContent = "todo name"
document.body.appendChild(label)
let input = document.createElement("input")
input.id = "todo-name"
input.value = ""
input.placeholder = "enter todo item"
document.body.appendChild(input)

let saveBtn = document.createElement("button")
saveBtn.textContent = "create";

saveBtn.id = "save-btn"

document.body.appendChild(saveBtn)

saveBtn.addEventListener("click", () => {
    let todoname = document.getElementById("todo-name").value
    todos.push(todoname)
    displayToDos();
})

function displayToDos(){
    let ul = document.createElement("ul")
    ul.style.listStyle="none"
    for(let i=0;i<todos.length;i++){
        let li = document.createElement("li")
        li.textContent=todos[i]
        li.style.padding="10px";
        li.style.margin="5px"
        li.style.height="20px"
        li.style.background="grey"
        ul.appendChild(li)
    }
    document.body.appendChild(ul)
}









