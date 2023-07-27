var num1 =-33,num2=165,num3=0,num4=55.89;
var result1=num1>0 ?"positive number":"negative number"
var result2=num2>0 ?"positive number":"negative number"
var result3=num3>0 ?"positive number":"negative number"
var result4=num4>0 ?"positive number":"negative number"

console.log("result>>33 is",result1,"0  >>> is",result3,"55.89>>>>is",result4)
console.log("result of 165 is >>>",result2)
console.log("result of 0 is >>>",result3)

var genderMale=true;
var age21plus=true;

var result5=genderMale && age21plus ? "Hey boy yoy are eligible for marriage":"Not eligible for marriage";

console.log("result++++>>>>" ,result5);

var genderFemale=true;
var age18plus=false;

var result6=genderFemale && age18plus ? "Hey girl yoy are eligible for marriage":"Not eligible for marriage";

console.log("result++++>>>>" ,result6);