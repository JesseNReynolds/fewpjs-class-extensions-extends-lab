// Your code here
class Polygon {

    constructor(arrOfIntegers) {
        this.sides = arrOfIntegers;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer);
    }
    
};

class Triangle extends Polygon {

    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        if ((a+b > c) && (b+c > a) && (a+c > b)) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[4]
        if (a === b ||
            a === c || 
            a === d) {
            return true 
        } else {
            return false
        }
    }

    get area() {
        return ((this.perimeter / 4) ** 2)
    }
}