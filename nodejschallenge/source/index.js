"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Here we go!");
//import * as decrypt from "./decryption";
const fs = require("fs");
//import * as doAsync from 'doasync';
/*const key = doAsync(fs).readFile('C:/Users/Ngouongo/Documents/Visual Studio Code/nodejs-challenge/secret.key')
    .then((data) => data);*/
const key = fs.readFileSync('C:/Users/Ngouongo/Documents/Visual Studio Code/nodejs-challenge/secret.key', 'utf-8');
console.log(key);
//const secret = fs.readFileSync('C:/Users/Ngouongo/Documents/Visual Studio Code/nodejs-challenge/secret.enc', 'utf-8');
//let generateSecret: string = decrypt.decrypt4(secret, key);
//console.log(generateSecret);
/*var value = 2568,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);*/
let phrase = "First in 25sds 6sd sdfs8sd fdsv";
let reg = /\d+/g;
let result = phrase.match(reg);
let numbers = (_a = result) === null || _a === void 0 ? void 0 : _a.map(Number);
let sum = (_b = numbers) === null || _b === void 0 ? void 0 : _b.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum);
//# sourceMappingURL=index.js.map