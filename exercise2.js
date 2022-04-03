var side1 = parseFloat(prompt("Enter first Side: "));; 
var side2 = parseFloat(prompt("Enter Second Side: "));; 
var side3 = parseFloat(prompt("Enter third Side: "));; 
var s = (side1 + side2 + side3)/2;
console.log("Perimeter:"+s);
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log("Area:"+area);

