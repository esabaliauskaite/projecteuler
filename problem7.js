function nthPrime(n) {
    const primes = [2];
    let isPrime = false;
    let nThNumber = 0;
    for(let i = 3; primes.length < n; i += 2) {
      isPrime = true;
      for(let j = 0; j < primes.length; j++) {
        if(i % primes[j] === 0){
          isPrime = false;
          break; 
        }
      }
      if(isPrime){
        primes.push(i);
      }
    }
    nThNumber = primes[primes.length - 1];
    return nThNumber;
  }