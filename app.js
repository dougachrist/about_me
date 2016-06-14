'use strict';

var userName = prompt('Greetings!!! What is your name?');
alert('Welcome ' + userName + ' glad you\'re here!');

var answer1 = prompt('does sam have 3 cats?').toLowerCase();

if (answer1 === 'yes') {
  alert('Right! he has 3 cats named Bob, Ryan, and Matt');
}
else{
  alert('WRONG - he actually has 3 cats');
}
