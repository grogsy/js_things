// currying using a vending machine as an analogy?

/**
 *
 * @param {*} item -> Object{price: number, name: string}
 */

function VendingMachine(item) {
  let total = item.price;
  return function curryPay(amt) {
    total -= amt;
    if (total > 0) {
      console.log("Total owed: ", total);
      return curryPay;
    } else {
      return item.name;
    }
  };
}
