function largestPalindromeProduct(n) { 
  let end = Math.pow(10,n)-1; 
  let start= parseInt((1 + end/10), 10); 
  let res = [];
  for (let i = end; i >= start; i--) {
    for (let j = end; j >= start; j--) {
      let num = i * j;
      let numReverse = [...String(num)].reverse().join("");
      if (num == numReverse) {
        res.push(num);
      }
    }
  }
  return Math.max(...res);
}
