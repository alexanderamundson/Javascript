function checkCashRegister(price, cash, cid) {
    var change;
  
    //1) cash-in-drawer is less than the change due,
    // or if you cannot return the exact change
    if (getTotalInRegister(cid) < Math.abs(cash - price)) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    //2) price === equal to the change due.
    else if (getTotalInRegister(cid) == Math.abs(cash - price)) {
      return {status: "CLOSED", change: cid};
    }
    //3) Otherwise, return change due in coins and bills,
    // sorted in highest to lowest order
    else {
  /*
  (19.5, 20, 
  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], 
  ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
  
  should return {status: "OPEN", change: [["QUARTER", 0.5]]}
  
  price 19.5, cash 20 
  change should be .5  (2 quarters)
  
  100  20  10  5  1   0.25    .10    .05    .01
  
   */
    /*var c = {
    "hundreds": cid[8][1] / 100,
    "twenties": cid[7][1] / 20,
    "tens": cid[6][1] / 10,
    "fives": cid[5][1] / 5,
    "ones": cid[4][1] / 1,
    "quarters": cid[3][1] / .25,
    "dimes": cid[2][1] / .10,
    "nickels": cid[1][1] / 0.05,
    "pennies": cid[0][1] / 0.01
    };*/
    var c = {
    "hundreds": cid[8][1] / 100,
    "twenties": cid[7][1] / 20,
    "tens": cid[6][1] / 10,
    "fives": cid[5][1] / 5,
    "ones": cid[4][1] / 1,
    0.25: cid[3][1] / .25,
    "dimes": cid[2][1] / .10,
    "nickels": cid[1][1] / 0.05,
    "pennies": cid[0][1] / 0.01
    };
    var vals = [100, 20, 10, 5, 1, 0.25, .1, .05, .01];
    //[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
    //["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
    var changeDue = Math.abs(cash - price);
    for (let i = 0; i < vals.length; i++) {
      if (vals[i] <= changeDue) {
        c[0.25]
         
  
      }
    }
  
      return {status: "OPEN", change: []};
    }
  
  
  
    function getDenominationsAvailable(denom) {
      for () {
  
      }
    }  
    
    
    //Returns total $ in cash register
    function getTotalInRegister(cashInDrawer) {
      return cashInDrawer.map((denomination) => denomination[1]).reduce((a,b) => a+b, 0 );
    }
  
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return {status: "INSUFFICIENT_FUNDS", change: []}
  