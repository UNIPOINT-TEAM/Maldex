import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import mobile from "../../assets/icons/mobile.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
// import filtr from "../../assets/icons/filtr.png";
import { useState } from "react";
import { Categories, Product, SubCategories } from "../../mock/data";
import { CardModal } from "..";

const Navbar = () => {
    const [modal, setModal] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [activeCategoryItem, setActiveCategoryItem] = useState(null);

    const modalToggle = () => {
        setModal(!modal);
        if (modal !== true) {
            setActiveItem(null);
            setActiveCategoryItem(null);
        }
        console.log("modal");
    };
    //@ts-ignore
    const handleCategoryClick = (id: number) => {
        //@ts-ignore
        setActiveItem(id);
    };
    const handleCategoryItemClick = (id: number) => {
        //@ts-ignore
        setActiveCategoryItem(id);
    };

    return (
        <div className="relative">
            <header className="container_xxl relative">
                <nav className="py-4 px-10 flex justify-between items-center  border-b border-gray-300">
                    {/* Logo and Contact Info */}
                    <div className="flex items-center">
                        <img src={logo} className="mr-5" />

                        <div className="flex items-center gap-5">
                            <div className="flex items-center">
                                <img src={mobile} className="mr-2" />
                                <span className="text-darkPrimary text-base">
                                    8-800-333-6784
                                </span>
                            </div>

                            <div className="flex items-center">
                                <img src={mail} className="mr-2" />
                                <span className="text-darkPrimary text-base">
                                    info@madex.ru
                                </span>
                            </div>

                            <div className="flex items-center">
                                <img src={location} className="mr-2" />
                                <span className="text-darkPrimary text-base">
                                    Москва
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* City and Minimum Order Info */}
                    <div className="text-darkSecondary hidden md:block">
                        <span className="ml-4">
                            Минимальный тираж от 30 шт.
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center">
                        <a
                            href="#"
                            className="text-darkPrimary hover:text-redPrimary px-2"
                        >
                            Доставка
                        </a>
                        <a
                            href="#"
                            className="text-darkPrimary hover:text-redPrimary px-2"
                        >
                            Оплата
                        </a>
                        <a
                            href="#"
                            className="text-darkPrimary hover:text-redPrimary px-2"
                        >
                            Контакты
                        </a>

                        {/* Shopping Cart */}
                        <CardModal />
                    </div>
                </nav>

                <nav className="flex justify-between items-center py-2 mx-10 gap-14 cursor-pointer">
                    <div className="flex justify-around gap-5">
                        <button
                            onClick={modalToggle}
                            className="px-3 py-1 bg-redPrimary text-white focus:outline-none rounded-lg cursor-pointer"
                        >
                            ☰ Каталог
                        </button>
                        <button className="px-2 py-1 text-darkSecondary focus:outline-none border border-gray-300 rounded-lg cursor-pointer">
                            ☰
                        </button>
                    </div>

                    <div className="inline-flex w-[900px]">
                        <input
                            className="rounded-l-full border-[2px] border-redPrimary py-1 px-2 w-[100%]  text-darkSecondary leading-tight focus:outline-none"
                            id="search"
                            type="text"
                            placeholder="Поиск (Например: термоноски)"
                        />
                        <span>
                            <button className="bg-redPrimary text-white rounded-r-full p-2 focus:outline-none w-16   h-8 flex items-center justify-center">
                                <img src={search} alt="" />
                            </button>
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-sm px-2 space-x-6">
                        <span className="text-redPrimary font-semibold underline">
                            new<sup>243</sup>
                        </span>
                        <span className="text-greenPrimary font-semibold underline">
                            hits<sup>243</sup>
                        </span>
                    </div>
                </nav>
            </header>
            {modal ? (
                <div className="modal absolute h-[115vh] w-full  bg-[#00000074] z-20 flex">
                    <div className="w-[25%] bg-white  px-3 py-1">
                        {Categories.map((i) => (
                            <div
                                key={i.id}
                                className={`w-[50%] flex p-1.5 gap-2 items-center hover:bg-red-300 hover:text-white rounded ${
                                    activeItem === i.id
                                        ? "bg-redPrimary text-white"
                                        : "hover:bg-redPrimary hover:text-white"
                                }`}
                                onClick={() => handleCategoryClick(i.id)}
                            >
                                <i className="fa-solid fa-pen-fancy"></i>
                                <p className="text-lg font-bold">{i.name}</p>
                            </div>
                        ))}
                    </div>
                    {activeItem !== null ? (
                        <div className="w-[35%] bg-[#fff]  px-3 py-1 flex flex-wrap overflow-y-scroll scrollbar-custom">
                            {SubCategories.map((i) => (
                                <div
                                    key={i.id}
                                    className={`w-1/2 p-1.5 gap-2  items-center `}
                                >
                                    <p className="text-lg font-bold mb-1">
                                        {i.categoryName}
                                    </p>
                                    <div>
                                        {i.categoryItem.map((category) => (
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
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                    {activeCategoryItem !== null ? (
                        <div className="w-[40%] bg-gray-200 h-[115vh] px-3 py-1 flex">
                            <div className="h-full w-1/2 flex flex-col">
                                <div className="w-full h-[60%] bg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer">
                                    <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                                        {Product[0].name}
                                    </p>
                                    <img src={Product[0].img} alt="" />
                                    <div className="w-full absolute bottom-5 right-5">
                                        <button className="float-end">
                                            <button className="py-1 px-3 rounded bg-slate-100 btnProductCatalog">
                                                <i className="fa-solid fa-arrow-right text-slate-100 rotate-45 text-2xl iconProductCatalog"></i>
                                            </button>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer">
                                    <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                                        {Product[3].name}
                                    </p>
                                    <img
                                        className="w-[60%] h-[60%] object-contain"
                                        src={Product[3].img}
                                        alt=""
                                    />
                                    <div className="w-full absolute bottom-5 right-5">
                                        <button className="float-end">
                                            <button className="py-1 px-3 rounded bg-slate-100 btnProductCatalog">
                                                <i className="fa-solid fa-arrow-right text-slate-100 rotate-45 text-2xl iconProductCatalog cursor-pointer"></i>
                                            </button>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-1/2 flex flex-col">
                                <div className="w-full h-[30%]  hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer">
                                    <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                                        {Product[2].name}
                                    </p>
                                    <img
                                        className="w-[60%] h-[60%] object-contain"
                                        src={Product[2].img}
                                        alt=""
                                    />
                                    <div className="w-full absolute bottom-5 right-5">
                                        <button className="float-end">
                                            <button className="py-1 px-3 rounded bg-slate-100 btnProductCatalog">
                                                <i className="fa-solid fa-arrow-right text-slate-100 rotate-45 text-2xl iconProductCatalog"></i>
                                            </button>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-[30%] bbg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer">
                                    <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                                        {Product[1].name}
                                    </p>
                                    <img
                                        className="w-[50%] h-[50%]"
                                        src={Product[1].img}
                                        alt=""
                                    />
                                    <div className="w-full absolute bottom-5 right-5">
                                        <button className="float-end">
                                            <button className="py-1 px-3 rounded bg-slate-100 btnProductCatalog">
                                                <i className="fa-solid fa-arrow-right text-slate-100 rotate-45 text-2xl iconProductCatalog"></i>
                                            </button>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] p-4 flex flex-col justify-between cursor-pointer">
                                    <p className="text-2xl font-bold text-redPrimary">
                                        просмотреть <br /> все <br /> продукты
                                    </p>
                                    <div className="w-full">
                                        <button className="float-end">
                                            <i className="fa-solid fa-arrow-right text-redPrimary rotate-45 text-2xl"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Navbar;
