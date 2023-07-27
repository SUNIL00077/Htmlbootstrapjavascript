function Hisuraj(){
    console.log("Hello good evening");
    console.log("I am fine");
    console.log("Tomorrow My js session from 06:30 to 08:30 in the morning");

}Hisuraj();

function name( firstname,lastname){
    console.log("My name is==>",firstname,lastname);
  
}
name("Sunil","Lengare");


function  skill( study, next){
    console.log("I am learning Javascript ==>",study.length);
    console.log("Soon i am going to be it champ ==>", next.length);
}
skill("I am learning javascript ","Soon i am going to be IT champ");


function swapUsingThirdVariable(n1,n2){
    var temp = "n3";

    temp = n1;
    n1 = n2;
    n2 = temp;

    // var n3 = n1.toString();
    // var n4 = n2.toString();

    return (n1    +    n2);
    

}
// swapUsingThirdVariable(  "virat  ","  anushka");
console.log("before swapping virat,anushka");
console.log("after swapping : " +swapUsingThirdVariable("Virat","Anushka "));
