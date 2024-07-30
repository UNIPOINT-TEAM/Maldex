import { useEffect, useState } from "react";
import { useFetchHook } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow-right.png";
import { Button } from "@material-tailwind/react";
import "./burger.css";

const NavbarModal = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState(false);
  const [activeCategoryItem, setActiveCategoryItem] = useState<number | null>(
    null
  );
  const [modal, setModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const modalToggle = () => {
    setModal(!modal);
    if (modal !== true) {
      setActiveItem(null);
      setActiveCategoryItem(null);
    }
  };
  const handleCategoryItemClick = (id: number) => setActiveCategoryItem(id);
  const { fetchData, response } = useFetchHook();
  const { fetchData: fetchData2, response: response2 } = useFetchHook();
  const [activeCategoryId, setActiveCategoryId] = useState<null | number>(null);
  useEffect(() => {
    fetchData({ method: "GET", url: "/product/categories/?is_available=true" });
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const handleCategoryClick = (index: number, id: number) => {
    setActiveCategoryId(id);
    setActiveItem(index);
    setActiveMobileItem(!activeMobileItem);
    fetchData2({ method: "GET", url: `product/?category_id=${id}` });
  };

  const productDetail = () => setModal(false);

  const handleSubCategory = (id: number) => {
    setActiveCategoryId(id);
    fetchData2({ method: "GET", url: `product/?category_id=${id}` });
  };

  const [isOpen, toggle] = useState(true);
  const c = isOpen ? "burger" : "burger open";

  const handleButtonClick = () => {
    modalToggle();
    toggle(!isOpen);
  };
  return (
    <>
      <button
        onClick={handleButtonClick}
        className="px-3 h-[36px] w-auto lg:w-[125px] bg-redPrimary rounded-lg flex items-center gap-2"
      >
        <div className={c} onClick={() => toggle(!isOpen)}>
          <span className="bar1 text-black"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
        <span className="text-white tracking-wide font-normal text-fs_6 hidden lg:block capitalize">
          Каталог
        </span>
      </button>
      {modal && (
        <div className="">
          <div className="modal top-[115px] absolute bg-[#fff] left-0 h-[95vh] w-full z-[9999]  hidden md:flex mb-5">
            <div className="w-[25%] bg-white h-full px-3 py-1 flex flex-col items-start z-[999] overflow-y-scroll">
              {response.map((i, index) => (
                <button
                  key={i.id}
                  className={`flex p-1.5 gap-[15px] items-center hover:bg-red-300 hover:text-white rounded-[8px] mb-[15px] px-3 ${
                    activeItem === index
                      ? "bg-redPrimary text-white"
                      : "hover:bg-redPrimary hover:text-white"
                  }`}
                  onClick={() => handleCategoryClick(index, i?.id)}
                  // @ts-expect-error: This
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    style={{
                      filter:
                        hoveredIndex === index || activeItem === index
                          ? "brightness(0) saturate(100%) invert(99%) sepia(5%) saturate(994%) hue-rotate(302deg) brightness(121%) contrast(100%)"
                          : "invert(17%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                    }}
                    className="w-[24px] h-[24px]"
                    src={i.icon}
                    alt=""
                  />
                  <p className="text-lg font-medium">{i.name}</p>
                </button>
              ))}
            </div>
            {activeItem !== null ? (
              <div className="w-[35%] bg-[#fff] px-3 py-1 flex flex-wrap overflow-y-scroll scrollbar-custom">
                {response[activeItem]?.children?.map((i: any) => (
                  <div
                    key={i.id}
                    onClick={() => handleSubCategory(i.id)}
                    className={`w-1/2 p-1.5 gap-2 cursor-pointer  items-center min-h-[100px]`}
                  >
                    <p className="text-fs_8 mb-3 uppercase font-bold  ">
                      {i.name}
                    </p>
                    {i?.children?.map((category: any) => (
                      <p
                        className={`text-fs_8 font-medium mb-1 hover:text-red-400 cursor-pointer ${
                          activeCategoryItem === category.id
                            ? "text-redPrimary"
                            : ""
                        }`}
                        onClick={() => handleCategoryItemClick(category.id)}
                      >
                        {category.name}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {activeItem !== null ? (
              <div className="w-[40%] bg-gray-200 h-full px-2 py-2 flex gap-2">
                <div className="h-full w-1/2 flex flex-col gap-2">
                  <div className="w-full h-[61%] bg-slate-100 hover:bg-[#fff] relative productCatalog cursor-pointer">
                    {/* @ts-expect-error: This */}
                    {response2?.results && response2?.results[0] ? (
                      <Link
                        to={`category/${
                          /* @ts-expect-error: This */
                          response2?.results && response2?.results[0]?.id
                        }`}
                        onClick={() => productDetail()}
                        className=" w-full h-full flex justify-center items-center"
                        style={{ mixBlendMode: "multiply" }}
                      >
                        <h2 className="absolute top-2 left-3 font-medium text-lg nameProductCatalog text-slate-100">
                          {/* @ts-expect-error: This */}
                          {response2?.results &&
                            response2?.results[0]?.name.substring(0, 12)}{" "}
                          ...
                        </h2>
                        <img
                          /* @ts-expect-error: This */
                          src={
                            (response2?.results &&
                              response2?.results[0]?.images_set[0]
                                ?.image_url) ||
                            (response2?.results &&
                              response2?.results[0]?.images_set[0]?.image)
                          }
                          alt="product-img"
                          className="w-[50%] object-contain"
                        />
                        <div className="w-full absolute bottom-5 right-5">
                          <div className="float-end">
                            <button className="p-1 rounded-lg bg-slate-100 btnProductCatalog">
                              <img
                                className="object-contain"
                                src={Arrow}
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-gray-300 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-12 w-12 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="w-full h-[30%] bg-slate-100 hover:bg-[#fff]  relative productCatalog cursor-pointer">
                    {response2?.results && response2?.results[1] ? (
                      <Link
                        to={`category/${
                          /* @ts-expect-error: This */
                          response2?.results && response2?.results[1]?.id
                        }`}
                        onClick={productDetail}
                        className="w-full h-full flex justify-center items-center"
                        style={{ mixBlendMode: "multiply" }}
                      >
                        <h2 className="absolute top-2 left-3 font-medium text-lg nameProductCatalog text-slate-100">
                          {/* @ts-expect-error: This */}
                          {response2?.results &&
                            response2?.results[1]?.name.substring(0, 12)}
                          ...
                        </h2>
                        <img
                          src={
                            /* @ts-expect-error: This */
                            (response2?.results &&
                              response2?.results[1]?.images_set[0]
                                ?.image_url) ||
                            (response2?.results &&
                              response2?.results[1]?.images_set[0]?.image)
                          }
                          alt="product-img"
                          className="h-[50%] object-contain"
                        />
                        <div className="w-full absolute bottom-5 right-5">
                          <div className="float-end">
                            <button className="p-1 rounded-lg bg-slate-100 btnProductCatalog">
                              <img
                                src={Arrow}
                                alt=""
                                className="object-contain"
                              />
                            </button>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-gray-300 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-12 w-12 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className="h-full w-1/2 flex flex-col gap-2">
                  <div className="w-full h-[30%]  hover:bg-[#fff]  relative productCatalog cursor-pointer">
                    {response2.results && response2.results[2] ? (
                      <Link
                        /* @ts-expect-error: This */
                        to={`category/${
                          response2?.results && response2?.results[2]?.id
                        }`}
                        onClick={productDetail}
                        className="w-full h-full flex justify-center items-center"
                        style={{ mixBlendMode: "multiply" }}
                      >
                        <h2 className="absolute top-2 left-3 font-medium text-lg nameProductCatalog text-slate-100">
                          {/* @ts-expect-error: This */}
                          {response2?.results &&
                            response2?.results[2]?.name.substring(0, 12)}
                          ...
                        </h2>
                        <img
                          /* @ts-expect-error: This */
                          src={
                            (response2?.results &&
                              response2?.results[2]?.images_set[0]
                                ?.image_url) ||
                            (response2?.results &&
                              response2?.results[2]?.images_set[0]?.image)
                          }
                          alt="product-img"
                          className="h-[50%] object-contain"
                        />
                        <div className="w-full absolute bottom-5 right-5">
                          <div className="float-end">
                            <button className="p-1 rounded-lg bg-slate-100 btnProductCatalog">
                              <img src={Arrow} alt="" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-gray-300 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-12 w-12 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="w-full h-[30%] bbg-slate-100 hover:bg-[#fff]  relative productCatalog cursor-pointer">
                    {response2.results && response2.results[3] ? (
                      <Link
                        /* @ts-expect-error: This */
                        to={`category/${
                          response2?.results && response2?.results[3]?.id
                        }`}
                        onClick={productDetail}
                        className="w-full h-full flex justify-center items-center"
                        style={{ mixBlendMode: "multiply" }}
                      >
                        <h2 className="absolute top-2 left-3 font-medium text-lg nameProductCatalog text-slate-100">
                          {/* @ts-expect-error: This */}
                          {response2?.results &&
                            response2?.results[3]?.name.substring(0, 12)}
                          ...
                        </h2>
                        <img
                          /* @ts-expect-error: This */
                          src={
                            (response2?.results &&
                              response2?.results[3]?.images_set[0]
                                ?.image_url) ||
                            (response2?.results &&
                              response2?.results[3]?.images_set[0]?.image)
                          }
                          alt="product-img"
                          className="h-[50%] object-contain"
                        />
                        <div className="w-full absolute bottom-5 right-5">
                          <div className="float-end">
                            <button className="p-1 rounded-lg bg-slate-100 btnProductCatalog">
                              <img src={Arrow} alt="" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-gray-300 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-12 w-12 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <Link
                    onClick={modalToggle}
                    to={`/catalog?category_id=${activeCategoryId}`}
                    className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] p-4 flex flex-col justify-between cursor-pointer"
                  >
                    <div className="text-start">
                      <p className="text-2xl font-bold text-redPrimary">
                        смотреть <br /> все <br /> товары
                      </p>
                    </div>
                    <div className="w-full">
                      <button className="p-1 float-end bg-redPrimary rounded">
                        <img src={Arrow} alt="" />
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="md:hidden  h-[115vh] w-full top-[115px] absolute left-0 bg-[#00000074] z-[999]">
            <div className={`w-full bg-white flex items-start`}>
              <div
                className={`h-[115vh] overflow-y-scroll w-[${
                  activeMobileItem ? "10%" : "100%"
                }]`}
              >
                {response.map((i, index) => (
                  <div className={`flex`} key={i.id}>
                    <button
                      onClick={() => handleCategoryClick(index, i.id)}
                      className={`w-full
                                    } flex p-3 gap-1 items-center  h-[30px] ${
                                      activeItem === index
                                        ? "bg-redPrimary text-white"
                                        : ""
                                    }`}
                    >
                      <div>
                        {/* <img
                          className="w-[18px] h-[18px] object-contain"
                          src={i.icon}
                          alt=""
                          
                        /> */}
                        <img
                          style={{
                            filter:
                              hoveredIndex === index || activeItem === index
                                ? "brightness(0) saturate(100%) invert(99%) sepia(5%) saturate(994%) hue-rotate(302deg) brightness(121%) contrast(100%)"
                                : "invert(17%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                          }}
                          className="w-[18px] h-[18px] object-contain"
                          src={i.icon}
                          alt=""
                        />
                      </div>
                      {!activeMobileItem && (
                        <p className="text-[12px] font-bold">{i.name}</p>
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div
                className={`${
                  activeMobileItem ? "w-[90%] bg-[#fff] h-[115vh]" : "hidden"
                }`}
              >
                {/*@ts-expect-error: This */}
                {response[activeItem]?.children?.map((i) => (
                  <div
                    key={i.id}
                    className={`w-full px-3 gap-2  items-center `}
                  >
                    <p className="text-lg font-bold mb-1">{i.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarModal;
