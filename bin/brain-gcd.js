#!/usr/bin/env node

import sayMeYourName, { welcome } from '../src/cli.js';
import gameGreatestCommonDivisor from '../games/gameGreatestCommonDivisor.js';

welcome();
const nameUser = sayMeYourName();
gameGreatestCommonDivisor(nameUser);
