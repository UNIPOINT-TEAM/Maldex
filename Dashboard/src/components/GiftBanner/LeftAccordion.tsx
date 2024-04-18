import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { IoMdAdd } from 'react-icons/io';
import { GetGiftsCategory, PostGiftsCategory } from '../../services/gifts';

const LeftAccordion = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );

  const [addCategory, setAddCategory] = useState(true);
  const [addSubCategory, setAddSubCategory] = useState(true);
  const [editCategory, setEditCategory] = useState('');
  const [subEditCategory, setSubEditCategory] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newSubCategoryName, setNewSubCategoryName] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null); // Индекс активной категории для добавления подкатегорий
  const [giftCategory, setGiftCategory] = useState([]);

  useEffect(() => {
    GetGiftsCategory()
      .then((res) => {
        setGiftCategory(res);
        console.log(res);
      })
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) return; // Проверка на пустую строку

    const response = await PostGiftsCategory({ name: newCategoryName });
    if (response) {
      setGiftCategory([...giftCategory, response]); // Добавляем новую категорию в состояние
      setNewCategoryName(''); // Сброс поля ввода
      setAddCategory(true); // Закрыть форму добавления
    }
  };

  const handleAccordionClick = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    setActiveCategoryIndex(index); // устанавливаем активный индекс категории для добавления подкатегорий
  };

  const handleAddSubCategory = async () => {
    if (!newSubCategoryName.trim() || activeCategoryIndex === null) return;

    const category = { ...giftCategory[activeCategoryIndex] };

    const response = await PostGiftsCategory({
      name: newSubCategoryName,
      parent: category.id, // Добавляем parentId в объект запроса
    });

    if (response) {
      category.children.push(response);
      const updatedCategories = [...giftCategory];
      updatedCategories[activeCategoryIndex] = category;
      setGiftCategory(updatedCategories);
      setNewSubCategoryName('');
      setAddSubCategory(true);
    }
  };

  return (
    <div className="">
      <div className="pl-2 w-[246px]">
        <h1 className="text-[28px] font-medium font-black leading-7 tracking-wide mb-8">
          Подарочные наборы
        </h1>
      </div>
      
      {giftCategory.map((category, index) => (
        <Accordion
          key={index}
          className="pr-2 font-Helvetica-Neue"
          open={openAccordionIndex === index}
          icon={
            <svg
              className={` ${
                openAccordionIndex === index ? 'rotate-180 ' : ''
              } transition-transform`}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                d="M2 1L9 9L16 1"
                stroke={openAccordionIndex === index ? 'white' : 'black'}
                strokeWidth="3"
              />
            </svg>
          }
        >
          <AccordionHeader
            className={`border-0 px-2 py-2 cursor-pointer  ${
              openAccordionIndex === index ? 'bg-red-primary  rounded-xl' : ''
            }`}
            onClick={() => handleAccordionClick(index)}
          >
            <h3
              className={`font-Helvetica-Neue -tracking-tighter text-fs_4 font-bold text-darkPrimary ${
                openAccordionIndex === index ? 'text-white' : ''
              }`}
            >
              {category.name}
            </h3>
          </AccordionHeader>
          <AccordionBody
            className={`${openAccordionIndex === index ? '' : ''}`}
            placeholder={<div />}
          >
            {category.children.map((child, childIndex) => (
              <div
                className="my-2 pl-3 text-base font-Helvetica-Neue cursor-pointer hover:text-red-primary"
                key={childIndex}
              >
                <h4 className="font-Helvetica-Neue font-medium text-black">
                  {child.name}
                </h4>
              </div>
            ))}
            {activeCategoryIndex === index && (
              <div className="flex flex-col w-full items-center">
                <input
                  type="text"
                  placeholder="Название подкатегории"
                  className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
                  value={newSubCategoryName}
                  onChange={(e) => setNewSubCategoryName(e.target.value)}
                />
                <button
                  className="border border-dashed w-[60px] h-[60px] rounded-[30px] flex justify-center items-center"
                  onClick={handleAddSubCategory}
                >
                  <IoMdAdd size={30} />
                </button>
              </div>
            )}
          </AccordionBody>
        </Accordion>
      ))}

      {addCategory ? (
        <div className="flex w-full justify-center">
          <button
            className="border border-dashed w-[60px] h-[60px] rounded-[30px] flex justify-center items-center"
            onClick={() => setAddCategory(false)}
          >
            <IoMdAdd size={30} />
          </button>
        </div>
      ) : (
        <div className="border border-dashed py-5 px-2 w-full rounded-xl">
          <input
            type="text"
            placeholder="Категория"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
          />
          <div className="flex justify-center items-start">
            <button
              onClick={handleAddCategory}
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

export default LeftAccordion;
