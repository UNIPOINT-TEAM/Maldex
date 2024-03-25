import { useState } from "react";
import filtr from "../../assets/icons/filtr.png";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Close from "../../assets/icons/close.png";

// @ts-ignore

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

const MoreFilter = () => {
    const [activeCard, setActiveCard] = useState(false);
    const [filter, setFilter] = useState(false);
    const [open, setOpen] = useState(1);
    //@ts-ignore
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const handleFilter = () => {
        setFilter(!filter);
    };

    return (
        <>
            <div className="">
                <div
                    className={`overLay fixed w-full h-full bg-[#00000083] ${
                        activeCard ? "block" : "hidden"
                    } top-0 right-0 z-[999]`}
                    onClick={() => setActiveCard(false)}
                ></div>
                <div
                    className={`overLay fixed w-full h-full ${
                        filter ? "block" : "hidden"
                    } top-0 right-0 z-10`}
                    onClick={() => setFilter(false)}
                ></div>
                <button className="filter-btn w-8 border h-full border-gray-300 rounded-lg hidden lg:block relative">
                    <div
                        onClick={handleFilter}
                        className="w-full px-2 h-full flex justify-center items-center"
                    >
                        <img src={filtr} alt="filtr-icon" className="mx-auto" />
                    </div>
                    {!filter && (
                        <div className=" hidden md:block w-[70px] h-[30px] border border-gray-400 z-50 absolute bg-white rounded-lg shadow-md top-[45px] left-0 filter-opac">
                            <span className="w-[20px] h-[20px] bg-white border border-gray-400 rotate-45 top-[-4px] left-[5px] absolute"></span>
                            <div className="absolute w-full h-full bg-white rounded-lg flex justify-center items-center ">
                                <p className="text-[12px]">Фильтры</p>
                            </div>
                        </div>
                    )}

                    {filter && (
                        <div className="w-[350px] h-[250px] border border-gray-500 z-50 absolute bg-white rounded-xl top-[50px] left-0 ">
                            <span className="w-[20px] h-[20px] bg-white border border-gray-500 rotate-45 top-[-4px] left-[10px] absolute"></span>
                            <div className="absolute w-full h-full bg-white rounded-2xl flex flex-col justify-start items-start p-5">
                                <p className="mb-2">Цена</p>
                                <div className="flex w-full gap-3 items-center mb-4">
                                    <input
                                        placeholder="150 RUB"
                                        className="w-1/3 border border-gray-400 rounded-md outline-none px-2 text-sm py-1"
                                        type="text"
                                    />
                                    <p>-</p>
                                    <input
                                        placeholder="20 000 RUB"
                                        className="w-1/3 border border-gray-400 rounded-md outline-none px-2 text-sm py-1"
                                        type="text"
                                    />
                                </div>
                                <div className="flex gap-5 items-center w-full mb-3">
                                    <div className="flex flex-col items-start w-1/3">
                                        <p className="mb-2">Количество</p>
                                        <input
                                            placeholder="20"
                                            className="border border-gray-400 rounded-md w-1/2 px-2 text-sm py-1"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start w-1/3">
                                        <p className="mb-2">Склад</p>
                                        <div className="flex gap-2 items-center">
                                            <div className="p-3 rounded-md border border-gray-400"></div>
                                            <p className="text-sm">Москва</p>
                                            <div className="p-3 rounded-md border border-gray-400"></div>
                                            <p className="text-sm">Европа</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-3">
                                    <button
                                        onClick={() => {
                                            setActiveCard(!activeCard),
                                                setFilter(false);
                                        }}
                                        className="border border-black rounded-md px-3 py-2 text-sm"
                                    >
                                        Расширенные фильтры
                                    </button>
                                    <button className="border border-black rounded-md px-3 py-2 text-sm">
                                        Найти
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </button>
                {activeCard && (
                    <div className="absolute w-[400px] z-[99999] min-h-[600px] bg-white top-0 right-0">
                        <div className="w-full h-full p-3 mb-5">
                            <div className="flex justify-between items-center pr-3 pt-2">
                                <p className="text-xl">Фильтр каталога</p>
                                <button
                                    onClick={() => {
                                        setActiveCard(!activeCard);
                                    }}
                                >
                                    <img src={Close} alt="" />
                                </button>
                            </div>
                            <div className="h-full pr-2 mb-5">
                                {/* @ts-ignore */}
                                <Accordion
                                    open={open === 1}
                                    icon={<Icon id={1} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(1)}
                                    >
                                        <p className="text-sm text-black">
                                            Цена
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <div className="flex w-full gap-3 items-center mb-4">
                                            <input
                                                placeholder="150 RUB"
                                                className="w-1/5 border border-gray-400 rounded-md outline-none px-2 text-sm "
                                                type="text"
                                            />
                                            <p>-</p>
                                            <input
                                                placeholder="20 000 RUB"
                                                className="w-1/5 border border-gray-400 rounded-md outline-none px-2 text-sm "
                                                type="text"
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-[12px] h-[12px] border border-black rounded-[6px]"></div>
                                            <div className="w-[100px] h-[2px] bg-black"></div>
                                            <div className="w-[12px] h-[12px] border border-black rounded-[6px]"></div>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                                {/* @ts-ignore */}

                                <Accordion
                                    open={open === 2}
                                    icon={<Icon id={2} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(2)}
                                    >
                                        <p className="text-sm text-black">
                                            Количество
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <input
                                            placeholder="20"
                                            className="border border-gray-400 rounded-md w-1/3 px-2 text-sm py-1"
                                            type="text"
                                        />
                                    </AccordionBody>
                                </Accordion>
                                {/* @ts-ignore */}

                                <Accordion
                                    open={open === 3}
                                    icon={<Icon id={3} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(3)}
                                    >
                                        <p className="text-sm text-black">
                                            Цвет
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Черный
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Коричневый
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Красный
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Желтый
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                                {/* @ts-ignore */}

                                <Accordion
                                    open={open === 4}
                                    icon={<Icon id={4} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(4)}
                                    >
                                        <p className="text-sm text-black">
                                            Склад
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Москва
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Европа
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                                {/* @ts-ignore */}

                                <Accordion
                                    open={open === 5}
                                    icon={<Icon id={5} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(5)}
                                    >
                                        <p className="text-sm text-black">
                                            Материал
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Металл
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Дерево
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Пластик
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Стекло
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                                {/* @ts-ignore */}

                                <Accordion
                                    open={open === 6}
                                    icon={<Icon id={6} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(6)}
                                    >
                                        <p className="text-sm text-black">
                                            Бренд
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Acros
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Affresh Washer
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Amana
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Ariston
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Bauknecht
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Brastemp
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                                {/* @ts-ignore */}

                                <Accordion
                                    open={open === 7}
                                    icon={<Icon id={7} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(7)}
                                    >
                                        <p className="text-sm text-black">
                                            Вид нанесения
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Acros
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                                {/* @ts-ignore */}

                                <Accordion
                                    open={open === 8}
                                    icon={<Icon id={8} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(8)}
                                    >
                                        <p className="text-sm text-black">
                                            Пол
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Acros
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                                {/* @ts-ignore */}

                                <Accordion
                                    open={open === 9}
                                    icon={<Icon id={9} open={open} />}
                                >
                                    {/* @ts-ignore */}

                                    <AccordionHeader
                                        className="border-none"
                                        onClick={() => handleOpen(9)}
                                    >
                                        <p className="text-sm text-black">
                                            Размер
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody className={"p-0 mb-4"}>
                                        <div className="flex gap-2 items-center ml-5 mb-2">
                                            <div className="p-2 rounded-md border border-gray-400"></div>
                                            <p className="text-sm text-black">
                                                Acros
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </Accordion>
                                <div className="flex justify-center items-center w-full gap-2">
                                    <button>Сбросить</button>
                                    <button className="bg-gray-50 px-3 py-1 rounded border border-black">
                                        показать 24
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
export default MoreFilter;
