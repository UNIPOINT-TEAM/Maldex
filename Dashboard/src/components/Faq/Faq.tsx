import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  button,
} from '@material-tailwind/react';
import accordionIcon from '../../assets/icons/accordion-icon.png';
import { IoMdAdd } from 'react-icons/io';
import {
  GetFaqHome,
  PostFaqHome,
  delFaqHome,
  editFaqHome,
} from '../../services/main';
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
  type FaqItem = {
    id: number;
    title: string;
    body: string;
    // Другие поля
  };

  const [faq, setFaq] = useState<FaqItem[]>([]);

  const [faqStatus, setFaqStatus] = useState(true);
  const [faqHeader, setFaqHeader] = useState('');
  const [faqBody, setFaqBody] = useState('');

  const removeFaq = async (id: number) => {
    try {
      await delFaqHome(id);

      setFaq((prevFaq) => prevFaq.filter((item) => item.id !== id));

      console.log('FAQ item deleted:', id);
    } catch (error) {
      console.error('Error deleting FAQ item:', error);
    }
  };

  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    GetFaqHome()
      .then((res) => {
        setFaq(res);
        console.log(res);
      })
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  const addFaq = async () => {
    try {
      const newFaqItem = {
        title: faqHeader,
        body: faqBody,
        type: 'home',
        order: faq.length + 1,
      };

      const response = await PostFaqHome(newFaqItem);

      setFaq([...faq, response]);
      setFaqHeader('');
      setFaqBody('');
      setFaqStatus(true);

      console.log('FAQ item added:', response);
    } catch (error) {
      console.error('Error adding FAQ item:', error);
    }
  };

  const editFaq = async (
    id: number,
    newData: { title: string; body: string },
  ) => {
    try {
      const response = await editFaqHome(id, newData); // Передаем новые данные в функцию editFaqHome

      // Обновляем элемент в состоянии faq
      setFaq((prevFaq) =>
        prevFaq.map((item) => (item.id === id ? response : item)),
      );

      console.log('FAQ item updated:', response);
    } catch (error) {
      console.error('Error updating FAQ item:', error);
    }
  };

  return (
    <div className="max-w-[1200px] w-full pl-[150px]">
      {faq.map((item) => (
        <Accordion
          key={item.id}
          className="border border-lightPrimary rounded-xl my-4"
          open={open === item.id}
          icon={
            <img
              className={`${
                item.id === open ? 'rotate-180' : ''
              } transition-transform`}
              src={accordionIcon}
              alt="Expand/Collapse"
            />
          }
          // placeholder={<div />}
        >
          <AccordionHeader
            className="border-0 p-4"
            onClick={() => handleOpen(item.id)}
            placeholder={<div />}
          >
            <div className="w-full flex justify-between items-center">
              <h3 className="font-helvetica -tracking-tighter text-fs_4 text-darkSecondary ">
                {item.title}
              </h3>
              <div className="flex gap-1 items-center">
                <button
                  className="bg-yellow-500 rounded w-[30px] h-[30px] flex justify-center items-center"
                  onClick={() => {
                    const newTitle = prompt('Enter new title:', item.title);
                    const newBody = prompt('Enter new body:', item.body);
                    if (newTitle !== null && newBody !== null) {
                      editFaq(item.id, { title: newTitle, body: newBody });
                    }
                  }}
                >
                  e
                </button>
                <button
                  onClick={() => removeFaq(item.id)}
                  className="bg-red-500 rounded w-[30px] h-[30px] flex justify-center items-center text-white"
                >
                  d
                </button>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-4" placeholder={<div />}>
            {item.body}
          </AccordionBody>
        </Accordion>
      ))}
      {faqStatus && (
        <div className="flex w-full justify-center">
          <button
            className="border border-dashed w-[60px] h-[60px] rounded-[30px] flex justify-center items-center"
            onClick={() => setFaqStatus(false)}
          >
            <IoMdAdd size={30} />
          </button>
        </div>
      )}

      {!faqStatus && (
        <div className="border border-dashed py-5 px-2 w-full rounded-xl">
          <input
            type="text"
            placeholder="Title"
            className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
            value={faqHeader}
            onChange={(e) => setFaqHeader(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
            value={faqBody}
            onChange={(e) => setFaqBody(e.target.value)}
          />
          <div className="flex justify-center items-start">
            <button
              onClick={addFaq}
              className="bg-blue-400 text-white w-[200px] h-[40px] rounded"
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
            </button>
            <AccordionHeader className="p-4" placeholder={<div />}>
              {item.content}
            </AccordionHeader>
          </div>
        </div>
      )}

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
  );
};

export default Faq;
