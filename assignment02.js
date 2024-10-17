// Area of rectangle and triangle


// Rectangle
const length = parseFloat(prompt("Enter the length of the rectangle:"));
const width = parseFloat(prompt("Enter the width of the rectangle"));

const areaRectangle = length * width;

// Triangle
const base = parseFloat(prompt("Enter the base of the rectangle:"));
const height = parseFloat(prompt("Enter the height of the rectangle"));

const areaTriangle = (base * height) / 2;

alert(`Area of Rectangle: ${areaRectangle}\nArea of Triangle: ${areaTriangle}`)