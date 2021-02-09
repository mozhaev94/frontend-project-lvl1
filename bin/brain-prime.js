#!/usr/bin/env node

import sayMeYourName, { welcome } from '../src/cli.js';
import gamePrime from '../games/gamePrime.js';

welcome();
const nameUser = sayMeYourName();
gamePrime(nameUser);
