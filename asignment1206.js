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


for (let index = 5;index <10; index++ ){
    console.log(index);
}

for (let i = 4;i<=7; i++){
    console.log(i);
}

for (let index = 20;index <=100;index++){
    if(index==40){
        break;
    }
    console.log(index);
}

