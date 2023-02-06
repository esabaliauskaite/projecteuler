// According to problem description Fibonacci series starts with 1, 2
// check if the provided value is less than 1, then 0 is returned as it does not satisfy the requirements
// then we chech through all the numbers generated, set previous to current and calculate the new current number
// if the current is an even number we add it to the esum variable which is later returned
function fiboEvenSum(n) {
  var esum = 0;
  var prev = 1;
  var current = 1;
  if(n<=1) {
    return 0;
  } else {
    for (let i=2; current<n;i++) {
    [prev, current] = [current, prev + current];
    if(current%2===0) esum+=current;
    }
  }
  return esum;
}
