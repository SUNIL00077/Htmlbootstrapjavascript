function sportPerson(){
    console.log(("function with no argument and no return value :"),"virat kholi");

}
sportPerson();

function studentName(firstName,lastName){
    console.log(("function with argument and no return value: "),"My name is - ",firstName,lastName);

}
studentName("Ritesh","zope");

function getWordCount(str){
    return str.split(' ').length;
    
}
console.log("I am learning javascript" );
console.log("Total number :" +getWordCount("I am learning javascript"));


function getWordCount(str){
    return str.split(' ').length;
    
}
console.log("Soon I am going to be IT champ");
console.log("Total number:"+getWordCount("Soon I am going to be IT champ"));

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

function swapWithoutUsingThirdVariable(n1,n2){
    
   n1=n1+n2;
   n2=n1-n2;
   n1=n1-n2;


    var n3 = n1.toString();
    var n4 = n2.toString();

    return (n3+n4);
    
}
console.log("before swapping 555,444");
console.log("after swapping : " +swapWithoutUsingThirdVariable(555,444));