import exmapleProduct from "../../assets/images/machine.png";
const LayoutSideCard = () => {
  return (
    <div className="w-[200px]">
      <div className="head w-full h-[200px] flex justify-center bg-white">
        <img
          src={exmapleProduct}
          className="w-[90px] object-contain"
          alt="product-image"
        />
      </div>
      <div className="card-body mt-2">
        <p className="text-[11px] font-medium">
          Инновационный очиститель, обеззараживатель, озонатор воздуха
        </p>
        <h2 className="text-[10px] text-darkSecondary my-2">107045356</h2>
        <h3 className="font-medium">
          15 185.52 ₽
          <sup className="text-redPrimary text-[9px] ms-1 line-through">
            564
          </sup>
        </h3>
      </div>
    </div>
  );
};

export default LayoutSideCard;
