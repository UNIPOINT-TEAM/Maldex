import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  button,
} from '@material-tailwind/react';
import accordionIcon from '../../assets/icons/accordion-icon.png';
import { IoMdAdd } from 'react-icons/io';

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
        id === open ? 'rotate-180' : ''
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

const Faq = () => {
  const [faqStatus, setFaqStatus] = useState(true);
  const [faqHeader, setFaqHeader] = useState('');
  const [faqBody, setFaqBody] = useState('');
  const [faq, setFaq] = useState([
    {
      id: 1,
      title: 'О компании (сувенирная продукция в Москве)',
      content:
        'Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний. С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке. <br/> <br/> Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения. Мы изготовим, забрендируем и доставим ваш бизнес сувенир. ',
    },
    {
      id: 2,
      title: 'Более 60 000 наименований',
      content:
        'Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний. С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке.<br/>  Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения. Мы изготовим, забрендируем и доставим ваш бизнес сувенир. ',
    },
    {
      id: 3,
      title: 'Почему maldex?',
      content:
        'Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний. С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке.  Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения. Мы изготовим, забрендируем и доставим ваш бизнес сувенир. ',
    },
    {
      id: 4,
      title: 'Услуги',
      content:
        'Maldex– это комплексный сервис по производству сувенирной продукции для российских и международных компаний. С нашей помощью компании смогут расширить клиентскую базу, повысить лояльность аудитории, укрепить позиции на рынке.  Наша команда берет на себя весь спектр задач по ведению сделки, Вам нужно предоставить лишь логотип для нанесения. Мы изготовим, забрендируем и доставим ваш бизнес сувенир. ',
    },
  ]);

  const addFaq = () => {
    const newFaqItem = {
      id: faq.length + 1,
      title: faqHeader,
      content: faqBody,
    };

    setFaq([...faq, newFaqItem]);
    setFaqHeader('');
    setFaqBody('');
    setFaqStatus(true);
  };

  const removeFaq = (i: any) => {
    setFaq((prev) => prev.filter((item) => item.id !== i.id));
  };

  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-[1200px] w-full pl-[150px]">
      {faq.map((item) => (
        <Accordion
          className="border border-lightPrimary rounded-xl  my-4"
          open={open === item.id}
          icon={
            <img
              className={`${
                item.id === open ? 'rotate-180' : ''
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
            <div className="w-full flex justify-between items-center">
              <h3 className="font-helvetica -tracking-tighter text-fs_4 text-darkSecondary ">
                {item.title}
              </h3>
              <div className="flex gap-1 items-center">
                <button className="bg-yellow-500 rounded w-[30px] h-[30px] flex justify-center items-center">
                  e
                </button>
                <button
                  onClick={() => removeFaq(item)}
                  className="bg-red-500 rounded w-[30px] h-[30px] flex justify-center items-center text-white"
                >
                  e
                </button>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-4" placeholder={<div />}>
            {item.content}
          </AccordionBody>
        </Accordion>
      ))}
      {faqStatus ? (
        <div className="flex w-full justify-center">
          <button
            className="border border-dashed w-[60px] h-[60px] rounded-[30px] flex justify-center items-center"
            onClick={() => setFaqStatus(false)}
          >
            <IoMdAdd size={30} />
          </button>
        </div>
      ) : (
        <div className="border border-dashed py-5 px-2 w-full rounded-xl">
          <input
            type="text"
            placeholder="title"
            className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
            onChange={(e) => setFaqHeader(e.target.value)}
          />
          <input
            type="text"
            placeholder="description"
            className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
            onChange={(e) => setFaqBody(e.target.value)}
          />
          <div className="flex justify-center items-start">
            <button
              onClick={addFaq}
              className="bg-blue-400 text-white w-[200px] h-[40px] rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
