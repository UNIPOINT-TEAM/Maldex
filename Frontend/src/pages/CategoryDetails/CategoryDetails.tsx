import { useState } from "react";
import { Banner, SliderProduct } from "../../components";
import Tshirt from "../../assets/t-shirt.png";
import nasilnenie_l from "../../assets/shirt-l.png";
import nasilnenie_r from "../../assets/shirt-r.png";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

export const SizeButton: React.FC<{ size: string }> = ({ size }) => {
  return (
    <button className=" w-[30
    px] lg:w-[35px] h-[30px] lg:h-[35px] py-1 text-xs font-bold text-gray-800 border border-[#d3d3d3] rounded-[50%]  focus:outline-none ">
      {size}
    </button>
  );
};

const data = [
  {
    label: "Описание",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people 
    who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Характеристики",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "таблица размеров",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "виды нанесения",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];
const Buttons = [
  { id: 1, name: "Фото", icon: false },
  { id: 2, name: "Места <br /> нанесения", icon: true },
  { id: 3, name: "примеры", icon: false },
];
const CategoryDetails = () => {
  const [isActive, setIsActive] = useState<number>(1);
  return (
    <div className="container_xxl tracking-wider ">
      <div className="grid grid-cols-3 lg:grid-cols-10 my-5">
        <div className="h-full p-5 col-span-3 order-3">
          <Tabs value="html">
            <TabsHeader
              placeholder={<div />}
              className="tab-header border-0 border-b rounded-none bg-[#fff]"
            >
              {data.map(({ label, value }) => (
                <Tab
                  placeholder={<div />}
                  key={value}
                  value={value}
                  className="text-[10px] uppercase w-auto font-helvetica font-bold"
                >
                  <p> {label}</p>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody placeholder={<div />}>
              {data.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  <p className="text-[#000] font-helvetica font-bold">
                    Недорогая миниатюрная беспроводная колонка Chubby порадует
                    владельца аккуратным исполнением и высоким качеством
                    материалов. Колонка обтянута акустической тканью популярной
                    фактуры, имеет приятное софт-тач покрытие и демонстрирует
                    хороший, особенно для столь компактного корпуса, звук.
                  </p>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        <div className="bg-white flex flex-col items-start p-2 lg:p-5 col-span-3 lg:col-span-4 relative">
          <div className="flex gap-2 font-bold uppercase">
            {Buttons.map((button) => (
              <div
                onClick={() => setIsActive(button.id)}
                className={`bg-[#fff] flex gap-3 items-center cursor-pointer py-[9px] lg:py-[13px] px-[15px] tracking-widest text-fs_9 rounded-lg ${
                  isActive == button.id && "bg-redPrimary text-[#fff]"
                }`}
              >
                {button.icon && (
                  <div
                    className={`border bottom-1 border-redPrimary text-fs_7 text-redPrimary  flex items-center justify-center w-[25px] h-[25px] rounded-[50%] ${
                      isActive == button.id && "border-white text-white"
                    }`}
                  >
                    +
                  </div>
                )}
                <span
                  className=" text-[8px] lg:text-fs_9"
                  dangerouslySetInnerHTML={{
                    __html: button.name,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute rounded-s-xl right-2 lg:right-5 lg:translate-y-[50%] top-[30%]  lg:top-[15%] bg-[#fff] px-3 py-5">
            <div className="flex flex-col gap-2">
              <input
                type="radio"
                name="color"
                className={`w-4 lg:w-5 h-4 lg:h-5 rounded-full appearance-none bg-[#2b395c] `}
              />
              <input
                type="radio"
                name="color"
                className={`w-4 lg:w-5 h-4 lg:h-5 rounded-full appearance-none bg-[#F0503B] `}
              />
              <input
                type="radio"
                name="color"
                className={`w-4 lg:w-5 h-4 lg:h-5 rounded-full appearance-none bg-[#D9D9D9] `}
              />
              <input
                type="radio"
                name="color"
                className={`w-4 lg:w-5 h-4 lg:h-5 rounded-full appearance-none bg-[#43AD58] `}
              />
              <input
                type="radio"
                name="color"
                className={`w-4 lg:w-5 h-4 lg:h-5 rounded-full appearance-none bg-[#ECE04C] `}
              />
              <input
                type="radio"
                name="color"
                className={`w-4 lg:w-5 h-4 lg:h-5 rounded-full appearance-none bg-[#2B395C] `}
              />
            </div>
          </div>
          <div
            className={`flex justify-center mt-10 w-full h-full items-center ${
              isActive !== 1 && "hidden"
            }`}
          >
            <img src={Tshirt} alt="" className="w-[200px] lg:w-[260px]" />
          </div>
          <div
            className={`${
              isActive !== 2 && "hidden"
            } grid grid-cols-2 items-center h-full w-full`}
          >
            <div className="box-l flex justify-end">
              <img src={nasilnenie_r} alt="" className="w-[260px]" />
            </div>
            <div className="box-r flex justify-start">
              <img src={nasilnenie_l} alt="" className="w-[200px] " />
            </div>
          </div>
          <div
            className={`${
              isActive !== 3 && "hidden"
            } flex justify-center items-center mt-10 w-full h-full`}
          >
            <img src={Tshirt} alt="" />
            <div className="color-panel"></div>
          </div>
        </div>
        <div className="py-3 px-3 lg:px-5 col-span-3">
          <div>
            <div>
              <span className="border text-redPrimary border-redPrimary py-[2px] px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                NEW
              </span>
              <span className="border  border-darkPrimary py-[2px] px-[6px]  rounded-[15px] text-[12px] font-bold">
                HIT
              </span>
            </div>
            <div className="container mx-auto lg:px-4 py-4">
              <h2 className="text-base font-extrabold text-gray-800 tracking-wider">
                Футболка женская T-bolka Lady, оранжевая
              </h2>
              <div className=" mt-4">
                <p className="text-darkSecondary text-fs_8 font-extrabold tracking-widest">
                  РАЗМЕР:
                </p>
                <div className="flex space-x-2">
                  <SizeButton size="XS" />
                  <SizeButton size="S" />
                  <SizeButton size="M" />
                  <SizeButton size="L" />
                  <SizeButton size="XL" />
                  <SizeButton size="2XL" />
                </div>
              </div>
            </div>
            <div className="font-bold">
              <div className="flex justify-between items-center mb-5">
                <button className="text-greenPrimary">
                  + Добавить нанесение
                </button>
                <button>
                  <i className="fa-solid fa-circle-info text-gray-400"></i>
                </button>
              </div>
              <div className="bg-gray-200 rounded-xs py-2 px-3 mb-5">
                <div className="border-b border-gray-500">
                  <div className="flex justify-between items-center  py-1">
                    <p>Количество:</p>
                    <b className="border border-black rounded px-2 tracking-wider">
                      256
                    </b>
                  </div>
                  <div className="w-full px-2">
                    <input
                      type="range"
                      className="w-full appearance-none bg-[#CBCAC6] h-1"
                    />
                    <div className="flex justify-between text-[10px]">
                      <p>
                        3% <br />
                        30 шт.
                      </p>
                      <p>
                        5% <br />
                        100 шт.
                      </p>
                      <p>
                        7% <br />
                        300 шт.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <p>Стоимость тиража:</p>
                    <p>80 619,00 ₽ </p>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <p>Скидка:</p>
                    <p>5% </p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-3 py-1 font-extrabold">
                  <b className="text-lg">Итоговая стоимость:</b>
                  <b className="text-lg">14 619,00 ₽ </b>
                </div>
              </div>
              <button className="w-full py-4 bg-redPrimary text-white text-xs tracking-widest  font-extrabold rounded-lg">
                В КОРЗИНУ
              </button>
              <div className="mt-3 flex justify-between ">
                <span className="text-[10px] border border-[#666666] text-[#666666] px-5 py-[6px] rounded-lg uppercase">
                  <b>бесплатный образец</b>
                </span>
                <span className="text-[10px] border border-[#666666] text-[#666666] px-5 py-[6px] rounded-lg uppercase">
                  <b>бесплатный дизайн макет</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <SliderProduct /> */}
      <Banner />
    </div>
  );
};

export default CategoryDetails;
