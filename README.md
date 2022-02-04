# FlashCards Project

This is a simple terminal based game designed to test and reinforce a basic knowledge of javaScript vocabulary.  
It is text based and uses simple controls to move through a deck of flashcards.
    
The primary learning objective of this program was to introduce the class to TDD (test driven design) practices.  
Each of the component .js files was tested using Mocha and Chai.

## Setup

Clone down the repo (from GitHub). 

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should see a number of passed tests.

Running `node index.js` from the root of the project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

Followed by the first question.  You will be prompted for each question, have the opportunity to select an answer (using numbers or the arrow keys followed by enter), and will be given feedback. You will be able to play through the entire deck of cards:

[flashcardExample](https://user-images.githubusercontent.com/91761276/152470960-f2604239-749d-4284-9222-ebba250a7800.gif)




