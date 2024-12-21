// print all even numbers from 0 to 100
/*for (let num=0; num<= 100; num++){
    if (num % 2 === 0){
        //even number
        console.log("num=",num);
    }
}*/

// Game-guessing Question
let gameNum = 25;
let userNum = prompt("Guess the game number:");
while (userNum != gameNum){
    userNum  =prompt("you entered wrong number. Guess again:");


}
console.log("congratulations, you entered the right number");