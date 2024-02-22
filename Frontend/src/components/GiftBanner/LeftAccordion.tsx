import React, { useState } from "react";
import accordionIcon from "../../assets/icons/accordion-icon.png";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const LeftAccordion = () => {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <div className="w-[246px]">
        <h1 className="text-[28px] font-black tracking-wide">Подарочные наборы</h1>
      </div>
      <Accordion
        className="border border-lightPrimary rounded-xl my-4"
        open={open === 0} // Используйте значение open для определения открытого состояния
        icon={
          <img
            className={`${open === 1 ? "rotate-180" : ""} transition-transform`}
            src={accordionIcon}
            alt="Accordion Icon"
          />
        }
        placeholder={<div />}
      >
        <AccordionHeader
          className="border-0 p-4"
          onClick={() => handleOpen(1)}
          placeholder={<div />}
        >
          <h3 className="font-helvetica -tracking-tighter text-fs_4 text-darkSecondary">
            Title
          </h3>
        </AccordionHeader>
        <AccordionBody className="p-4" placeholder={<div />}>
          Amir
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default LeftAccordion;
