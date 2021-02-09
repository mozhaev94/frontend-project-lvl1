import readlineSync from 'readline-sync';
import { randomNumber, randomOperator } from '../src/random.js';
import { correct, tryAgain, congratulations } from '../src/cli.js';

const question = () => console.log('What is the result of the expression?');
export default (nameUser) => {
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const firstOperand = randomNumber(100);
    const secondOperand = randomNumber(100);
    const operator = randomOperator();
    question();
    if (operator === '+') {
      console.log(`${firstOperand} + ${secondOperand}`);
      const answerUser = Number(readlineSync.question('Your answer: '));
      const result = firstOperand + secondOperand;
      if (result === answerUser) {
        correctAnswer += 1;
        correct();
      } else return tryAgain(nameUser);
    } else if (operator === '-') {
      console.log(`${firstOperand} - ${secondOperand}`);
      const answerUser = Number(readlineSync.question('Your answer: '));
      const result = firstOperand - secondOperand;
      if (result === answerUser) {
        correctAnswer += 1;
        correct();
      } else return tryAgain(nameUser);
    } else if (operator === '*') {
      console.log(`${firstOperand} * ${secondOperand}`);
      const answerUser = Number(readlineSync.question('Your answer: '));
      const result = firstOperand * secondOperand;
      if (result === answerUser) {
        correctAnswer += 1;
        correct();
      } else return tryAgain(nameUser);
    }
  }
  congratulations(nameUser);
};
