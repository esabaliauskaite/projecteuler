function fiboEvenSum(n) {
  var esum = 0;
  var prev = 1;
  var current = 1;
if(n<=1){
  return 0;
} else {
  for (let i=2; current<n;i++){
    [prev, current] = [current, prev + current];
    if(current%2===0) esum+=current;
    }
    }
    console.log(esum);
    return esum;
}
