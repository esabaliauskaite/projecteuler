function smallestMult(n) {
  let result = 1;
  for (let i=2; i<=n; i++){
    result = LCM(result, i);
  }
  return result;
}

function LCM (m,n) {
  return (m*n)/GCD(m,n);
}  

function GCD (m, n) {
  if (n === 0) return m;
  return GCD(n, m % n);
}  

smallestMult(20);
