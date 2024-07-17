//
// let arr = [10,20,"sameer",true];
// console.log(arr);

// let marks = [50,70,80]



// let arr = [];

// let arr2 = new Array("orange","pnk")

// console.log(arr2)

// access array 
// let names = ["sameer1","sameee2","sameer3","sameer4"]

// console.log(names[0],names[3])

// //
// for(let i = 0;i<names.length;i++){
//     console.log(names[i])
// }

// methods of array;

// 1 length 
// let colors = ["ornage","pink","red"]
// console.log(colors.length)

// 2. indexOf  
// let colors = ["ornage","pink","red"]

// let foundIndex = colors.indexOf("cyan")
// console.log(foundIndex)

// 3. push-- push is ised to insert an element in array from end

// let colors = ["orange","pink","red"]
// colors.push("cyan")
// console.log(colors)

//4. pop--pop method is used to remove an eelemnt from array

// let popedElement = colors.pop();
// console.log(popedElement)

// //5th shift
// let ele = colors.shift();

// console.log(ele)


// unshift

// colors.unshift("grey")

// console.log(colors)


//6th --- concat--

// let arr1 = [2,3,4,5]
// let arr3 = [6,7,8,9]
// let result = arr1.concat(arr3)

// // let result = [arr1  + arr3]

// console.log(result)
// home asignment: perform concatenation without predefined method
//

// map,filter,reduce,find,findIndex,


// map--map method in js is used to create a new array by applying a function to each element.
// let numbers = [2,3,4,5,6]

// let result = numbers.map((item)=>{
//     return item*2;
// })

// console.log(result)

// let employeeSal = [2000,3000,4000,5000]

// let revisedSal = employeeSal.map((item)=>{
//     return item*3;
// })

// console.log(revisedSal)

// filter ---filter is used to create a new array with all elements that satifeid a condition 

// let numbers = [1,2,3,4,5,6,7,8,9]
// let evenNumbers = numbers.map((item)=>{
//     return item%2===0
// })

// let oddNumbers = numbers.map((item)=>{
//     return item%2!=0
// })

// console.log(evenNumbers)
// console.log(oddNumbers)



// map--

// let arr10 = [10,20,30,40,50]

// let newArr10 = arr10.map((item)=>{
//     return item*3;
// })

// console.log(newArr10)

// let numbers = [1,2,3,4,5];//15

// reduce-- is used to reduce an arry to single value;

// let sum = numbers.reduce((prev,curr)=>{
//     return prev+curr;
// })

// console.log(sum)


// let data = [1,5,6,2,9,10]

// let elements = data.filter((item)=>{
//     return item>5
// })

// console.log(elements)

// let employees = [
//     {
//         id:1,
//         name:"test1",
//         age:20
//     },
//     {
//         id:2,
//         name:"test2",
//         age:30
//     }
//     ,{
//         id:3,
//         name:"test3",
//         age:40
//     }
// ]

// let filteredEmployees = employees.filter((item)=>{
//     return item.age>30
// })

// console.log(filteredEmployees)
// // find those employees which age is equal to 50

// let filteredEmployees2 = employees.filter((item)=>{
//     return item.age===50
// })

// console.log(filteredEmployees2)


// let prodcuts = [
//     {id:1,name:"Oneplus",price:15000,catgroy:"mobile"},
//     {id:2,name:"dell 123",price:30000,category:"laptop"},
//     {id:3,name:"HP 123",price:30000,category:"laptop"},
//     {id:4,name:"Asus 123",price:20000,category:"laptop"}
// ]

// //1> filter all prodcuts which has category equal to lpatop---filter
// // filter all prodcuts which has price greater than 20000----filter
// // find the sum of all prducts from array ---reduce



// findIndex  find--

// let employees = [{id:1,name:"test1",age:50},{id:2,name:"test2",age:50}]


// let index = employees.findIndex((item)=>{
//     return item.age==60
// })

// console.log(index)

// let foundElement = employees.find((item)=>{
//     return item.age===50
// })

// console.log(foundElement)

// let arr = [2,4,5,3,4,6,5,3]
// remove all duplicates element from array--
// count occurence of each element of array 
// {
//     2:2,
//     4:1,
//     5:2
// }



// slice-----

// splice-----
// join, at ,split, foreach ,

