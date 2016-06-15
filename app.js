'use strict';

// using a function to start the process when the button is clicked
function startGame() {

// Greeting the user
  var userName = prompt('Greetings!!! What is your name?');
  alert('Welcome ' + userName + ', glad you\'re here! \nI have a short quiz about me for you to complete.');

//Questestions 1 - 5
  var answer1 = prompt('Do I have a dog?').toLowerCase();
  if(answer1 === 'yes' || answer1 === 'y') {
    alert('Right! Her name is Lucy.');
  }
  else{
    alert('WRONG - I actually do have a dog.');
  }

  var answer2 = prompt('Have I been to New York City?').toLowerCase();
  if(answer2 === 'yes' || answer2 === 'y') {
    alert('Correct! I visted New York City once!');
  }
  else{
    alert('Wrong! - I actually HAVE been to New York City.');
  }

  var answer3 = prompt('Do I love jello?').toLowerCase();
  if(answer3 === 'yes' || answer3 === 'y') {
    alert('Wrong!!! No way, I can\'t stand jello.');
  }
  else{
    alert('Correct! Jello is NOT real food, and I DO NOT like it.');
  }

  var answer4 = prompt('Have I ever parachuted before?').toLowerCase();
  if(answer4 === 'yes' || answer4 === 'y'){
    alert('Wrong! I would never jump out of an airplane.');
  }
  else{
    alert('Right! I play it safe everyday.');
  }

  var answer5 = prompt('Do I enjoy pancakes?').toLowerCase();
  if(answer5 === 'yes' || answer5 === 'y') {
    alert('Of Course! Doesn\'t everyone love pancakes!');
  }
  else{
    alert('You are wrong! Pancakes are the best.');
  }
}
