import React from "react";
import onbesh from "../../assets/CompanyIcons/15.png";
import cart from "../../assets/CompanyIcons/cart.png";
import china from "../../assets/CompanyIcons/china.png";
import check from "../../assets/CompanyIcons/check.png";
import comment from "../../assets/CompanyIcons/comment.png";
import country from "../../assets/CompanyIcons/country.png";
import delivery from "../../assets/CompanyIcons/delivery.png";
import europe from "../../assets/CompanyIcons/europe.png";
import gifticon from "../../assets/CompanyIcons/gift-icon.png";
import giftPurple from "../../assets/CompanyIcons/giftPurple.png";
import giftRed from "../../assets/CompanyIcons/giftRed.png";
import globus from "../../assets/CompanyIcons/globus.png";
import guarant from "../../assets/CompanyIcons/guarant.png";
import mapPin from "../../assets/CompanyIcons/map-pin 1.png";
import megafon from "../../assets/CompanyIcons/megafon.png";
import russia from "../../assets/CompanyIcons/russia.png";
import settings from "../../assets/CompanyIcons/sliders 1.png";
import task from "../../assets/CompanyIcons/task.png";
import usa from "../../assets/CompanyIcons/usa.png";
import {
  AboutInfo,
  BannerBottom,
  BannerBottomMobile,
  BannerSlider,
  BannerTop,
  Brands,
  CompanyBottomBanner,
  ProductCard,
  ProductNav,
  QuestForm,
  SliderProduct,
  Steps,
} from "../../components";
import PortfolioBanner from "../../components/PortfolioBanner/PortfolioBanner";

function Company2() {
  // Массив данных для каждого пункта списка
  const data = [
    {
      text: "Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний.",
      text2:
        "С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке.",
      bulletColor: "#ff0000", // Красный цвет bullet
    },
    {
      text: "Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения.",
      text2: "Мы изготовим, забрендируем и доставим ваш бизнес сувенир.",
      bulletColor: "#00ff00", // Зеленый цвет bullet
    },
    {
      text: "У Вас есть идеи собственных сувениров? –Прекрасно!",
      text2:
        "С нашей помощью вы можете изготовить любой сувенир по индивидуальному дизайну.",
      bulletColor: "#0000ff", // Синий цвет bullet
    },
    {
      text: "Бизнес-сувениры из России, Европы, Америки и Китая. Более 1 000 000 подарков со всего мира.",
      text2: "Нам есть что вам предложить! / Нам есть чем вас удивить?",
      bulletColor: "#ff00ff", // Фиолетовый цвет bullet
    },
    {
      text: "Maldex – производи правильное впечатление!",
      bulletColor: "#ffff00", // Желтый цвет bullet
    },
  ];

  return (
    <>
      <div className="container_xxl">
        <div className="flex gap-3">
          <div className=" w-2/5 hidden lg:block">
            <BannerTop />
          </div>
          <div className="w-full lg:w-3/5">
            <BannerSlider />
          </div>
        </div>
        <div>
          <BannerBottom />
          <BannerBottomMobile />
        </div>
        <Brands />
        <div>
          <div>
            <span className="text-[#0000b0] text-[32px] leading-[64px] font-medium">
              Кто мы ?
            </span>
            <div className="px-[70px]">
              <span className="text-[22px] leading-[64px] font-normal">
                Позвольте нам представить себя:
              </span>
              <div>
                <ul>
                  {/* Используем map для вывода данных */}
                  {data.map((item, index) => (
                    <li
                      key={index}
                      className="text-[16px] font-normal leading-5 my-5"
                    >
                      <span
                        style={{
                          color: item.bulletColor,
                          marginRight: "5px", // Расстояние между bullet и текстом
                        }}
                      >
                        &bull;
                      </span>
                      {item.text} <br />
                      <span className="pl-[18px]">{item.text2}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[#E94B67] text-[32px] leading-[64px] font-medium">
              Почему мы? Всё под 1 крышей!
            </span>
            <div className="px-[70px] flex justify-between">
              <div>
                <img src={megafon} alt="" />
                <div>
                  <span className="text-[#0000B0]">Брендинг</span>
                  <ul>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span>{" "}
                      Тампопечать
                    </li>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span> Вышивка
                    </li>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span>{" "}
                      Шелкография
                    </li>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span>{" "}
                      Гравировка
                    </li>
                    <li>
                      <span style={{ color: "#0000B0" }}>&bull;</span> Деколь
                    </li>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span>{" "}
                      Термотрансфер
                    </li>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span> Уф печать
                    </li>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span>{" "}
                      Сублимация
                    </li>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span> Цифровая
                      печать
                    </li>
                    <li>
                      {" "}
                      <span style={{ color: "#0000B0" }}>&bull;</span> Прямая
                      печать на ткани DTG
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div>
                  <img src={cart} alt="" />
                  <div>
                    <span className="text-[#BD43F6]">Складирование</span>
                    <ul>
                      <li>
                        <span style={{ color: "#BD43F6" }}>&bull;</span>{" "}
                        Управление запасами
                      </li>
                      <li>
                        <span style={{ color: "#BD43F6" }}>&bull;</span>{" "}
                        Сокращение складских затрат для наших клиентов
                      </li>
                      <li>
                        <span style={{ color: "#BD43F6" }}>&bull;</span>{" "}
                        Управление складской инвентаризацией (ушло/пришло)
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img src={delivery} alt="" />
                  <div>
                    <span className="text-[#52B5A1]">Логистика</span>
                    <ul>
                      <li>
                        <span style={{ color: "#52B5A1" }}>&bull;</span>
                        Фирменная упаковка
                      </li>
                      <li>
                        <span style={{ color: "#52B5A1" }}>&bull;</span>
                        Бесплатная доставка
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <img src={globus} alt="" />
                  <div>
                    <span className="text-[#F7CE46]">Брендинг</span>
                    <ul>
                      <li>
                        <span style={{ color: "#F7CE46" }}>&bull;</span> Более 1
                        000 000 наименований
                      </li>
                    </ul>
                    <div>
                      <div className="flex flex-wrap">
                        <div className="flex items-center gap-3 w-1/2 mb-3">
                          <img src={russia} alt="" />
                          <span> Россия</span>
                        </div>
                        <div className="flex items-center gap-3 w-1/2 mb-3">
                          <img src={usa} alt="" />
                          <span> Россия</span>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                          <img src={usa} alt="" />
                          <span> Россия</span>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                          <img src={usa} alt="" />
                          <span> Россия</span>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <img src={giftRed} alt="" />
                  <div>
                    <span className="text-[#E94B67]">
                      Дизайн макеты бесплатно
                    </span>
                    <ul>
                      <li> &bull; Тампопечать</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuestForm />
      </div>
    </>
  );
}

export default Company2;
