const arrowfunction=(message,message,num,num)=> {
    console.log(message,message,num,num);
    //console.log(arguments);error
}
arrowfunction("hey","i m cool",1000,"hello");

function normalfunction() {
    console.log('arguments',arguments);
}
normalfunction("hey" "i m cool",1000);

//immediately invoked functions
( ()=>{
    console.log('iife normal anonymous function');
}

)();

( call=()=>{
    console.log('iife named function function');
}

)();

(function call (){
    console.log('iife normal named function');
}

)();

( function (){
    console.log('iife normal anonymous function');
}

)();

//assign function in variables

const variablefunction=function() {
    console.log("hey chilling");
}
const chillout=()=> {

    console.log("hey chilling...");
}
chillout();
variablefunction();

//function as parameter

const add=(a,b)=>{
    return a+b;
}
const parentfunction=(callbackfunction) {
    const result=callbackfunction(20,30);
}
//here parent function is called higher order function
const output=parentfunction(add);
console.log(output);

const aboveage=()=>{
    console.log("you are eligible");
}
const belowage=()=>{
    console.log("you are  not eligible");
}
const info=(age,callback1,callback2)=>{
    if(age>=18) {
        callback2();
    }
    else{
        callback1();
    }
}
const age=17;
const output=info(age,belowage,aboveage);
console.log(output);

//function return the function
const parent=(d)=>{
    return(a)=>{
        return(b)=>{
            return(c)=>{
                return a+b+c+d;
            }
        }
    }
}
const result1=parent(20)(30)(50)(80);
console.log(result1);
const child =parent(4);//d=4

//const child==(a)=>{
    return(b)=>{
        return(c)=>{
            return a+b+c+d;
        }
    }
}


//closure,let var const,functn,hoistng,tdz,variables types
const child2=child(5);//a=5
//child2== return(b)=>{
    return(c)=>{
        return a+b+c+d;
    }
//}
const child3=child2(6);//b=6

//child== return(c)=>{
    //return a+b+c+d;
}
const child4=child3(16);//c=16
console.log(child4)

