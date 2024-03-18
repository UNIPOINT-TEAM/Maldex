import {
  AboutInfo,
  BannerBottom,
  BannerBottomMobile,
  BannerSlider,
  BannerTop,
  Brands,

  ProductNav,
  QuestForm,
  SliderProduct,
  Steps,
} from "../../components";
import PortfolioBanner from "../../components/PortfolioBanner/PortfolioBanner";

function Company() {
  return (
    <>
      <div className="container_xxl">
        <div className="flex gap-3">
          <div className=" w-2/5 hidden lg:block">
            {/* @ts-ignore */}
            <BannerTop />
          </div>
          <div className="w-full lg:w-3/5">
            <BannerSlider />
          </div>
        </div>
        <div>
          <BannerBottom />
          <BannerBottomMobile />
        </div>
        <Brands />
        <div>
          <AboutInfo />
        </div>
        <div className="container_xxl">
          hits
          <ProductNav />
          <SliderProduct/>
        </div>
        <div>
          <Steps />
        </div>
        <PortfolioBanner />
        <QuestForm />
      </div>
    </>
  );
}

export default Company;
