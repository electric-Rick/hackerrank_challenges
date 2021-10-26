/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{
    constructor(val_1){
        this.val_1 = val_1;
        
    } get calcula_perimeter(){
        return this.perimeter()
    }
perimeter(){
        var result = 0;
        var values = this.val_1;
        
        for(var i = 0; i<=values.length; i++){
           if(values[i] === undefined){
               
           } else {
               result += values[i];
           }
        }
                
         return result;
    }
}



