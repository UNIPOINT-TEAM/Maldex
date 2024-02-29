import React, { useEffect, useRef, useState } from "react";
import { CardCatalog, SaleSlider } from "../../components";
import { CardCatalogData } from "../../mock/data";
import Photo1 from "../../assets/images/catalog1.png";
import Photo2 from "../../assets/images/catalog2.png";
import Photo3 from "../../assets/images/setproduct.png";

const CardSet = () => {
    const [mainPhoto, setMainPhoto] = useState(Photo1);
    const [activeButton, setActiveButton] = useState("photo1");

    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [positionX, setPositionX] = useState(0);
    const progressBarRef = useRef(null);

    const handleButtonClick = (photo: any) => {
        setMainPhoto(photo);
        setActiveButton(photo === Photo1 ? "photo1" : "photo2");
    };

    return (
        <>
            <div className="home mb-5">
                <div className="border-b-2 py-3">
                    <div className="container_xxl">
                        <p className="m-0 p-0 text-gray-500">
                            Промо одежда / Портативные колонки / Беспроводная
                            колонка Chubby /{" "}
                            <span className="text-redPrimary">
                                Артикул 7557.30
                            </span>
                        </p>
                    </div>
                </div>
                <div className="card container_xxl flex">
                    <div className="w-[75%]">
                        <div className="flex">
                            <div className="h-[400px] w-1/2 flex flex-col justify-center gap-5 p-5">
                                <div>
                                    <p className="text-black text lg">
                                        Изменение состава
                                    </p>
                                    <p className="text-gray-500">
                                        Комплектацию набора можно изменить,
                                        чтобы <br />
                                        сделать подарок более уникальным
                                    </p>
                                </div>
                                <div>
                                    <p className="text-black text lg">
                                        Брендирование
                                    </p>
                                    <p className="text-gray-500">
                                        На элементы набора и упаковку можно
                                        <br /> нанести Ваш логотип
                                    </p>
                                </div>
                                <div>
                                    <p className="text-black text lg">
                                        Актуальная цена
                                    </p>
                                    <p className="text-gray-500">
                                        При подтверждении заказа менеджер
                                        уточнит <br /> цену для Вашего тиража с
                                        учётом скидки
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/2 flex h-[400px]">
                                <div className="w-[80%] h-full relative">
                                    <img
                                        className="w-full h-full absolute"
                                        src={mainPhoto}
                                        alt="no img"
                                    />
                                    <div className="absolute w-full p-2 top-3 left-0 right-0 flex gap-2 items-center">
                                        <button className="bg-redPrimary  py-3 rounded-lg text-white w-[50px] text-xs">
                                            Фото
                                        </button>
                                        <button className="bg-white py-[4px] px-2 text-xs flex items-center gap-2 rounded">
                                            <div className="border border-redPrimary w-[26px] h-[26px] flex items-center justify-center rounded-[13px]">
                                                <i className="fa-solid fa-plus text-redPrimary"></i>
                                            </div>
                                            <p>
                                                Места <br />
                                                нанесения
                                            </p>
                                        </button>
                                        <button className="bg-white px-3 py-3 text-xs flex items-center gap-2 rounded">
                                            примеры
                                        </button>
                                    </div>
                                </div>
                                <div className="w-[20%] bg-gray-100 flex flex-col justify-center items-center p-3 gap-1">
                                    <button
                                        className={`h-[80px] w-[80px] ${
                                            activeButton === "photo1"
                                                ? "border-2 border-redPrimary"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleButtonClick(Photo1)
                                        }
                                    >
                                        <img
                                            className="w-full h-full"
                                            src={Photo1}
                                            alt="no img"
                                        />
                                    </button>
                                    <button
                                        className={`w-[80px] h-[80px] ${
                                            activeButton === "photo2"
                                                ? "border-2 border-redPrimary"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleButtonClick(Photo2)
                                        }
                                    >
                                        <img
                                            className="w-full h-full"
                                            src={Photo2}
                                            alt="no img"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[25%] pl-[50px]">
                        <div className="border-l-2 pl-5 py-3 mb-5">
                            <p className="text-xl mb-3">
                                Ваш набор <span>Майя</span>
                            </p>
                            <div className="flex flex-col justify-center">
                                <div className="setProduct flex justify-between items-center py-5 border-b-2 ">
                                    <div className="w-[90%] flex justify-start items-center gap-3">
                                        <img
                                            className="w-[50px]"
                                            src={Photo3}
                                            alt=""
                                        />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs">
                                                Инновационный <br /> очиститель
                                            </p>
                                            <p className="text-xs">
                                                15 185.55 ₽
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 setBtns">
                                        <button>
                                            <i className="fa-solid fa-xmark text-gray-400"></i>
                                        </button>
                                        <button>
                                            <i className="fa-solid fa-plus text-gray-400"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="setProduct flex justify-between items-center py-5 border-b-2 ">
                                    <div className="w-[90%] flex justify-start items-center gap-3">
                                        <img
                                            className="w-[50px]"
                                            src={Photo3}
                                            alt=""
                                        />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs">
                                                Инновационный <br /> очиститель
                                            </p>
                                            <p className="text-xs">
                                                15 185.55 ₽
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 setBtns">
                                        <button>
                                            <i className="fa-solid fa-xmark text-gray-400"></i>
                                        </button>
                                        <button>
                                            <i className="fa-solid fa-plus text-gray-400"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="setProduct flex justify-between items-center py-5 border-b-2 ">
                                    <div className="w-[90%] flex justify-start items-center gap-3">
                                        <img
                                            className="w-[50px]"
                                            src={Photo3}
                                            alt=""
                                        />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs">
                                                Инновационный <br /> очиститель
                                            </p>
                                            <p className="text-xs">
                                                15 185.55 ₽
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 setBtns">
                                        <button>
                                            <i className="fa-solid fa-xmark text-gray-400"></i>
                                        </button>
                                        <button>
                                            <i className="fa-solid fa-plus text-gray-400"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="setProduct flex justify-between items-center py-5 border-b-2 ">
                                    <div className="w-[90%] flex justify-start items-center gap-3">
                                        <img
                                            className="w-[50px]"
                                            src={Photo3}
                                            alt=""
                                        />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs">
                                                Инновационный <br /> очиститель
                                            </p>
                                            <p className="text-xs">
                                                15 185.55 ₽
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 setBtns">
                                        <button>
                                            <i className="fa-solid fa-xmark text-gray-400"></i>
                                        </button>
                                        <button>
                                            <i className="fa-solid fa-plus text-gray-400"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-5">
                            <button className="text-greenPrimary">
                                + Добавить нанесение
                            </button>
                            <button>
                                <i className="fa-solid fa-circle-info text-gray-400"></i>
                            </button>
                        </div>
                        <div className="bg-gray-200 rounded-xs py-2 mb-5">
                            <div className="border-b border-gray-500">
                                <div className="flex justify-between items-center px-3 py-1">
                                    <p>Количество:</p>
                                    <div className="border border-black px-2 rounded">
                                        256
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-3 py-1">
                                    <p>Стоимость тиража:</p>
                                    <p>80 619,00 ₽ </p>
                                </div>
                                <div className="flex justify-between items-center px-3 py-1">
                                    <p>Скидка:</p>
                                    <p>5% </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-3 py-1">
                                <p className="text-lg">Итоговая стоимость:</p>
                                <p className="text-lg">14 619,00 ₽ </p>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-redPrimary text-white text-xs rounded">
                            В КОРЗИНУ
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSet;
