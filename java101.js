// console.log("hey");
// alert("this worked");

///////// variables//////////
var b = "cat";
console.log(b);

var anum = 78;
console.log(anum)

///////asks for age and shows it//////////

// var age = prompt("what is your age?");


// document.getElementById("sometext").innerHTML = age;

////////// numbers in javascript//////

var num1 = 5;
var num2 = 5.2;
console.log(num1*num2)
console.log(num1 / num2)
num1--;
num2++;
console.log(num1)
console.log(num2)

num1 += 10
console.log(num1)
/*  multi
line
comment
*/

/*/////functions///////
create and then call
*/

//create///
function fun(){
console.log('this is a function');
}
//call////
fun();

/* create a function that takes a name 
and says hello followed by your name
*/
 /// strin concatenation =  ' hello ' + name/////
function greeting (){
  var name =  prompt('what is your name?');
    var result = ' hello ' + name
    console.log(result)
}


///functions can take in arguments//////
function greeting1(name) {
   
    var result = ' hello ' + name
    console.log(result)
}
greeting1('billy')



///while loops////
// var num = 0;

// while(num < 100){
// num++;
// console.log(num);
// }


///for loops///
// for(let i = 0; i < 100; i++){
//     console.log(i)
// }


////data types////

let age = 18;// number
let name = 'nick';//string
let myname = { first: 'nick', last : 'nwanochie'};//object
let truth = false;//boolean
let store = ['walmart' , 'kroger' , 'HEB'] ;//array
let random;//undefined
let nothing = null;//value null

///strings///
let fruit = 'apple\norange\npear';//mulitple lines
console.log(fruit)
let grapes = 'grape';
console.log(grapes.length)///displays numbers of items in string
console.log(grapes.indexOf('gr'))///shows position of a chosen point
console.log(grapes.slice(2,4))//
console.log(grapes.replace('gra', 123))///replace a set of items with another
console.log(grapes.toLocaleUpperCase())//changes to uppercase
console.log(grapes.toLocaleLowerCase())//changes to lowercase
console.log(grapes.charAt(2))
console.log(grapes[2])
console.log(grapes.split(','))///split items by selected point
console.log(grapes.split(''))///split items by selected point

///array///
// let fruits = new Array("grapes", "apples", "peaches")
//or..
let fruits = ["grapes", 
              "apples", 
              "peaches"]
document.write(fruits)
document.write(fruits.length)
fruits[0] = "cheese"
document.write(fruits)
