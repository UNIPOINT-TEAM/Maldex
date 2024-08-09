import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { formatPrice } from "../../utils/FormatPrice";
import { Product } from "../../types";
import { Link } from "react-router-dom";
interface TabDescriptionProps {
  description: string;
  products: Array<{
    id: number;
    product_sets: Product;
    quantity: number;
  }>;
}

const GiftTabDescription: React.FC<TabDescriptionProps> = ({
  description,
  products,
}) => {
  console.log(products);
  return (
    <div className="text-darkPrimary">
      <p className="mb-5 text-fs_7 font-normal">{description}</p>
      <div className="hidden md:block mb-10">
        {products?.map((product, index) => (
          <div className="flex justify-between items-start border-b-2 py-5 gap-20">
            <div className="w-1/4">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className=""
              >
                {product?.product_sets?.images_set?.slice(0, 5).map((image) => (
                  <SwiperSlide
                    key={index}
                    className="bg-white relative min-w-[270px] h-[250px]"
                  >
                    <Link
                      to={`/category/${product?.product_sets?.id}`}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        className="mix-blend-multiply w-[100px] object-contain"
                        src={image?.image_url || image.image}
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-3/4">
              <p className="text-base font-medium mb-1">
                {product?.product_sets?.name}
              </p>
              <p className="mb-3 text-fs_8 font-medium text-darkPrimary opacity-80">
                {product?.product_sets?.article}s
              </p>
              <div>
                <p className="text-[16px] font-medium md:text-fs_4 relative">
                  {product?.product_sets?.discount_price > 0
                    ? formatPrice(product?.product_sets?.discount_price)
                    : formatPrice(product?.product_sets?.price)}
                  <span className="ml-4 mr-1">
                    {product?.product_sets?.price_type}
                  </span>
                  <span className="text-xs absolute top-0 line-through text-redPrimary">
                    {product?.product_sets?.discount_price > 0 &&
                      product?.product_sets?.price}
                  </span>
                </p>
              </div>
              <p className="text-fs_7 font-normal tracking-wide text-darkPrimary">
                {product?.product_sets?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftTabDescription;
