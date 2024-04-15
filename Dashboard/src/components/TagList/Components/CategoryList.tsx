import React, { useState } from 'react';
import { CategoryListProps } from '../types';
import { Button } from '@material-tailwind/react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Reorder, motion } from 'framer-motion';

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  onCategoryDelete,
  onCategoryEdit,
  onCategoryAdd,
}) => {
  const [newCategory, setNewCategory] = React.useState('');
  const [editCategoryInput, setEditCategoryInput] = useState<string>('');
  const [isEditingCategory, setIsEditingCategory] = useState<boolean>(false);
  const [order, setOrder] = useState(Object.keys(categories)); // Хранение порядка элементов

  // const handleEditCategory = (oldCategoryName: string) => {
  //   if (editCategoryInput && oldCategoryName !== editCategoryInput) {
  //     onCategoryEdit(oldCategoryName, editCategoryInput);
  //     setEditCategoryInput('');
  //     setIsEditingCategory(false);
  //   }
  //   console.log('red');
  // };

  const handleEditCategory = (oldCategoryName: string) => {
    if (editCategoryInput) {
      onCategoryEdit(oldCategoryName, editCategoryInput);
      setEditCategoryInput('');
      setIsEditingCategory(false);
    }
    console.log('red');
  };

  const addCategory = () => {
    if (newCategory) {
      onCategoryAdd(newCategory);
      setNewCategory('');
    }
  };

  const handleReorder = (newOrder: string[]) => {
    setOrder(newOrder); // Обновление порядка элементов
  };

  return (
    <div>
      <div className="mt-4 flex items-center justify-center gap-5">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Новая категория"
          className="border p-2 rounded-lg"
        />
        <Button color="green" onClick={addCategory}>
          Добавить
        </Button>
      </div>
      <Reorder.Group
        axis="x"
        values={order}
        onReorder={handleReorder}
        className="mt-10 mb-6 justify-around flex flex-wrap"
      >
        {order.map((category) => (
          <Reorder.Item key={category} value={category} className="relative">
            {selectedCategory === category && isEditingCategory ? (
              <div>
                <input
                  type="text"
                  value={editCategoryInput}
                  onChange={(e) => setEditCategoryInput(e.target.value)}
                  className="border p-2 rounded-3xl"
                />
                <div className="mt-2">
                  <button
                    onClick={() => handleEditCategory(category)}
                    className="ml-2 p-2 border rounded-lg bg-blue-500 text-white"
                  >
                    Сохранить
                  </button>
                  <button
                    onClick={() => setIsEditingCategory(false)}
                    className="ml-2 p-2 border rounded-lg bg-red-500 text-white"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            ) : (
              <>
                <li
                  onClick={() => onCategorySelect(category)}
                  className={`cursor-pointer py-2 px-10 border rounded-3xl my-5 ${
                    selectedCategory === category
                      ? 'font-bold bg-red-primary text-white'
                      : 'bg-white'
                  }`}
                >
                  {category}
                </li>
                <div className="justify-center items-center gap-2 flex mt-2">
                  <button
                    onClick={() => {
                      setEditCategoryInput(category);
                      setIsEditingCategory(true);
                    }}
                    className="shadow-lg rounded-lg p-2 text-sm text-white bg-yellow-400"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => onCategoryDelete(category)}
                    className="shadow-lg rounded-lg p-2 text-sm text-white bg-red-500"
                  >
                    <MdDelete />
                  </button>
                </div>
              </>
            )}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default CategoryList;
