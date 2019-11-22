function sumFibs(num) {  

    //get all fibs <= 'num'
    function getFibsLessThan(num) {
      let fibs = [1, 1];
      while (fibs[fibs.length -1] <= num) {
        if (fibs[fibs.length-1] + fibs[fibs.length-2] > num) {
           break; 
       }
        fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
      }
      return fibs;
    }
    
    //removes even fib nums to return only odd fibonacci numbers
    function filterOddFibs(fibNum) {
      return (fibNum % 2) != 0;
    }
    
    //get sum of remaining odd fib nums
    function getSum(numsArray) {
      let sum = 0;
      numsArray.forEach((number) => sum += number);
      return sum;
    }
  
    
    let fibsArray = getFibsLessThan(num);
    let oddFibs = fibsArray.filter(filterOddFibs);
    return getSum(oddFibs);
  }
  
  sumFibs(1);// should return 2.
  sumFibs(4);// should return 5.
  sumFibs(1000);// should return 1785.
  sumFibs(4000000);// should return 4613732.
  sumFibs(75024);// should return 60696.