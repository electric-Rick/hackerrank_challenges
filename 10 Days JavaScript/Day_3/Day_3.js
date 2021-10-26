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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var max_val;
    
    var arr_s = nums.sort(function(a,b){ if(a>b) return 1; if (a < b) return -1;return 0;});
    var arr_c = [...new Set(arr_s)]
    for(var i = 0; i <= arr_c.length; i++) {
    for(var j = 0; j <= (i-1); j++){
        if(arr_c[i] > arr_c[j+1]){
        max_val = arr_c[i-1]
           }
        } 
    }
   return max_val
}
    

