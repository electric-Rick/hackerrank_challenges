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
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    var object_rect =  {'length': a, 'width':b, 'perimeter': 2*(a+b), 'area': a*b};
    
    return object_rect;
}


