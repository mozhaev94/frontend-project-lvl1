#!/usr/bin/env node

import sayMeYourName, { welcome } from '../src/cli.js';
import gameCheckParityNumber from '../games/gameCheckParityNumber.js';

welcome();
const nameUser = sayMeYourName();
gameCheckParityNumber(nameUser);
