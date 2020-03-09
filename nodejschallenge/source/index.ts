console.log("Here we go!");
//import * as decrypt from "./decryption";
import * as fs from "fs";

export class {
    
    /*const key = doAsync(fs).readFile('C:/Users/Ngouongo/Documents/Visual Studio Code/nodejs-challenge/secret.key')
        .then((data) => data);*/
    const key = fs.readFileSync('C:/Users/Ngouongo/Documents/Visual Studio Code/nodejs-challenge/secret.key', 'utf-8');
    console.log(key);
    const secret = fs.readFileSync('C:/Users/Ngouongo/Documents/Visual Studio Code/nodejs-challenge/secret.enc', 'utf-8');

    let generateSecret: string = decrypt.decrypt4(secret, key);
    //console.log(generateSecret);

    public function sumAll(){

    let reg:RegExp = /\d+/g;
    let result = generateSecret.match(reg);
    let numbers = result?.map(Number);
    let sum = numbers?.reduce(function (a, b) {
                return a + b;
            }, 0);

        console.log(sum);
    }

}


