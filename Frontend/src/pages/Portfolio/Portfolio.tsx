import { Link } from "react-router-dom";
import image1 from "../../assets/portfolio/image1.jpg";
import image2 from "../../assets/portfolio/image2.png";
import image3 from "../../assets/portfolio/image3.png";
import image4 from "../../assets/portfolio/image4.png";
import image5 from "../../assets/portfolio/image5.png";
import image6 from "../../assets/portfolio/image6.png";
import { Badge, News, QuestForm } from "../../components";

function Portfolio() {
  return (
    <>
      <div className="container_xxl">
        <div className="mx-3">
          <div
            className="p-3 mb-5 lg:p-5  bg-cover text-white h-[180px] sm:h-[550px] "
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className="md:w-[65%]">
              <Badge name="NEW" type="NEW" />
              <Badge name="HIT" type="HIT" />
              <h3 className="text-fs_7 lg:text-[50px] text-[#475259] leading-tight font-medium ">
                welcome pack, <br /> для милых дам
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              className="p-3 lg:p-5 bg-cover text-white "
              style={{
                backgroundImage: `url(${image2})`,
              }}
            >
              <div className="">
                <h3 className="text-fs_5 lg:text-[28px] opacity-50">2.10</h3>
                <h2 className="text-[10px] lg:text-[28px] font-medium ">
                  Маска для лица <br /> многоразовая из хлопка,
                  <br /> анатомической формы{" "}
                </h2>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            </div>
            <div>
              <img src={image3} alt="" className="w-full h-full" />
            </div>
            <div>
              <img src={image4} alt="" className="w-full h-full" />
            </div>
            <div>
              <img src={image5} alt="" className="w-full h-full" />
            </div>
            <div>
              <img src={image6} alt="" className="w-full h-full" />
            </div>
            <div>
              <div className="bg-white h-full w-full flex flex-col justify-between">
                <div className="lg:pl-5 pl-1.5 pt-1  lg:pt-16 lg:pr-40 font-Articulat tracking-wider">
                  <span className="font-semibold">Cостав:</span>
                  <br />
                  <div className="text-[12px] lg:text-[14px] tracking-wide font-medium leading-snug">
                    <ul>
                      <li>бутылка для воды</li>
                      <li>рюкзак</li>
                      <li>ручка</li>
                      <li>чехол для пропуска</li>
                      <li>блокнот для записей А5</li>
                      <li>контейнер для еды со столовым прибором</li>
                      <li>ланъярд</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center pb-5 gap-3 font-bold text-[11px]">
                  <Link to="/build-set">
                    <button className="border text-white hover:text-greenPrimary  w-auto lg:w-[160px]  h-[55px]  uppercase  rounded-xl bg-greenPrimary  hover:bg-[#ffffff]  duration-300">
                      хочу также
                    </button>
                  </Link>
                  <Link to="/build-set">
                    <button className="border text-greenPrimary hover:text-white  w-auto lg:w-[160px]  h-[55px]  uppercase  rounded-xl bg-[#fff]  hover:bg-greenPrimary border-greenPrimary  duration-300">
                      посмотреть похожее
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <PortfolioBanner /> */}
          <News title="Новинки" />
          <QuestForm />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
