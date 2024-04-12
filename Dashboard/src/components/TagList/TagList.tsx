import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const TagList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState('');
  const [hoveredSubcategory, setHoveredSubcategory] = useState('');

  const [isHovered, setIsHovered] = useState(false);

  const [categories, setCategories] = useState({
    'Для неё': [
      'Care Package',
      'Подкатегория1-2',
      'Подкатегория1-3',
      'Подкатегория1-4',
      'Подкатегория1-5',
      'Подкатегория1-6',
    ],
    'Для него': ['Подкатегория2-1', 'Подкатегория2-2', 'Подкатегория2-3'],
    'Для детей': ['Подкатегория3-1', 'Подкатегория3-2', 'Подкатегория3-3'],
    'Для дома': ['Подкатегория4-1', 'Подкатегория4-2', 'Подкатегория4-3'],
    'Для офиса': ['Подкатегория6-1', 'Подкатегория6-2', 'Подкатегория6-3'],
    'Для учёбы': ['Подкатегория5-1', 'Подкатегория5-2', 'Подкатегория5-3'],
  });

  const [newCategory, setNewCategory] = useState('');
  const [newSubcategory, setNewSubcategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingSubcategory, setEditingSubcategory] = useState(null);
  const [editCategoryInput, setEditCategoryInput] = useState('');
  const [editSubcategoryInput, setEditSubcategoryInput] = useState('');

  const addCategory = () => {
    if (newCategory && !categories[newCategory]) {
      setCategories({ ...categories, [newCategory]: [] });
      setNewCategory('');
    }
  };

  const addSubcategoryToCategory = () => {
    if (newSubcategory && selectedCategory && categories[selectedCategory]) {
      const updatedCategories = {
        ...categories,
        [selectedCategory]: [...categories[selectedCategory], newSubcategory],
      };
      setCategories(updatedCategories);
      setNewSubcategory('');
    }
  };

  const deleteCategory = (category) => {
    const updatedCategories = { ...categories };
    delete updatedCategories[category];
    setCategories(updatedCategories);
    setSelectedCategory(Object.keys(updatedCategories)[0] || '');
  };

  const deleteSubcategory = (subcategory) => {
    const updatedSubcategories = categories[selectedCategory].filter(
      (sub) => sub !== subcategory,
    );
    setCategories({ ...categories, [selectedCategory]: updatedSubcategories });
    setSelectedSubcategory(null);
  };

  const startEditingCategory = (category) => {
    setEditingCategory(category);
    setEditCategoryInput(category);
  };

  const startEditingSubcategory = (subcategory) => {
    setEditingSubcategory(subcategory);
    setEditSubcategoryInput(subcategory);
  };

  const handleEditCategory = () => {
    if (editCategoryInput && editingCategory && categories[editingCategory]) {
      const updatedCategories = {
        ...categories,
        [editCategoryInput]: categories[editingCategory],
      };
      delete updatedCategories[editingCategory];
      setCategories(updatedCategories);
      setEditingCategory(null);
    }
  };

  const handleEditSubcategory = () => {
    if (
      editSubcategoryInput &&
      editingSubcategory &&
      categories[selectedCategory] &&
      categories[selectedCategory].includes(editingSubcategory)
    ) {
      const updatedSubcategories = categories[selectedCategory].map((sub) =>
        sub === editingSubcategory ? editSubcategoryInput : sub,
      );
      setCategories({
        ...categories,
        [selectedCategory]: updatedSubcategories,
      });
      setEditingSubcategory(null);
    }
  };

  const cancelEdit = (type) => {
    if (type === 'category') {
      setEditingCategory(null);
    } else if (type === 'subcategory') {
      setEditingSubcategory(null);
    }
  };

  return (
    <div className="container_xxl">
      <div className="flex flex-wrap flex-col ">
        <div className="mt-4 flex items-center justify-center gap-5">
          <div className=" ">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Новая категория"
              className="border p-2 rounded-lg"
            />
          </div>

          <div>
            <Button
              color="green"
              // buttonType="filled"
              // size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              // ripple="light"
              onClick={addCategory}
            >
              Добавить
            </Button>
          </div>
        </div>

        <div className="">
          <ul
            className="mt-10 mb-6 justify-around  flex flex-wrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory('')}
                className="relative"
              >
                {editingCategory === category ? (
                  <div className="">
                    <div>
                      <input
                        type="text"
                        value={editCategoryInput}
                        onChange={(e) => setEditCategoryInput(e.target.value)}
                        className="border p-2 rounded-3xl"
                      />
                    </div>
                    <div className="mt-2">
                      <button
                        onClick={handleEditCategory}
                        className="ml-2 p-2 border rounded-lg bg-blue-500 text-white"
                      >
                        Сохранить
                      </button>
                      <button
                        onClick={() => cancelEdit('category')}
                        className="ml-2 p-2 border rounded-lg  bg-red-500 text-white"
                      >
                        Отмена
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <li
                      onClick={() => setSelectedCategory(category)}
                      className={`cursor-pointer py-2 px-10 border rounded-3xl my-5 ${
                        selectedCategory === category
                          ? 'font-bold bg-red-primary text-white'
                          : 'bg-white'
                      } ${
                        isHovered && hoveredCategory === category ? 'blur' : ''
                      }`}
                    >
                      {category}
                    </li>
                    <div className="justify-center items-center gap-2 flex mt-2 hover:opacity-100 opacity-0">
                      <button
                        onClick={() => startEditingCategory(category)}
                        className="shadow-lg rounded-lg p-2 text-sm text-white bg-yellow-400"
                        style={{
                          opacity: editingCategory === category ? 0 : 1,
                        }}
                      >
                        <MdEdit />
                      </button>
                      <button
                        onClick={() => deleteCategory(category)}
                        className="shadow-lg rounded-lg p-2 text-sm text-white bg-red-500"
                        style={{
                          opacity: editingCategory === category ? 0 : 1,
                        }}
                      >
                        <MdDelete />
                      </button>
                    </div>

                   
                  </>
                )}
              </div>
            ))}
          </ul>
          {selectedCategory && (
            <div className="">


              <div className="mb-8 flex items-center justify-center gap-5">
                <div className=" ">
                  <input
                    type="text"
                    value={newSubcategory}
                    onChange={(e) => setNewSubcategory(e.target.value)}
                    placeholder="Новый тег"
                    className="border p-2 rounded-lg"
                  />
                </div>

                <div>
                  <Button
                    color="green"
                    // buttonType="filled"
                    // size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    // ripple="light"
                    onClick={addSubcategoryToCategory}
                  >
                    Добавить
                  </Button>
                </div>
              </div>
              <ul className="mb-10 flex flex-wrap gap-y-5 justify-between hidden lg:flex">
                {categories[selectedCategory].map((subcategory, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredSubcategory(subcategory)}
                    onMouseLeave={() => setHoveredSubcategory('')}
                    className="relative"
                    style={{ width: '18%' }}
                  >
                    {editingSubcategory === subcategory ? (
                      <div className="">
                        <div>
                          <input
                            type="text"
                            value={editSubcategoryInput}
                            onChange={(e) =>
                              setEditSubcategoryInput(e.target.value)
                            }
                            className="border p-2 rounded-lg"
                          />
                        </div>
                        <div className='flex justify-start mt-2'>
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
                          onClick={() => setSelectedSubcategory(subcategory)}
                          className={`cursor-pointer py-2 border rounded-xl px-4 text-center ${
                            selectedSubcategory === subcategory
                              ? 'font-bold bg-red-primary text-white'
                              : 'bg-white'
                          }`}
                        >
                          {subcategory}
                        </li>
                        {hoveredSubcategory === subcategory && (
                          <div className=" justify-center items-center gap-2 flex mt-2">
                            <button
                              onClick={() =>
                                startEditingSubcategory(subcategory)
                              }
                              className="shadow-lg rounded-lg p-2 text-sm text-white bg-yellow-400"
                            >
                              <MdEdit />
                            </button>
                            <button
                              onClick={() => deleteSubcategory(subcategory)}
                              className="shadow-lg rounded-lg p-2 text-sm text-white bg-red-500"
                            >
                              <MdDelete />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagList;
