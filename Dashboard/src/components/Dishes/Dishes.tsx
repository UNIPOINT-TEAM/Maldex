import { useEffect, useState } from 'react';

import { GetSubSubCatalog, PostData } from '../../services/maincatalog';
import { BASE_URL } from '../../utils/BaseUrl';
import { Option, Select } from '@material-tailwind/react';

const Dishes = () => {
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const [allcategory, setAllCategory] = useState(null);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    GetSubSubCatalog(BASE_URL + `/product/home-category/`).then((res) => {
      setCategory(res), setCategories(res?.children?.slice(0, 8));
    });
    GetSubSubCatalog(BASE_URL + `/product/categories/main_categories`).then(
      (res) => {
        setAllCategory(res);
      },
    );
  }, [status]);

  const postCategory = (id: any) => {
    PostData(BASE_URL + `/product/home-category/`, { id: id }).then(() =>
      setStatus(!status),
    );
  };

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl ">
          {category != null
            ? // @ts-ignore
              category.name
            : ''}
        </h3>
        <div className="w-1/5">
          {allcategory != null ? (
            <Select label="Select Version">
              {// @ts-ignore
              allcategory?.map((i) => (
                <Option onClick={() => postCategory(i?.id)}>{i?.name}</Option>
              ))}
            </Select>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="w-full mb-[80px]">
        <div className="grid grid-rows-3 h-[360px] grid-cols-12 grid-flow-col gap-4">
          <div className="col-span-12 lg:col-span-9 h-full row-span-3">
            <div className="grid grid-cols-5 md:grid-cols-11 h-full gap-[10px]">
              <div className="col-span-3 bg-white flex items-center justify-center h-[360px]">
                <img
                  // @ts-ignore
                  src={category?.products[0]?.images_set[0]?.image_url}
                  alt=""
                />
              </div>
              <div className="col-span-2 lg:col-span-4">
                <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 h-full gap-[10px]">
                  <div className="bg-white flex items-center justify-center h-[170px]">
                    <img
                      // @ts-ignore
                      src={category?.products[1]?.images_set[0]?.image_url}
                      alt=""
                      className="h-full"
                    />
                  </div>
                  <div className="bg-white flex items-center justify-center h-[170px]">
                    <img
                      // @ts-ignore
                      src={category?.products[2]?.images_set[0]?.image_url}
                      alt=""
                      className="h-full"
                    />
                  </div>
                  <div className="bg-white items-center justify-center hidden lg:flex h-[175px]">
                    <img
                      // @ts-ignore
                      src={category?.products[3]?.images_set[0]?.image_url}
                      alt=""
                      className="h-full"
                    />
                  </div>
                  <div className="bg-white items-center justify-center hidden lg:flex h-[175px]">
                    <img
                      // @ts-ignore
                      src={category?.products[4]?.images_set[0]?.image_url}
                      alt=""
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 bg-white  items-center justify-center hidden md:flex h-[360px]">
                <img
                  // @ts-ignore
                  src={category?.products[5]?.images_set[0]?.image_url}
                  alt=""
                  className="h-full"
                />
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-3 hidden lg:block">
            <div className="grid grid-rows-2 grid-cols-1 gap-4 h-full">
              <div className="row-span-1 col-span-1 flex flex-col gap-[3px]">
                {// @ts-ignore
                categories?.map((i) => (
                  <p className="text-[14px] text-black font-medium">
                    {i?.name}
                    <b className="text-sm text-red-500 ms-1 font-medium">
                      {i?.count}
                    </b>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dishes;
