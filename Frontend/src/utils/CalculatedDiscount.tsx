export const calculateDiscountedPrice = (price: number, quantity: number) => {
 

  let discount = 0;
  if (quantity >= 30 && quantity < 100) {
    discount = 3;
  } else if (quantity >= 100 && quantity < 300) {
    discount = 5;
  } else if (quantity >= 300) {
    discount = 7;
  }

  const discountAmount = (price * discount) / 100;
  const discountedPrice = price - discountAmount;
  return {
    discountedPriceFixed: discountedPrice.toFixed(2),
    discount,
  };
};
