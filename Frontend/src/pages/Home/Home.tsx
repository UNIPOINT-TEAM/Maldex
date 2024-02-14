import MainCategory from "../../components/MainCategory/MainCategory";
import image1 from "../../assets/article-bg-1.png";
import image2 from "../../assets/article-bg-2.png";
import image3 from "../../assets/article-bg-3.png";
import image4 from "../../assets/article-bg-4.png";
import { FAQ } from "../../components";

const Home = () => {
  return (
    <div className="home p-4">
      <div className="faq container_xxl flex  ">
        <h3 className="section-title">FAQ</h3>
        <FAQ />
      </div>
      <div className="articles container_xxl">
        <h3 className="section-title">статьи</h3>
        <div className="flex flex-col gap-3 ">
          <div className="flex-grow flex gap-3">
            <div className="w-full md:w-1/2">
              <div
                className="p-5 bg-cover text-white h-[340px]"
                style={{
                  backgroundImage: `url(${image1})`,
                }}
              >
                <div className="md:w-[65%]">
                  <h3 className="text-[24px] font-helvetica">2.10</h3>
                  <h2 className="text-[28px] font-medium ">
                    Маска для лица многоразовая из хлопка, анатомической формы
                  </h2>
                  <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                    NEW
                  </span>
                  <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                    HIT
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="p-5 bg-cover text-white h-[340px]"
                style={{
                  backgroundImage: `url(${image2})`,
                }}
              >
                <div className="md:w-[65%]">
                  <h3 className="text-[24px]">2.10</h3>
                  <h2 className="text-[28px] font-medium ">
                    Маска для лица многоразовая из хлопка, анатомической формы
                  </h2>
                  <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                    NEW
                  </span>
                  <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                    HIT
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-full md:w-1/4">
              <div
                className="p-5 bg-cover text-white h-[340px]"
                style={{
                  backgroundImage: `url(${image3})`,
                }}
              >
                <h3 className="text-[24px]">2.10</h3>
                <h2 className="text-[28px] font-medium ">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                  NEW
                </span>
                <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                  HIT
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div
                className="p-5 bg-cover text-white h-[340px]"
                style={{
                  backgroundImage: `url(${image4})`,
                }}
              >
                <h3 className="text-[24px]">2.10</h3>
                <h2 className="text-[28px] font-medium ">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                  NEW
                </span>
                <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                  HIT
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div
                className="p-5 bg-cover text-white h-[340px]"
                style={{
                  backgroundImage: `url(${image4})`,
                }}
              >
                <h3 className="text-[24px]">2.10</h3>
                <h2 className="text-[28px] font-medium ">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                  NEW
                </span>
                <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                  HIT
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4 ">
              <div className="py-10 h-full">
                <h2 className="text-[28px] font-medium text-redPrimary">
                  Все статьи
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MainCategory />
    </div>
  );
};

export default Home;
