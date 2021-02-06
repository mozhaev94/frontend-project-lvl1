import readlineSync from 'readline-sync';

export const sayMeYourName = () => {
    const noValidMessage = 'Please, say me your correct name, bro.';
    let userName = readlineSync.question('May I have your name? ');
    if (userName.length < 2) {
      console.log(noValidMessage);
      return;
    } else if (userName[0] === userName[0].toLowerCase()) {
      userName = userName[0].toUpperCase() + userName.slice(1);
    }
  
    console.log('Hello, ' + userName + '!');
  };
  