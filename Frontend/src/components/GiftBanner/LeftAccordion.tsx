import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { GetGiftsCategory } from "../../services/services";

const LeftAccordion = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const [giftsCategory, setGiftsCategory] = useState([]);
  const handleAccordionClick = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    GetGiftsCategory()
      .then(data => {
        console.log(data); 
        setGiftsCategory(data); 
      })
      .catch(error => console.error('Ошибка при получении тэгов:', error));
  }, []);
  return (
    <div className="">
      <div className="pl-2 w-[246px]">
        <h1 className="text-[28px] font-medium font-black leading-7 tracking-wide mb-8">
          Подарочные наборы
        </h1>
      </div>
      {giftsCategory.map((category, index) => (
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
              {category.name}
            </h3>
          </AccordionHeader>
          <AccordionBody
            className={`${openAccordionIndex === index ? "" : ""}`}
            placeholder={<div />}
          >
            {category.children.map((subCategory, subIndex) => (
              <div key={subIndex}>
                <h4 className="font-Helvetica-Neue font-medium text-black">{subCategory.name}</h4>
                {subCategory.children.map((product, productIndex) => (
                  <div
                    className="my-2 pl-3 text-base font-Helvetica-Neue  cursor-pointer hover:text-redPrimary"
                    key={productIndex}
                  >
                    <h4 className="font-Helvetica-Neue font-medium text-black">{product.name}</h4>
                  </div>
                ))}
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default LeftAccordion;
