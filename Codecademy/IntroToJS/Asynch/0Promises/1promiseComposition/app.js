/*Promise composition is the chanining multiple promises
one after another */

const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray)})
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray) })
    .then((successMessage) => {
        console.log(successMessage);
    });

//It is important to note that this app only handles resolved promises.
//Rejected promises will raise an UnhandledPromiseRejectionWarning.
//Since the items in the order object above are not over the stores inventory,
//This app does not raise the unhandled promise warning. However, if you
//change the quantity of sunglasses to 1000 (which is greater than the sunglasses 
//inventory in library.js ) and then run this program in node,
//then you will see the output will be UnhandledPromiseRejectionWarning