class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}


/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function (a){
    return this.w * this.h
}
    class Square extends Rectangle {
        constructor(val_1){
         super(val_1, val_1)
        }
        
    }
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */




