import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { IoMdAdd, IoMdCreate, IoMdTrash } from 'react-icons/io';
import {
  GetGiftsCategory,
  PostGiftsCategory,
  delGiftsCategory,
  editGiftsCategory,
} from '../../services/gifts';
import { MdDelete } from 'react-icons/md';
import { warning } from '@remix-run/router/dist/history';

const LeftAccordion = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );
  const [addCategory, setAddCategory] = useState(true);
  const [addSubCategory, setAddSubCategory] = useState(true);
  const [editCategory, setEditCategory] = useState(null); // State to track editing category
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newSubCategoryName, setNewSubCategoryName] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const [giftCategory, setGiftCategory] = useState([]);
  const [isDeletingCategory, setIsDeletingCategory] = useState(false);

  useEffect(() => {
    GetGiftsCategory()
      .then((res) => {
        setGiftCategory(res);
      })
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) return;

    const response = await PostGiftsCategory({ name: newCategoryName });
    if (response) {
      setGiftCategory([...giftCategory, response]);
      setNewCategoryName('');
      setAddCategory(true);
    }
  };

  const handleAccordionClick = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    setActiveCategoryIndex(index);
  };

  const handleAddSubCategory = async () => {
    if (!newSubCategoryName.trim() || activeCategoryIndex === null) return;

    const category = { ...giftCategory[activeCategoryIndex] };

    const response = await PostGiftsCategory({
      name: newSubCategoryName,
      parent: category.id,
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

  const handleEditCategory = async () => {
    if (!editCategory || !newCategoryName.trim()) return;

    const response = await editGiftsCategory(editCategory, {
      name: newCategoryName,
    });
    if (response) {
      const updatedCategories = giftCategory.map((category) => {
        if (category.id === editCategory) {
          return { ...category, name: newCategoryName };
        }
        return category;
      });
      setGiftCategory(updatedCategories);
      setEditCategory(null);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    const response = await delGiftsCategory(categoryId);
    if (response) {
      const updatedCategories = giftCategory.filter(
        (category) => category.id !== categoryId,
      );
      setGiftCategory(updatedCategories);
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
                  {category.name}
                </h3>
              </div>
            </AccordionHeader>
            <div className="ml-3 flex gap-1">
              <button
                onClick={() => setEditCategory(category.id)}
                className="rounded-md bg-warning py-2 px-3 text-center font-medium text-white hover:bg-opacity-90"
              >
                <IoMdCreate size={20} />
              </button>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="rounded-md bg-danger py-2 px-3 text-center font-medium text-white hover:bg-opacity-90"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
          <AccordionBody
            className={`${openAccordionIndex === index ? '' : ''}`}
            placeholder={<div />}
          >
            {category.children.map((child, childIndex) => (
              <div
                className="my-2 pl-3 text-base font-Helvetica-Neue cursor-pointer flex hover:text-red-primary"
                key={childIndex}
              >
                <div>
                  <h4 className="font-Helvetica-Neue font-medium text-black">
                    {child.name}
                  </h4>
                </div>
                <div className="ml-4 flex gap-1">
                  <button
                    onClick={() => setEditCategory(child.id)}
                    className="rounded-md bg-warning py-2 px-3 text-center font-medium text-white hover:bg-opacity-90"
                  >
                    <IoMdCreate size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(child.id)}
                    className="rounded-md bg-danger py-2 px-3 text-center font-medium text-white hover:bg-opacity-90"
                  >
                    <IoMdTrash size={20} />
                  </button>
                </div>
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

      {/* Edit Category Section */}
      {editCategory && (
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
              onClick={handleEditCategory}
              className="bg-blue-400 text-white w-[200px] h-[40px] rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Add Category Section */}
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
