import React, { useState } from 'react';

const TagList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Для неё');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState('');
  const [hoveredSubcategory, setHoveredSubcategory] = useState('');

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
    const updatedSubcategories = categories[selectedCategory].filter((sub) => sub !== subcategory);
    setCategories({ ...categories, [selectedCategory]: updatedSubcategories });
    setSelectedSubcategory(null);
  };

  return (
    <div className="container_xxl">
      <div className="flex flex-col ">
        <div className="mt-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Новая категория"
            className="border p-2"
          />
          <button onClick={addCategory} className="ml-2 p-2 border bg-blue-500 text-white">
            Добавить категорию
          </button>
        </div>
        <div className="">
          <ul className="mt-10 mb-6 justify-around hidden lg:flex">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory('')}
                className="relative"
              >
                <li
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer py-2 px-10 border rounded-3xl ${
                    selectedCategory === category ? 'font-bold bg-red-primary text-white' : 'bg-white'
                  }`}
                >
                  {category}
                </li>
                {hoveredCategory === category && (
                  <div className="absolute top-0 right-0 flex">
                    <button className="p-1 text-sm text-white bg-blue-500">Edit</button>
                    <button
                      onClick={() => deleteCategory(category)}
                      className="p-1 text-sm text-white bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
        {selectedCategory && (
          <div className="">
            <div className="mt-4">
              <input
                type="text"
                value={newSubcategory}
                onChange={(e) => setNewSubcategory(e.target.value)}
                placeholder="Новый тег"
                className="border p-2"
              />
              <button onClick={addSubcategoryToCategory} className="ml-2 p-2 border bg-blue-500 text-white">
                Добавить тег
              </button>
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
                  <li
                    onClick={() => setSelectedSubcategory(subcategory)}
                    className={`cursor-pointer py-2 border rounded-xl px-4 text-center ${
                      selectedSubcategory === subcategory ? 'font-bold bg-red-primary text-white' : 'bg-white'
                    }`}
                  >
                    {subcategory}
                  </li>
                  {hoveredSubcategory === subcategory && (
                    <div className="absolute top-0 right-0 flex">
                      <button className="p-1 text-sm text-white bg-blue-500">Edit</button>
                      <button
                        onClick={() => deleteSubcategory(subcategory)}
                        className="p-1 text-sm text-white bg-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagList;
