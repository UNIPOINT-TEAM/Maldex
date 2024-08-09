import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { useState } from "react";
import Close from "../../assets/icons/close.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Dialog } from "@material-tailwind/react";
import ProductsCard from "./ProductsCard";
import { MdOutlineAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Product } from "../../types";
import { formatPrice } from "../../utils/FormatPrice";
import ProductSize from "../CategoryDetails/ProductSize";
import { Link } from "react-router-dom";
import SendForm from "../QuestForm/SendForm";

const SliderProduct: React.FC<{
  products: Product[];
  activeCategoryId: number;
  subCategories?: any;
}> = ({ products, activeCategoryId, subCategories }) => {
  const [open, setOpen] = useState(false);
  const [activeProduct, setactiveProduct] = useState<any>({});
  const [btnActiveSize, setbtnActiveSize] = useState(1);
  const [addToCartData, setaddToCartData] = useState({
    quantity: 1,
    size: null,
    color: null,
  });

  const handleOpen = (product: any) => {
    setOpen(!open);
    setactiveProduct(product);
  };
  const dispatch = useDispatch();

  const addToCartHandler = (product: any) => {
    const totalPrice =
      activeProduct?.discount_price > 0
        ? addToCartData.quantity * activeProduct?.discount_price
        : addToCartData.quantity * activeProduct?.price;

    dispatch(
      addToCart({
        ...product,
        quantity: addToCartData.quantity,
        totalPrice,
      })
    );
  };

  return (
    <div className="container_xxl relative bg-re">
      <Dialog
        placeholder={<div />}
        open={open}
        size={"xl"}
        handler={handleOpen}
        className="px-4 py-5 max-h-screen flex items-center overflow-y-auto scrollbar-custom rounded-none text-black font-Helvetica-Neue bg-[#fff] "
      >
        <div className="w-full md:max-h-[450px]">
          <button
            className="flex ml-auto outline-none z-20 sticky top-5 md:right-5"
            onClick={handleOpen}
          >
            <img src={Close} alt="close-icon" />
          </button>
          <div className="grid  md:grid-cols-3">
            <div className="w-full h-full flex relative justify-center md:col-span-1 ">
              <div className="card-product w-[200px]">
                <div className="heading bg-white h-[200px] w-full relative">
                  <div className="prevModal absolute top-[40%] z-[999] -left-14 flex justify-center items-center">
                    <FaArrowLeftLong />
                  </div>
                  <div className="nextModal absolute top-[40%] z-[999] -right-14 flex justify-center items-center">
                    <FaArrowRightLong />
                  </div>
                  <Swiper
                    navigation={{
                      prevEl: ".prevModal",
                      nextEl: ".nextModal",
                    }}
                    modules={[Navigation]}
                    className="swiper-item-modal w-[200px] h-[200px]"
                  >
                    {/* @ts-expect-error: This */}
                    {activeProduct?.images_set?.map((item) => (
                      <SwiperSlide className="mix-blend-multiply flex items-center justify-center">
                        <img
                          className="object-contain p-2 mix-blend-multiply"
                          src={item.image_url || item.image}
                          alt="no img"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="w-full">
                  <div className="flex w-full justify-between pt-3">
                    <p className="text-base font-normal">Количество</p>
                    <input
                      value={addToCartData.quantity}
                      onChange={(e) =>
                        setaddToCartData({
                          ...addToCartData,
                          quantity: Number(e.target.value),
                        })
                      }
                      className="border placeholder:text-darkPrimary border-darkPrimary font-bold text-center rounded-lg w-[50px] px-2 text-sm py-[2px]"
                      type="text"
                    />
                  </div>
                  <p className="text-[16px] font-medium md:text-fs_4 relative mt-2">
                    {activeProduct?.discount_price > 0
                      ? formatPrice(activeProduct?.discount_price)
                      : formatPrice(activeProduct?.price)}
                    <span className="ml-4 mr-1">
                      {activeProduct?.price_type}
                    </span>
                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                      {activeProduct?.discount_price > 0 &&
                        activeProduct?.price}
                    </span>
                  </p>
                  <button
                    onClick={() => addToCartHandler(activeProduct)}
                    className="bg-redPrimary flex justify-between mt-1 items-center uppercase p-2 text-white rounded-lg font-bold tracking-wider text-fs_8 lg:text-sm gap-1 lg:w-[130px]"
                  >
                    <MdOutlineAdd className="text-fs_4" />В корзину
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full  md:col-span-2 py-2 md:px-10 h-[400px] md:h-auto ">
              <p className="text-fs_6 font-medium mb-3">
                {activeProduct?.name}
              </p>
              <p className="text-fs_8 text-[#222220] font-medium mb-4 tracking-wide">
                {activeProduct?.article}
              </p>
              <p className="text-fs_6 mb-3 font-normal">Выбор цвета</p>
              <div className="flex gap-3 mb-3">
                {activeProduct?.colors?.map((item, idx) => (
                  <div
                    onClick={() =>
                      setaddToCartData({ ...addToCartData, color: item.color })
                    }
                    key={idx}
                    style={{
                      backgroundColor: item.hex,
                      borderColor: item.hex !== "white" && item.hex,
                    }}
                    className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full border cursor-pointer ${
                      addToCartData.color === item.color && "p-[1px]"
                    }`}
                  >
                    {addToCartData.color === item.color && (
                      <div className="w-full h-full border-[3px] md:border-[5px] border-[#fff] rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
              {activeProduct.sizes && (
                <div className="">
                  <p className="text-sm  mb-3 text-gray-400">Размер:</p>
                  <div className="flex space-x-2">
                    {activeProduct?.sizes?.map(
                      (item, i) =>
                        item.name && (
                          <ProductSize
                            {...item}
                            onActiveSize={setbtnActiveSize}
                            btnActiveSize={btnActiveSize}
                            index={i}
                            key={i}
                          />
                        )
                    )}
                  </div>
                </div>
              )}
              {activeProduct.material && (
                <p className="text-fs_6 font-normal mb-3">
                  Материал: <span className="font-bold">Сатин</span>
                </p>
              )}

              <p className="text-fs_6 font-normal mb-3">
                Вес: <span className="font-bold">157 гр.</span>
              </p>
              <p className="text-fs_7 font-normal">
                {activeProduct?.description}
              </p>
            </div>
          </div>
        </div>
      </Dialog>
      {activeCategoryId > 0 && (
        <>
          <Swiper
            slidesPerView={2}
            spaceBetween={8}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5.5,
              },
            }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Scrollbar]}
            className=" w-full overscroll-x-auto h-[430px] md:h-[500px]"
          >
            {products?.map((item) => (
              <SwiperSlide key={item.id} className="w-full ">
                <ProductsCard item={item} handleOpen={handleOpen} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden lg:flex bg-white prev text-black  hover:text-white">
            <FaArrowLeftLong />
          </div>
          <div className="hidden lg:flex bg-white next text-black hover:text-white">
            <FaArrowRightLong />
          </div>
        </>
      )}

      {activeCategoryId < 0 && (
        <div className="w-full min-h-[350px] h-full">
          {activeCategoryId == -1 && (
            <div className=" grid grid-cols-5 h-full">
              {subCategories?.children?.slice(0, 5).map((item) => (
                <div className=" h-full">
                  <h2 className="font-bold text-fs_8 uppercase">
                    {item?.name}
                  </h2>
                  <ul className="mt-3">
                    {item?.children.slice(0, 9).map((e) => (
                      <li>
                        <Link to={""} className="text-fs_8 font-medium">
                          {e?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {activeCategoryId == -2 && (
            <div className="">
              <SendForm productDetails={true} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default SliderProduct;
