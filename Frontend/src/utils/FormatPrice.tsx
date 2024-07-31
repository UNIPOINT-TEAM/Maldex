export const formatPrice = (price: number) => {
  if (!price) return null;
  const [integerPart, decimalPart] = price.toString().split(".");
  return (
    <span>
      {integerPart}.{decimalPart ? <sup>{decimalPart}</sup> : <sup>00</sup>}
    </span>
  );
};
