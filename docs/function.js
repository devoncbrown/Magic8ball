//Random number function 
function generate_random(max_number){
   return Math.round(Math.random()*max_number);
}

//elements on the page to interact with 
let button = document.querySelector("button");
let answer = document.querySelector("#answer");

//Event click button
button.addEventListener("click", function(){
   let randomNumber = generate_random(3);


   let answerText = '';

   if (randomNumber == 0){
      answerText= 'Absolutely!';
   } else if (randomNumber == 1){
      answerText= 'Never';
   } else if (randomNumber == 2){
      answerText= 'Ask later';
   } else {
      answerText= 'I do not care';
   }

   answer.innerHTML = answerText;
});
