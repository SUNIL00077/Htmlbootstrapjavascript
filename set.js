const setofnumber = new Set();
setofnumber.add(30);
setofnumber.add(40);
setofnumber.add(50);
setofnumber.add(10);
setofnumber.add(50);
console.log(setofnumber);

console.log("+++++++++++++++++++ size of set++++++++++++++++")
console.log(setofnumber.size);
//set of number clear
console.log("++++++++++++++++check element exit or not++++++++++++++")
setofnumber.delete(40);
console.log(setofnumber);
let isavailable =  setofnumber.has(500)? "yes" : "no";
console.log(`is 500 available in set ? ${isavailable}`);

let available=setofnumber.has(30)?"yes":"no";
console.log(`${available}`);
