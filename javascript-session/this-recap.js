// this in js---

// var a  =10

// function show(){
//     let x =10;
//     console.log(x)
//     console.log(this)
// }

// show();




// 2 pahes---1>creation phase(allocates memory to varibale and function)  
// 2 execution pahe-- 


// execution context box--

// 1> create global eecution context--this--

//Rules about "this"

//1> at global level this refers/belongs to window
//ex // var a  =10

// function show(){
//     let x =10;
//     console.log(x)
//     console.log(this)
// }

// show();

//2 if you define any method inside object , 
//     for that method this refres to owner object

// let obj = {
//     name:"test1",
//     showInfo:function xyz(){
//         console.log(this);
//     }
// }

// obj.showInfo()

// let emp = {
//     age:20,
//     showAge:function(){
//         console.log(this.age);//20
//     }
// }


// emp.showAge();


// 3 if you define any method inside object as an arrow function , 
//     for that method this refres to window

// let emp = {
//     age:20,
//     showAge:()=>{
//         console.log(this);//window
//     }
// }


// emp.showAge();


//4th if you define any method inside object,and any inner function is present 
//then value of "this" for that inner function will be window ,

// let user = {
//     name:"test1",
//     age:20,
//     showInfo:function(){
//      console.log(this);//user
//         function showInfo2(){
//             console.log(this);//window
//         }
        
//         showInfo2();
          
//     }
// }

// user.showInfo()


// 5th if you define any method inside object and any inner function is present as an arrow function
//then value of "this" for that inner function will be owner ,

// let emp = {
//     name:"test1",
//     age:20,
//     showInfo:function(){
//      console.log(this);//emp
//         const showInfo2 = ()=>{
//             console.log(this);//emp
//         }
//         showInfo2();
          
//     }
// }

// emp.showInfo()




// output based questions 

//1> 
// let user = {
//     age:20,
//     showData:()=>{
//         console.log(this);//user/ window
//         function showData2(){
//             console.log(this);//user/window
//         }
//         showData2();
//     }
// }

// user.showData();


// let emp = {
//     name:"test1",
//     showData:function(){
//         console.log(this);//emp
//         function show2(){
//             console.log(this);//window
//         }
//         show2()
//     }
// }

// emp.showData();








