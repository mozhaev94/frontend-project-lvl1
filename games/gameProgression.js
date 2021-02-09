import readlineSync from 'readline-sync';
import { correct, tryAgain, congratulations } from '../src/cli.js';
import { randomNumber, randomCollection } from '../src/random.js';

const question = () => console.log('What number is missing in the progression?');
export default (userName) => {
  let correctAnswer = 0;
  question();
  while (correctAnswer < 3) {
    const collection = randomCollection();
    const indexOfItemQuestion = randomNumber(collection.length - 1);
    const questionItem = collection[indexOfItemQuestion];
    collection[indexOfItemQuestion] = '..';
    const questionString = collection.join(' ');
    console.log(`'Question: ' + ${questionString}`);
    const answerUser = Number(readlineSync.question('Your answer: '));
    if (answerUser === questionItem) {
      correctAnswer += 1;
      correct();
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${questionItem}'`);
      return tryAgain(userName);
    }
  }
  congratulations(userName);
};
