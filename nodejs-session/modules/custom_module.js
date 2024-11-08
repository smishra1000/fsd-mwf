function greet(){
    console.log("hello good morning")
}


function changeNameInCaps(str){
    return str.toUpperCase();
}

module.exports = {
    greet,
    changeNameInCaps
}