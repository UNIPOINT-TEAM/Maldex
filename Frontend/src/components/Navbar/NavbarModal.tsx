import { useEffect, useState } from "react";
import { useFetchHook } from "../../hooks/UseFetch";
import menu from "../../assets/icons/menu.png";
import { Categories, Product, SubCategories } from "../../mock/data";
import { useNavigate, Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow-right.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavbarModal = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [activeMobileItem, setActiveMobileItem] = useState(false);
    const [activeCategoryItem, setActiveCategoryItem] = useState<number | null>(
        null
    );
    const [modal, setModal] = useState(false);
    const navigation = useNavigate();
    const modalToggle = () => {
        setModal(!modal);
        if (modal !== true) {
            setActiveItem(null);
            setActiveCategoryItem(null);
        }
    };
    const handleCategoryItemClick = (id: number) => setActiveCategoryItem(id);
    const { fetchData, response } = useFetchHook();
    useEffect(() => {
        fetchData({ method: "GET", url: "/product/categories/" });
    }, []);

    const handleCategoryClick = (index: any) => {
        setActiveItem(index);
        setActiveMobileItem(!activeMobileItem);
    };

    const productDetail = () => {
        setModal(false);
        navigation("category/1");
    };

    return (
        <>
            <button
                onClick={modalToggle}
                className="px-3 h-[36px] w-auto lg:w-[125px] bg-redPrimary rounded-lg flex items-center gap-2"
            >
                {modal ? (
                    <IoClose size={20} color="#fff" />
                ) : (
                    <GiHamburgerMenu size={20} color="#fff" />
                )}

                <span className="text-white tracking-widest hidden lg:block font-helvetica-neue">
                    Каталог
                </span>
            </button>
            {modal && (
                <>
                    <div className="modal top-[115px] absolute left-0 h-[115vh] w-full  bg-[#00000074] z-20  hidden md:flex">
                        <div className="w-[25%] bg-white px-3 py-1">
                            {response.map((i, index) => (
                                <div
                                    className={`w-full flex p-1.5 gap-[15px] items-center hover:bg-red-300 hover:text-white rounded-[8px] mb-[15px] ${
                                        activeItem === index
                                            ? "bg-redPrimary text-white"
                                            : "hover:bg-redPrimary hover:text-white"
                                    }`}
                                    onClick={() => handleCategoryClick(index)}
                                >
                                    <img
                                        className="w-[24px] h-[24px]"
                                        src={i.icon}
                                        alt=""
                                    />
                                    <p className="text-lg font-medium">
                                        {i.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {activeItem !== null ? (
                            <div className="w-[35%] bg-[#fff] px-3 py-1 flex flex-wrap overflow-y-scroll scrollbar-custom">
                                {response[activeItem]?.children?.map(
                                    (i: any) => (
                                        <div
                                            key={i.id}
                                            className={`w-1/2 p-1.5 gap-2  items-center min-h-[100px]`}
                                        >
                                            <p className="text-lg font-bold mb-1">
                                                {i.name}
                                            </p>
                                            <div>
                                                {i?.children?.map(
                                                    (category: any) => (
                                                        <p
                                                            className={`text-sm font-bold mb-1 hover:text-red-400 cursor-pointer ${
                                                                activeCategoryItem ===
                                                                category.id
                                                                    ? "text-redPrimary"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handleCategoryItemClick(
                                                                    category.id
                                                                )
                                                            }
                                                        >
                                                            {category.name}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        ) : (
                            ""
                        )}
                        {activeItem !== null ? (
                            <div className="w-[40%] bg-gray-200 h-[115vh] px-3 py-1 flex">
                                <div className="h-full w-1/2 flex flex-col">
                                    <div
                                        onClick={productDetail}
                                        className="w-full h-[60%] bg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer"
                                    >
                                        <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                                            {Product[0].name}
                                        </p>
                                        <img src={Product[0].img} alt="" />
                                        <div className="w-full absolute bottom-5 right-5">
                                            <div className="float-end">
                                                <button className="p-1 rounded bg-slate-100 btnProductCatalog">
                                                    <img src={Arrow} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={productDetail}
                                        className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer"
                                    >
                                        <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                                            {Product[3].name}
                                        </p>
                                        <img
                                            className="w-[60%] h-[60%] object-contain"
                                            src={Product[3].img}
                                            alt=""
                                        />
                                        <div className="w-full absolute bottom-5 right-5">
                                            <div className="float-end">
                                                <button className="p-1 rounded bg-slate-100 btnProductCatalog">
                                                    <img src={Arrow} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full w-1/2 flex flex-col">
                                    <div
                                        onClick={productDetail}
                                        className="w-full h-[30%]  hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer"
                                    >
                                        <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                                            {Product[2].name}
                                        </p>
                                        <img
                                            className="w-[60%] h-[60%] object-contain"
                                            src={Product[2].img}
                                            alt=""
                                        />
                                        <div className="w-full absolute bottom-5 right-5">
                                            <div className="float-end">
                                                <button className="p-1 rounded bg-slate-100 btnProductCatalog">
                                                    <img src={Arrow} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={productDetail}
                                        className="w-full h-[30%] bbg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer"
                                    >
                                        <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                                            {Product[1].name}
                                        </p>
                                        <img
                                            className="w-[50%] h-[50%]"
                                            src={Product[1].img}
                                            alt=""
                                        />
                                        <div className="w-full absolute bottom-5 right-5">
                                            <div className="float-end">
                                                <button className="p-1 rounded bg-slate-100 btnProductCatalog">
                                                    <img src={Arrow} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        onClick={modalToggle}
                                        to={"/catalog"}
                                        className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] p-4 flex flex-col justify-between cursor-pointer"
                                    >
                                        <div className="text-start">
                                            <p className="text-2xl font-bold text-redPrimary">
                                                просмотреть <br /> все <br />{" "}
                                                продукты
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
                                className={`w-[${
                                    activeMobileItem ? "10%" : "100%"
                                }]`}
                            >
                                {response.map((i, index) => (
                                    <div className={`flex`}>
                                        <button
                                            onClick={() =>
                                                handleCategoryClick(index)
                                            }
                                            className={`w-full
                                    } flex p-3 gap-2 items-center  h-[40px] ${
                                        activeItem === index
                                            ? "bg-redPrimary text-white"
                                            : ""
                                    }`}
                                        >
                                            <div>
                                                <img
                                                    className="w-[24px] h-[24px] object-contain"
                                                    src={i.icon}
                                                    alt=""
                                                />
                                            </div>
                                            {!activeMobileItem && (
                                                <p className="text-lg font-bold">
                                                    {i.name}
                                                </p>
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`${
                                    activeMobileItem
                                        ? "w-[90%] bg-[#fff] h-[115vh]"
                                        : "hidden"
                                }`}
                            >
                                {response[activeItem]?.children?.map((i) => (
                                    <div
                                        key={i.id}
                                        className={`w-full px-3 gap-2  items-center `}
                                    >
                                        <p className="text-lg font-bold mb-1">
                                            {i.name}
                                        </p>
                                        <div>
                                            {/* {i.categoryItem.map((category) => (
                                                <p
                                                    className={`text-sm font-bold mb-1 ${
                                                        activeCategoryItem ===
                                                        category.id
                                                            ? "text-redPrimary"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        handleCategoryItemClick(
                                                            category.id
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </p>
                                            ))} */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default NavbarModal;
