// This is where your project starts.
const data = require('../src/data');
const util = require('../src/util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');



const prototypeQuestions = data.prototypeData;
const Game = require("./src/Game");

console.log('Your project is running...');

Game.start()
