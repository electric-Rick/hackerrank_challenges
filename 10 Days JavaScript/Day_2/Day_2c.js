'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
   var arr_consoants = [];   
   var arr_vowels = [];

   for(var k = 0; k < s.length; k++){
         if(s[k] == 'a' || s[k] == 'i' || s[k] == 'o' || s[k] == 'e'){
            arr_vowels.push(s[k])
         } else {
            arr_consoants.push(s[k])
         }
       }
        
   for(var l = 0; l < arr_vowels.length; l++){
      console.log(arr_vowels[l])
    }
    for(var m = 0; m < arr_consoants.length; m++){
        console.log(arr_consoants[m])     
    }
   
   
}

