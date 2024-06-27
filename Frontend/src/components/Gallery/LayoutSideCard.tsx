import { formatPrice } from "../../utils/FormatPrice";

const LayoutSideCard: React.FC<{
  name: string;
  image: string;
  price: string;
}> = ({ name, images_set, price, discount_price, price_type }) => {
  return (
    <div className="w-[200px] cursor-pointer">
      <div className="head w-full h-[200px] flex justify-center bg-white">
        <img
          src={
            (images_set && images_set[0]?.image_url) ||
            (images_set && images_set[0]?.image)
          }
          className="w-[90px] object-contain mix-blend-multiply"
          alt="product-image"
        />
      </div>
      <div className="card-body mt-2">
        <h2 className="text-[11px] font-medium">{name}</h2>
        <h3 className="font-medium  relative">
          {discount_price > 0
            ? formatPrice(discount_price)
            : formatPrice(price)}
          <span className="ml-4 mr-1">{price_type}</span>
          <sup className="text-redPrimary text-[9px] ms-1 line-through">
            {discount_price > 0 && price}
          </sup>
        </h3>
      </div>
    </div>
  );
};

export default LayoutSideCard;
