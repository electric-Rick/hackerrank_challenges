function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    let radius = readLine();
    // Print the area of the circle:
    let area = PI*(radius**2);
    console.log(area);
    // Print the perimeter of the circle:
    let perim = 2*PI*radius;
    console.log(perim)
    
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
