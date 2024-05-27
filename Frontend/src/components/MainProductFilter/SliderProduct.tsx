import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { useState } from "react";
import Close from "../../assets/icons/close.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Dialog } from "@material-tailwind/react";
import ProductsCard from "./ProductsCard";
import { MdOutlineAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

/*@ts-expect-error: This */
const SliderProduct = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [activeProduct, setactiveProduct] = useState<any>({});
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
      addToCart({ ...product, quantity: addToCartData.quantity, totalPrice })
    );
  };

  return (
    <div className="container_xxl relative px-3">
      <Dialog
        placeholder={<div />}
        open={open}
        size={"xl"}
        handler={handleOpen}
        className="px-4 py-5 rounded-none text-black font-Helvetica-Neue bg-[#fff]"
      >
        <button className="flex ml-auto outline-none" onClick={handleOpen}>
          <img src={Close} alt="" />
        </button>
        <div className="grid grid-cols-3">
          <div className="w-full h-full flex relative justify-center col-span-1 ">
            <div className="card-product w-[200px] ">
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
                  className="swiper-item-modal w-[200px]"
                >
                  {/* @ts-expect-error: This */}
                  {activeProduct?.images_set?.map((item) => (
                    <SwiperSlide>
                      <img
                        className=""
                        src={item.image_url || item.image}
                        alt="no img"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full">
                <div className=" flex w-full justify-between pt-3">
                  <p className="text-base font-normal ">Количество</p>
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
                <p className="text-[16px] font-medium md:text-fs_4">
                  {activeProduct?.discount_price > 0
                    ? activeProduct?.discount_price
                    : activeProduct?.price}
                  <span className="ml-4 mr-1">{activeProduct?.price_type}</span>
                  <span className="text-xs absolute top-0 line-through text-redPrimary">
                    {activeProduct?.discount_price > 0 && activeProduct?.price}
                  </span>
                </p>
                <button
                  onClick={() => addToCartHandler(activeProduct)}
                  className="bg-redPrimary flex justify-between items-center uppercase p-2 text-white rounded-lg font-bold tracking-wider text-fs_8 lg:text-sm gap-1 lg:w-[130px]"
                >
                  <MdOutlineAdd className="text-fs_4" />В корзину
                </button>
              </div>
            </div>
          </div>
          <div className="w-full  col-span-2 py-2 md:px-10 h-[400px] md:h-auto overflow-y-scroll scrollbar-custom">
            <p className="text-fs_6 font-medium mb-3">{activeProduct?.name}</p>
            <p className="text-fs_8 text-darkSecondary font-medium mb-4 tracking-wide">
              {activeProduct?.article}
            </p>
            <p className="text-fs_6 mb-3 font-normal">Выбор цвета</p>
            <div className="flex gap-3 mb-3">
              <button className="bg-[#2b395c] w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-[#ece04c] w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-[#43ad58] w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-[#d9d9d9] w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-[#f0503b] w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-[#2b395c] w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-[#1017c2] w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-[#13bca8] w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-[#e99125] w-[30px] h-[30px] rounded-[15px]"></button>
            </div>
            {activeProduct.sizes && (
              <div className="">
                <p className="text-sm  mb-3 text-gray-400">Размер:</p>
                <div className="flex justify-start items-center gap-1 mb-3">
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
            )}
            <p className="text-2xl font-light mb-3">
              Материал: <span className="font-bold">Сатин</span>
            </p>
            <p className="text-2xl font-light mb-3">
              Вес: <span className="font-bold">157 гр.</span>
            </p>
            <p className="text-fs_7 font-normal">
              {activeProduct?.description}
            </p>
          </div>
        </div>
      </Dialog>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
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
        {/*@ts-expect-error: This */}
        {products?.map((item) => (
          <SwiperSlide key={item.id} className="w-full">
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
    </div>
  );
};
export default SliderProduct;
