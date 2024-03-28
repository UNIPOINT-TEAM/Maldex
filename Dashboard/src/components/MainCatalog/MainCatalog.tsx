import React, { useEffect, useState } from 'react';
import { GetMainCatalog } from '../../services/maincatalog';
import { Link } from 'react-router-dom';
import '../../css/main.css';
import { AddMainCatalog, DeleteMainCatalog, EditMainCatalog } from '..';

const MainCatalog = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetMainCatalog().then((res) => {
      setCategories(res), console.log(res);
    });
  }, []);
  return (
    <>
      <AddMainCatalog />
      <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center mb-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-1/6 py-5 relative content hover:bg-redPrimary"
          >
            <img className="w-1/5 mb-5" src={category.icon} alt="" />

            <p className="text-lg mb-3">{category?.name}</p>
            {category?.children && category?.children?.length > 0 && (
              <>
                <p>{category?.children[0]?.name}</p>
                <p>{category?.children[0]?.children[0]?.name}</p>
              </>
            )}
            <div className="absolute w-full min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
              <div className="flex justify-between items-center mb-3">
                <img className="w-1/5 mb-5" src={category.icon} alt="" />
                <div className="flex flex-col gap-1">
                  <EditMainCatalog />
                  <button className="p-1 bg-red-600 h-[30px] w-[30px] rounded flex justify-center items-center">
                    <DeleteMainCatalog />
                  </button>
                </div>
              </div>
              <p className="text-lg mb-3">{category?.name}</p>
              {category?.children &&
                // @ts-ignore
                category?.children.map((childCategory) => (
                  <div
                    key={childCategory.id}
                    className="rounded hover:bg-green-200 hover:text-white py-1 "
                  >
                    <Link to="/catalog">
                      <p>{childCategory.name}</p>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCatalog;
