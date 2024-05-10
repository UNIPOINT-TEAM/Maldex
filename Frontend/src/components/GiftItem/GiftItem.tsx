import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetNewCategory } from "../../services/services";
import { useFetchHook } from "../../hooks/UseFetch";

const GiftItem = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "product/categories/?is_popular=true" });
  }, []);

  return (
    <div className="container_xxl px-3 ">
      <div className="gift-category py-3 hidden md:flex items-start gap-6 overflow-auto">
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
          {response &&
            response.map((item) => (
              <SwiperSlide className="flex justify-center" key={item.id}>
                <div className=" flex w-[70px] items-center justify-center">
                  <Link
                    to={`/catalog/${item?.id}`}
                    className=" flex items-center flex-col justify-center gap-1 "
                  >
                    <div className="border w-[70px] h-[70px] border-lightPrimary p-3 rounded-xl hover:bg-white duration-300">
                      <img
                        src={item?.logo}
                        alt={item?.name}
                        className="w-full h-full object-contain "
                      />
                    </div>
                    <p className="text-center px-1 text-[12px] font-Helvetica-Neue font-medium">
                      {item?.name}
                    </p>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="grid md:hidden grid-cols-3 gap-y-[10px] mt-5 mb-10">
        {response &&
          response.map((item) => (
            <div key={item.id} className=" flex items-start justify-center">
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
                  <p className="text-center px-1 text-[12px] font-Helvetica-Neue font-medium">
                    {item.name}
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GiftItem;
