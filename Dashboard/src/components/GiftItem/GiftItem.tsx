import NewCategoryModal from './NewCategoryModal';
import EditCategory from './EditCategory';
import { useEffect, useState } from 'react';
import { GetNewCategory } from '../../services/main';
import DeleteCategory from './DeleteCategory';

interface Category {
  logo: string;
  name: string;
  id: string;
}
const GiftItem = () => {
  const [newCategoryData, setNewCategoryData] = useState<Category[]>([]);
  useEffect(() => {
    GetNewCategory().then((res) => setNewCategoryData(res));
  }, []);
  return (
    <div className="">
      <div className="heading w-full flex justify-end">
        <NewCategoryModal />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-2 mt-4 py-3 gap-y-[40px] ">
        {newCategoryData.map((item) => (
          <div className=" col-span-1 flex justify-center items-start">
            <div className=" flex flex-col w-[90px]  h-[145px]  justify-between">
              <div className=" flex items-center flex-col justify-center gap-1 ">
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
              </div>
              <div className="flex justify-between ">
                <EditCategory />
                <DeleteCategory
                  newCategoryData={newCategoryData}
                  setNewCategoryData={setNewCategoryData}
                  id={item.id}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftItem;
