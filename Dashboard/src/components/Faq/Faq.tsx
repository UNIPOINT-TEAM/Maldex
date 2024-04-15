import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  button,
} from '@material-tailwind/react';
import accordionIcon from '../../assets/icons/accordion-icon.png';
import { IoMdAdd } from 'react-icons/io';
import { DeleteFaq } from '..';
import { MdEdit } from 'react-icons/md';

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
  const [faqStatus, setFaqStatus] = useState(0);
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
  const [editingItem, setEditingItem] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const addFaq = () => {
    const newFaqItem = {
      id: faq.length + 1,
      title: faqHeader,
      content: faqBody,
    };
    setFaq([...faq, newFaqItem]);
    setFaqHeader('');
    setFaqBody('');
    setFaqStatus(0);
  };

  const startEdit = (id: number) => {
    setFaqStatus(2);
    const item = faq.find((item) => item.id === id);
    if (item) {
      setNewTitle(item.title);
      setNewContent(item.content);
      setEditingItem(id);
    }
  };

  const cancelEdit = () => {
    setFaqStatus(0);
    setEditingItem(null);
    setNewTitle('');
    setNewContent('');
  };

  const saveEdit = () => {
    setFaqStatus(0);
    if (editingItem !== null) {
      setFaq((prevFaq) =>
        prevFaq.map((item) =>
          item.id === editingItem
            ? { ...item, title: newTitle, content: newContent }
            : item,
        ),
      );
      setEditingItem(null);
      setNewTitle('');
      setNewContent('');
    }
  };

  const removeFaq = (id: any) => {
    const newData = faq.filter((item) => item.id !== id);
    setFaq(newData);
  };

  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h3 className="section-title">FAQ</h3>
        <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 ">
          Сохранять
        </button>
      </div>

      <div className="max-w-[1200px] w-full pl-[150px]">
        {faq.map((item) => (
          <Accordion
            id={item.id}
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
                  <button
                    onClick={() => startEdit(item.id)}
                    className="bg-warning rounded w-[30px] h-[30px] flex justify-center items-center"
                  >
                    <MdEdit size={16} color={'white'} />
                  </button>
                  <DeleteFaq {...item} onRemove={removeFaq} />
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="p-4" placeholder={<div />}>
              {item.content}
            </AccordionBody>
          </Accordion>
        ))}
        {faqStatus == 0 ? (
          <div className="flex w-full justify-center">
            <button
              className="border border-dashed w-[60px] h-[60px] rounded-[30px] flex justify-center items-center"
              onClick={() => setFaqStatus(1)}
            >
              <IoMdAdd size={30} />
            </button>
          </div>
        ) : faqStatus == 1 ? (
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
            <div className="flex justify-center items-start gap-3">
              <button
                onClick={() => setFaqStatus(0)}
                className="bg-red-400 text-white w-[200px] h-[40px] rounded"
              >
                cancel
              </button>
              <button
                onClick={addFaq}
                className="bg-blue-400 text-white w-[200px] h-[40px] rounded"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="border border-dashed py-5 px-2 w-full rounded-xl">
            <input
              defaultValue={newTitle}
              type="text"
              placeholder="title"
              className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              defaultValue={newContent}
              type="text"
              placeholder="description"
              className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
              onChange={(e) => setNewContent(e.target.value)}
            />
            <div className="flex justify-center items-start gap-3">
              <button
                onClick={cancelEdit}
                className="bg-red-400 text-white w-[200px] h-[40px] rounded"
              >
                cancel
              </button>
              <button
                onClick={saveEdit}
                className="bg-blue-400 text-white w-[200px] h-[40px] rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;

