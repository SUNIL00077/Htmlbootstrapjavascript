var details = "CODEMIND is a training and product based company";
console.log(details.toLowerCase());



var firstName = "Hanumant";

console.log(firstName.toLowerCase());

console.log(firstName.length); // 48
console.log(details.length);
console.log(details.charAt(1));
console.log(details.charAt(39));
console.log("==== chartAt(48) ===")


var comment = " You are doing good, practice more now please to become good developer ";
var lastChar = comment.length-1;
console.log("length==>",comment.length);

var lowercase=comment.toLowerCase();
console.log("toLowercase()=>",lowercase);
console.log("toUppercase()=>",comment.toUpperCase());

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

