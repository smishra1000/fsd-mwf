// var a =100;
// var a=200;
// function show(){
//    // var a=undefined
//     console.log(a);// undefined
//     var a=400;
//     console.log(a);//400
// }
// show();
// console.log(a);//200;


// what is oop?
// javascript is prototypal programining lanaguage;

// oops-- class object inheritance,polymorpism,encapsulation,abstraction

// class-

// class Person{
//     constructor(name){
//         this.pname=name
//     }

//     show(){
//         console.log("i am show method")
//     }
// }


// let p1 = new Person("sameer mishra"); //{pname:"sameer mishra"}

// console.log(p1.pname)
// console.log(p1.show())


// let p2 = new Person("test");

// console.log(p2.show())


// class NumberSystem{
//     constructor(num){
//         this.num = num
//     }

//     checkEven(){
//         if(this.num%2===0){
//             console.log("numbr is even")
//         }else{
//             console.log("number is odd")
//         }
//     }
//     checkNumberIsPositiveNegative(){
//         if(this.num>0){
//             console.log("numbr is positive")
//         }else if(this.num<0){
//             console.log("numbr is negative")
//         }else{
//             console.log("number is zero")
//         }
//     }
// }

// let n1 = new NumberSystem(20)
// n1.checkEven();
// n1.checkNumberIsPositiveNegative();



// Inheritance---- when class 1 use the properties and function from another calss


// class User{
//     constructor(name,age,email){
//         this.name=name;
//         this.age=age;
//         this.email=email
//     }

//     showInfo(){
//         console.log("user information=")
//         console.log(this.name,this.age,this.email)
//     }
// }

// class Player extends User{
//     constructor(name,age,email,type,country){
//         super(name,age,email)
//         this.type=type,
//         this.country=country
//     }
// }

// //let u1 = new User("test1",30,"test1@gmail.com");

// let p1 = new Player("test1",30,"test1@gmail.com","Bowler","India")

// console.log(p1)


// console.log(p1.showInfo())
// // console.log(u1)



// polymorphism---

// class Person{
//     constructor(name){
//         this.name=name;
//     }

//     sayName(){
//         console.log("parent sayname")
//         console.log(this.name)
//     }
// }

// class User extends Person{
//     constructor(name,address){
//         super(name)
//         this.address = address
//     }

//     showDetails(){
//         console.log("name=",this.name)
//         console.log("address=",this.address)
//     }
//     // sayName(){
//     //     super.sayName();
//     //     console.log("child sayname")
//     // }
// }

// let u1 = new User("sameer","hyd")

// // let p1 = new Person("test1")

// // console.log(p1.sayName())

// console.log(u1)

// console.log(u1.sayName())



// data abstraction--hiding the implementation details and only showing the behaviour

// class Phone{
//     #chip="m1chip"
//     constructor(){
//         this.model="ONeplus"
//     }

//     calling(){
//         this.#chip="m1chip"
//         console.log("callin staterd")
//     }

//     disconnect(){
//         this.#chip=false;
//     }
// }

// let ph = new Phone();

// console.log(ph.#chip))



// qustion: create player class and store name,country,type,age,displayInfo function
//create Batsman class and Bowler class store totalRun toalMatch,totalWickts
// calculate avrgare run by a batsman; average by bower.


//----








