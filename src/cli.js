import readlineSync from 'readline-sync';

export default () => {
  const noValidMessage = 'Please, say me your correct name, bro.';
  let nameUser = readlineSync.question('May I have your name? ');
  if (nameUser.length < 2) {
    console.log(noValidMessage);
    nameUser = readlineSync.question();
  } if (nameUser[0] === nameUser[0].toLowerCase()) {
    nameUser = nameUser[0].toUpperCase() + nameUser.slice(1);
  }

  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};
