
// var name="global emp"
// var age=100;
// function showInfo(){
//     console.log(this);//window
//     console.log(this.name,this.age)
// }

// let user1 = {
//     name:"test1",
//     age:20,
// }

// let user2 = {
//     name:"test2",
//     age:22,
// }
// showInfo();
// showInfo.call(user1)
// showInfo.call(user2)

// showInfo.apply(user1)
// showInfo.apply(user2)
// // window.showInfo();
// // this.showInfo();

// let showfnTaken = showInfo.bind(user2);
// showfnTaken();

// call, apply, bind--all threee are used to invoke function,along with you can change value of "this"

// function add(){
//     console.log("hey i am add fn",this)
// }
// add();
// add.call(user1);
// add.apply(user2);
// add.bind();



let obj1 = {
    name:"test1",
    address:"hyd"
}

let obj2 = {
    name:"test2",
    address:"blr"
}

 function printData(param1,param2){
    console.log("Hi "+ this.name + param1 + " " + param2);
    // console.log(this.name);
    // console.log(this.name.toUpperCase())
 }


 printData.call(obj1,"good mroning","how r you ?")
printData.apply(obj2,["good morning","how r you ?"])

let ram = printData.bind(obj2)

ram("good mroning","how r you ?")






