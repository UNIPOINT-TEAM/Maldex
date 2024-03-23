import { useEffect, useState } from "react";

import Photo1 from "../../assets/images/catalog1.png";
import Photo2 from "../../assets/images/catalog2.png";
import CarouselImg from "../../assets/images/carouselImg.png";
import HandSock from "../../assets/images/handSock.png";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import filtr from "../../assets/icons/filtr.png";
import { IoClose } from "react-icons/io5";
import QuestionIcon from "../../assets/icons/questionIcon.png";
import SearchIcon from "../../assets/icons/searchIcon.png";
import MenuIcon from "../../assets/icons/menuIcon.png";
//@ts-ignore
import RangeSlider from "react-range-slider-input";

const CardSet = () => {
  const [mainPhoto, setMainPhoto] = useState(Photo1);
  const [activeButton, setActiveButton] = useState("photo1");
  const [product, setProduct] = useState({
    quantity: 50,
    price: 100,
    discount: 0,
    discountedPrice: 0,
    discountRange: 0,
    totalPrice: 0,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  function calculateDiscount(quantity: number, price: number) {
    let discount = 0;
    if (quantity >= 300) {
      discount = 0.07;
      setProduct((prev) => ({
        ...prev,
        discount: 7,
        discountRange: 100,
      }));
    } else if (quantity >= 100) {
      discount = 0.05;
      setProduct((prev) => ({ ...prev, discount: 5, discountRange: 50 }));
    } else if (quantity >= 30) {
      discount = 0.03;
      setProduct((prev) => ({ ...prev, discount: 3, discountRange: 0 }));
    } else if (quantity < 30) {
      discount = 0.03;
      setProduct((prev) => ({ ...prev, discount: 3, discountRange: 0 }));
    }
    const discountedPrice = price * (1 - discount);
    return discountedPrice;
  }

  function calculateTotal() {
    const discountedPrice = calculateDiscount(product.quantity, product.price);
    const discountedTotalPrice = discountedPrice * product.quantity;
    const totalPrice = product.price * product.quantity;
    console.log(totalPrice);
    setProduct((prev) => ({
      ...prev,
      discountedPrice: discountedTotalPrice,
      totalPrice,
    }));
  }
  useEffect(() => {
    calculateTotal();
  }, [product.quantity]);

  // const [progress, setProgress] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);
  // const [positionX, setPositionX] = useState(0);
  // const progressBarRef = useRef(null);
  const [menu, setMenu] = useState(0);
  const handleButtonClick = (photo: any) => {
    setMainPhoto(photo);
    setActiveButton(photo === Photo1 ? "photo1" : "photo2");
  };

  return (
    <>
      <div className="home mb-5">
        <div className="border-b-2 py-3">
          <div className="container_xxl hidden md:block px-3">
            <p className="m-0 p-0 text-gray-500">
              Промо одежда / Портативные колонки / Беспроводная колонка Chubby /{" "}
              <span className="text-redPrimary">Артикул 7557.30</span>
            </p>
          </div>
        </div>
        <div className="card container_xxl flex flex-col sm:flex-row px-3">
          <div className="w-full md:w-[75%]">
            <div className="flex mb-10">
              <div className="h-[400px] w-1/2 hidden md:flex flex-col justify-center gap-5 py-5">
                <div>
                  <p className="text-black text lg">Изменение состава</p>
                  <p className="text-gray-500">
                    Комплектацию набора можно изменить, чтобы <br />
                    сделать подарок более уникальным
                  </p>
                </div>
                <div>
                  <p className="text-black text lg">Брендирование</p>
                  <p className="text-gray-500">
                    На элементы набора и упаковку можно
                    <br /> нанести Ваш логотип
                  </p>
                </div>
                <div>
                  <p className="text-black text lg">Актуальная цена</p>
                  <p className="text-gray-500">
                    При подтверждении заказа менеджер уточнит <br /> цену для
                    Вашего тиража с учётом скидки
                  </p>
                </div>
              </div>
              <div className="w-full flex h-[400px] sm:w-1/2">
                <div className="w-full sm:w-[80%] h-full relative z-30">
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
                  <div className="w-[20%] sm:hidden right-0 top-[100px] absolute flex flex-col justify-center items-center p-3 gap-1 z-50">
                    <button
                      className={`h-[80px] w-[80px] ${
                        activeButton === "photo1"
                          ? "border-2 border-redPrimary"
                          : ""
                      }`}
                      onClick={() => handleButtonClick(Photo1)}
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
                      onClick={() => handleButtonClick(Photo2)}
                    >
                      <img
                        className="w-full h-full"
                        src={Photo2}
                        alt="no img"
                      />
                    </button>
                  </div>
                </div>
                <div className="w-[20%] hidden sm:flex bg-gray-100 flex-col justify-center items-center p-3 gap-1">
                  <button
                    className={`h-[80px] w-[80px] ${
                      activeButton === "photo1"
                        ? "border-2 border-redPrimary"
                        : ""
                    }`}
                    onClick={() => handleButtonClick(Photo1)}
                  >
                    <img className="w-full h-full" src={Photo1} alt="no img" />
                  </button>
                  <button
                    className={`w-[80px] h-[80px] ${
                      activeButton === "photo2"
                        ? "border-2 border-redPrimary"
                        : ""
                    }`}
                    onClick={() => handleButtonClick(Photo2)}
                  >
                    <img className="w-full h-full" src={Photo2} alt="no img" />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-full py-2">
              <div className="flex justify-start items-center gap-10 border-b-2 mb-5">
                <button
                  onClick={() => setMenu(0)}
                  className={`text-xl py-3 border-b-[4px] outline-none ${
                    menu == 0
                      ? " border-redPrimary text-redPrimary"
                      : "border-[#fff] "
                  }`}
                >
                  описание
                </button>
                <button
                  onClick={() => setMenu(1)}
                  className={`text-xl py-3 border-b-[4px] outline-none ${
                    menu == 1
                      ? " border-redPrimary text-redPrimary"
                      : "border-[#fff]"
                  }`}
                >
                  изменить набор
                </button>
                <button
                  onClick={() => setMenu(2)}
                  className={`text-xl py-3 border-b-[4px] outline-none ${
                    menu == 2
                      ? " border-redPrimary text-redPrimary"
                      : "border-[#fff]"
                  }`}
                >
                  добавить товар
                </button>
              </div>
              {menu == 0 ? (
                <div>
                  <p className="text-4xl mb-5">We Adore S'mores Gift Set</p>
                  <p className="mb-5">
                    Если вы думаете о s'mores как о чем-то, что нельзя отправить
                    по почте, подумайте еще раз! Этот подарочный набор
                    превращает всеми любимую закуску у костра в изысканную форму
                    искусства, и он не для случайных любителей. Конечно,
                    потребуется некоторая сборка, но все знают, что это часть
                    удовольствия. В эту коллекцию лакомств входят хрустящие
                    крекеры с корицей, темный шоколад и нежный зефир, готовый к
                    обжарке до того оттенка поджаристости, которого вы жаждете.
                    Мы включили в комплект набор из двух выдвижных палочек для
                    запекания зефира, которые помогут вам получить идеально
                    клейкий зефир, не обжигая пальцы и не поджигая его до
                    хрустящей корочки — если, конечно, они вам не нравятся.
                    Книга рецептов S'mores добавит веселья, предлагая более 60
                    различных способов приготовления идеальных S'mores. (Поднос
                    и блюдо в комплект не входят.)
                  </p>
                  <p className="mb-5 text-lg text-bold">
                    Подарочный набор содержит:
                  </p>
                  <ul className="list-disc mb-20">
                    <li className="ml-8">
                      2 батончика темного шоколада Theo Chocolate Classic по 3
                      унции каждый
                    </li>
                    <li className="ml-8">
                      Hudson Valley Marshmallow Company Крекеры Грэма с корицей
                      и сахаром, 5 унций, прибл. 9 крекеров
                    </li>
                    <li className="ml-8">
                      Hudson Valley Marshmallow Company Зефир для гурманов с
                      ванильными бобами, 4 унции, прибл. 20 зефиров
                    </li>
                    <li className="ml-8">
                      Палочки для запекания Rolla Roaster из нержавеющей стали,
                      набор длиной 2,42 дюйма в полностью выдвинутом состоянии
                    </li>
                    <li className="ml-8">
                      S'mores Лизы Адамс, твердый переплет, 128 страниц, ширина
                      7,1 дюйма x высота 7,2 дюйма.
                    </li>
                  </ul>
                  <div className="flex justify-between items-start border-b-2 py-5 gap-20">
                    <div className="w-1/4">
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className=""
                      >
                        <SwiperSlide>
                          <img
                            className=""
                            //@ts-ignore
                            src={HandSock}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className=""
                            //@ts-ignore
                            src={HandSock}
                            alt=""
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="w-3/4">
                      <p className="text-2xl mb-3">Бейсболка “Poly”</p>
                      <p className="mb-3">107045356</p>
                      <div className="relative mb-3">
                        <p className="text-xl">
                          45.
                          <span className="text-xs absolute top-0">00</span>
                          <span className="ml-4 mr-1">RUB</span>
                          <span className="text-xs absolute top-0 line-through text-redPrimary">
                            7 545
                          </span>
                        </p>
                      </div>
                      <p>
                        Если вы думаете о s'mores как о чем-то, что нельзя
                        отправить по почте, подумайте еще раз! Этот подарочный
                        набор превращает всеми любимую закуску у костра в
                        изысканную форму искусства, и он не для случайных
                        любителей. Конечно, потребуется некоторая сборка, но все
                        знают, что это часть удовольствия.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start border-b-2 py-5 gap-20">
                    <div className="w-1/4">
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className=""
                      >
                        <SwiperSlide>
                          <img
                            className=""
                            //@ts-ignore
                            src={HandSock}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className=""
                            //@ts-ignore
                            src={HandSock}
                            alt=""
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="w-3/4">
                      <p className="text-2xl mb-3">Бейсболка “Poly”</p>
                      <p className="mb-3">107045356</p>
                      <div className="relative mb-3">
                        <p className="text-xl">
                          45.
                          <span className="text-xs absolute top-0">00</span>
                          <span className="ml-4 mr-1">RUB</span>
                          <span className="text-xs absolute top-0 line-through text-redPrimary">
                            7 545
                          </span>
                        </p>
                      </div>
                      <p>
                        Если вы думаете о s'mores как о чем-то, что нельзя
                        отправить по почте, подумайте еще раз! Этот подарочный
                        набор превращает всеми любимую закуску у костра в
                        изысканную форму искусства, и он не для случайных
                        любителей. Конечно, потребуется некоторая сборка, но все
                        знают, что это часть удовольствия.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start border-b-2 py-5 gap-20">
                    <div className="w-1/4">
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className=""
                      >
                        <SwiperSlide>
                          <img
                            className=""
                            //@ts-ignore
                            src={HandSock}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className=""
                            //@ts-ignore
                            src={HandSock}
                            alt=""
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="w-3/4">
                      <p className="text-2xl mb-3">Бейсболка “Poly”</p>
                      <p className="mb-3">107045356</p>
                      <div className="relative mb-3">
                        <p className="text-xl">
                          45.
                          <span className="text-xs absolute top-0">00</span>
                          <span className="ml-4 mr-1">RUB</span>
                          <span className="text-xs absolute top-0 line-through text-redPrimary">
                            7 545
                          </span>
                        </p>
                      </div>
                      <p>
                        Если вы думаете о s'mores как о чем-то, что нельзя
                        отправить по почте, подумайте еще раз! Этот подарочный
                        набор превращает всеми любимую закуску у костра в
                        изысканную форму искусства, и он не для случайных
                        любителей. Конечно, потребуется некоторая сборка, но все
                        знают, что это часть удовольствия.
                      </p>
                    </div>
                  </div>
                </div>
              ) : menu == 1 ? (
                <div className="flex flex-wrap">
                  <div className="setProduct flex justify-between pb-4  pr-5 w-1/2 border-b-2">
                    <div className=" block sm:flex justify-start items-start gap-3 w-full">
                      <div className="w-1/3">
                        <Swiper
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Navigation, Pagination]}
                          className=""
                        >
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className="flex flex-col gap-1">
                        <p className="text-[16px]">Инновационный очиститель</p>
                        <p className="text-[12px]">107045356</p>
                        <div className="relative mb-3 pt-5">
                          <p className="text-[20px]">
                            45.
                            <span className="text-xs absolute">00</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-[12px] absolute line-through text-redPrimary">
                              7 545
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                      <button>
                        <IoClose />
                      </button>
                      <button>
                        <i className="fa-solid fa-plus text-gray-400"></i>
                      </button>
                    </div>
                  </div>
                  <div className="setProduct flex justify-between pb-4 pl-4 w-1/2 border-l-2 border-b-2">
                    <div className=" block sm:flex justify-start items-start gap-3 w-full">
                      <div className="w-1/3">
                        <Swiper
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Navigation, Pagination]}
                          className=""
                        >
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className="flex flex-col gap-1">
                        <p className="text-[16px]">Инновационный очиститель</p>
                        <p className="text-[12px]">107045356</p>
                        <div className="relative mb-3 pt-5">
                          <p className="text-[20px]">
                            45.
                            <span className="text-xs absolute">00</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-[12px] absolute line-through text-redPrimary">
                              7 545
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                      <button>
                        <IoClose />
                      </button>
                      <button>
                        <i className="fa-solid fa-plus text-gray-400"></i>
                      </button>
                    </div>
                  </div>
                  <div className="setProduct flex justify-between pb-4 pr-5 pt-4 border-b-2 w-1/2">
                    <div className=" block sm:flex justify-start items-start gap-3 w-full">
                      <div className="w-1/3">
                        <Swiper
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Navigation, Pagination]}
                          className=""
                        >
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className="flex flex-col gap-1">
                        <p className="text-[16px]">Инновационный очиститель</p>
                        <p className="text-[12px]">107045356</p>
                        <div className="relative mb-3 pt-5">
                          <p className="text-[20px]">
                            45.
                            <span className="text-xs absolute">00</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-[12px] absolute line-through text-redPrimary">
                              7 545
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                      <button>
                        <IoClose />
                      </button>
                      <button>
                        <i className="fa-solid fa-plus text-gray-400"></i>
                      </button>
                    </div>
                  </div>
                  <div className="setProduct flex justify-between pb-4 pl-4 pt-4 border-l-2 border-b-2  w-1/2">
                    <div className=" block sm:flex justify-start items-start gap-3 w-full">
                      <div className="w-1/3">
                        <Swiper
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Navigation, Pagination]}
                          className=""
                        >
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className="flex flex-col gap-1">
                        <p className="text-[16px]">Инновационный очиститель</p>
                        <p className="text-[12px]">107045356</p>
                        <div className="relative mb-3 pt-5">
                          <p className="text-[20px]">
                            45.
                            <span className="text-xs absolute">00</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-[12px] absolute line-through text-redPrimary">
                              7 545
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                      <button>
                        <IoClose />
                      </button>
                      <button>
                        <i className="fa-solid fa-plus text-gray-400"></i>
                      </button>
                    </div>
                  </div>
                  <div className="setProduct flex justify-between pb-4 pr-5 pt-4 w-1/2">
                    <div className=" block sm:flex justify-start items-start gap-3 w-full">
                      <div className="w-1/3">
                        <Swiper
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Navigation, Pagination]}
                          className=""
                        >
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className="flex flex-col gap-1">
                        <p className="text-[16px]">Инновационный очиститель</p>
                        <p className="text-[12px]">107045356</p>
                        <div className="relative mb-3 pt-5">
                          <p className="text-[20px]">
                            45.
                            <span className="text-xs absolute">00</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-[12px] absolute line-through text-redPrimary">
                              7 545
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                      <button>
                        <IoClose />{" "}
                      </button>
                      <button>
                        <i className="fa-solid fa-plus text-gray-400"></i>
                      </button>
                    </div>
                  </div>
                  <div className="setProduct flex justify-between pb-4 pr-5 pt-4 pl-4 border-l-2 w-1/2">
                    <div className=" block sm:flex justify-start items-start gap-3 w-full">
                      <div className="w-1/3">
                        <Swiper
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Navigation, Pagination]}
                          className=""
                        >
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className=""
                              //@ts-ignore
                              src={HandSock}
                              alt=""
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className="flex flex-col gap-1">
                        <p className="text-[16px]">Инновационный очиститель</p>
                        <p className="text-[12px]">107045356</p>
                        <div className="relative mb-3 pt-5">
                          <p className="text-[20px]">
                            45.
                            <span className="text-xs absolute">00</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-[12px] absolute line-through text-redPrimary">
                              7 545
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                      <button>
                        <IoClose />
                      </button>
                      <button>
                        <i className="fa-solid fa-plus text-gray-400"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex mb-5">
                    <div className="w-full flex gap-5 justify-between">
                      <div className="w-[70%] border h-[34px] rounded-lg p-1 flex">
                        <div className="h-full w-[30px] flex justify-center items-center">
                          <img src={SearchIcon} alt="" />
                        </div>
                        <input
                          className="w-[95%] outline-0"
                          placeholder="поиск"
                        />
                      </div>
                      <div className="w-[10%] border h-[34px] rounded-lg p-1 flex">
                        <div className="h-full w-[30px] flex justify-center items-center">
                          <img src={MenuIcon} alt="" />{" "}
                        </div>
                        <p className="text-gray-500">Каталог</p>
                      </div>
                      <div className="w-[18%] border h-[34px] rounded-lg p-1 flex">
                        <div className="h-full w-[30px] flex justify-center items-center">
                          <img src={filtr} alt="" />
                        </div>
                        <p className="text-gray-500">Все фильтры </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="catalog px-1 w-1/5">
                      <div className="relative w-full catalogImgBox h-[220px]">
                        <Swiper
                          pagination={true}
                          modules={[Pagination]}
                          className="swiper-item h-full"
                        >
                          <SwiperSlide>
                            <div className="relative h-full">
                              <div className="flex justify-center items-center h-full">
                                <img
                                  className="mb-2 object-cover"
                                  src={CarouselImg}
                                  alt=""
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                        <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
                          <button
                            className={`w-[8px] h-[8px] bg-redPrimary rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-orange-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-green-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-greenPrimary rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-blue-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-purple-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-indigo-600 rounded-[4px]`}
                          ></button>
                        </div>
                      </div>

                      <div className="default">
                        <div className="mb-5">
                          <p className="text-fs_7 tracking-wide">
                            Маска для лица
                          </p>
                        </div>
                        <p className="mb-2">Lorem ipsum dolor sit amet.</p>
                        <div className="relative mb-2">
                          <p className="text-xl">
                            88888
                            <span className="text-xs absolute top-0">12</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-xs absolute top-0 line-through text-redPrimary">
                              234
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-between catalog_btns">
                          <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                            добавить
                          </button>

                          <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                            <Link
                              to={"category/1"}
                              className="w-full h-full flex justify-center items-center"
                            >
                              <img src={SearchIcon} alt="" />
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="catalog px-1 w-1/5">
                      <div className="relative w-full catalogImgBox h-[220px]">
                        <Swiper
                          pagination={true}
                          modules={[Pagination]}
                          className="swiper-item h-full"
                        >
                          <SwiperSlide>
                            <div className="relative h-full">
                              <div className="flex justify-center items-center h-full">
                                <img
                                  className="mb-2 object-cover"
                                  src={CarouselImg}
                                  alt=""
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                        <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
                          <button
                            className={`w-[8px] h-[8px] bg-redPrimary rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-orange-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-green-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-greenPrimary rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-blue-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-purple-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-indigo-600 rounded-[4px]`}
                          ></button>
                        </div>
                      </div>

                      <div className="default">
                        <div className="mb-5">
                          <p className="text-fs_7 tracking-wide">
                            Маска для лица
                          </p>
                        </div>
                        <p className="mb-2">Lorem ipsum dolor sit amet.</p>
                        <div className="relative mb-2">
                          <p className="text-xl">
                            88888
                            <span className="text-xs absolute top-0">12</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-xs absolute top-0 line-through text-redPrimary">
                              234
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-between catalog_btns">
                          <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                            добавить
                          </button>

                          <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                            <Link
                              to={"category/1"}
                              className="w-full h-full flex justify-center items-center"
                            >
                              <img src={SearchIcon} alt="" />
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="catalog px-1 w-1/5">
                      <div className="relative w-full catalogImgBox h-[220px]">
                        <Swiper
                          pagination={true}
                          modules={[Pagination]}
                          className="swiper-item h-full"
                        >
                          <SwiperSlide>
                            <div className="relative h-full">
                              <div className="flex justify-center items-center h-full">
                                <img
                                  className="mb-2 object-cover"
                                  src={CarouselImg}
                                  alt=""
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                        <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
                          <button
                            className={`w-[8px] h-[8px] bg-redPrimary rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-orange-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-green-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-greenPrimary rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-blue-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-purple-600 rounded-[4px]`}
                          ></button>
                          <button
                            className={`w-[8px] h-[8px] bg-indigo-600 rounded-[4px]`}
                          ></button>
                        </div>
                      </div>

                      <div className="default">
                        <div className="mb-5">
                          <p className="text-fs_7 tracking-wide">
                            Маска для лица
                          </p>
                        </div>
                        <p className="mb-2">Lorem ipsum dolor sit amet.</p>
                        <div className="relative mb-2">
                          <p className="text-xl">
                            88888
                            <span className="text-xs absolute top-0">12</span>
                            <span className="ml-4 mr-1">RUB</span>
                            <span className="text-xs absolute top-0 line-through text-redPrimary">
                              234
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-between catalog_btns">
                          <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                            добавить
                          </button>

                          <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                            <Link
                              to={"category/1"}
                              className="w-full h-full flex justify-center items-center"
                            >
                              <img src={SearchIcon} alt="" />
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full sm:w-[25%] pl-0 sm:pl-[50px]">
            <div className=" border-0 sm:border-l-2 sm:pl-5 py-3 mb-5 px-2">
              <p className="text-xl my-3">
                Ваш набор <span>Майя</span>
              </p>
              <div className="flex flex-wrap sm:flex-col sm:flex-nowrap justify-start gap-2">
                <div className="setProduct flex justify-between items-center py-5 sm:border-b-2">
                  <div className="w-full sm:w-[90%] block sm:flex justify-start items-center gap-3 ">
                    <img
                      className="w-full sm:w-[100px] object-contain"
                      src={CarouselImg}
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-xs">
                        Инновационный <br /> очиститель
                      </p>
                      <p className="text-xs">15 185.55 ₽</p>
                    </div>
                    <div className="flex justify-between items-center py-3 sm:hidden gap-3">
                      <p>Количество</p>
                      <button className="border-2 border-gray-800 px-4 rounded flex justify-center items-center">
                        20
                      </button>
                    </div>
                  </div>

                  <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                    <button>
                      <IoClose />
                    </button>
                    <button>
                      <i className="fa-solid fa-plus text-gray-400"></i>
                    </button>
                  </div>
                </div>
                <div className="setProduct flex justify-between items-center py-5 sm:border-b-2">
                  <div className="w-full sm:w-[90%] block sm:flex justify-start items-center gap-3 ">
                    <img
                      className="w-full sm:w-[100px] object-contain"
                      src={CarouselImg}
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-xs">
                        Инновационный <br /> очиститель
                      </p>
                      <p className="text-xs">15 185.55 ₽</p>
                    </div>
                    <div className="flex justify-between items-center py-3 sm:hidden gap-3">
                      <p>Количество</p>
                      <button className="border-2 border-gray-800 px-4 rounded flex justify-center items-center">
                        20
                      </button>
                    </div>
                  </div>

                  <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                    <button>
                      <IoClose />
                    </button>
                    <button>
                      <i className="fa-solid fa-plus text-gray-400"></i>
                    </button>
                  </div>
                </div>
                <div className="setProduct flex justify-between items-center py-5 sm:border-b-2">
                  <div className="w-full sm:w-[90%] block sm:flex justify-start items-center gap-3 ">
                    <img
                      className="w-full sm:w-[100px] object-contain"
                      src={CarouselImg}
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-xs">
                        Инновационный <br /> очиститель
                      </p>
                      <p className="text-xs">15 185.55 ₽</p>
                    </div>
                    <div className="flex justify-between items-center py-3 sm:hidden gap-3">
                      <p>Количество</p>
                      <button className="border-2 border-gray-800 px-4 rounded flex justify-center items-center">
                        20
                      </button>
                    </div>
                  </div>

                  <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                    <button>
                      <IoClose />
                    </button>
                    <button>
                      <i className="fa-solid fa-plus text-gray-400"></i>
                    </button>
                  </div>
                </div>
                <div className="setProduct flex justify-between items-center py-5 sm:border-b-2">
                  <div className="w-full sm:w-[90%] block sm:flex justify-start items-center gap-3 ">
                    <img
                      className="w-full sm:w-[100px] object-contain"
                      src={CarouselImg}
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-xs">
                        Инновационный <br /> очиститель
                      </p>
                      <p className="text-xs">15 185.55 ₽</p>
                    </div>
                    <div className="flex justify-between items-center py-3 sm:hidden gap-3">
                      <p>Количество</p>
                      <button className="border-2 border-gray-800 px-4 rounded flex justify-center items-center">
                        20
                      </button>
                    </div>
                  </div>

                  <div className=" justify-center items-center gap-2 setBtns hidden sm:flex sm:flex-col">
                    <button>
                      <IoClose />
                    </button>
                    <button>
                      <i className="fa-solid fa-plus text-gray-400"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-5 px-2">
              <button className="text-greenPrimary">
                + Добавить нанесение
              </button>
              <button>
                <img src={QuestionIcon} alt="" />
              </button>
            </div>
            <div className="bg-gray-200 rounded-xs py-2 px-3 mb-5">
              <div className="border-b border-gray-500">
                <div className="flex justify-between items-center py-1">
                  <p className="font-normal ">Количество:</p>
                  <input
                    value={product.quantity}
                    onChange={(e) =>
                      setProduct((prev: any) => ({
                        ...prev,
                        quantity: e.target.value,
                      }))
                    }
                    className="border w-[50px] bg-transparent text-fs_7 border-black rounded-md outline-none px-2 tracking-wider font-normal"
                  />
                </div>
                <div className="w-full px-2 py-2">
                  <RangeSlider
                    color={"red"}
                    value={[0, product.discountRange]}
                    thumbsDisabled={[false, false]}
                    rangeSlideDisabled={true}
                  />
                  <div className="flex justify-between text-[10px] font-normal py-2">
                    <p>
                      3% <br />
                      30 шт.
                    </p>
                    <p className="text-center">
                      5% <br />
                      100 шт.
                    </p>
                    <p className="text-end">
                      7% <br />
                      300 шт.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 font-normal">
                  <p>Стоимость тиража:</p>
                  <p>{product.totalPrice} ₽ </p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Скидка:</p>
                  <p>{product.discount}% </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 py-1 text-base">
                <b className="">Итоговая стоимость:</b>
                <b className="">{product.discountedPrice} ₽ </b>
              </div>
            </div>
            <div className="px-2 sm:px-0">
              <button className="w-full py-4 bg-redPrimary text-white text-xs rounded">
                В КОРЗИНУ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSet;
