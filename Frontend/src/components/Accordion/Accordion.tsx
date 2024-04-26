import { useEffect, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Faq } from "../../mock/data";
import accordionIcon from "../../assets/icons/accordion-icon.png";
import { GetFaqs } from "../../services/services";

const AccordionMaldex = () => {
    const [open, setOpen] = useState<number>(0);
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        GetFaqs("faq/").then((res) => {
            setFaq(res), console.log(res);
        });
    }, []);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    return (
        <div className="max-w-[1200px] w-full pl-0 lg:pl-[150px]">
            {Faq.map((item, i) => (
                <Accordion
                    key={i}
                    className="border border-lightPrimary rounded-xl  my-4"
                    open={open === item.id}
                    icon={
                        <img
                            className={`w-[14px] md:w-[18px] ${
                                item.id === open ? "rotate-180" : ""
                            } transition-transform`}
                            src={accordionIcon}
                        />
                    }
                    placeholder={<div />}
                >
                    <AccordionHeader
                        className="border-0 p-4"
                        onClick={() => handleOpen(item.id)}
                        placeholder={<div />}
                    >
                        <h3 className="font-normal font-Helvetica-Neue text-fs_8 lg:text-fs_4 text-darkSecondary ">
                            {item.title}
                        </h3>
                    </AccordionHeader>
                    <AccordionBody className="p-4" placeholder={<div />}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: item.content,
                            }}
                            className="font-Helvetica-Neue font-medium  text-fs_9 lg:text-base"
                        />
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    );
};
export default AccordionMaldex;
