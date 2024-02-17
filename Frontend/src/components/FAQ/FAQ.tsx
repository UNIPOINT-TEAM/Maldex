import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Faq } from "../../mock/data";
import accordionIcon from "../../assets/icons/accordion-icon.png";

export const Icon = (props: { id: number; open: number }) => {
  const { id, open } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#00B6BA"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const FAQ = () => {
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
export default FAQ;
