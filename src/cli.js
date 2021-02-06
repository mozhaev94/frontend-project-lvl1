import readlineSync from 'readline-sync';

export default () => {
  const noValidMessage = 'Please, say me your correct name, bro.';
  let userName = readlineSync.question('May I have your name? ');
  if (userName.length < 2) {
    console.log(noValidMessage);
    return;
  } if (userName[0] === userName[0].toLowerCase()) {
    userName = userName[0].toUpperCase() + userName.slice(1);
  }

  console.log(`Hello, ${userName}!`);
};
