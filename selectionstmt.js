console.log("============== Marriage Checker System=============");
  // Assignment
  function marriageChecker(gender, age) {
    if(age<18 || age >= 100 || gender == "Other"){
        console.log(`Sorry you are not eligible for marriage as either your age ${age} or gender is invalid ${gender}`);
    }
    else {
        if(gender=="Female" && age >=18){
            console.log(`Hey congratulations your are eligible for marriage: ${gender}  ${age}`);
        } else if (gender=="Male" && age >=21){
            console.log(`Hey congratulations Man your are eligible for marriage: ${gender}  ${age}`); 
        } else{
            console.log(`Sorry you are not eligible for marriage as either your age  ${age} or gender is invalid ${gender}`);
        }
    }}
