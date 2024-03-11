import React, { useState } from "react";
import accordionIcon from "../../assets/icons/accordion-icon.png";

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
      products: [{ name: "Товар 4" }, { name: "Товар 5" }, { name: "Товар 6" }],
    },
  ];

  return (
    <div className="">
      <div className="w-[246px]">
        <h1 className="text-[28px] font-black tracking-wide">
          Подарочные наборы
        </h1>
      </div>
      {data.map((category, index) => (
        <Accordion
          key={index}
          className="my-4"
          open={openAccordionIndex === index}
          icon={
            <img
              className={`${
                openAccordionIndex === index ? "rotate-180" : ""
              } transition-transform`}
              src={accordionIcon}
              alt="Accordion Icon"
            />
          }
          placeholder={<div />}
        >
          <AccordionHeader
            className="border-0  cursor-pointer"
            onClick={() => handleAccordionClick(index)}
            placeholder={<div />}
          >
            <h3 className="font-helvetica -tracking-tighter text-fs_4 text-darkSecondary">
              {category.title}
            </h3>
          </AccordionHeader>
          <AccordionBody className="" placeholder={<div />}>
            {category.products.map((product, productIndex) => (
              <div key={productIndex}>{product.name}</div>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default LeftAccordion;
