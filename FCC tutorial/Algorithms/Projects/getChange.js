function checkCashRegister(price, cash, cid) {
  var change;
  var changeDue = Math.abs(cash - price);
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
    let i = 0;
    while (changeDue > 0.00) {
      if (i > 8 ) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      if (parseFloat(vals[i].toFixed(2, 10)) === changeDue) {
        if (denominationIsInRegister(vals[i])) {
          decrementRegisterDenominationCount(vals[i]);
          incrementChangeDenominationCount(vals[i]);
          changeDue -= (vals[i]);
        } else { 
          i++;
        }
        
      } else if (parseFloat(vals[i].toFixed(2),10) < changeDue) {
        if (denominationIsInRegister( vals[i])  ){ 
          decrementRegisterDenominationCount( vals[i] );
          incrementChangeDenominationCount(vals[i] );     
          changeDue -= (vals[i]);
          changeDue =  parseFloat( changeDue.toFixed(2) , 10);
        } else {
          i++;
        }
      } else  {///if (vals[i] > changeDue)
        i++;
      } 

    }
    return {status: "OPEN", change: createChange(changeCount)};
 }


 //Checks if given denomination is in register
 function denominationIsInRegister(denom) {
   return registerCount[denom] > 0;
 }  
 //Decrements count of given denomination in register
 function decrementRegisterDenominationCount(denom) {
   registerCount[denom]--; 
 }

 //increments the number of given denomination to make proper change
 function incrementChangeDenominationCount(denom) {
   changeCount[denom]++;	
 }
 
 //Returns total $ in cash register
 function getTotalInRegister(cashInDrawer) {
   return cashInDrawer.map((denomination) => denomination[1]).reduce((a,b) => a+b, 0 );
 }

 //Returns the proper change in array format 
 function createChange(changeCount) {
   cid = cid.reverse(); 
   var changeAmounts = cid.map(mapToChangeValues).filter(filterUnusedDenomination);
   return changeAmounts;
 }

 //Get proper dollar amount of each denomination for changeAmounts
 function mapToChangeValues(cidElement, index) {
   const denomValues = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
   return [cidElement[0], (changeCount[denomValues[index]] * denomValues[index]) ];
 }

 //Removes unused denominations from changeAmounts array
 function filterUnusedDenomination(cidElement) {
   return cidElement[1] !== 0;
 }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.