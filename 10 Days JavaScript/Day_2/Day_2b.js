function getLetter(s) {
    let letter;
    // Write your code here
    var arr = [];
    for(var i = 0; i < s.length; i++){
        arr.push(s[i].toUpperCase());
        
}
 
    switch(arr[0]){        
    case !arr[0]:
        return 'No strings allocated.'
    default:
       return arr[0].startsWith('A') || arr[0].startsWith('E') || arr[0].startsWith('I') || arr[0].startsWith('O') || arr[0].startsWith('U')?'A':arr[0].startsWith('B') || arr[0].startsWith('C') || arr[0].startsWith('D') || arr[0].startsWith('F') || arr[0].startsWith('G')?'B':arr[0].startsWith('H') || arr[0].startsWith('J') || arr[0].startsWith('K') || arr[0].startsWith('L') || arr[0].startsWith('M')?'C':arr[0].startsWith('N') || arr[0].startsWith('P') || arr[0].startsWith('Q') || arr[0].startsWith('R') || arr[0].startsWith('S') || arr[0].startsWith('T') || arr[0].startsWith('V') || arr[0].startsWith('W') || arr[0].startsWith('X') || arr[0].startsWith('Y') || arr[0].startsWith('Z')?'D':'No strings allocated.'
    }

}
