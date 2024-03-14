const ProductSize: React.FC<{
  id: number;
  size: string;
  btnActiveSize: number;
  onActiveSize: any;
}> = ({ size, btnActiveSize, id, onActiveSize }) => {
  return (
    <button
      onClick={() => onActiveSize(id)}
      className={`w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] py-1 text-xs font-bold  border rounded-[50%] focus:outline-none ${
        btnActiveSize == id
          ? "border-redPrimary text-redPrimary"
          : "border-darkSecondary text-darkPrimary "
      }`}
    >
      {size}
    </button>
  );
};

export default ProductSize;
