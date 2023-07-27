
var comment = " You are best performer,keep it up ";
var lastChar = comment.length-1;
console.log("length  of character>>>>>>>",comment.length);

var lowercase=comment.toLowerCase();
console.log("toLowercase()>>>>>>>",lowercase);
console.log("toUppercase()>>>>>>>>",comment.toUpperCase());

var trimComment = comment.trim();
console.log("trim()>>>>>>>", trimComment);
console.log("length>>>>>>>>",trimComment.length);

var replaceString = comment.replace("performer","developer");
console.log("replace>>>>>>>",replaceString);

var splitString =trimComment.split("");
console.log("split>>>>>>>>",splitString);
console.info("Total words from the given string is:",splitString.length);

var indexofPractice= comment.indexOf("Practice");
console.info("indexof()>>>>>>>>",indexofPractice);

var studentName="Sunil Lengare";
var startWithResult=studentName.startsWith("Sun");
console.log("startWith()>>>>>>>>",startWithResult);

var resultofStartWith=studentName.startsWith("Leng");
console.log("startWith>>>>>",resultofStartWith)

var sliceResult = comment.slice(20);
console.warn("slice()>>>>>>>>>",sliceResult); 

var applePrice="25";
var mangoPrice="55";

console.log("applePrice",typeof applePrice);
console.log("mangoPrice",typeof mangoPrice);

var applePriceInNumber = parseInt(applePrice);
var mangoPriceInNumber = parseInt(mangoPrice);


console.log("applePrice",typeof applePriceInNumber);
console.log("mangoprice",typeof mangoPriceInNumber);
console.log("total price",applePriceInNumber + mangoPriceInNumber);