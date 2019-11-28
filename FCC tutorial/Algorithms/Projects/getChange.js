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
 var changeCount = {
   100:  0,
   20:   0,
   10:   0,
   5:    0,
   1:    0,
   0.25: 0,
   0.10: 0,
   0.05: 0,
   0.01: 0
  };
  
  var registerCount = {
  100:  cid[8][1] / 100,
  20:   cid[7][1] / 20,
  10:   cid[6][1] / 10,
  5:    cid[5][1] / 5,
  1:    cid[4][1] / 1,
  0.25: cid[3][1] / .25,
  0.10: cid[2][1] / .10,
  0.05: cid[1][1] / 0.05,
  0.01: cid[0][1] / 0.01
  };
  var vals = [100, 20, 10, 5, 1, 0.25, .1, .05, .01];

  var changeDue = Math.abs(cash - price);
  console.log(changeDue + " - change due");
  let i = 0;
  while (changeDue > 0.00) {
    if (vals[i] == changeDue) {
      if (denominationIsInRegister(vals[i])) {
        decrementRegisterDenominationCount(vals[i]);
        incrementChangeDenominationCount(vals[i] );
        changeDue -= vals[i];
      } else { 
        i++;
      }
      
    } else if (vals[i] < changeDue) {
      if (denominationIsInRegister(vals[i]) ) {
        decrementRegisterDenominationCount(vals[i] );
        incrementChangeDenominationCount(vals[i] );
        changeDue -= vals[i];
      } else {
        i++;
      }
    } else if (vals[i] > changeDue) {
      i++;

    } else {console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!THis shldnt appear EVER");
    }
    //console.log("the denom counts are:-----------");
  }
    console.log(changeCount);
    return {status: "OPEN", change: []};
  }


  //Checks if given denomination is in register
  function denominationIsInRegister(denom) {
    return registerCount[denom] > 0;
  }  
  //Decrements count of given denomination in register
  function decrementRegisterDenominationCount(denom) {
    registerCount[denom]--; 
  }

  function incrementChangeDenominationCount(denom) {
    changeCount[denom]++;
    console.log("should b > 1:  " + changeCount[denom]);	
  }
  
  
  //Returns total $ in cash register
  function getTotalInRegister(cashInDrawer) {
    return cashInDrawer.map((denomination) => denomination[1]).reduce((a,b) => a+b, 0 );
  }

}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])