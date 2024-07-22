
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


// Q write one function getUsers which should get all users from api and dipsly those 
//users in dom using dipslayUses function


let users = [];


// in js for api call we can use fetch("url").then(function(res){
//res.json()
//}).then(function(data){
    //console.log(data)
//})
function getUsers(){
    return new Promise(function(resolve,rejct){
        fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
            return res.json();
        }).then(function(data){
            console.log("users data=",data)
            users = [...data]
            resolve();
        })
    })
   
}

function displayUsers(){
    console.log("displaying users")
    let usersBody = document.getElementById("users-body");
    usersBody.innerHTML=""

    for(let i = 0;i<users.length;i++){
        const row = document.createElement("tr");

        const idCol = document.createElement("td");
        idCol.textContent=i;
        row.appendChild(idCol)

        const namecol = document.createElement("td");
        namecol.textContent=users[i].name;
        row.appendChild(namecol)

        const emailCol = document.createElement("td");
        emailCol.textContent=users[i].email
        row.appendChild(emailCol)

        const websiteCol = document.createElement("td");
        websiteCol.textContent=users[i].email
        row.appendChild(websiteCol)
        usersBody.appendChild(row)

    }

}

getUsers().then(function(){
    displayUsers();
})



///async and awit--










