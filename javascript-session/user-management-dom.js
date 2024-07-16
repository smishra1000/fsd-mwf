let users = [];
let form = document.getElementById("userManagement");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitted")
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    console.log(nameInput.value,emailInput.value)

    createUsers(nameInput.value,emailInput.value)
    nameInput.value="";
    emailInput.value="";
    displayUsers();

})

function createUsers(name,email){
    users.push({name:name,email:email})
}

function displayUsers(){
    // logic to display data in table
    let usersTableBody = document.getElementById("users-data");
    usersTableBody.innerHTML = "";
    console.log(users)
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

        const actionCol = document.createElement("td");
        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        actionCol.appendChild(editBtn)
        actionCol.appendChild(deleteBtn)

        row.appendChild(actionCol)
        usersTableBody.appendChild(row)
        

    }
    // delete user

    // edit user

}