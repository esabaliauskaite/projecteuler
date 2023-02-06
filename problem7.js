function nthPrime(n) {
  //Primes array which will store all the prime numbers
  const primes = [2];
  //Flag to check if the number is a prime
  let isPrime = false;
  let nThNumber = 0;
  // loop to go through the prime numbers and only checks the odd numbers. Sets the flag to true.
  for(let i = 3; primes.length < n; i += 2) {
    isPrime = true;
    // another loop to go through the array to check if the number is a composite by dividing all eligible lower prime numbers.
    for(let j = 0; j < primes.length; j++) {
      if(i % primes[j] === 0){
        isPrime = false;
        break; 
      }
    }
    // If a number is not a composite it is added to the primes array
    if(isPrime){
      primes.push(i);
    }
    // The outer loop makes sure that enough primes have not been found yet. When enough have been found the outer loop ends.
  }
  // Calculates the last prime in the array and returns it.
  nThNumber = primes[primes.length - 1];
  return nThNumber;
}