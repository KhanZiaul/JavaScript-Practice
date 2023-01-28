// returning functions


const square = function(a){
    
    let square=a*a;
    return square;
};

const squareIs = square(2);
// console.log(squareIs);

// use this returning value

const area = function(radius){
    
    let area= 3.1416 * radius**2;
    return area;
};

const areaIs = area(squareIs);
console.log(areaIs);