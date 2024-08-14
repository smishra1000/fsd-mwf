//
//opps--class object inheritance polymorphsim,abstraction,encapsulation

// class Employee{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }

//     showInfo(){
//         console.log(this.name);
//         console.log(this.age)
//     }
//     changeName(newName){
//         this.name=newName
//     }
// }

// let e1 = new Employee("test1",20)

// console.log(e1)
// e1.changeName("test11")

// console.log(e1)


//

class Parent{
    constructor(){
        this.name='parent'
        this.id="p11"
    }
    show(){
        console.log("from parent")
        console.log(this.name,this.id)
    }
}


class Child extends Parent{
    constructor(){
        super()
        this.level="level1"
    }

    show(){
        super.show();
        console.log("from child")
        console.log(this.name,this.id,this.level)
    }
}

let c1 = new Child();
// c1.show();

console.log(c1.show())



// encapsulation----

// abstraction 

// class ATM{
//     constructor(){
//         this.bankName="HDFC",
//         this.cardNum = "1211221212"
//     }

//     withdraw(){
//         // 
//         console.log("withdrwaing")
//     }

//     checkBalance(){
//         //
//          console.log("remaing balance is ")
//     }
// }

// call(){

// }

// phone .call()

// oops---class object encapsultion,abstraction,polymorphsim----abstraction
// console.log(Math.abs(-2))

// class Math{
//     constructor(){

//     }
// }

class Teacher{
    static schoolName="ABC School"
    constructor(name,age){
        this.name=name
        this.age=age
        // this.school = "ABC SCHOOL"
    }

    teach(){
        console.log("teaching ")
    }
}

let t1 = new Teacher("test1",20);

console.log(t1)
// t1.teach();

// console.log(t1.name)
// console.log(t1.age)

let t2 = new Teacher("test2",40);

// t2.teach()

console.log(t2)

console.log(Teacher.schoolName)

// oops topic--class object inheritance polymorphsim encapsulation abstraction staitc member

// staic meber you can only access by its class name 
// non static member you can access by its object