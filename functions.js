//hosting of function will not be covered here
function printValue() {
    console.log("i normal and old stylish function");
}

//arrow functn
const callme=() =>{
    console.log("i am stylish and narrow functn");
};
function calculateTax(salary,corporateTax,freelancing,businessTax) {
    let totalsalary=0;
    console.log(salary,corporateTax,freelancing,businessTax);
    const corporateTaxValue=(salary*corporateTax)/100;
    const businessTaxValue=(freelancing*businessTax)/100;
    const totaltax=businessTaxValue+corporateTaxValue;
    totalsalary=salary+freelancing-totaltax;
    return totalsalary;
}
const salary=calculateTax(2000,30,49000,20);
console.log(salary);





var name="joe";
const university="manchester";
function printinfo(info) {
    //variable shadowing
    let name="i m done"
    console.log(name,info,university);
    //functional scope
}

//global object means window
//all the const and var variables will be inside script tag
//{
    //block level scope

//}
for(let i=0;i<200;i++) {
   // block level
}
if(true) {
    //block level
}
//var functional scope
//let const block level
printinfo("i m in deep dive");
//global object means window
//all const and let variables will be inside the script tag

//default parameter
const defaultCheck=(message="hey user i will learn")=>{
    console.log(message);//hey user i will learn

};
defaultCheck(null);
defaultCheck(undefined);
defaultCheck();
defaultCheck("hey i m cool");

//return
//pass function as parameter

const checkValidation=(check) =>{
    if(check){
        return true;
         //return ;        u can return without value.
    }
    else {
        return "validation error"
    }
};
console.log(checkValidation(false));//validation error
//one return can return boolean also and string also

const interwiewques=() => {
    console.log("hey");
};
console.log(interwiewques()); //undefined o/p

//always if you not pass anything return statement in the functions it will return the undefined
//if you return empty return type that also return the undefined
//const jsreturn =() => {
  //  return
  //"nikhat"
//}
const jsreturn=() =>{
    return(
        "hey"+2234+"34455"+"jjjjiuiyh"
    )
}

//pass function as parameter
const add=(a,b) =>{
    return a+b;
};


const add=(a,b)=>{
    return a+b;
};
const addthreeNumber=(callbackfunc,a,b,c)=>{
    return callbackfunc(a,b)+c;
};
let chekdata=addthreeNumber(add,12.34.45);
console.log(chekdata);

const sum=add;
const data=sum(6,7);
console.log(data);

//you can also return function from function
//higher order function=functn which returns the functns is called hoc

const hoc=()=>{
    return(a,b)=>{
        return a*b;
    };
};
//anonymous fnctn thefunctn which have not name
const callfunctn=hoc();
const mul=callfunctn(45,30);
console.log(mul);

//iif immediately invoke functn
(function callmeIme() {
    console.log("it can be called while declaring");
})();

//functn statement and expression
function declaration () {}

//functn expression
const expression=() =>{
    
}
