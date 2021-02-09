#!/usr/bin/env node

import sayMeYourName from '../src/cli.js';
import gameCalc from '../games/gameCalc.js';

const nameUser = sayMeYourName();
gameCalc(nameUser);
