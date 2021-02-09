import readlineSync from 'readline-sync';
import { randomNumber } from '../src/random.js';
import { correct, tryAgain, congratulations } from '../src/cli.js';
import biggerDivisor from '../src/biggerDivisor.js';

const question = () => console.log('Find the greatest common divisor of given numbers.');
export default (nameUser) => {
  let correctAnswer = 0;
  question();
  while (correctAnswer < 3) {
    const firstNumber = randomNumber(100);
    const secondNumber = randomNumber(100);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const result = biggerDivisor(firstNumber, secondNumber);
    const answerUser = Number(readlineSync.question('Your answer: '));
    if (result === answerUser) {
      correctAnswer += 1;
      correct();
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'`);
      return tryAgain(nameUser);
    }
  }
  return congratulations(nameUser);
};
