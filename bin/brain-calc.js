#!/usr/bin/env node

import sayMeYourName from '../src/cli.js';
import gameCalc from '../games/gameCalc.js';
import { welcome } from '../src/cli.js';

welcome();
const nameUser = sayMeYourName();
gameCalc(nameUser);
