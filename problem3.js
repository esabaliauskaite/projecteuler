function largestPrimeFactor(number) {
  var largest = 1;
  var primeNumber = 2;
  while (primeNumber<=number){
    if(number%primeNumber==0){
      largest = primeNumber;
      number = number / primeNumber;
    }else primeNumber++
  }
  return largest;
}
