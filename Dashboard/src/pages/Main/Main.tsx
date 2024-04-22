import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { GiftItem, ProjectsSlider, SaleSlider, News } from '../../components';
import ProductNav from '../../components/ProductNav/ProductNav';
import SliderProduct from '../../components/SliderProduct/SliderProduct';

import { Dishes, Faq, MainCatalog } from '../../components';
import MainBanner from '../../components/MainBanner/MainBanner';
import SliderProductHit from '../../components/SlideProductHit/SlideProductHit';
const Main: React.FC = () => {
  return (
    <DefaultLayout>
      <div className=" my-4">
        <GiftItem />
      </div>
      <div className=" my-4">
        <MainBanner />
      </div>
      <div className="container_xxl px-3 mt-10">
        <MainCatalog />
      </div>

      <div className="w-full">
        <SliderProduct />
      </div>
      <div className="container_xxl px-3 mt-10">
        <Dishes />
      </div>
      <div className="container_xxl px-3 mt-10">
        <Faq />
      </div>
      <div>
        <ProjectsSlider />
      </div>
      <div className="container_xxl px-3 mt-10 ">
        <News title="Статьи!" />
      </div>

      <div className="w-full mb-10">
        <SliderProductHit />
      </div>
    </DefaultLayout>
  );
};

export default Main;
