import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsCard from "../MainProductFilter/ProductsCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useFetchHook } from "../../hooks/UseFetch";
import { useEffect } from "react";

const CartProductCarusel = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/product/?is_popular=true" });
  }, []);
  console.log(response);
  return (
    <div className="w-full px-3 relative me-3">
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
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay]}
        className=" w-full overscroll-x-auto h-[430px] md:h-[500px]"
      >
        {/* @ts-expect-error: This */}
        {response.results?.map((item) => (
          <SwiperSlide key={item.id} className="w-full">
            <ProductsCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden ms-3 lg:flex bg-white prev text-black  hover:text-white">
        <FaArrowLeftLong />
      </div>
      <div className="hidden me-4 lg:flex bg-white next text-black hover:text-white">
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default CartProductCarusel;
