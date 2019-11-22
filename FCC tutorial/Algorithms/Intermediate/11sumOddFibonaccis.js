function sumFibs(num) {  

    //get all fibs <= 'num'
    function getFibs(num) {
      while (fibs[fibs.length -1] <= num) {
        if (fibs[fibs.length-1] + fibs[fibs.length-2] > num) {
           break; 
       }
        fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
      }
    }
    
    //remove even fib nums
    function filterOddFibs(fibNum) {
      return (fibNum % 2) != 0;
    }
    
    //get sum of remaining odd fib nums
    function getSum(numsArray) {
      let sum = 0;
      numsArray.forEach((number) => sum += number);
      return sum;
    }
  
    let fibs = [1, 1];
    getFibs(num);
    let oddFibs = fibs.filter(filterOddFibs);
    return getSum(oddFibs);
  }
  //console.log(
  sumFibs(4)
  //);
  