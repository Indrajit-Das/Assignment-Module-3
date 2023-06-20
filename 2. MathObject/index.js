var numArray = [2,3,4,5,6,7,8,9,67]; //an array of numbers 
var sum =0;
var resultFun = function(numArray){
    // the sum of squares of all numbers
    numArray.map((num)=> sum += Math.pow(num,2));
    return sum;
}
// square root ---> of the sum of squares of all numbers
var squareRoot = Math.sqrt(resultFun(numArray));
// displaying the square root 
console.log("The square root of the sum of squares for an array of numbers : "+squareRoot);
