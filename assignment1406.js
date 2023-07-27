class vehicle {
    //data members or properties or status or atributes
    modelNo;
    Name;
    colour;

    //constructor

    constructor(modelNo,Name,colour){
        this.modelNo = modelNo;
        this.Name = Name;
        this.colour = colour;
    }
    
    logdetails(){
        console.log(` Vehicle details are: ${this.modelNo} ${this.Name} ${this.colour}`);
    }
}
let vehicle1= new vehicle("1234567","Fortuner","Black");
vehicle1.logdetails();

let vehicle2 = new vehicle("7654321","Range Rover","White");
vehicle2.logdetails();