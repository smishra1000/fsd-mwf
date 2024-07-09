// how to create object in javascript

// 1. using object literal syntax

// let user = {
//     name: "test1",
//     age: 20
// }
// user.email = "test1@gmail.com";

// let emp = {};

// emp.age = 20
// emp.sal = 2000;
// emp["address"] = "hyd"

// console.log(emp)

// 2. uisng Object constructor function
// let obj1 = new Object();
// console.log(obj1)

// obj1.name = "test1"
// console.log(obj1)

// 3. uisng constructor function 

// function Employee(){
//     // when you call constructor function with new keword--
//     //this will refers to newly created object
// console.log(this);//{}
//     this.name="test1"
//     this.age=20
// }   

// let e1 = new Employee();//{} this-----{}

// console.log(e1);//{name:"test1",age:20}


// function Person(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address
// }

// let p1 = new Person("test1", 20, "hyd");
// let p2 = new Person("test2",40,"BLR");

// console.log(p1,p2)

// 4th way---using Object.create method is used to create object from provided object as a prototye

// let company = {
//     cname:"ABC"
// }

// let newCompany = Object.create(company,{address:{value:"SINGAPORE"}});

// console.log(newCompany.cname)

// let obj = {
//     name:"sameer",
// }

// console.log(obj)
// // console.log(obj.toString())


// function Student(name,age){
//     this.name=name
//     this.age=age
// }

// Student.prototype.changeName = function(){
//     return this.name.toupperCase();
// }


// let st1 = new Student("test1",30)
// let st2 = new Student("test2",70)


// console.log(st1.hasOwnProperty("toString"))


// object-------one prototype------2nd level prototype
// //st1-------Student.prototype-------Student.prototype.prototype(Object.prototype)----null

// 5th way using Object.assign method 


// let obj100 = {
//     name:"test1"
// }


// let obj200 = {
//     age:20
// }

// let obj300 = {
//     address:"hyd"
// }

// let targetObj = Object.assign({},obj100,obj200,obj300)

// console.log(targetObj)

// let emp = new Object();

// emp.name="tets1"
// emp.age=40

// console.log(emp)


let user1 = {
    name:"test1",
    address:"hyd"
}

let emp = Object.create(user1)

console.log(emp)






