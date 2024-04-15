import React, { useState } from 'react';
import { SubcategoryListProps } from '../types';
import { Button } from '@material-tailwind/react';
import { MdEdit, MdDelete } from 'react-icons/md';


const SubcategoryList: React.FC<SubcategoryListProps> = ({
  subcategories,
  selectedCategory,
  onSubcategorySelect,
  onSubcategoryDelete,
  onSubcategoryEdit,
  onSubcategoryAdd,
  isEditingSubcategory,
  editSubcategoryInput,
  setEditSubcategoryInput,
  handleEditSubcategory,
  cancelEdit,
}) => {
  const [newSubcategory, setNewSubcategory] = React.useState('');

  const addSubcategory = () => {
    if (newSubcategory) {
      onSubcategoryAdd(newSubcategory);
      setNewSubcategory('');
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-center gap-5">
        <input
          type="text"
          value={newSubcategory}
          onChange={(e) => setNewSubcategory(e.target.value)}
          placeholder="Новый тег"
          className="border p-2 rounded-lg"
        />
        <Button color="green" onClick={addSubcategory}>
          Добавить
        </Button>
      </div>
      <ul className="mb-10 flex flex-wrap gap-y-5 justify-between">
        {subcategories && subcategories.length > 0 ? (
          subcategories.map((subcategory, index) => (
            <div key={index} className="relative" style={{ width: '18%' }}>
              {isEditingSubcategory && selectedCategory === subcategory ? (
                <div>
                  <input
                    type="text"
                    value={editSubcategoryInput}
                    onChange={(e) => setEditSubcategoryInput(e.target.value)}
                    className="border p-2 rounded-lg"
                  />
                  <div className="flex justify-start mt-2">
                    <button
                      onClick={handleEditSubcategory}
                      className="ml-2 p-2 border bg-blue-500 text-white"
                    >
                      Сохранить
                    </button>
                    <button
                      onClick={() => cancelEdit('subcategory')}
                      className="ml-2 p-2 border bg-red-500 text-white"
                    >
                      Отмена
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <li
                    onClick={() => onSubcategorySelect(subcategory)}
                    className={`cursor-pointer py-2 px-6 border rounded-lg my-2 bg-white`}
                  >
                    {subcategory}
                  </li>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <button
                      onClick={() => onSubcategoryEdit(subcategory)}
                      className="shadow-lg rounded-lg p-2 text-sm text-white bg-yellow-400"
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={() => onSubcategoryDelete(subcategory)}
                      className="shadow-lg rounded-lg p-2 text-sm text-white bg-red-500"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>выберите Категорию тегов</p>
        )}
      </ul>
    </div>
  );
};

export default SubcategoryList;

