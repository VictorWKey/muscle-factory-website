/**
 * This function calculates total prices of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total Price
 */

export const totalPrice = products => {
  let sum = 0;
  products.forEach(product => sum += product.price * product.quantity);
  return sum.toFixed(2);
}

export const totalProducts = products => {
  let sum = 0;
  products.forEach(product => sum += product.quantity);
  return sum;
}