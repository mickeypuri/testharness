import { getInputUsingPrompt } from "../utils/getInputUsingPrompt";

const WORDS = [
  "apple", "pear", "banana", "orange", "cherry", "peach", "grape"
];

export const hangman = () => {
  const randomIndex = Math.floor(Math.random()*WORDS.length);
  const secretWord = WORDS[randomIndex];
  const maxGuesses = 10;

 // console.log(`Secret Word: ${secretWord}`);

  let currentWord = [...secretWord].map(letter => "_");

  let solved = false;
  let guesses = 0;

  do {
    console.log(`The current word is: ${currentWord.join("")}`)
    let nextChar = getInputUsingPrompt("Enter next character: ")
    guesses++;

    currentWord = [...secretWord].map((letter, index) => {
      if (letter === nextChar) {
        return nextChar;
      }
      return currentWord[index];
    });

    
    if (currentWord.join("") === secretWord) {
      solved = true;
    }

  } while (!solved && guesses < maxGuesses)

  if (solved) {
    console.log(`Yes, you smashed it, the word was: ${currentWord.join("")}`)
  } else {
    console.log(`Sorry you have had ${guesses} guesses, and maximum guesses are: ${maxGuesses}`)
  }

}