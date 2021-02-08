#!/usr/bin/env node

import sayMeYourName from '../src/cli.js';
import gameCheckParityNumber from '../src/gameCheckParityNumber.js';

console.log('Welcome to the Brain Games!');
const nameUser = sayMeYourName();
gameCheckParityNumber(nameUser);
