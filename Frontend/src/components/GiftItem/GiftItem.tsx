import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetchHook } from "../../hooks/UseFetch";
import { Swiper, SwiperSlide } from "swiper/react";

const GiftItem = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({
      method: "GET",
      url: "/product/categories/?new_category=true",
    });
  }, []);

  return (
    <div className="gift-category container_xxl py-3 flex items-start gap-6 overflow-auto">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 15,
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {response.map((item) => (
          <SwiperSlide className="flex justify-center">
            <div className=" flex w-[70px] items-center justify-center">
              <Link
                to={"/catalog"}
                className=" flex items-center flex-col justify-center gap-1 "
              >
                <div className="border w-[70px] h-[70px] border-lightPrimary p-3 rounded-xl hover:bg-white duration-300">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-contain "
                  />
                </div>
                <p className="text-center px-1 text-fs_8 font-semibold font-helvetica-neue-black-condensed">
                  {item.name}
                </p>
              </Link>
            </div>
            <p className="text-center px-1 text-[11px] font-medium font-helvetica-neue-black-condensed">
              {item.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GiftItem;
