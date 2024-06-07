import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "../Badge/Badge";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { CiHeart, CiSearch } from "react-icons/ci";
import { Product } from "../../types";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { formatPrice } from "../../utils/FormatPrice";
import { MdAdd } from "react-icons/md";
interface ProductsCardProps {
  item: Product;
  handleOpen?: (product?: Product) => void;
}
const ProductsCard: React.FC<ProductsCardProps> = ({ item, handleOpen }) => {
  const dispatch = useDispatch();
  const [defaultCard, setDefaultCard] = useState<boolean>(true);
  const [addToCartVisible, setaddToCartVisible] = useState<boolean>(false);
  const [productItem, setproductItem] = useState({
    size: null,
    quantity: 1,
    color: item?.colorID?.name,
    warehouse: item.warehouse,
    name: item.name,
    images: item.images_set,
    article: item.article,
    id: item.id,
  });

  const increaseQuantity = () => {
    setproductItem({ ...productItem, quantity: productItem.quantity + 1 });
  };

  const decreaseQuantity = () => {
    if (productItem.quantity <= 1) return;
    setproductItem({ ...productItem, quantity: productItem.quantity - 1 });
  };
  const addToCartHandler = (product: any) => {
    const totalPrice =
      item?.discount_price > 0 ? item?.discount_price : item?.price;
    dispatch(
      addToCart({ ...product, quantity: productItem.quantity, totalPrice })
    );
  };
  const handleFiltreColor = (item: any) => {
    setproductItem({
      ...productItem,
      id: item?.product?.id,
      name: item?.product?.name,
      color: item.color,
      article: item?.product.article,
      images: item?.product.images_set,
      warehouse: item?.product.warehouse,
    });
  };
  console.log(item?.colors.slice(0, 5));
  return (
    <div className="catalog group">
      <div className="relative swiper-top-container h-[250px] cursor-pointer mb-4 bg-white hover:bg-[#fff]">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-full"
          style={{ mixBlendMode: "multiply" }}
        >
          {productItem.images?.slice(0, 5).map((e) => (
            <SwiperSlide
              key={e.id}
              className="w-full h-full "
              // @ts-expect-error: This
              onClick={() => handleOpen(item)}
            >
              <div className="relative h-full">
                <div className="flex justify-center items-center h-full ">
                  <img
                    className="mb-2 w-[50px] h-[50px] object-contain product-img "
                    src={e?.image_url ? e?.image_url : e?.image}
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute  z-[9999] bottom-[25px] right-[15px] flex flex-col justify-center items-center gap-1 swiper-opacity">
          {/*@ts-expect-error: This */}
          {item?.colors?.length > 0 &&
            item?.colors
              .slice(0, 5)
              .map((el) => (
                <button
                  onClick={() => handleFiltreColor(el)}
                  style={{ backgroundColor: el.hex ? el.hex : "#000000" }}
                  className={`w-[8px] h-[8px] rounded-full ${
                    productItem.id === el.product.id ? "h-[10px] w-[10px]" : ""
                  }`}
                ></button>
              ))}
        </div>
        <div className="absolute z-[999] top-2 left-2 flex gap-2">
          {item.is_new && <Badge name="NEW" type="NEW" />}
          {item.is_hit && <Badge name="HIT" type="HIT" />}
        </div>
      </div>
      {defaultCard ? (
        <div className=" min-h-[180px] flex flex-col justify-between">
          <div className="min-h-[100px]">
            <h2 className="text-black text-fs_7 mb-2 font-medium">
              {item?.name}
            </h2>
            <div className="hidden group-hover:block">
              {/*@ts-expect-error: This */}
              {item?.warehouse?.length > 0 &&
                productItem?.warehouse?.map((item, i) => (
                  <p key={i} className="text-fs_8 opacity-70 font-medium ">
                    {item?.name}: {item.quantity}
                  </p>
                ))}
              <p className="opacity-70 text-fs_8">{productItem?.article}</p>
            </div>
          </div>
          <p className="text-[16px] font-medium md:text-fs_4 relative">
            {item?.discount_price > 0
              ? formatPrice(item?.discount_price)
              : formatPrice(item?.price)}
            <span className="ml-4 mr-1">{item?.price_type}</span>
            <span className="text-xs absolute top-0 line-through text-redPrimary">
              {item?.discount_price > 0 && item?.price}
            </span>
          </p>
          <div className="flex justify-between catalog_btns mt-2">
            <button
              onClick={() => setDefaultCard(!defaultCard)}
              className="bg-redPrimary uppercase font-medium flex items-center justify-center gap-1 py-2  text-white rounded-lg text-sm w-[130px]"
            >
              <MdAdd className="text-fs_4" /> В корзину
            </button>
            <button className="bg-white px-3 py-1 rounded-lg text-gray-700">
              <Link
                to={`/category/${productItem?.id}`}
                className="w-full h-full flex justify-center items-center"
              >
                <CiSearch className="text-fs_4" />
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[180px] flex flex-col justify-between">
          <div className="flex flex-col items-start mb-3">
            <p className="text-fs_9 text-darkSecondary mb-2 uppercase">
              Количество:
            </p>
            <div className="flex text-darkPrimary font-medium justify-around items-center gap-2 rounded-xl p-2 border border-gray-400 mb-2">
              <button onClick={decreaseQuantity}>-</button>
              <p className="text-fs_7 font-medium">{productItem?.quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p className="text-lg text-gray-600 mb-2">Размер:</p>
            <div className="flex justify-start items-center flex-wrap gap-1">
              {/*@ts-expect-error: This */}
              {item.sizes?.length > 0 &&
                item.sizes.map((size) => (
                  <button className="min-w-[33px] h-[33px] border border-gray-400 rounded-[17px] font-bold text-[10px]  hover:border-redPrimary hover:text-redPrimary">
                    {size.name.replace(/размер/g, "")}
                  </button>
                ))}
            </div>
          </div>
          {addToCartVisible ? (
            <div className="flex justify-between catalog_btns">
              <button
                onClick={() => setDefaultCard(!defaultCard)}
                className=" bg-redPrimary px-3 py-3 text-white rounded-lg "
              >
                <FaCheck />
              </button>
              <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                <Link
                  to={`category/${item.id}`}
                  className="w-full h-full flex justify-center items-center"
                >
                  <CiSearch />
                </Link>
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center catalog_btns">
              <button
                onClick={() => {
                  addToCartHandler(item);
                  setaddToCartVisible(true);
                }}
                className="bg-redPrimary justify-center gap-2 uppercase font-bold flex  items-center text-white rounded-lg text-fs_7 w-[140px] h-[40px]"
              >
                <IoMdAdd className="text-fs_3" /> добавить
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
