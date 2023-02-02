function sumOfSquare(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i,2);
  }
  return sum;
}

function squareOfSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum,2);
}


function sumSquareDifference(n) {

  return squareOfSum(n) - sumOfSquare(n);
}

sumSquareDifference(10);