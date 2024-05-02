const LayoutSideCard: React.FC<{
  name: string;
  image: string;
  price: string;
}> = ({ name, image, price }) => {
  return (
    <div className="w-[200px] cursor-pointer">
      <div className="head w-full h-[200px] flex justify-center bg-white">
        <img
          src={image}
          className="w-[90px] object-contain"
          alt="product-image"
        />
      </div>
      <div className="card-body mt-2">
        <p className="text-[11px] font-medium">{name}</p>
        <h2 className="text-[10px] text-darkSecondary my-2">107045356</h2>
        <h3 className="font-medium">
          {price}
          <sup className="text-redPrimary text-[9px] ms-1 line-through">
            564
          </sup>
        </h3>
      </div>
    </div>
  );
};

export default LayoutSideCard;
