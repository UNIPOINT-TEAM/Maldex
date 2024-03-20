<<<<<<< HEAD
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
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
  Steps,
} from "../../components";
import PortfolioBanner from "../../components/PortfolioBanner/PortfolioBanner";

function Company() {
  return (
    <>
<<<<<<< HEAD
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
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
        <Brands />
        <div>
          <AboutInfo />
        </div>
        <div className="container_xxl">
          hits
          <ProductNav />
<<<<<<< HEAD
          <SliderProduct/>
=======
          <ProductCard />
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
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
