const ProductSize: React.FC<{
  name: string;
  btnActiveSize: number;
  onActiveSize: any;
  index: number;
}> = ({ name, btnActiveSize, onActiveSize, index }) => {
  return (
    <button
      onClick={() => onActiveSize(index)}
      className={`w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] py-1 text-xs font-bold  border rounded-[50%] focus:outline-none ${
        btnActiveSize == index
          ? "border-redPrimary text-redPrimary"
          : "border-darkSecondary text-darkPrimary "
      }`}
    >
      {name?.replace(/размер/g, "")}
    </button>
  );
};

export default ProductSize;
