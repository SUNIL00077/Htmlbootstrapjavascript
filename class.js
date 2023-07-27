class person {
    //data members or properties or status or atributes
    adharno;
    fullname;
    height;

    //constructor

    constructor(adharno,fullname,height){
        this.adharno = adharno;
        this.fullname = fullname;
        this.height = height;
    }
    //methhods or actions or behaviours
    logdetails(){
        console.log(`deetails are: ${this.adharno} ${this.fullname} ${this.height}`);
    }
}
let persondatta = new person("1234567","datta hajare",5.6);

persondatta.logdetails();

let milanperson = new person("7654321","milan lathiiya",6);
milanperson.logdetails();

let amrutaperson = new person("12345","amruta",5.6);
amrutaperson.logdetails();


console.log("************ innstance of operator *****************")
let istypeofperson =  amrutaperson instanceof  person;
console.log(`checking type using instance of operator : ${istypeofperson}`);

const arrayofperson = [persondatta,milanperson,amrutaperson];
for (let index = 0; index < arrayofperson.length; index++) {
    const element = arrayofperson[index];
    console.log(element.fullname); 
}



