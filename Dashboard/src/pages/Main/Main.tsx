import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

import { Link } from 'react-router-dom';
const Main: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-12 gap-y-[10px] mb-10">
        <div className=" flex items-start ustify-center">
          <div className=" flex w-[70px] items-center justify-center">
            <Link
              to={'/catalog'}
              className=" flex items-center flex-col justify-center gap-1 "
            >
              <div className="border w-[70px] h-[70px] border-lightPrimary p-3 rounded-xl hover:bg-white duration-300">
                <img
                  src={''}
                  alt={''}
                  className="w-full h-full object-contain "
                />
              </div>
              <p className="text-center px-1 text-[12px] font-Helvetica-Neue font-medium">
                name
              </p>
            </Link>
          </div>
        </div>
      </div>
      Banner
    </DefaultLayout>
  );
};

export default Main;
