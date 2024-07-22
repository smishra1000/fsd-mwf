// function getUsers(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hi i am getusers")
//             resolve();
//         },3000)
//     })
   
// }

// function dipslayUsers(){
//     console.log("displaying users")
// }

// async function run(){
//     await getUsers();
//     dipslayUsers();
// }

// run();


// getUsers().then(function(data){
//     dipslayUsers()
// })

// getUsers();
// dipslayUsers();

//--------------------------------------

let users = []
async function getUsers(){
    let usersData = await fetch("https://jsonplaceholder.typicode.com/users")
    let res = await usersData.json()
    users = [...res]
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

async function run(){
    await getUsers();
    displayUsers();
}
run();