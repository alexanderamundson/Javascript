const {checkInventory} = require('./library.js');

/*the item quantities in this order are less than the 
amount in stock (see 'inventory' obj in library.js),
therfore the order should be succesful.
If you change the quantity of sunglasses from 2 to 50,
the checkInventory() function below will return a rejected
Promise obj, and therfore run the catch() method below
*/
const order = [['sunglasses', 2], ['bags', 2]];

//resolve handler function
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
//reject handler function
const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};


//checkInventory returns a promise Object
checkInventory(order).then(handleSuccess).catch(handleFailure);
