import { FaCheck } from "react-icons/fa6";
import { formatPrice } from "../../utils/FormatPrice";

const LayoutSideCard: React.FC<{
  id: number;
  name: string;
  image: string;
  price: number;
  discount_price: number;
  price_type: string;
  combine?: boolean;
  combineSellectItem: any;
  images_set: { image_url: string; image: string }[];
  onCombine: () => void;
}> = ({
  id,
  name,
  images_set,
  price,
  discount_price,
  price_type,
  combine,
  combineSellectItem,
  onCombine,
}) => {
  return (
    <div
      className={`w-[200px] h-full cursor-pointer flex flex-col 
        ${
          combine == true && combineSellectItem?.id === id
            ? "border border-redPrimary"
            : "border border-greenPrimary"
        }
        `}
    >
      <div className="head group w-full h-[200px] flex justify-center relative bg-white">
        {combineSellectItem?.id === id && (
          <button
            onClick={onCombine}
            className="absolute group-hover:block hidden top-2  right-2 border bg-redPrimary rounded-md text-[#fff] p-2"
          >
            <FaCheck />
          </button>
        )}
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
