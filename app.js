'use strict';

var userName = prompt('Greetings!!! What is your name?');
alert('Welcome ' + userName + ' glad you\'re here!');

var answer1 = prompt('Do I have a dog?').toLowerCase();
if (answer1 === 'yes') {
  alert('Right! Her name is Lucy');
}
else{
  alert('WRONG - I actually do have a dog');
}

var answer2 = promt('Have I been to New York City?')
if(answer2 === 'yes') {
  alert('Correct! I visted New York City once!')
}
else{
  alert('Wrong! - I actually have been to New York City')
}

var answer3 = promt('Do I love jello?')
if(answer3 === 'yes') {
  alert('Wong!!! No way, I can\'t stand jello')
}
else{
  alert('Correct! Jello is not real food, and I do not like it.')
}

var answer4 = prompt('Have I ever parachuted before?')
if(answer4 === 'yes'){
  alert('Wrong! I would never jump out of an airplane')
  }
else{
  alert('Right! I play it safe everyday.')
}

var answer5 = prompt('Do I enjoy pancakes?')
if(answer5 === 'yes') {
  alert('Of Course! Doesn\'t everyone like pancakes!')
}
else{
  alert('You are wrong! Pancakes are the best.')
}
