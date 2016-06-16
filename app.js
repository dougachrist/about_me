'use strict';

// using a function to start the process when the button is clicked
function startGame() {

// Greeting the user
  var userName = prompt('Greetings!!! What is your name?');
  alert('Welcome ' + userName + ', glad you\'re here! \nI have a short quiz about me for you to complete.');
  var correctTally = 0;






  var hugeMultiArray = [questionsArray, answersArray, responsesArray];


  var questionsArray = [
    'Do I have a dog?',
    'Have I been to New York City?',
    'Do I love jello?',
    'Have I ever parachuted before?',
    'Do I enjoy pancakes?'];

  var answersArray = ['yes','yes','no','no','yes'];

  var responsesTrueArray = [
    'Right! Her name is Lucy.',
    'Correct! I visted New York City once!',
    'Correct! Jello is NOT real food, and I DO NOT like it.',
    'Right! I play it safe everyday.',
    'Of Course! Doesn\'t everyone love pancakes!'];

  var responsesFalseArray = [
    'WRONG - I actually do have a dog.',
    'Wrong! - I actually HAVE been to New York City.',
    'Wrong!!! No way, I can\'t stand jello.',
    'Wrong! I would never jump out of an airplane.',
    'You are wrong! Pancakes are the best.'];

  var responsesArray = [responsesTrueArray, responsesFalseArray];
  var hugeMultiArray = [questionsArray, answersArray, responsesArray];

  console.log(responsesArray[0]);

  for( var i = 0; i < questionsArray.length; i++){
    var answerA = prompt(questionsArray[i]);
    if(answerA === answersArray[i]){
      alert(responsesArray[0][i]);
    }
    else {
      alert(responsesArray[1][i]);
    }
  }


// //Questestions 1 - 5
  // var answer1 = prompt('Do I have a dog?').toLowerCase();
  // if(answer1 === 'yes' || answer1 === 'y') {
  //   alert('Right! Her name is Lucy.');
  //   correctTally = correctTally + 1;
  // }
  // else{
  //   alert('WRONG - I actually do have a dog.');
  // }
  //
  // var answer2 = prompt('Have I been to New York City?').toLowerCase();
  // if(answer2 === 'yes' || answer2 === 'y') {
  //   alert('Correct! I visted New York City once!');
  //   correctTally = correctTally + 1;
  // }
  // else{
  //   alert('Wrong! - I actually HAVE been to New York City.');
  // }
  //
  // var answer3 = prompt('Do I love jello?').toLowerCase();
  // if(answer3 === 'yes' || answer3 === 'y') {
  //   alert('Wrong!!! No way, I can\'t stand jello.');
  // }
  // else{
  //   alert('Correct! Jello is NOT real food, and I DO NOT like it.');
  //   correctTally = correctTally + 1;
  // }
  //
  // var answer4 = prompt('Have I ever parachuted before?').toLowerCase();
  // if(answer4 === 'yes' || answer4 === 'y'){
  //   alert('Wrong! I would never jump out of an airplane.');
  // }
  // else{
  //   alert('Right! I play it safe everyday.');
  //   correctTally = correctTally + 1;
  // }
  //
  // var answer5 = prompt('Do I enjoy pancakes?').toLowerCase();
  // if(answer5 === 'yes' || answer5 === 'y') {
  //   alert('Of Course! Doesn\'t everyone love pancakes!');
  //   correctTally = correctTally + 1;
  // }
  // else{
  //   alert('You are wrong! Pancakes are the best.');
  // }

// Question 6 guessing number game
  // var correctNumber = 2;
  // var i = 1;
  // var guess1 = 5;
  // var tryLeft = 4;
  // var guess1 = (prompt('You have 4 attempts to guess an number between 1 and 10 \n \n GO FOR IT!'));
  // var guess1Int = parseInt(guess1);
  // console.log(guess1);
  // while(i < 4){
  //   if(guess1Int < 1 || guess1Int > 10){
  //     alert('Outside of the range: \n \nPlease enter a number between 1 and 10.');
  //     guess1 = (prompt('Please enter a number between 1 and 10'));
  //     guess1Int = parseInt(guess1);
  //   }
  //   else if( Number.isInteger(parseFloat(guess1)) !== true ){
  //     alert('Please enter an interger.');
  //     guess1 = (prompt('Please enter a number between 1 and 10'));
  //     guess1Int = parseInt(guess1);
  //   }
  //   else if( guess1Int < correctNumber){
  //     alert('Sorry, that number is too LOW.');
  //     tryLeft = 4 - i;
  //     guess1 = (prompt('Please another number between 1 and 10. \n \n You have ' + tryLeft + ' tries left.'));
  //     guess1Int = parseInt(guess1);
  //     i = i + 1;
  //   }
  //   else if( guess1Int > correctNumber){
  //     alert('Sorry, that number is too HIGH.');
  //     tryLeft = 4 - i;
  //     guess1 = prompt('Please another number between 1 and 10. \n \n You have ' + tryLeft + ' tries left.' );
  //     guess1Int = parseInt(guess1);
  //     i = i + 1;
  //   }
  //   else if (guess1Int === correctNumber){
  //     alert('That is so awesomwe! You got it RIGHT!');
  //     correctTally = correctTally + 1;
  //     i = 5;
  //   }
  // }

  // Question 7 guess Beers

  // var myBeers = ['Firestone','Fat Tire','Blue Moon'];
  // var response = prompt('You have 6 attempts to guess my 3 favorite beers \n \n GO FOR IT!');
  // var counter = 1;
  // var favBeer = 0;
  // var trysLeft = 5;
  // for( var counter = 1 ; counter <= 6; counter++){
  //   for( var i = 0; i < myBeers.length; i++ ){
  //     if(response === myBeers[i]){
  //       var favBeerNumb = i;
  //       var rightBeer = 1;
  //     }
  //     else{
  //       favBeer = 0;
  //     }
  //   }
  //   if(rightBeer === 1){
  //     alert('Correct: ' + myBeers[favBeerNumb] + ' is one of my favorite beers. \n \n My Favorite beers are: ' + myBeers);
  //     counter = 7;
  //     correctTally = correctTally + 1;
  //   }
  //   else if(favBeer === 0 && counter < 6){
  //     response = prompt('Sorry that was NOT one of my favorite Beers.\n\n you have: ' + trysLeft + ' tries left');
  //   }
  //   else if(favBeer === 0 && counter >= 6){
  //     alert('Sorry, that was NOT one of my favorite Beers.\n\n My favorite Beers are ACTUALLY\n\n' + myBeers );
  //   }
  //   trysLeft = trysLeft - 1;
  // }

// CorrectTally counter

//   var correctTallyPer = ( (correctTally / 7) * 100);
//   var correctTallyPerInt = parseInt(correctTallyPer);
//   alert('Congrats! you got ' + correctTally + ' out of 7 questions. \n \n That is an amazing ' + correctTallyPerInt + '%' );
}
