import readlineSync from 'readline-sync';
import { randomNumber } from '../src/random.js';
import { correct, congratulations, tryAgain } from '../src/cli.js';

export default (nameUser) => {
  let correctAnswer = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (correctAnswer < 3) {
    const questionNumber = randomNumber(100);
    console.log(`Question: ${questionNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (questionNumber % 2 === 0 && answerUser === 'yes') {
      correctAnswer += 1;
      correct();
    } else if (questionNumber % 2 !== 0 && answerUser === 'no') {
      correctAnswer += 1;
      correct();
    } else if (questionNumber % 2 === 0 && answerUser === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      tryAgain(nameUser);
      return;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      tryAgain(nameUser);
      return;
    }
  }
  congratulations(nameUser);
};
