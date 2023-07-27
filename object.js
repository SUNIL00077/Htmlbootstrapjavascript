let student = {
    firstname:"sunil",
    lastname:"lengare",
    email:"llengaresunil@gmail.com",
    password:"123",
    fullName:"sunil lengare",
    address: {//nested object}
        street: " dhayati lengarevasti",
        city : "sangolla",
        state: "mh",
        pin : "413317"
    }

}
console.log(student.address.city)
//object literal
//function constructor
//class
console.log(student);
console.log(typeof student);

console.log("++++++++++++++++++++++Accessing object property+++++++++++++++++++");
console.log(`student full name is: ${student.firstname}${student["last name"]}`);

console.log("++++++++++++++++add properrty to object++++++++++++++");
student.marks = "60%";
console.log( "students marks is",student.marks);
student.age=23; 
console.log(`student age is :${student.age}`);

console.log("++++++++++++++++++++ an empty object +++++++++++++++++");
let person = {};
person.name = "sunil";
person.age = 45;

console.log("++++++++++++++++++ delete proerty from an object +++++++++++++++");
delete student.password;
console.log(student);

//student.address = {nested object
//street:"at post dhayati lengarevasti"
//pin: 413317}

console.log("++++++++++++++++++ nested object ++++++++++++++++++");
console.log(student.address);
console.log(student.address.street);

console.log("+++++++++++++++get all keys from object+++++++++++++++");
let studentkeys = Object.keys(student);
console.log(studentkeys);

console.log("+++++++++++++++++++++++++++ function as a value to the object property++++++++++++++++++");

let completename = student.fullName;
console.log(`full name is : ${completename}`);
console.log(typeof student.fullName);
console.log(typeof student.address);