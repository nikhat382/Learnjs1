//what  is temporal dead zone
//tdz-memory is allocated to the variable 
//but initialisation does not happen
//is let const hoisted?if yes proove it

console.log("hey=>",a);
console.log(call); //i m not invoking the functions
console.log(call12);
console.log(call1);
console.log(b);
console.log(c);

//declaring the variable
var a;
let b;
const c=40;
function call() {
    var a=40;
    console.log(a);
}
var call1=() => {
    console.log("i m arrow functn");
};
let call12=() => {
    console.log("i m arrow with let variable")
};
console.log(a);
var a=20;
console.log(a);
//let variable
console.log(b);
let b=40;
console.log(b);
//const

console.log(c);
const c="hey i m constant";
console.log("out of tdz" ,a);

//redeclared var
var abc=30;
var abc=40;
console.log(abc);

let abc1=30;
let abc1=70;//cannot redeclared block scoped variable

const abc2=30;
const abc2=60;//error cannot redeclared block scope variable

//reassign
var abc4=40;
abc4=60;

let abc5=90;
abc5=70;


const abc6=90;
abc6=80;//tyopeerror cannot reassign const


var container1;
var container2;
const container3;//error const must be initialised

//var functional scope ,let and const block scoped
