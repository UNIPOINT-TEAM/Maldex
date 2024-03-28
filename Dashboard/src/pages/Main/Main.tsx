import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { GiftItem } from '../../components';
import MainBanner from '../../components/MainBanner/MainBanner';

const Main: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="my-4 border-0 border-b px-4 md:px-6 2xl:px-10">
        <GiftItem />
      </div>
      <div className=" border-0 border-b px-4 md:px-6 2xl:px-10">
        <MainBanner />
      </div>
    </DefaultLayout>
  );
};

export default Main;
