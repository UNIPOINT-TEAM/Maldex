import { useState } from "react";
import { SaleSlider } from "../../components";
import { CardCatalogData } from "../../mock/data";
import CardCatalog from "../../components/CardCatalog/CardCatalog";

const Catalog = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<boolean>(false);

    const [filterItems, setFilterItems] = useState([
        { id: 1, name: "Белый", count: 2 },
        { id: 2, name: "Желтый", count: 4 },
        { id: 3, name: "Красный", count: 3 },
        { id: 4, name: "Черный", count: 5 },
        { id: 5, name: "Серый", count: 2 },
        { id: 6, name: "Фиолетовый", count: 7 },
        { id: 7, name: "Бирюзовый", count: 1 },
    ]);
    const [activeFilterItems, setActiveFilterItems] = useState([
        { id: 1, name: "Белый" },
        { id: 2, name: "Желтый" },
    ]);

    const addToActive = (i: any) => {
        setActiveFilterItems((prev) => [...prev, i]);
        setFilterItems((prev) => prev.filter((item) => item.id !== i.id));
    };

    const openFilter = () => {
        setFilter(!filter);
    };

    return (
        <div className="homedw px-2 md:px-0">
            <div className="w-full h-full">
                <div className="border-b-2 py-3 hidden md:block">
                    <div className="container_xxl ">
                        <p className="m-0 p-0">
                            Промо одежда / Портативные колонки / Беспроводная
                            колонка Chubby /{" "}
                            <span className="text-redPrimary">
                                Артикул 7557.30
                            </span>
                        </p>
                    </div>
                </div>
                <div className="card container_xxl my-0 sm:my-10 ">
                    <p className="text-3xl mb-5">подарочные наборы</p>
                    <div className="flex justify-between items-center border-b-[1px] pb-2">
                        <button className="border-[1px] border-black px-3 py-1 rounded">
                            Все фильтры (2) &nbsp;
                            <i className="fa-solid fa-arrow-down-wide-short text-black "></i>
                        </button>
                        <div className="w-[70%] flex flex-wrap">
                            {activeFilterItems.map((i, index) => (
                                <div className="flex">
                                    <div
                                        key={i.id}
                                        className="px-2 py-2 rounded-md bg-gray-100 text-sm border border-l-gray-800 flex gap-2"
                                    >
                                        <p>{i.name}</p>
                                        <button>
                                            <i className="fa-solid fa-xmark text-md"></i>
                                        </button>
                                    </div>
                                    {index == activeFilterItems.length - 1 && (
                                        <div className="relative">
                                            <button
                                                onClick={openFilter}
                                                className="bg-redPrimary text-white px-4 rounded-md absolute h-full"
                                            >
                                                +
                                            </button>
                                            {filter && (
                                                <div className="w-[200px] h-[350px] border border-gray-500 bg-white absolute z-30 top-[-150px] left-[60px] rounded-md">
                                                    <div className="w-[20px] h-[20px] z-40 border border-gray-500 bg-white  rotate-45 absolute top-[45%] left-[-6px]"></div>
                                                    <div className="w-full h-full bg-white z-50 absolute rounded-md flex flex-col justify-start py-5 px-2">
                                                        <p className="text-xl mb-5">
                                                            Цвет
                                                        </p>
                                                        {filterItems.map(
                                                            (i) => (
                                                                <button
                                                                    onClick={() =>
                                                                        addToActive(
                                                                            i
                                                                        )
                                                                    }
                                                                    className="text-sm mb-2 text-start mb-5"
                                                                >
                                                                    {i.name}{" "}
                                                                    &nbsp;
                                                                    <span className="text-gray-500">
                                                                        {
                                                                            i.count
                                                                        }
                                                                    </span>
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="relative">
                            <button
                                className="text-xl px-4 py-2 rounded-md"
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                            >
                                Популярные &nbsp;
                                {isDropdownOpen ? (
                                    <i className="fa-solid fa-caret-up"></i>
                                ) : (
                                    <i className="fa-solid fa-caret-down"></i>
                                )}
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48  bg-white z-[999] border border-gray-200 rounded-md shadow-lg">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-end"
                                    >
                                        популярные
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-end"
                                    >
                                        Новинки
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-end"
                                    >
                                        Сначала дешевые
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-end"
                                    >
                                        Сначала дорогие
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-end"
                                    >
                                        По размеру скидки
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-end"
                                    >
                                        Высокий рейтинг
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex w-100 overflow-scroll sm:flex sm:flex-wrap py-2 gap-2">
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Автомобильные зарядники
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Экозарядники + RPET
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Наборы с зарядными устройствами
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Беспроводные зарядки
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Док-станции с логотипами
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Зарядные устройства с часами
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Органайзер на стол с ЗУ
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Лампы с ЗУ
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Деревянные зарядки
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Наборы с зарядными устройствами
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Док-станции с логотипами
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Автомобильные зарядники
                        </button>
                        <button className="border-[1px] border-gray-400 px-2 text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded">
                            Лампы с ЗУ
                        </button>
                    </div>
                    <div className="flex gap-2 flex-wrap py-2 justify-between">
                        {CardCatalogData.map((i) => (
                            <div
                                className="w-[45%] sm:w-[30%] md:w-[18%] mb-[40px]"
                                key={i.id}
                            >
                                <CardCatalog item={i} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-3">
                    <SaleSlider />
                </div>
                <div className="container_xxl mb-8">
                    <div className="flex gap-2 flex-wrap py-2 justify-between">
                        {CardCatalogData.map((i) => (
                            <div
                                className="w-[45%] sm:w-[30%] md:w-[18%] mb-[40px]"
                                key={i.id}
                            >
                                <CardCatalog item={i} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <button>
                            <i className="fa-solid fa-arrow-left text-gray-400"></i>
                        </button>
                        <p className="text-gray-400">страница</p>
                        <button className="text-gray-400 border border-gray-400 rounded px-4 m-0">
                            1
                        </button>
                        <p className="text-gray-400">из 10</p>
                        <button>
                            <i className="fa-solid fa-arrow-right text-gray-400"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
