'use strict';

// let score = []

let userName = prompt('What is your name?');
alert('welcome ' + userName + ' to my website :)');

// first quesion
let travelFunc = function(){let travelQuestion = prompt('Do you think i love travelling?');
  if(travelQuestion.toLowerCase() === 'yes')
  {
    console.log('That is right!');
    alert('That is right!');
  // score.push(5)
  }
  else if(travelQuestion.toLowerCase() === 'no')
  {
    console.log('I really love travelling!');
    alert('I really love travelling!');
  }
};

travelFunc();


// second quesion
function movieFunc(){let movieQuestion = prompt('Do you think i watch movies?');
  if(movieQuestion.toLowerCase() === 'yes')
  {
    console.log('I hope we can watch one together :)');
    alert('I hope we can watch one together :)');
  // score.push(5)
  }
  else if(movieQuestion.toLowerCase() === 'no')
  {
    console.log('Movies are exciting so i like them!');
    alert('Movies are exciting so i watch them!');
  }
}
movieFunc();


// third quesion
let wakeupFunc = function(){let wakeupQuestion = prompt('Do you think i wakeup early?');
  if(wakeupQuestion.toUpperCase() === 'YES')
  {
    console.log('Wakingup early is useful!');
    alert('Wakingup early is useful!');
  // score.push(5)
  }
  else if(wakeupQuestion.toUpperCase() === 'NO')
  {
    console.log('I am active girl not lazy!');
    alert('I am active girl not lazy!');
  }
};
wakeupFunc();


// fourth quesion
let foodFunc = function(){let food = prompt('Do you think i like vegetables?');
  if(food.toLowerCase() === 'yes')
  {
    console.log('I eat lots of vegetables daily!');
    alert('I eat lots of vegetables daily!');
  // score.push(5)
  }
  else if(food.toLowerCase() === 'no')
  {
    console.log('vegetables are healthy , i like them!');
    alert('vegetables are healthy , i like them!');
  }
};

foodFunc();

// fifth question
let seasonFunc = function(){
  let season = prompt('Do you think i enjoy summer seoson?');
  if(season.toLowerCase() === 'yes')
  {
    console.log('IT is too hot , i prefer spring!');
    alert('I is too hot , i prefer spring!');
  }
  else if(season.toLowerCase() === 'no')
  {
    console.log('I really hate summer!');
    alert('I really hate summer!');
    // score.push(5)
  }
};

seasonFunc();


// let sum = 0;

// for(let d=0 ; d < score.length ; d++){
//   sum = sum + score[d];
//   alert(score);
// }

// let guess = prompt('Guess a number between 0-50 ,You have 4 attempts');

// let myNumb = '24';

// for(let i=0 ;i < 4 ; i++ ){
//   if(guess === myNumb){
//     alert('Correct, you win!!!');
//     break;
//   }

//   if (guess < myNumb) {
//     alert('Your guess is too low!');
//      prompt('Guess a number between 0-50 ,You have 4 attempts');

//   }
//   else if (guess > myNumb) {
//     alert('Your guess is too high!');
//      prompt('Guess a number between 0-50 ,You have 4 attempts');
//   }
// }
// alert('Thanks for playing, hope you enjoyed!');

// sixth question

let guessNumFunc = function(){
  let guess;
  let myNum = 24 ;
  let i;
  let attempt = 1;

  for(i=0;i<4; i++){
    guess = prompt('Guess a number between 0-50 this is attempt number ' + attempt);
    if(Number(guess)=== myNum){
      alert('Correct, you win!!!');
      break;
    }
    else if(Number(guess) < myNum){
      alert('Your guess is too low!');
      attempt = attempt + 1;

    }
    else if (Number(guess)>myNum){
      alert('Your guess is too high!');
      attempt = attempt + 1;
    }

    else {
      alert('Wrong enter a number');
      attempt = attempt + 1;
    }

  }

};
guessNumFunc();


// let guess = prompt('Guess a number between 0-50');
// let myNumb = '24';
// let tryCout;
// tryCout = 3;
// for(let i = 0; i < 4; i++){
//   if(guess === myNumb){
//     alert('Correct, you win!!!');
//     break;
//   }
//   else if (guess < myNumb) {
//     alert('Your guess is too low!');
//     guess = prompt('Guess a number between 0-50 ,You have ' + tryCout + ' attempts');
//   }
//   else {
//     alert('Your guess is too high!');
//     guess = prompt('Guess a number between 0-50 ,You have ' + tryCout + ' attempts');
//   }
//   tryCout--;
// }

alert('Lets paly a new game!');

// seventh question
function choiseFunc(){let numberOfIndex = 0;
  let choise = ['red' , 'pink' , 'yellow'];
  let ans;
  // let attemptChoise = 1;

  for(let i = 0 ; i< 6 ; i++){

    if(choise[numberOfIndex] === ans){
      break;
    }
    ans = prompt('Mention one of my favourite color');

    for(let h = 0 ; h < choise.length ; h++){

      if (ans === choise[h]) {
        alert('Bravoo!!');
        numberOfIndex = h;
        break;
      }
    //  attemptChoise
    }
  }
}
choiseFunc();

// let choise = ['red' , 'pink' , 'yellow'];
// let choiceFunc = function(){
// let i ;
// let attemptArray = 1;
// let guessIndex = 0;
// let ans;
// for(i = 0 ; i< 6 ; i++){

//   ans = prompt('Mention one of my favourite color');

//   while((choise.length-1)>guessIndex)
// }

// alert( 'your scores '+scores+'/7');
