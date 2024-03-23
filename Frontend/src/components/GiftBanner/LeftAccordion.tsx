import { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const LeftAccordion = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const handleAccordionClick = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Массив данных
  const data = [
    {
      title: "Для кого",
      products: [{ name: "Товар 1" }, { name: "Товар 2" }, { name: "Товар 3" }],
    },
    {
      title: "Поводы",
      products: [{ name: "Товар 4" }, { name: "Товар 5" }, { name: "Товар 6" }],
    },
    {
      title: "От 1000 до 3000",
      products: [{ name: "Товар 4" }, { name: "Товар 5" }, { name: "Товар 6" }],
    },
    {
      title: "От 3000 до 5000",
      products: [{ name: "Товар 4" }, { name: "Товар 5" }, { name: "Товар 6" }],
    },
    {
      title: "От 5000 до 10000",
      products: [{ name: "Товар 4" }, { name: "Товар 5" }, { name: "Товар 6" }],
    },
    {
      title: "От 10000",
      products: [{ name: "Товар 4" }, { name: "Товар 5" }, { name: "Товар 6" }],
    },
    {
      title: "Наборы",
      products: [
        { name: "Личные" },
        { name: "Мужские аксессуары" },
        { name: "Одежда" },
        { name: "Для офиса" },
        { name: "Пишушие инструменты" },
        { name: "Сумки" },
        { name: "Вкусные подарки" },
        { name: "Товары для детей" },
        { name: "Электроника" },
      ],
    },
  ];

  return (
    <div className="">
      <div className="pl-2 w-[246px]">
        <h1 className="text-[28px] font-medium font-black leading-7 tracking-wide mb-8">
          Подарочные наборы
        </h1>
      </div>
      {data.map((category, index) => (
        <Accordion
          key={index}
          className="pr-2 font-Helvetica-Neue"
          open={openAccordionIndex === index}
          icon={
            <svg
              className={` ${
                openAccordionIndex === index ? "rotate-180 " : ""
              } transition-transform`}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                d="M2 1L9 9L16 1"
                stroke={openAccordionIndex === index ? "white" : "black"}
                strokeWidth="3"
              />
            </svg>
          }
          placeholder={<div />}
        >
          <AccordionHeader
            className={`border-0 px-2 py-2 cursor-pointer  ${
              openAccordionIndex === index ? "bg-redPrimary  rounded-xl" : ""
            }`}
            onClick={() => handleAccordionClick(index)}
            placeholder={<div />}
          >
            <h3
              className={`font-Helvetica-Neue -tracking-tighter text-fs_4 font-bold text-darkPrimary ${
                openAccordionIndex === index ? "text-white" : ""
              }`}
            >
              {category.title}
            </h3>
          </AccordionHeader>
          <AccordionBody
            className={`${openAccordionIndex === index ? "" : ""}`}
            placeholder={<div />}
          >
            {category.products.map((product, productIndex) => (
              <div
                className="my-2 pl-3 text-base font-Helvetica-Neue  cursor-pointer hover:text-redPrimary"
                key={productIndex}
              >
                <h4 className="font-Helvetica-Neue font-medium text-black">
                  {product.name}
                </h4>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default LeftAccordion;
