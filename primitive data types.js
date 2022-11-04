//all datatypes
//null
//undefined
//numbers
//Boolean
//BigInt
//symbol
var data=null;
var data1;
var data3=undefined;
console.log(typeof data);//object this is called pitfalls and big error in js
console.log(typeof data1);//undefined
console.log(typeof data3);
var example1="";
console.log(typeof example1);
example1='';
console.log(typeof example1);
example1="2344";
console.log(typeof example1);
example1=(123.45).toString();
console.log(typeof example1);
example1="hey"+example1;
console.log(example1);
//methods in Strings
var example2="Nikhat Naaz";
var isValuExist=example2.includes("Naaz",0);//first arguments for string second for position
//trim removes extra space from both sides
 var example3="Nikhat Naaz";
 console.log("hello"+example3+"hello2");
 console.log("hello"+example3.trim()+"hii");
 //trim end =>it will remove extra space from the end
 //trim first=>remove extra space from first
 //charAt give position at specified string
 console.log(example3.charAt(0));
 //length gives length of string
 //replace
 var example4="Engineering";
 console.log(example4.replace("E","e"));
 //split
 var splitExample="Hello";
 let array=splitExample.split("");
 console.log(array);
 //slice and splice

 //***** Numbers 
var numberexample=124345;
var n1=123.45;
var n2=145.455566;
console.log(numberexample);
console.log(n1);
console.log(n2);
//BigInt
var bignumber=1n;
console.log(typeof bignumber);
//boolean
var booleanexample=true;
console.log(typeof booleanexample);
booleanexample="true";
console.log(typeof booleanexample);
//nullish operator-this will give opposite value
//in javascript 0 is considered as false other no as true
//empty string is false
if(0) {
    console.log("i m false");//no output
}
if(1) {
    console.log("i m true");//output
}
if("") {
    console.log("i m false string");
}
if(" ") {
    console.log("i m true string");
}
    console.log(!false);
    console.log(!0);
    console.log(!1);
    console.log(!true);
    1 ? console.log("hey11") :console.log("hey765");
    //const variable
    const name2="nikhat";
    //name2="nikhat" //cannot reassign const variable



