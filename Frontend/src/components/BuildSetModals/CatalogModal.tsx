import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useFetchHook } from "../../hooks/UseFetch";
interface IProps {
  handleFilterProduct: (query: string) => void;
}
const CatalogModal: React.FC<IProps> = ({ handleFilterProduct }) => {
  const [open, setOpen] = useState(false);
  const [sellectedCategory, setSellectedCategory] = useState(null);
  const { fetchData, response } = useFetchHook();

  useEffect(() => {
    fetchData({ method: "GET", url: "/product/categories/?is_available=true" });
  }, []);

  const handleSellectedCategory = (id: number) => {
    const subCategory = response.filter((item) => item?.id === id);
    setSellectedCategory(subCategory[0]);
  };
  const handleToggle = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLOrSVGElement>
  ) => {
    e.stopPropagation();
    setOpen(!open);
  };
  return (
    <>
      <button
        onClick={(e) => handleToggle(e)}
        className="flex font-Helvetica-Neue items-center gap-2 border border-black px-3 py-1 rounded-lg"
      >
        <FaBars /> Каталог
      </button>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal  absolute flex justify-end w-full right-0 top-0"
        >
          <div className="catalog-content  overflow-hidden z-[9999] max-w-[900px] bg-[#ffffff] w-full">
            <div className="heading p-5 flex justify-between">
              <h2 className="text-[22px]">Каталог</h2>
              <IoMdClose
                className="cursor-pointer text-[30px]"
                onClick={(e) => handleToggle(e)}
              />
            </div>
            <div className="body grid grid-cols-5 w-full ">
              <div className="category py-3 gap-2 px-5 col-span-2 flex flex-col items-start bg-white">
                {response.map((item) => (
                  <button
                    key={item?.id}
                    onClick={(e) => {
                      handleSellectedCategory(item?.id);
                      e.stopPropagation();
                    }}
                    className={`text-fs_6 flex items-center gap-3 h-[33px] px-3 rounded-lg  font-medium ${
                      /* @ts-expect-error: This */
                      item.id == sellectedCategory?.id
                        ? "bg-redPrimary text-[#ffff]"
                        : ""
                    } `}
                  >
                    <img
                      src={item?.icon}
                      alt="category-icon"
                      className="w-[24px] h-[24px]"
                    />
                    {item?.name}
                  </button>
                ))}
              </div>
              <div className="subcategory max-h-svh scrollbar-custom overflow-auto grid grid-cols-2  gap-7 font-medium text-fs_8 col-span-3 p-5">
                {/* @ts-expect-error: This */}
                {sellectedCategory?.children?.map((item) => (
                  <div className="" key={item?.id}>
                    <h2 className="text-fs_8 mb-3 font-bold uppercase font-Helvetica-Neue">
                      {item?.name}
                    </h2>
                    <div className="flex flex-col">
                      {item?.children?.map((item) => (
                        <p
                          onClick={() => {
                            handleFilterProduct(`category_id=${item?.id}`);
                            setOpen(false);
                          }}
                          className="font-medium text-fs_8 m-0 leading-normal hover:text-redPrimary"
                          key={item?.id}
                        >
                          {item?.name}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={(e) => handleToggle(e)}
            className="h-full z-[99] w-full top-[0] fixed left-0 bg-[#00000074] "
          ></div>
        </div>
      )}
    </>
  );
};

export default CatalogModal;
