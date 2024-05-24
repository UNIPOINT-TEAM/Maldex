import arrowRight from "../../assets/icons/arrow-right.png";
import { Link } from "react-router-dom";
import Slider from "../Banner/Slider";
/* @ts-expect-error: This */
function CompanyBannerTop({ BannerData }) {
  return (
    <div>
      <div className="container_xxl">
        <div
          className="grid grid-cols-4 gap-[9px]"
          style={{ mixBlendMode: "multiply" }}
        >
          <Link
            to={`category/${BannerData[0]?.product_set[0]?.productID?.id}`}
            className="group flex flex-col justify-between col-span-4 bg-white h-[200px] cursor-pointer hover:bg-[#fff] transition-all duration-200"
          >
            <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200 ">
              {BannerData && BannerData[0]?.product_set[0]?.productID?.name}
            </h2>
            <div
              className="h-[110px]  w-[300px] mx-auto  flex items-center justify-center"
              style={{ mixBlendMode: "multiply" }}
            >
              <Slider
                SliderItems={BannerData && BannerData[0]}
                sliderTime={2500}
              />
            </div>
            <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" />
              </button>
            </div>
          </Link>
          <Link
            to={`category/${BannerData[1]?.product_set[0]?.productID?.id}`}
            className="group bg-white h-[147px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200 col-span-2"
          >
            <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
              Бутылки для воды
            </h2>
            <div
              className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center"
              style={{ mixBlendMode: "multiply" }}
            >
              <Slider
                SliderItems={BannerData && BannerData[1]}
                sliderTime={3000}
              />
            </div>
            <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="w-4" />
              </button>
            </div>
          </Link>
          <Link
            to={`category/${BannerData[2]?.product_set[0]?.productID?.id}`}
            className="group bg-white h-[147px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200 col-span-2"
          >
            <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
              Бутылки для воды
            </h2>
            <div
              className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center"
              style={{ mixBlendMode: "multiply" }}
            >
              <Slider
                SliderItems={BannerData && BannerData[2]}
                sliderTime={3500}
              />
            </div>
            <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="w-4" />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyBannerTop;
