// While current prime number is less than the provided value we check if the number is divisible by it
// If it is we set the largest to the value of prime number and we divide the number by the prime number. Keep dividing the number by same prime number until that number is no more divisible by that prime number.
// Only increment the prime number if the number isn't divisible by it and repeat this process till the number becomes 1.
function largestPrimeFactor(number) {
  var largest = 1;
  var primeNumber = 2;
  while (primeNumber <= number){
    if(number % primeNumber == 0) {
      largest = primeNumber;
      number = number / primeNumber;
    } else primeNumber++
  }
  return largest;
}
