#!/usr/bin/env node

import sayMeYourName, { welcome } from '../src/cli.js';
import gameCalc from '../games/gameCalc.js';

welcome();
const nameUser = sayMeYourName();
gameCalc(nameUser);
