import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Product } from "../../types";
import { formatPrice } from "../../utils/FormatPrice";

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { DeleteLike, PostDataToken } from "../../pages/Auth/service";
import { Spinner } from "@material-tailwind/react";
interface ProductsCardProps {
  item: Product;
  loading?: boolean;
  setCardSetproduct: any;
}
const GiftProductCard: React.FC<ProductsCardProps> = ({
  item,
  setCardSetproduct,
  loading,
}) => {
  const [token, setToken] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [productItem, setproductItem] = useState<Product>({
    size: null,
    quantity: 1,
    color: item?.colorID?.name,
    warehouse: item.warehouse,
    name: item.name,
    images:
      item.images_set.length > 5
        ? item.images_set.slice(0, 5)
        : item.images_set,
    article: item.article,
    id: item.id,
    is_liked: item.is_liked,
    price: item?.discount_price > 0 ? item?.discount_price : item?.price,
    is_hit: item.is_hit,
    is_new: item.is_new,
    description: item.description,
    characteristics: item.characteristics,
    price_type: item.price_type,
    discount_price: item.discount_price,
    colorID: item.colorID,
    sizes: item.sizes,
    circulation: item.circulation,
  });

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  const handleFiltreColor = (item: Product) => {
    setproductItem({
      ...productItem,
      id: item?.id,
      name: item?.name,
      color: item?.colorID?.name,
      article: item?.article,
      images_set: item?.images_set,
      warehouse: item?.warehouse,
      is_liked: item?.is_liked,
      price: item?.discount_price > 0 ? item?.discount_price : item?.price,
      is_hit: item?.is_hit,
      is_new: item?.is_new,
      description: item?.description,
      characteristics: item?.characteristics,
      price_type: item?.price_type,
      discount_price: item?.discount_price,
      colorID: item?.colorID,
      sizes: item?.sizes,
      circulation: item?.circulation,
    });
  };

  const postLike = (id: number, status: boolean) => {
    const data = {
      is_liked: status,
    };
    PostDataToken(`product/${id}/like/`, data)
      .then(() => setproductItem({ ...productItem, is_liked: true }))
      .catch((err) => console.log(err));
  };
  const deleteLike = (id: number) => {
    DeleteLike(`product/${id}/like/`)
      .then(() => setproductItem({ ...productItem, is_liked: false }))
      .catch((err) => console.log(err));
  };
  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = carouselRef?.current?.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    const newIndex = Math.floor(percentage * productItem.images.length);
    if (newIndex >= 0) setCurrentIndex(newIndex);
  };
  const addGiftCart = (newProductItem: Product) => {
    setCardSetproduct((prev: any[]) => {
      // Find if the product already exists in the cardSetproduct
      const existingProductIndex = prev.findIndex(
        (item) => item.product_sets.id === newProductItem.id
      );

      if (existingProductIndex !== -1) {
        // If the product exists, update the quantity
        return prev.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + newProductItem.quantity }
            : item
        );
      } else {
        // If the product doesn't exist, add it to the list
        return [
          ...prev,
          {
            id: newProductItem.id,
            product_sets: {
              id: newProductItem.id,
              article: newProductItem.article,
              name: newProductItem.name,
              description: newProductItem.description,
              images_set: newProductItem.images,
            },
            quantity: newProductItem.quantity,
          },
        ];
      }
    });
  };
  if (loading) {
    return (
      <div className="max-w-[270px] h-[400px] w-full bg-white flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="catalog group max-w-[270px] w-full text-darkPrimary">
        <div
          ref={carouselRef}
          onMouseMove={handleMouseMove}
          className="relative swiper-top-container h-[180px] md:h-[250px] cursor-pointer mb-4 bg-white hover:bg-[#fff]"
        >
          <div className="w-full h-full" onClick={() => handleOpen(item)}>
            <div className="relative w-full h-full">
              <div className="flex w-full justify-center items-center  h-full mix-blend-multiply">
                <img
                  className="mb-2 w-[75%] md:h-[75%] h-[65%] object-contain  "
                  src={
                    productItem.images[currentIndex]?.image_url
                      ? productItem.images[currentIndex]?.image_url
                      : productItem.images[currentIndex]?.image
                  }
                  alt={`product-image-${currentIndex}`}
                  loading="lazy"
                />
              </div>
              <div className=" group-hover:block hidden w-full h-2 bottom-4 left-0 absolute">
                <div className="w-full h-2 flex gap-1 justify-center items-center">
                  {productItem.images.map((_item, index) => (
                    <div
                      key={index}
                      className={`max-w-4 w-full h-[3px] rounded-md ${
                        index === currentIndex
                          ? "bg-red-500"
                          : " bg-darkSecondary"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute  z-[9999] bottom-[25px] right-[15px] flex flex-col justify-center items-center gap-1 swiper-opacity">
            {item?.colors?.length > 0 &&
              item?.colors?.map((el) => (
                <button
                  onMouseOver={() => handleFiltreColor(el.product)}
                  style={{
                    backgroundColor: el.hex ? el.hex : "#000000",
                  }}
                  className={` rounded-full ${
                    productItem?.id === el.product.id
                      ? "min-h-[10px] min-w-[10px]"
                      : "w-[8px] h-[8px]"
                  }`}
                ></button>
              ))}
          </div>
          <div className="absolute z-[999] top-2 left-2  gap-2 hidden md:flex">
            {item.is_new && <Badge name="NEW" type="NEW" />}
            {item.is_hit && <Badge name="HIT" type="HIT" />}
          </div>
          {token ? (
            <div className="absolute z-[999] top-1 right-3 flex gap-2">
              {productItem?.is_liked ? (
                <IoMdHeart
                  size={20}
                  color="red"
                  onClick={() => deleteLike(item.id)}
                />
              ) : (
                <IoMdHeartEmpty
                  size={20}
                  onClick={() => postLike(item.id, true)}
                />
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" min-h-[180px] flex flex-col justify-between">
          <div className="min-h-[100px]">
            <h2 className="text-black text-fs_7 mb-2 font-medium">
              {item?.name}
            </h2>
            <div className="opacity-0 group-hover:opacity-100">
              {item?.warehouse?.length > 0 &&
                productItem?.warehouse?.map((item, i) => (
                  <p key={i} className="text-fs_8 opacity-70 font-medium ">
                    {item?.name}: {item.quantity}
                  </p>
                ))}
              <p className="opacity-70 text-fs_8">
                <span className="font-medium">Артикул: </span>
                {productItem?.article}
              </p>
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
          <div className="flex justify-between catalog_btns gap-2 mt-2">
            <button
              onClick={() => addGiftCart(productItem)}
              className="bg-redPrimary uppercase font-medium flex items-center justify-center gap-1 py-2  text-white tracking-wider rounded-[10px] text-fs_7 mdtext-sm w-[110px]"
            >
              добавить
            </button>
            <button className="bg-white px-2 md:px-3 py-1 rounded-lg text-gray-700">
              <Link
                to={`/category/${productItem?.id}`}
                className="w-full h-full flex justify-center items-center"
              >
                <CiSearch className="text-fs_4" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftProductCard;
