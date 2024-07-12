import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from '@material-tailwind/react';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import {
  GetGiftsCategory,
  PostGiftsCategory,
  delGiftsCategory,
  editGiftsCategory,
} from '../../services/gifts';
import { MdDelete, MdDone } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const LeftAccordion = () => {
  // @ts-ignore
  const navigate = useNavigate();
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );
  const [addCategory, setAddCategory] = useState(true);
  // @ts-ignore
  const [addSubCategory, setAddSubCategory] = useState(true);
  const [editCategory, setEditCategory] = useState(null); // State to track editing category
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newSubCategoryName, setNewSubCategoryName] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const [giftCategory, setGiftCategory] = useState([]);
  // @ts-ignore
  const [isDeletingCategory, setIsDeletingCategory] = useState(false);

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
    if (!newCategoryName.trim()) return;

    const response = await PostGiftsCategory({ name: newCategoryName });
    if (response) {
      const newCategory = { ...response, children: [] };
      // @ts-ignore
      setGiftCategory([...giftCategory, newCategory]);
      setNewCategoryName('');
      setAddCategory(true);
    }
  };

  const handleAccordionClick = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    // @ts-ignore
    setActiveCategoryIndex(index);
  };

  const handleAddSubCategory = async () => {
    if (!newSubCategoryName.trim() || activeCategoryIndex === null) return;
    // @ts-ignore
    const category = { ...giftCategory[activeCategoryIndex] };

    const response = await PostGiftsCategory({
      name: newSubCategoryName,
      parent: category.id,
    });

    if (response) {
      category.children.push(response);
      const updatedCategories = [...giftCategory];
      // @ts-ignore
      updatedCategories[activeCategoryIndex] = category;
      setGiftCategory(updatedCategories);
      setNewSubCategoryName('');
      setAddSubCategory(true);
    }
  };

  const handleEditCategory = async () => {
    if (!editCategory || !newCategoryName.trim()) return;

    const response = await editGiftsCategory(editCategory, {
      name: newCategoryName,
    });
    if (response) {
      const updatedCategories = giftCategory.map((category) => {
        // @ts-ignore
        if (category.id === editCategory) {
          // @ts-ignore
          return { ...category, name: newCategoryName };
        }
        return category;
      });
      // @ts-ignore
      setGiftCategory(updatedCategories);
      setEditCategory(null);
    }
  };

  const handleDeleteCategory = async (categoryId: any) => {
    // window.location.reload(); // Перезагрузка страницы после удаления категории
    const response = await delGiftsCategory(categoryId);
    if (response) {
      const updatedCategories = giftCategory.filter(
        // @ts-ignore
        (category) => category.id !== categoryId,
      );
      setGiftCategory(updatedCategories);
    }
  };

  return (
    <div className="">
      <div className="pl-2 w-[246px]">
        <h1 className="text-[28px]  font-black leading-7 tracking-wide mb-8">
          Подарочные наборы
        </h1>
      </div>
      <div className="mb-4">
        {addCategory ? (
          <div className="flex w-full justify-start">
            <Button
              color="green"
              className="  flex justify-center items-center"
              onClick={() => setAddCategory(false)}
            >
              Добавить Категорию
              {/* <IoMdAdd size={30} /> */}
            </Button>
          </div>
        ) : (
          <div className="border border-dashed py-5 px-2 w-full rounded-xl">
            <input
              type="text"
              placeholder="Добавить категорию"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
            />
            <div className="flex gap-4 justify-center items-start">
              <button
                onClick={handleAddCategory}
                className="bg-blue-400 text-white w-[200px] h-[40px] rounded"
              >
                Сохранить
              </button>
              <button
                onClick={() => setAddCategory(true)}
                className="bg-danger text-white w-[200px] h-[40px] rounded"
              >
                Отменить
              </button>
            </div>
          </div>
        )}
        {editCategory && (
          <div className="border border-dashed py-5 px-2 w-full rounded-xl my-3">
            <input
              type="text"
              placeholder="Переименовать"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
            />
            <div className="flex gap-4 justify-center items-start">
              <button
                onClick={handleEditCategory}
                className="bg-blue-400 text-white w-[200px] h-[40px] rounded"
              >
                Сохранить
              </button>
              <button
                // @ts-ignore
                onClick={() => setEditCategory(false)}
                className="bg-danger text-white w-[200px] h-[40px] rounded"
              >
                Отменить
              </button>
            </div>
          </div>
        )}
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
          <div className="flex justify-center items-center ">
            <AccordionHeader
              className={`border-0 px-2 py-2 cursor-pointer  ${
                openAccordionIndex === index ? 'bg-red-primary  rounded-xl' : ''
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              <div style={{ maxWidth: '200px', wordBreak: 'break-all' }}>
                <h3
                  className={`font-Helvetica-Neue -tracking-tighter text-fs_4 font-bold text-darkPrimary ${
                    openAccordionIndex === index ? 'text-white' : ''
                  }`}
                >
                  {
                    // @ts-ignore
                    category.name
                  }
                </h3>
              </div>
            </AccordionHeader>
            <div className="ml-3 flex gap-1">
              <button
                // @ts-ignore
                onClick={() => setEditCategory(category.id)}
                className="rounded-md bg-warning py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
              >
                <IoMdCreate size={20} />
              </button>
              <button
                // @ts-ignore
                onClick={() => handleDeleteCategory(category.id)}
                className="rounded-md bg-danger py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
          <AccordionBody
            className={`${openAccordionIndex === index ? '' : ''}`}
            placeholder={<div />}
          >
            {activeCategoryIndex === index && (
              <>
                <Link
                  // @ts-ignore
                  to={`/gift-detail/${category.id}`}
                >
                  <button className="w-full bg-blue-400 rounded-md py-1 text-white text-[20] mb-2">
                    продукты
                  </button>
                </Link>
                <div className="flex flex-row w-full items-center justify-center gap-4">
                  <input
                    type="text"
                    placeholder="Добавить подкатегории"
                    className="w-[210px] border outline-none rounded-md h-[30px]  px-3 py-1"
                    value={newSubCategoryName}
                    onChange={(e) => setNewSubCategoryName(e.target.value)}
                  />
                  <Button
                    color="green"
                    className="py-1 px-2"
                    onClick={handleAddSubCategory}
                  >
                    <MdDone size={20} />
                    {/* <IoMdAdd size={30} /> */}
                  </Button>
                </div>
              </>
            )}
            {
              // @ts-ignore
              category.children &&
                // @ts-ignore
                category.children.map((child, childIndex) => (
                  <div
                    className="my-2 pl-3 text-base font-Helvetica-Neue cursor-pointer flex justify-between hover:text-red-primary"
                    key={childIndex}
                    style={{ maxWidth: '300px', wordBreak: 'break-all' }}
                  >
                    <div>
                      <Link to={`/gift-detail/${child.id}`}>
                        <h4 className="font-Helvetica-Neue font-medium text-black">
                          {child.name}
                        </h4>
                      </Link>
                    </div>
                    <div className="ml-4 flex gap-1 items-center justify-between">
                      <button
                        onClick={() => setEditCategory(child.id)}
                        className="rounded-md bg-warning py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
                      >
                        <IoMdCreate size={20} />
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(child.id)}
                        className="rounded-md bg-danger py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
                      >
                        <IoMdTrash size={20} />
                      </button>
                    </div>
                  </div>
                ))
            }
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default LeftAccordion;
