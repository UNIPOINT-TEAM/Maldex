import { useEffect, useState } from 'react';
import { GetNewCategory } from '../../services/main';
import { AddMainCatalog, EditMainCatalog } from '..';
import { PutWithJson } from '../../services/maincatalog';

interface Category {
  logo: string;
  name: string;
  id: string;
}
const GiftItem = () => {
  const [newCategoryData, setNewCategoryData] = useState<Category[]>([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
  const [status, setStatus] = useState(false);
  const [secondOrder, setSecondOrder] = useState(null);
  const [firstOrder, setFirstOrder] = useState(null);
  const changeStatus = (newState: any) => {
    setStatus(newState);
  };

  const getData = () => {
    GetNewCategory().then((res) => {
      setNewCategoryData(res);
    });
  };

  useEffect(() => {
    getData();
  }, [status]);

  const handleImageChange = (id: string, newUrl: string, name: string) => {
    setNewCategoryData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, logo: newUrl, name: name } : item,
      ),
    );
    setIsBtnDisabled(false);
  };

  const changeOrder = () => {
    const orderCount = Number(secondOrder);
    const data1 = {
      order_top: orderCount,
    };
    // @ts-ignore
    PutWithJson(
      `/product/category/${newCategoryData[firstOrder - 1].id}/`,
      data1,
    ).then(() => window.location.reload());
  };

  return (
    <div className="pb-5">
      <div className="heading w-full flex justify-between">
        {/* <NewCategoryModal /> */}
        <div className="flex w-[400px] gap-2">
          <input
            onChange={(e) => setFirstOrder(e.target.value)}
            type="number"
            className="w-[80px] h-[40px] border rounded-md px-2"
          />
          <input
            onChange={(e) => setSecondOrder(e.target.value)}
            type="number"
            className="w-[80px] h-[40px] border rounded-md px-2"
          />
          <button
            onClick={changeOrder}
            className="h-[40px] bg-blue-400 w-[60px] rounded-md text-white"
          >
            ok
          </button>
        </div>
        <AddMainCatalog status={status} onChange={changeStatus} />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-2 mt-4 py-3 gap-y-[40px] ">
        {newCategoryData.map((item) => (
          <div
            className=" col-span-1 flex justify-center items-start"
            key={item.id}
          >
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
                <EditMainCatalog
                  categoryId={item.id}
                  status={status}
                  onChange={changeStatus}
                />
                <p>{item.order_top}</p>
                {/* <DeleteModal
                  url={`/product/category/${item.id}/`}
                  title={'delete this giftitem'}
                  status={status}
                  onChange={changeStatus}
                /> */}
                {/* <EditCategory {...item} handleImageChange={handleImageChange} />
                <DeleteCategory
                  newCategoryData={newCategoryData}
                  setNewCategoryData={setNewCategoryData}
                  id={item.id}
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-end gap-2 px-4 w-full">
        <Button
          onClick={getData}
          size="lg"
          className="font-satoshi inline-flex capitalize text-fs-5 items-center justify-center rounded-md border text-body border-body shadow-none py-2 px-6 text-center font-medium hover:bg-opacity-90 "
        >
          Отмена
        </Button>
        <Button
          size="lg"
          disabled={isBtnDisabled}
          className="font-satoshi inline-flex capitalize text-fs-5 items-center justify-center rounded-md bg-success py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
        >
          Save changes
        </Button>
      </div> */}
    </div>
  );
};

export default GiftItem;
