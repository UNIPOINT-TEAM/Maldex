import React from "react";
import {
  AboutInfo,
  BannerSlider,
  BannerTop,
  Brands,
  ProductCard,
  ProductNav,
  QuestForm,
  Steps,
} from "../../components";
import PortfolioBanner from "../../components/PortfolioBanner/PortfolioBanner";

function Company() {
  return (
    <>
      <div className="">
        <div className="flex gap-3">
          <div className="w-2/5">
            <BannerTop />
          </div>
          <div className="w-3/5">
            <BannerSlider />
          </div>
        </div>
        <Brands />
        <div>
          <AboutInfo />
        </div>
        <div className="container_xxl">
          hits
          <ProductNav />
          <ProductCard />
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
