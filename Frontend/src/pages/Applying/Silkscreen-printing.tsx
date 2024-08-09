import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useFetchHook } from "../../hooks/UseFetch";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
const data = [
  {
    label: "описание",
    value: "описание",
  },
  {
    label: "технические требования",
    value: "технические",
  },
];
const SilkscreenPrinting = () => {
  const [activeTab, setActiveTab] = useState("описание");
  const { id } = useParams();
  console.log(id);
  const { fetchData: fetchPrinting, response: responsePrint } = useFetchHook();
  useEffect(() => {
    fetchPrinting({
      method: "GET",
      url: `/print-categories/${id}`,
    });
  }, [id]);
  console.log(responsePrint);

  return (
    <div className="w-full">
      <h2 className="text-[28px] font-bold px-2 md:px-0">
        {responsePrint.title}
      </h2>
      <Tabs value={activeTab}>
        <TabsHeader
          placeholder={<div />}
          className="rounded-none gap-8 border-b border-blue-gray-50 bg-transparent p-0 px-2"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 md:border-b-4 border-redPrimary shadow-none rounded-none",
          }}
        >
          {data?.map(({ label, value }) => (
            <Tab
              placeholder={<div />}
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={` w-auto text-start p-0 ${
                activeTab === value ? "text-redPrimary" : "text-darkSecondary"
              }`}
            >
              <h2 className="font-Helvetica-Neue font-medium uppercase text-fs_7 md:text-fs_6 py-2 md:py-4">
                {label}
              </h2>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
          placeholder={<div />}
        >
          <TabPanel
            value={"описание"}
            className="w-full  text-black font-medium "
          >
            {responsePrint?.images?.length > 0 ? (
              <div className="z-[999] relative w-full  md:px-5 mb-10">
                <Swiper
                  loop
                  navigation={{
                    prevEl: ".prev-arrow-description",
                    nextEl: ".next-arrow-description",
                  }}
                  modules={[Navigation, Pagination]}
                  className="w-full h-[200px] md:h-[400px] "
                >
                  {responsePrint?.images?.map((item) => (
                    <SwiperSlide className="w-full">
                      <img
                        src={item}
                        alt="slider-img"
                        className="w-full border object-cover md:object-contain h-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute hidden md:flex top-[50%] left-0 text-black w-full  justify-between -translate-y-[50%] z-[9999]">
                  <button className="prev-arrow-description  bg-white rounded-xl w-[50px] h-[50px] border border-black flex items-center justify-center">
                    <FaArrowLeft className="text-fs_8 lg:text-fs_4" />
                  </button>
                  <button className="next-arrow-description  bg-white rounded-xl w-[50px] h-[50px] border border-black flex items-center justify-center">
                    <FaArrowRight className="text-fs_8 lg:text-fs_4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className=" w-full h-[200px] md:h-[400px] bg-white mb-10 flex justify-center items-center">
                <p className="text-fs_3 text-darkSecondary">Пример баннера</p>
              </div>
            )}
            <div
              className="w-full h-full text-black font-medium font-Helvetica-Neue mx-2 md:mx-0"
              dangerouslySetInnerHTML={{ __html: responsePrint?.content }}
            ></div>
          </TabPanel>
          <TabPanel
            value={"технические"}
            className="w-full  text-black font-medium mx-2 md:mx-0"
          >
            <div
              className="w-full h-full text-black font-medium font-Helvetica-Neue"
              dangerouslySetInnerHTML={{ __html: responsePrint?.requirement }}
            ></div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default SilkscreenPrinting;
