import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Faq } from "../../mock/data";
import accordionIcon from "../../assets/icons/accordion-icon.png";

const AccordionMaldex = () => {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-[1200px] w-full pl-[150px]">
      {Faq.map((item) => (
        <Accordion
          className="border border-lightPrimary rounded-xl  my-4"
          open={open === item.id}
          icon={
            <img
              className={`${
                item.id === open ? "rotate-180" : ""
              } transition-transform`}
              src={accordionIcon}
            />
          }
          placeholder={<div />}
        >
          <AccordionHeader
            className="border-0  p-4"
            onClick={() => handleOpen(item.id)}
            placeholder={<div />}
          >
            <h3 className="font-helvetica -tracking-tighter text-fs_4 text-darkSecondary ">
              {item.title}
            </h3>
          </AccordionHeader>
          <AccordionBody className="p-4" placeholder={<div />}>
            {item.content}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};
export default AccordionMaldex;
