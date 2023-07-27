


for(let index = 0; index<=5; index++){
    console.log(index);
}

for(let index = 0; index <=10; index++){
    console.log(index);
}


for(let i = 5; i <10; i++){
    console.log(i);
}

for(let i = 10; i <1; i--){
    console.log(i);
}

//print numbers from 15 to 30 in this way===> 15 18 21 24 27 30



for(let index = 0; index <=20; index++){
    if(index==10){
        break;}
    
    console.log(index);}

    for(let index = 0; index <100; index++){
        if(index==16){
            break;}
        
        console.log(index);}

        for(let index = 0; index <7; index++){
            if(index==10){
                break;}
            
            console.log(index);}

            console.log("++++++++++++++++++While loop++++++++++++++++")

//prinnt numbers from 1 to 5
let counter = 1;
while(counter<=5){
    console.log(counter);
    counter=counter+1;
}

let count = 1;
while(counter<=10){
    console.log(counter);
    counter=counter+1;
}

//do while loop
console.log("+++++++++++++++++++++do while loop+++++++++++++++")
let index=0;
do{
    console.log(index);
index++;
}while(index<5);

console.log(" ===========  Write a function to find vowels from the given string. Ex → ‘I love JavaScript’ ============= ");
let givenString = "I Love JavaScript";
let temp = ""; // "Ioeaai"
let numberOfVowels = 1;
for (let index = 0; index < givenString.length; index++) {
  let char = givenString.charAt(index); 
  if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U" || 
     char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ) {
         console.log(char);
         numberOfVowels = numberOfVowels + 1;
         temp = temp + char;

     }
}

console.log("Total number of Vowel in given string is : ", numberOfVowels);
console.log(`Vowels found is : ${temp} ${temp.length}`); 