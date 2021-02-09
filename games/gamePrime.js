import readlineSync from 'readline-sync';
import { correct, tryAgain, congratulations } from '../src/cli.js';
import { randomNumber } from '../src/random.js';
import isPrime from '../src/isPrime.js';

const question = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
export default (nameUser) => {
  let correctAnswer = 0;
  question();
  while (correctAnswer < 3) {
    const questionNumber = randomNumber(100);
    console.log(`Question: ${questionNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (isPrime(questionNumber) === true && answerUser === 'yes') {
      correctAnswer += 1;
      correct();
    } else if (isPrime(questionNumber) === false && answerUser === 'no') {
      correctAnswer += 1;
      correct();
    } else return tryAgain(nameUser);
  }
  return congratulations(nameUser);
};
