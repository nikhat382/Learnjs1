//in javascript all the operators behavior is same as java operators
//arithmatic operators

//plus
const a=20;
const b =30;
const c=a+b;
console.log(c);
//minus
//logical operator
const data1="123";
const data2="1234";
const data3=12134;
const data4={};
const data5=[];
const data6=0;
const data7="";
const data8=" ";
if(data1 && data2) {
    console.log("i m true");
}
else{
    console.log("i m false");
}
if(data2 && data3) {
    console.log("i m true");
}
else{
    console.log("i m false");
}
if(data4 && data5) {
    console.log("i m true");
}
else{
    console.log("i m false");
}
if(data7 && data8) {
    console.log("i m true");
}
else{
    console.log("i m false");

}

//control structure,for loop
//for(let i=0;i<200;i++){
//    console.log(i);
//};
//let k=0;
//while (k<100) {
  //  console.log(k);
  //  k++;
//}


//basic functions
//normal function

function printValue() {
    console.log("i m old and normal function");
}

//arrow fnc
const callme=() =>{
    console,log ("i m very stylish and arrow func");
};
var calculateTax=(salary,corporateTax,freelancing,businessTax) =>{
    let totalsalary=0;
    const corporateTaxValue=(salary*corporateTax)/100;
    const businessTaxValue=(freelancing*businessTax)/100;
    const totaltax=corporateTaxValue+businessTaxValue;
    totalsalary=salary-totaltax+freelancing;
    return totalsalary;
};
const salary=calculateTax(20000,30,300000,50);
console.log(salary);
//NAN NOT A NO
//if we do any arithmatic operations in different data types other than no then it will give NaN
//isNaN check whether given op is nana or not
console.log(isNaN("ghh"));
//const salary=calculateTax(29999,30,20,"hhjj","trr") o/p isNaN
//const salary=calculateTax(20000,30);no matter how many paramereters u r passing
//normal function
//function calculateTax(salary,corporateTax,freelancing,businessTax) {
//}


//type coersion  explicitly ,implicitly
//dynamically converting one type to another type is called coersion
//explicit typecasting -it is done by developer
//implicit typecasting -done by javascript
//conversion=>to string,to number,to boolean
const data=string(123);
const datab=Boolean(123)//true
const datab=number("123")
//true
const datab=Boolean(123)//true
// !"nikhat"=>false
//"nikhat" && "name=>boolean=>true
