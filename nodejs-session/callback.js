function show(){
    console.log("show function")
}
function sum(x){
    let a= 20;
    let b = 70;
    console.log(a+b)
    x();
}

sum(show);