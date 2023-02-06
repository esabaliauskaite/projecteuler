// Returns the sum of squares in the range of [1,n]
function sumOfSquare(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i,2);
  }
  return sum;
}
// Returns the square of the sum in the range of [1,n]
function squareOfSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum,2);
}

// calculates the difference
function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquare(n);
}

sumSquareDifference(10);