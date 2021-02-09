#!/usr/bin/env node

import sayMeYourName, { welcome } from '../src/cli.js';
import gameProgression from '../games/gameProgression.js';

welcome();
const userName = sayMeYourName();
gameProgression(userName);
