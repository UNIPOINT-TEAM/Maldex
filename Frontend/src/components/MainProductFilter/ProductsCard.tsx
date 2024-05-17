import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "../Badge/Badge";
import React, { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
import { CiHeart, CiSearch } from "react-icons/ci";
import { Product } from "../../types";
interface ProductsCardProps {
  id: number;
  item: Product;
  handleOpen?: (value: string) => void;
}
const ProductsCard: React.FC<ProductsCardProps> = ({ item, handleOpen }) => {
  const [defaultProduct, setDefaultProduct] = useState(true);
  const [addCard, setAddCard] = useState(false);
  const changeStatus = () => setDefaultProduct(!defaultProduct);

  return (
    <div className="catalog">
      <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200 ">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-full "
          style={{ mixBlendMode: "multiply" }}
        >
          {item.images_set.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-full h-full "
              onClick={() => handleOpen("xl")}
            >
              <div className="relative  h-full">
                <div className="flex justify-center items-center h-full ">
                  <img
                    className="mb-2 w-[50px] h-[50px] object-contain product-img "
                    src={item?.image_url ? item?.image_url : item?.image}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1 swiper-opacity">
          <button
            className={`w-[8px] h-[8px] bg-redPrimary rounded-[4px]`}
          ></button>
          <button
            className={`w-[8px] h-[8px] bg-orange-600 rounded-[4px]`}
          ></button>
          <button
            className={`w-[8px] h-[8px] bg-green-600 rounded-[4px]`}
          ></button>
          <button
            className={`w-[8px] h-[8px] bg-greenPrimary rounded-[4px]`}
          ></button>
          <button
            className={`w-[8px] h-[8px] bg-blue-600 rounded-[4px]`}
          ></button>
          <button
            className={`w-[8px] h-[8px] bg-purple-600 rounded-[4px]`}
          ></button>
          <button
            className={`w-[8px] h-[8px] bg-indigo-600 rounded-[4px]`}
          ></button>
        </div>

        <div className="absolute z-[999] top-2 left-2 flex gap-2">
          {item.is_new && <Badge name="NEW" type="NEW" />}
          {item.is_hit && <Badge name="HIT" type="HIT" />}
        </div>
      </div>
      {defaultProduct ? (
        <div className="default">
          <div className="mb-2 md:mb-5  min-h-[70px] ">
            <p className="text-fs_7 font-medium tracking-wide">
              {item.name.length > 30
                ? item?.name.substring(0, 40) + "..."
                : item?.name}
            </p>
          </div>
          <p className="mb-2 text-gray-600 text-fs_8">{item.vendor_code}</p>
          <div className="relative mb-2">
            <p className="text-[16px] font-bold md:text-fs_4">
              {item?.discount_price}
              <span className="text-xs absolute top-0">12</span>
              <span className="ml-4 mr-1">{item.price_type}</span>
              <span className="text-xs absolute top-0 line-through text-redPrimary">
                {item?.price}
              </span>
            </p>
          </div>
          <div className="flex justify-between catalog_btns">
            <button
              onClick={changeStatus}
              className="bg-redPrimary flex justify-between items-center uppercase  p-2 text-white rounded-lg font-bold tracking-wider text-fs_8 lg:text-sm gap-1 lg:w-[130px]"
            >
              <MdOutlineAdd className="text-fs_4" />В корзину
            </button>

            <button className="bg-white px-2 lg:px-3 py-1 rounded-lg text-darkSecondary">
              <Link
                to={"category/1"}
                className="w-full h-full flex justify-center items-center"
              >
                <CgSearch className="text-fs_4" />
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="default">
          <div className="flex flex-col items-start mb-3">
            <p className="text-lg text-gray-600 mb-2">Количество:</p>
            <div className="flex justify-around items-center gap-2 rounded-xl p-2 border border-gray-400 mb-2">
              <button>-</button>
              <p>1 543</p>
              <button>+</button>
            </div>
            <p className="text-lg text-gray-600 mb-2">Размер:</p>
            <div className="flex justify-start items-center gap-1">
              <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                XS
              </button>
              <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                S
              </button>
              <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                M
              </button>
              <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                L
              </button>
              <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                XL
              </button>
              <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                2XL
              </button>
            </div>
          </div>
          {addCard ? (
            <div className="flex justify-between catalog_btns">
              <button
                onClick={() => setAddCard(true)}
                className=" bg-redPrimary px-3 py-3 text-white rounded-lg shadow-lg shadow-gray-400"
              >
                <FaCheck />
              </button>
              <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                <Link
                  to={"category/1"}
                  className="w-full h-full flex justify-center items-center"
                >
                  <CiSearch />
                </Link>
              </button>
            </div>
          ) : (
            <div className="flex justify-between catalog_btns">
              <button
                onClick={() => setAddCard(true)}
                className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg text-sm shadow-gray-400 w-[120px]"
              >
                + добавить
              </button>
              <button className="px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                <CiHeart />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
