import { Banner } from "../../components";
import Tshirt from "../../assets/t-shirt.png";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

const CategoryDetails = () => {
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
  return (
    <div>
      <div className="h-[400px]  grid grid-cols-3 my-5">
        <div className=" h-full p-5">
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
                  className="text-fs_9 uppercase w-auto"
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody placeholder={<div />}>
              {data.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  Недорогая миниатюрная беспроводная колонка Chubby порадует
                  владельца аккуратным исполнением и высоким качеством
                  материалов. Колонка обтянута акустической тканью популярной
                  фактуры, имеет приятное софт-тач покрытие и демонстрирует
                  хороший, особенно для столь компактного корпуса, звук.
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        <div className="bg-white flex flex-col  items-start  p-5">
          <div className="flex gap-2 font-bold uppercase">
            <div className="bg-redPrimary text-[#fff] py-[13px] px-[12px] tracking-widest text-fs_9 rounded-lg">
              Фото
            </div>
            <div className="bg-[#fff] py-[13px] px-[12px] tracking-widest text-fs_9 rounded-lg">
              Места нанесения
            </div>
            <div className="bg-[#fff] py-[13px] px-[12px] tracking-widest text-fs_9 rounded-lg">
              примеры
            </div>
          </div>
          <div className="flex justify-center mt-10 w-full">
            <img src={Tshirt} alt="" />
          </div>
        </div>
        <div className="py-3 px-5">
          <div className="">
            <div className="">
              <span className="border text-redPrimary border-redPrimary py-[2px] px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                NEW
              </span>
              <span className="border  border-darkPrimary py-[2px] px-[6px]  rounded-[15px] text-[12px] font-bold">
                HIT
              </span>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default CategoryDetails;
