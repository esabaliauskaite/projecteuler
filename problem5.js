function smallestMult(n) {
  let result = 1;
  //returns the least common multiple in the range of [2,n]
  for (let i=2; i<=n; i++){
    result = leastCommonMultiple(result, i);
  }
  return result;
}
// Returns least common multiple of two numbers
function leastCommonMultiple (m,n) {
  return (m*n)/greatestCommonDivisor(m,n);
}  
// Returns greatest common divisor by using Euclidean recursive algorithm
function greatestCommonDivisor (m, n) {
  if (n === 0) return m;
  return greatestCommonDivisor(n, m % n);
}  

smallestMult(20);
