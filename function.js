function sayHello(){
    console.log("hello good morning");
    console.log("I am fine");
    console.log("I do have my js session from 7 to 8:30 in the morninng")

}sayHello();

//display()
function display(firstname, lastname){
    console.log("my name is --",firstname, lastname);
}
display("sunil","lengare");

//function with argument
function showAddress(state){
    console.log("My State is",state)
}
showAddress("Maharashtra")

function prepareorder(dishname){
console.log("prepare your order please wait");
    return "here is your dish:"+dishname;
}
var prepareorder=prepareorder("PBM");
console.log(prepareorder);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

function concatArguments(firstname,lastname){
    console.log(`first name:${firstname},last name:${lastname}`)

var resultConcat=firstname+lastname;
console.log(`concatenation of two argument is ===>: ${resultConcat}`);
}
concatArguments("Sunill");


//swapping using third variable
console.log("function expression");

var showtrainingname = function(trainingname){
    console.log(`i am currently inn training:${trainingname}`);

}
showtrainingname("Angular")

//funnction as avalue ---->function  expression//
//this f.e should sunm two argument and then return the result to log on console
var sumtwonumber=function(number1,number2){
    var result=number1+number2;;
    return result;
}
var sumresult=sumtwonumber(19,20);
console.log(`sum result is ===>${sumresult}`)

console.log("+++++++++++++++recursion function++++++++");

//recursion function
//Ex.5-->5+4+3+2+1
function sumnumber(count){
if(count==0 )
    return 0
    var addresult=count+sumnumber(count=count-1);
    return  addresult;
}
var sumresult=sumnumber(5);
console.log("sumresult==>",sumresult);