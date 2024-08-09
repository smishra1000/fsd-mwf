
// 

// 1 . let, const

// {
//     let x  =1000;
//     console.log(x)
// }

// console.log(x)


//2. ``
// let x =100
// let y =2000;

 //let val = "value is " + x + "next y value is " + y;
// let val = `value is ${x} next y value is ${y}`
// console.log(val)

// // rest and spread operator ... 

// // let obj1 = {
// //     id:101,
// //     age:20
// // }

// // let obj2 = {...obj1,email:"test1@gmail.com"}

// // console.log(obj2)

// function add(a,b,...c){
//     console.log(a,b,c)
// }

// add(2,3,4,5,6,7)


//  let arr1 = [1,2,3,4,5]

// // let arr2 = [6,7,8,9]

// // let result = [...arr1,...arr2]

// // console.log(result)

// let [a,...b] = arr1;

// console.log(a,b)


// 5. arrow function---

// function add(a,b){
//     return a+b
// }

// const add = (a,b)=>{
//     return a+b
// }

// console.log(add(2,3))

// function User(){
//     this.name="test1"
// }

// const User = ()=>{
//     console.log(this);//
//     this.name = "test1"
// }

// let u1 = User();

// console.log(u1)

// default parameters


// function add(a,b,c=30){
//     return a+b+c;
// }

// console.log(add(10,20,100))


// prmose,async await---

// es6 -------------class object ,oops, static-------------------


// let obj1 = {
//     name:"test1",
//     age:20,
//     showInfo:function(){
//         console.log(this.empName,this.age)
//     }
// }

// let obj2 = {
//     name:"test2",
//     age:30,
//     showInfo:function(){
//         console.log(this.empName,this.age)
//     }
// }

// console.log(obj1)


// class Employee{
//     constructor(name,age){
//         this.empName =name
//         this.age = age
//     }

//     showInfo(){
//         console.log("emp info=",this.empName,this.age)
//     }
// }

// let e1 = new Employee("test1",20);//{empName:"test1",age:20}

// console.log(e1)

// let e2 = new Employee('test2',40);

// console.log(e2)

//

// using literal 

// let user1 = {
//     name:"test1",
//     email:"test1@gmail.com",
//     showInfo:function show(){
//         console.log("hii")
//     },
//     colors:["red","green","yellow"],
//     isPaid:true
// }
// let user2 = {
//     name:"test2",
//     email:"test2@gmail.com",
//     showInfo:function show(){
//         console.log("hii")
//     },
//     colors:["red"],
//     isPaid:false
// }

let user = new Object();


user.name="test1";
user.age=20
console.log(user);


// function User(name,email,colors,isPaid){
//     this.name=name;
//     this.email=email;
//     this.colors= colors;
//     this.isPaid = isPaid;
//     this.showInfo = function(){
//         console.log("hii")
//     }
// }

// function Person(){

// }

// let u1 = new User("test1","test1@gmail.com",["red","green"],true)

// let u2 = new User("test2","test2@gmial.com",["green","yellow"],false)


// console.log(u1,u2)



// function User(){
//     console.log(this);//window
//     this.name="test1"
//     this.age =20
// }


// function Teacher(){
//     console.log(this);//
//     User.call(this)
//     this.sal = 5000;
// }

// // let u1 = new User();//{name:"test1",age:20}

// let t1 = new Teacher(); //{sal:5000} {sal:5000,name:"",age:""}


// console.log(u1)

// console.log(t1)

// //call apply bind



function Teacher(){
    //{sal:5000}
    this.sal=5000;
    User.call(this);
}

function User(){
    console.log(this);//;{sal:5000,name:"test",age:20}
    this.age=20;
    this.name="test1"
}

// User();
// new User()

// User.call({name:"test1"});//
// User.call(new Teacher());  // User.call({sal:5000})

// let t1 = new Teacher();

// console.log(t1)

// let result = User.call(new Teacher()) ;

// console.log(result)

// console.log(result)

// User()
// User.call()
// User.apply()

// let u1 =new User();

let t1 = new Teacher();//{name:"",age:"",sal:""}

console.log(t1)















