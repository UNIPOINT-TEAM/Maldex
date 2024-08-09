import { useEffect, useState } from "react";
import { useFetchHook } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow-right.png";
import ArrowRed from "../../assets/icons/arrow-b-red.svg";
import "./burger.css";
import "../../css/Layouts.css";
import axios from "axios";
import { BASE_URL } from "../../utils";

const NavbarModal = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState(false);
  const [activeCategoryItem, setActiveCategoryItem] = useState<number | null>(
    null
  );
  const [modal, setModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [productImg, setProductImg] = useState([]);

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
  const [subCategory, setSubCategory] = useState({});
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
    const filterSubCategory = response.filter((item) => item?.id === id);
    setSubCategory(filterSubCategory[0]);
    setProductImg(filterSubCategory[0]?.products);
  };

  const productDetail = () => setModal(false);

  const handleSubCategory = async (id: number) => {
    setActiveCategoryId(id);
    await axios.get(`${BASE_URL}/product/?category_id=${id}`).then((res) => {
      setProductImg(res.data.results);
    });
  };
  const [isOpen, toggle] = useState(true);
  const c = isOpen ? "burger " : "burger open";

  const handleButtonClick = () => {
    modalToggle();
    toggle(!isOpen);
  };
  return (
    <>
      <button
        onClick={handleButtonClick}
        className=" h-[36px] w-[38px] lg:w-[120px]  bg-redPrimary rounded-[10px] flex  justify-center items-center gap-2"
      >
        <div
          className={c}
          style={{ paddingTop: "2.5px" }}
          onClick={() => toggle(!isOpen)}
        >
          <span className="bar1 text-black"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
        <span className="text-white  font-normal text-fs_6 hidden lg:block capitalize">
          Каталог
        </span>
      </button>
      {modal && (
        <div className="">
          <div className="modal top-[125px] absolute bg-[#fff] left-0 h-[83vh] w-full z-[9999]  hidden md:flex items-start mb-5">
            <div className="w-[25%] bg-white h-full px-3 py-1 flex flex-col items-start z-[999] overflow-y-auto scrollbar-custom">
              {response.map((i, index) => (
                <button
                  key={i.id}
                  className={`flex text-start justify-start p-1.5 gap-[15px] items-center  hover:text-white rounded-[8px] mb-[15px] px-3 ${
                    activeItem === index
                      ? "bg-redPrimary text-white"
                      : "hover:bg-redPrimary hover:text-white"
                  }`}
                  onMouseOver={() => handleCategoryClick(index, i?.id)}
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
            {activeItem !== null && (
              <div className="w-[35%] bg-[#fff] px-3 py-1 flex items-start flex-wrap ">
                {subCategory?.children?.map((i: any) => (
                  <div
                    key={i.id}
                    onClick={() => handleSubCategory(i.id)}
                    className={`w-1/2 p-1.5 gap-2 cursor-pointer items-center`}
                  >
                    <p className="text-fs_8 mb-3 uppercase font-bold line-clamp-1">
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
            )}
            {activeItem !== null && (
              <div className="w-[40%] bg-gray-200 h-full px-2 py-2  flex gap-2 overflow-y-auto scrollbar-custom">
                <div className="h-full w-full flex flex-col gap-2">
                  <div className="w-full h-full grid productGrid pb-3">
                    {productImg?.slice(0, 4).map((product, index) => (
                      <div
                        key={product.id}
                        className="productCard"
                        onClick={() => productDetail()}
                      >
                        <Link
                          to={`category/${product.id}`}
                          className="w-full h-full flex justify-center items-center group"
                          style={{ mixBlendMode: "multiply" }}
                        >
                          <h2 className="absolute hidden top-2 left-3 font-medium text-lg productDetails group-hover:block">
                            {product.name.substring(0, 18)}...
                          </h2>
                          <img
                            src={
                              product.images_set[0]?.image_url ||
                              product.images_set[0]?.image
                            }
                            loading="lazy"
                            alt="product-img"
                            className="productImage"
                          />
                          <div className="absolute hidden bottom-5 right-5 group-hover:block">
                            <button className="p-1 rounded-lg bg-slate-100 productButton ">
                              <img className="" src={Arrow} alt="" />
                            </button>
                          </div>
                        </Link>
                      </div>
                    ))}
                    <Link
                      onClick={modalToggle}
                      to={`/catalog?category_id=${activeCategoryId}`}
                      className=" bg-redPrimary group hover:bg-[#fff] p-4 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="text-start">
                        <p className="text-[30px] font-medium leading-none text-[#fff] group-hover:text-redPrimary duration-200">
                          смотреть <br /> все <br /> товары
                        </p>
                      </div>
                      <div className="w-full">
                        <button className="p-1 float-end">
                          <img src={ArrowRed} alt="" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="md:hidden  h-[89vh] w-full top-[103px] absolute left-0 bg-[#0000008c] z-[9999]">
            <div className="bg-white w-full flex items-start h-full pb-2">
              <div className="w-full flex items-start h-full">
                <div
                  className={`overflow-y-auto h-full scrollbar-custom ${
                    activeItem === null ? "w-full" : "w-auto"
                  }`}
                >
                  {response.map((i, index) => (
                    <button
                      key={i.id}
                      className={`flex p-1.5 gap-[15px] items-center justify-center rounded-none mb-[15px]  ${
                        activeItem === index && "bg-redPrimary text-white"
                      } ${activeItem !== null ? "w-[65px] h-[50px]" : ""}`}
                      onClick={() => handleCategoryClick(index, i?.id)}
                    >
                      <img
                        style={{
                          filter:
                            activeItem === index
                              ? "brightness(0) saturate(100%) invert(99%) sepia(5%) saturate(994%) hue-rotate(302deg) brightness(121%) contrast(100%)"
                              : "invert(17%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                        }}
                        className="w-[24px] h-[24px]"
                        src={i.icon}
                        alt=""
                      />
                      <p
                        className={`text-lg font-medium ${
                          activeItem !== null ? "hidden" : "block"
                        }`}
                      >
                        {i.name}
                      </p>
                    </button>
                  ))}
                </div>
                {activeItem !== null && (
                  <div className="w-full flex-1 bg-[#fff] h-full flex flex-col justify-start items-start">
                    {subCategory?.children?.map((i: any) => (
                      <Link
                        to={`/catalog?category_id=${i.id}`}
                        key={i.id}
                        onClick={() => {
                          handleSubCategory(i.id);
                          setModal(false);
                        }}
                        className={`w-full p-1.5 gap-2 cursor-pointer  items-start `}
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
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarModal;
