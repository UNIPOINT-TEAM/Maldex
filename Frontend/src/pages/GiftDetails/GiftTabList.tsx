import { IoAddSharp, IoCloseSharp } from "react-icons/io5";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatPrice } from "../../utils/FormatPrice";

import React, { useState } from "react";

interface TabDescriptionProps {
  setCardSetproduct: React.Dispatch<React.SetStateAction<any[]>>;
  cardSetproduct: Array<{
    id: number;
    product_sets: {
      id: number;
      article: string;
      name: string;
      description: string;
      images_set: Array<{
        id: string;
        image_url: string;
      }>;
    };
    quantity: number;
  }>;
}

const GiftTabDescription: React.FC<TabDescriptionProps> = ({
  cardSetproduct,
  setCardSetproduct,
}) => {
  // Divide the products into two equal parts
  const half = Math.ceil(cardSetproduct?.length / 2);
  const firstHalf = cardSetproduct?.slice(0, half);
  const secondHalf = cardSetproduct?.slice(half);
  const [quantityVisible, setQuantityVisible] = useState(null);
  const updateItemQuantity = (id: number, quantity: number) => {
    setCardSetproduct(
      cardSetproduct.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  return (
    <div className="grid grid-cols-2  divide-x  divide-lightSecondary">
      <ul className=" text-darkPrimary divide-y divide-lightSecondary">
        {firstHalf?.map((product, index) => (
          <li className="flex items-center w-full h-[200px]">
            <div className="flex justify-between pl-3 pe-10 w-full">
              <div className="block sm:flex justify-start items-start gap-3 w-full">
                <div className="w-[150px] h-[150px]">
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="relative w-full h-full"
                  >
                    {product?.product_sets?.images_set
                      ?.slice(0, 3)
                      .map((image) => (
                        <SwiperSlide className="h-full w-full flex justify-center bg-white">
                          <div className="w-[100px] h-full">
                            <img
                              className="w-full h-full object-contain mix-blend-multiply"
                              src={image?.image_url || image.image}
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-medium tracking-wide line-clamp-2">
                    {product?.product_sets?.name}
                  </p>
                  <p className="text-[12px]">
                    {product?.product_sets?.article}
                  </p>
                  <div className="relative mb-3 pt-5 ">
                    <p className="text-[16px] font-medium md:text-fs_4 ">
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
                </div>
              </div>
              <div className="flex flex-col my-auto gap-5  justify-between items-end h-full text-darkSecondary ">
                <IoCloseSharp
                  className="cursor-pointer"
                  onClick={() =>
                    setCardSetproduct((prev) =>
                      prev.filter(
                        (el) =>
                          el?.product_sets?.id !== product?.product_sets.id
                      )
                    )
                  }
                />

                {quantityVisible === product.id ? (
                  <input
                    value={product.quantity}
                    onChange={(e) =>
                      updateItemQuantity(product?.id, Number(e.target.value))
                    }
                    className="w-[50px] px-2 text-black border border-black rounded-lg focus: outline-none"
                  />
                ) : (
                  <IoAddSharp
                    className="cursor-pointer"
                    onClick={() => setQuantityVisible(product.id)}
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className=" text-darkPrimary divide-y divide-lightSecondary">
        {secondHalf?.map((product, index) => (
          <li className="flex items-center w-full h-[200px]">
            <div className="flex justify-between pl-10 pe-3 w-full">
              <div className="block sm:flex justify-start items-start gap-3 w-full">
                <div className="w-[150px] h-[150px]">
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="relative w-full h-full"
                  >
                    {product?.product_sets?.images_set
                      ?.slice(0, 3)
                      .map((image) => (
                        <SwiperSlide className="h-full w-full flex justify-center bg-white">
                          <div className="w-[100px] h-full">
                            <img
                              className="w-full h-full object-contain mix-blend-multiply"
                              src={image?.image_url || image.image}
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-medium tracking-wide line-clamp-2">
                    {product?.product_sets?.name}
                  </p>
                  <p className="text-[12px]">
                    {product?.product_sets?.article}
                  </p>
                  <div className="relative mb-3 pt-5">
                    <p className="text-[16px] font-medium md:text-fs_4 ">
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
                </div>
              </div>
              <div className="flex flex-col my-auto gap-5  justify-between items-end h-full text-darkSecondary ">
                <IoCloseSharp
                  className="cursor-pointer"
                  onClick={() =>
                    setCardSetproduct((prev) =>
                      prev.filter(
                        (el) =>
                          el?.product_sets?.id !== product?.product_sets.id
                      )
                    )
                  }
                />

                {quantityVisible === product.id ? (
                  <input
                    value={product.quantity}
                    onChange={(e) =>
                      updateItemQuantity(product?.id, Number(e.target.value))
                    }
                    className="w-[50px] px-2 text-black border border-black rounded-lg focus: outline-none"
                  />
                ) : (
                  <IoAddSharp
                    className="cursor-pointer"
                    onClick={() => setQuantityVisible(product.id)}
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftTabDescription;
