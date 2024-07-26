// 
//let const 
//1> let and const used for block scope 

{
    let x =20;
    const y = 70;
}


// arrow 

const greet = ()=>{
    console.log("hi good morning")
}

function show(a,b,c){
    console.log(a,b,c)
    console.log(arguments)
}

show(2,3,4)


// class and object 

// class Employee{
//     constructor(){
//         this.name="emp1"
//         this.age=20
//     }
// }

// let e1 = new Employee();
// console.log(e1)

// let name = "sameer"

let msg = `Hi i am good my name is ${name}`

console.log(msg)

/// Destructuring 

// let ages = [20,30]
// let [a,b] = [20,30]

// console.log(a,b)

// let user = {
//     name1:"test1",
//     age:20
// }

// let {name1,age} = user

// console.log(name1,age)


// default/ rest /spread

// function register(name,age,email,collegeName="NIT"){
//     console.log(name,age,email,collegeName)
// }

// register("test1",20,"test1@gmail.com")
// register("test2",40,"test2@gmial.com","KMIT")

// rest spread


// let arr1 = [1,2,3,4]

// let arr2 = [...arr1]
// console.log(arr2)

// function sum(a,b,c,...d){
//     console.log(a,b,c,d)
// }

// sum(1,2,3,4,5)

// let arr1 = [1,2,3]

// let arr2 = [4,5,6]
// let arr3 = [...arr1,...arr2]//[1,2,3,4,5,6]

// console.log(arr3)


// generators----

function greet2(){
    console.log("1")
    console.log("2")
    console.log("3")
}

greet2();

greet2();

// function *greet3(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// for(let key of greet3()){
//     console.log(key)
// }


function* makeIterator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
//   const iter = makeIterator();
  
//   for (const itItem of iter) {
//     console.log(itItem);
//   }

let it = makeIterator();
console.log(it.next())
console.log(it.next())
console.log(it.next())


// wht is generators
