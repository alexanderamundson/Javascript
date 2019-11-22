/*
sumPrimes(num) returns the sum of all prime numbers <= num 
*/
function sumPrimes(num) {
    //returns array of prime #s <= 'num'
    function getPrimeNumbers(num) {
      let primes = [];
      for (let i = num; i > 1; i--) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
      return primes;
    }
  
    //returns true if parameter is a prime #
    function isPrime(number) {
      for (let j = number - 1; j > 1; j-- ) {
        if (number % j === 0) {
          return false;
        }
      }
      return number > 1;
    }
  
    //Callback function to find sum of array's values
    function sumArray(accumulator, current) { 
      return accumulator + current
    };
  
    let primeNumbers = getPrimeNumbers(num);
    return primeNumbers.reduce(sumArray);
  }
  
  sumPrimes(3);//should return 5
  sumPrimes(2);// should return 2
  sumPrimes(10);// should return 17.
  sumPrimes(977);// should return 73156.
  