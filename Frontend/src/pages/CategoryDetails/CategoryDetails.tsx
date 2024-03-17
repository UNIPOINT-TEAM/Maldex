import { useEffect, useState } from "react";
import { Banner, SliderProduct, TabList } from "../../components";
import Tshirt from "../../assets/t-shirt.svg";
import nasilnenie_l from "../../assets/shirt-l.png";
import nasilnenie_r from "../../assets/shirt-r.png";
import tabImages from "../../assets/images/tab-image.png";
import {
  Slider,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import ProductSize from "../../components/CategoryDetails/ProductSize";
import {
  FreeSample,
  TabDescription,
  TabFour,
  TabSizeTable,
} from "../../components/CategoryDetails";
import { ProductColor } from "../../mock/data";
import ProductPerviewModal from "../../components/CategoryDetails/ProductPerviewModal";

const CategoryTabs = [
  {
    label: "Описание",
    value: "Описание",
    content: <TabDescription />,
  },
  {
    label: "Характеристики",
    value: "Характеристики",
    content: <TabList />,
  },
  {
    label: "таблица размеров",
    value: "таблица размеров",
    content: <TabSizeTable />,
  },
  {
    label: "виды нанесения",
    value: "виды нанесения",
    content: <TabFour />,
  },
];

const btnSize = [
  { id: 1, size: "XS" },
  { id: 2, size: "S" },
  { id: 3, size: "M" },
  { id: 4, size: "L" },
  { id: 5, size: "XL" },
];
const Buttons = [
  { id: 1, name: "Фото", icon: false },
  { id: 2, name: "Места <br /> нанесения", icon: true },
  { id: 3, name: "примеры", icon: false },
];
const CategoryDetails = () => {
  const [isActive, setIsActive] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [productColor, setproductColor] = useState<number>(0);
  const [btnActiveSize, setbtnActiveSize] = useState<number>(1);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="container_xxl tracking-wider ">
      <div className="grid grid-cols-3 lg:grid-cols-10 my-5">
        <div className="h-full py-5 col-span-3 ">
          <img src={tabImages} alt="icon" className="w-[70px] py-5" />
          <Tabs value="Описание">
            <TabsHeader
              placeholder={<div />}
              className="bg-transparent"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-redPrimary shadow-none rounded-none",
              }}
            >
              {CategoryTabs.map(({ label, value }) => (
                <Tab
                  placeholder={<div />}
                  key={value}
                  value={value}
                  activeClassName="text-[#fff]"
                  className="text-[11px] uppercase h-[40px] text-darkSecondary w-auto font-helvetica-neue font-bold"
                >
                  <p>{label}</p>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
              placeholder={<div />}
              className="p-0 m-0"
            >
              {CategoryTabs.map((item) => (
                <TabPanel value={item.value} className="p-0 m-0 py-2">
                  {item.content}
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
              {ProductColor.map((item) => (
                <input
                  onClick={() => setproductColor(item.id)}
                  type="radio"
                  name="input"
                  style={{ accentColor: item.color, background: item.color }}
                  className={`w-4 lg:w-5 h-4 lg:h-5 bg-[${item.color}] ${
                    productColor !== item.id && "appearance-none"
                  } rounded-full  cursor-pointer`}
                />
              ))}
            </div>
          </div>
          <div
            className={`flex justify-center mt-10 w-full h-full items-center ${
              isActive !== 1 && "hidden"
            }`}
          >
            <ProductPerviewModal />
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
            <div className="flex justify-between">
              <div>
                <span className="border tracking-normal  text-redPrimary border-redPrimary py-[2px] px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                  NEW
                </span>
                <span className="border tracking-normal border-darkPrimary py-[2px] px-[6px]  rounded-[15px] text-[12px] font-bold">
                  HIT
                </span>
              </div>
              {isFavorite ? (
                <IoMdHeart
                  color="red"
                  size={20}
                  onClick={() => setIsFavorite((prev) => !prev)}
                />
              ) : (
                <IoMdHeartEmpty
                  size={20}
                  onClick={() => setIsFavorite((prev) => !prev)}
                />
              )}
            </div>
            <div className="container mx-auto lg:px-4 py-4">
              <h2 className="text-base font-semibold  tracking-wider">
                Футболка женская T-bolka Lady, оранжевая
              </h2>
              <div className=" mt-4">
                <p className="text-darkSecondary text-fs_8 tracking-wide font-semibold">
                  РАЗМЕР:
                </p>
                <div className="flex space-x-2">
                  {btnSize.map((item, i) => (
                    <ProductSize
                      {...item}
                      onActiveSize={setbtnActiveSize}
                      btnActiveSize={btnActiveSize}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-5">
                <button className="text-greenPrimary font-bold">
                  + Добавить нанесение
                </button>
                <Tooltip
                  placement="bottom"
                  className="border w-[400px] px-10 -translate-x-14 border-blue-gray-50 bg-white  py-3 shadow-xl shadow-black/10"
                  content={
                    <div className="w-full">
                      {/* @ts-ignore */}
                      <Typography
                        placeholder={<h2 />}
                        variant="small"
                        color="blue-gray"
                        className="font-bold font-helvetica-neue text-center"
                      >
                        Точную сумму нанесения вам сообщит менеджер после
                        оформления заказа
                      </Typography>
                    </div>
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Tooltip>
              </div>
              <div className="bg-gray-200 rounded-xs py-2 px-3 mb-5">
                <div className="border-b border-gray-500">
                  <div className="flex justify-between items-center py-1">
                    <p className="font-normal">Количество:</p>
                    <input
                      value={1000}
                      className="border w-[50px] bg-transparent text-fs_7 border-black rounded-md outline-none px-2 tracking-wider font-normal"
                    />
                  </div>
                  <div className="w-full px-2 py-2">
                    <Slider
                      defaultValue={50}
                      color="red"
                      size="sm"
                      placeholder={<input />}
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
                    <p>80 619,00 ₽ </p>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <p>Скидка:</p>
                    <p>5% </p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-3 py-1 text-base">
                  <b className="">Итоговая стоимость:</b>
                  <b className="">14 619,00 ₽ </b>
                </div>
              </div>
              <button className="w-full py-4 bg-redPrimary text-white text-xs tracking-wide rounded-lg">
                В КОРЗИНУ
              </button>
              <div className="mt-3 flex justify-between text-darkSecondary">
                <FreeSample />
                <span className="text-[9px] lg:text-[10px] border border-darkSecondary px-4 py-[6px] rounded-lg uppercase">
                  <b>бесплатный дизайн макет</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SliderProduct />
      <Banner />
    </div>
  );
};

export default CategoryDetails;
