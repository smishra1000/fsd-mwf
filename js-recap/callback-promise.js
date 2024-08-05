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


function getName(){
    return "sameer"
}

function greetMe(name){
    console.log("hi good mroning",name)
}
let name = getName();
greetMe(name)


