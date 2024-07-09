// dynamic scope-- call apply bind---

var name="xyz"
function showInfo(){
    console.log(this.name);//window
}

// let user1 = {
//     name:"sameer1",
//     age:40,
// }

// let user2 = {
//     name:"sameer2",
//     age:60,
// }

// let user3 = {
//     name:"sameer3",
//     age:30,
// }

showInfo();
// window.showInfo();
// this.showInfo();

// assignement----

// 1> go through topic --scope,global, function, block
// 2> hositing --let var const- ---tdz 
// 3>object cretation in javascript 
// 4>this in js 
// 5> how js works---what context--gec  fec 

