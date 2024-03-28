import { Link } from 'react-router-dom';
import NewCategoryModal from './NewCategoryModal';
import EditCategory from './EditCategory';
import DeteleteCategory from './DeteleteCategory';
import { useEffect, useState } from 'react';
import { GetNewCategory } from '../../services/main';

interface Category {
  logo: string;
  name: string;
}
const GiftItem = () => {
  const [newCategoryData, setNewCategoryData] = useState<Category[]>([]);
  useEffect(() => {
    GetNewCategory().then((res) => {
      console.log(res);
      setNewCategoryData(res);
    });
  }, []);
  return (
    <div className="">
      <div className="heading w-full flex justify-end">
        <NewCategoryModal />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-12 mt-4 py-3 gap-y-[40px] ">
        {newCategoryData.map((item) => (
          <div className=" col-span-1 flex items-start">
            <div className=" flex flex-col w-[100px] h-[150px]  justify-between">
              <Link
                to={''}
                className=" flex items-center flex-col justify-center gap-1 "
              >
                <div className="border w-[70px] h-[70px] border-lightPrimary p-3 rounded-xl hover:bg-white duration-300">
                  <img
                    src={item?.logo}
                    alt={item?.name}
                    className="w-full h-full object-contain "
                  />
                </div>
                <p className="text-center leading-tight px-1 text-[12px] font-Helvetica-Neue font-medium">
                  {item.name}
                </p>
              </Link>
              <div className="w-full flex justify-between gap-1">
                <EditCategory />
                <DeteleteCategory />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftItem;
