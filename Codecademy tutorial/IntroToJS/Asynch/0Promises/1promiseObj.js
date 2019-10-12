const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
  
//Promise constructor callback function
function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}
  
  
const orderSunglasses = () => {
  return new Promise(myExecutor);
}
  
const orderPromise = orderSunglasses();

console.log(orderPromise);//prints: Promise { 'Sunglasses order processed.' }
