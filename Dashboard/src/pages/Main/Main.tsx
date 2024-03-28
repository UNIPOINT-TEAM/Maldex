import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { GiftItem } from '../../components';
import MainBanner from '../../components/MainBanner/MainBanner';

import { Link } from 'react-router-dom';
import ProductNav from '../../components/ProductNav/ProductNav';
import SliderProduct from '../../components/SliderProduct/SliderProduct';
const Main: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="my-4 border-0 border-b px-4 md:px-6 2xl:px-10">
        <GiftItem />
      </div>
      <div className=" border-0 border-b px-4 md:px-6 2xl:px-10">
        <MainBanner />
      </div>
      Banner
      <div className="container_xxl px-3 mt-10">
        <ProductNav title="new!" color="red" />
      </div>
      <div className="w-full">
        <SliderProduct />
      </div>
      <div className="container_xxl px-3 mt-10">
        <ProductNav title="hits!" color="green" />
      </div>
      <div className="w-full">
        <SliderProduct />
      </div>
    </DefaultLayout>
  );
};

export default Main;
