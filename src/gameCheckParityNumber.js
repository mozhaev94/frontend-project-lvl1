import readlineSync from 'readline-sync';

const randomNumber = () => (Math.floor(Math.random() * 100));

export default (nameUser) => {
  let correctAnswer = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (correctAnswer < 3) {
    const questionNumber = randomNumber();
    console.log(`Question: ${questionNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (questionNumber % 2 === 0 && answerUser === 'yes') {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (questionNumber % 2 !== 0 && answerUser === 'no') {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (questionNumber % 2 === 0 && answerUser === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${nameUser}!`);
      return;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};
