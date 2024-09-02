class Rectangle{
    constructor(width, height){
        this._width=width;
        this._height=height;
    }
    set width(newWidth){
        this._width=newWidth;
    }
    set height(newHeight){
         this._height=newHeight;
    }
    get width(){
    return this._width;
    }
    get height(){
        return this._height;
    }
    getArea(){
        return (this.width*this.height);
    }
}
class Square extends Rectangle{
    constructor(side){
      super(side, side);
      this._side=side;
    }
    get side(){
        return this._side;
    }
    getPerimeter(){
        return(4*this._side);
    }
}
const square = new Square(5);
console.log(square.side); // Output: 5
console.log(square.getPerimeter()); // Output: 20
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
