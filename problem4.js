// Start by creting a largest palindrome product for specified number of digits, and the lowest posible palindrome product
// Then we loop from the largest to the lowest, then we get the product of the current numbers
// Reverse this product of the current numbers and check if the number is a palindrome
// Return the highest value of this array
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
