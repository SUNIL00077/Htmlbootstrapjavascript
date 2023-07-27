const arrayofnumber = [5,6,7,8,6,12,5,20];
console.log(arrayofnumber);

console.log(`length of array is : ${arrayofnumber.length}`);

console.log("+++++++++++++accessing array element+++++++++++++");
let firstelement = arrayofnumber[0];
console.log(`zeroth index element:${firstelement}`);

console.log("================ last element of an array ============");
let lastelement = arrayofnumber[arrayofnumber.length-1];
console.log(`laast element: ${lastelement}`);
console.log(arrayofnumber[arrayofnumber.length-2])       //second last element

console.log("---------------- updating an element ------------")
arrayofnumber[4] = 10;
console.log(`last element :${arrayofnumber[4]}`);
 
console.log("--------------- log all elements -------------------");
for (let index = 0; index < arrayofnumber.length; index++){
    const element = arrayofnumber[index];
    console.log(element);
}

console.log("************* indexof()*******************");
let indexof12 = arrayofnumber.indexOf(12);
console.log(` inndex of element 12 :${indexof12}`);





console.log("++++++++++++++++ select all elements from 4th index to the last index+++++++");
const slicedelement = arrayofnumber.slice(4);
console.log(slicedelement);

console.log("+++++++++++ select only  last three elements ++++++++++++++")
const lastthreeelements = arrayofnumber.slice(arrayofnumber.length -3);
console.log(lastthreeelements);

console.log("++++++++++++ select eleements fromm position 3rd to 6th++++++++++++");
const elementsfrom3rdto6th=arrayofnumber.slice(3, 6);
console.log(elementsfrom3rdto6th);

console.log("+++++++++ remove multiplle elements from array+++++");
const spliceelements=arrayofnumber.splice(4);
console.log(spliceelements);
console.log(arrayofnumber);


arrayofnumber.push(40);
arrayofnumber.push(60);
arrayofnumber.push(70);

console.log("++++++++++++++ original array++++++++++++++");
console.log(arrayofnumber);

console.log("+++++++++++++++++++ replacig eleement at paarticular position++++++++++++++++"); 
//arraayofnumber.splice(start,delete,insert)
arrayofnumber.splice(2,0,700);
console.log(arrayofnumber);

console.log("+++++++++++++++ merge array+++++++++++++++++")
const array1 =[2 ,4 ,5,2,6];
const array2 =[2,5,7,8,9];
const array3 = array1.concat(array2);
console.log(array3);


console.log("+++++++++++++++ concat string using concat()+++++++++++++++++")
const firstName ="mohit";
const lastName="Sharma";
const fullName =firstName.concat(lastName);
console.log(fullName);

const firstName1 ="Sunil";
const lastName2="lengare";
const fullName3 =firstName1+lastName2;
console.log(fullName3);



var sunil=[5,7,9,4,1,5];
console.log(sunil.sort())           //for ascending order

console.log(Math.max(...sunil))       //for find largest value

console.log(Math.min(...sunil))        //for find smallest value in array

sun=sunil.sort()               //for descending order
console.log(sunil.reverse())


var sunil=[23,34,65,12,656,5];
console.log(...sunil)
console.log(Math.max(...sunil))
console.log(Math.min(...sunil));
console.log(sunil.sort());
sun=sunil.sort();
console.log(sun.reverse());
a=[6,43,5345,653,36,534];
 cc= a.push(789);
console.log(cc);



console.log('using spred operater')
let arr=[3,6,4,9,5,99,50,60,70,33,66,1];
let m = Math.max(...arr);
console.log(m);
arr.splice(arr.indexOf(m),1);               //find second largest value
let second = Math.max(...arr);
console.log(second);
arr.splice(arr.indexOf(second),1);            //find third largest value
let third = Math.max(...arr);
console.log(third);


//filter the value
var sunil = {
    
    friends:[{
        name:'chikya',
        agee:23,
    }],
    san:[{name:'ram'}
        ]    
}

     sunil.friends.filter(d=>{
   let a= d.agee
   console.log(a);
        
    })
    
 
 for (const i of sunil.san) {
    console.log(i.name)
    
 }


