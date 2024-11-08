function sum(a,b){
    console.log(a+b)
}


function multiply(a,b){
    console.log(a*b)
}

function subtract(a,b){
    console.log(a-b)
}

sum(20,40)

module.exports= {
    sum,
    subtract,
    multiply
}

// nodejs by default folows commomjs module pattren--require()  module.exports ={
//}
