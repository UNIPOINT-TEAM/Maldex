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
<<<<<<< HEAD
=======
import React from "react";
import {
  AboutInfo,
  BannerSlider,
  BannerTop,
  Brands,
  ProductCard,
  ProductNav,
  QuestForm,
>>>>>>> ddec433 (add page 404)
=======
>>>>>>> 0facdc4 (restart branch 2)
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
<<<<<<< HEAD
=======
      <div className="">
        <div className="flex gap-3">
          <div className="w-2/5">
            <BannerTop />
          </div>
          <div className="w-3/5">
            <BannerSlider />
          </div>
        </div>
>>>>>>> ddec433 (add page 404)
=======
>>>>>>> 0facdc4 (restart branch 2)
        <Brands />
        <div>
          <AboutInfo />
        </div>
        <div className="container_xxl">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* @ts-expect-error: This */}
          <ProductNav  color="green"  title="hits!"/>
          { /*@ts-expect-error: This */}
          <SliderProduct/>
=======
          hits
          <ProductNav />
          <ProductCard />
>>>>>>> ddec433 (add page 404)
=======
          hits
          <ProductNav />
=======
          
          <ProductNav color="green"  title="hits!"/>
>>>>>>> db87467 (restart branch 3)
          <SliderProduct/>
>>>>>>> 0facdc4 (restart branch 2)
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
