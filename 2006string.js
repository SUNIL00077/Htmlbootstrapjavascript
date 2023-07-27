var details ="Codemind is training and product based company";


var firstName = "Sunil";

console.log(firstName.length);
console.log(details.length);
console.log(firstName.charAt(3));
console.log(details.charAt(1));
console.log(details.charAt(23));
console.log(firstName.charAt(1));
console.log("==== chartAt(48) ===")


var comment = " You are doing good, practice more now please to become good developer ";
var lastChar = comment.length-1;
console.log("length==>",comment.length);

// var lowercase=comment.toLowerCase();
// console.log("toLowercase()=>",lowercase);
// console.log("toUppercase()=>",lowercase.toUpperCase());
var toLowerCase=comment;

console.log(toLowerCase.toLowerCase());

var trimComment = comment.trim();
console.log("trim()==>", trimComment);
console.log("length==>",trimComment.length);

var replaceString = comment.replace("good","excellent");
console.log("replace==>",replaceString);

var splitString =trimComment.split("");
console.log("split==>",splitString);
console.info("Total words from the given string is:",splitString.length);

var indexofPractice= comment.indexOf("Practice");
console.info("indexof()==>",indexofPractice);

var studentName="Mohit sharma";
var startWithResult=studentName.startsWith("Moh");
console.log("startWith()==>",startWithResult);

var resultofStartWith=studentName.startsWith("Shar");
console.log("startWith==>",resultofStartWith)

var sliceResult = comment.slice(20);
console.warn("slice()==>",sliceResult); 

var applePrice="25";
var mangoPrice="55";

console.log("applePrice",typeof applePrice);
console.log("mangoPrice",typeof mangoPrice);

var applePriceInNumber = parseInt(applePrice);
var mangoPriceInNumber = parseInt(mangoPrice);


console.log("applePrice",typeof applePriceInNumber);
console.log("mangoprice",typeof mangoPriceInNumber);
console.log("total price",applePriceInNumber + mangoPriceInNumber);


var upper=details;
console.log(upper.toLowerCase());
console.log(upper.toUpperCase());

var lower=details.toLowerCase();
console.log(lower);