import React, { useState } from 'react';
import CategoryList from './Components/CategoryList';
import SubcategoryList from './Components/SubcategoryList';
import { Categories } from './types';

// const initialCategories: Categories = {
//   Фрукты: ['Яблоко', 'Банан'],
//   Овощи: ['Морковь', 'Огурец'],
//   Мясо: ['Говядина', 'Курица'],
//   Рыба: ['Лосось', 'Тунец'],
// };

const TagList: React.FC = () => {
  const [categories, setCategories] = useState<Categories>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const [isEditingSubcategory, setIsEditingSubcategory] = useState<boolean>(false);
  const [editSubcategoryInput, setEditSubcategoryInput] = useState<string>('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCategoryAdd = (categoryName: string) => {
    setCategories({ ...categories, [categoryName]: [] });
  };

  const handleCategoryDelete = (category: string) => {
    const newCategories = { ...categories };
    delete newCategories[category];
    setCategories(newCategories);
    setSelectedCategory('');
  };

  const handleCategoryEdit = (oldCategoryName: string, newCategoryName: string) => {
    if (categories[oldCategoryName]) {
      const updatedCategories = { ...categories };
      updatedCategories[newCategoryName] = updatedCategories[oldCategoryName];
      delete updatedCategories[oldCategoryName];
      setCategories(updatedCategories);
      setSelectedCategory(newCategoryName);
    }
  };



  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedCategory(subcategory);
  };

  const handleSubcategoryAdd = (subcategoryName: string) => {
    if (selectedCategory) {
      setCategories({
        ...categories,
        [selectedCategory]: [...categories[selectedCategory], subcategoryName],
      });
    }
  };

  const handleSubcategoryDelete = (subcategory: string) => {
    if (selectedCategory) {
      const updatedSubcategories = categories[selectedCategory].filter(
        (sub) => sub !== subcategory
      );
      setCategories({
        ...categories,
        [selectedCategory]: updatedSubcategories,
      });
    }
  };

  const handleSubcategoryEdit = (newSubcategoryName: string) => {
    if (editSubcategoryInput && selectedCategory) {
      const updatedSubcategories = categories[selectedCategory].map((sub) =>
        sub === editSubcategoryInput ? newSubcategoryName : sub
      );
      setCategories({
        ...categories,
        [selectedCategory]: updatedSubcategories,
      });
      setIsEditingSubcategory(false);
    }
  };

  return (
    <div>
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        onCategoryAdd={handleCategoryAdd}
        onCategoryDelete={handleCategoryDelete}
        onCategoryEdit={handleCategoryEdit}

      />
      <SubcategoryList
        subcategories={selectedCategory ? categories[selectedCategory] : []}
        selectedCategory={selectedCategory}
        onSubcategorySelect={handleSubcategorySelect}
        onSubcategoryAdd={handleSubcategoryAdd}
        onSubcategoryDelete={handleSubcategoryDelete}
        onSubcategoryEdit={handleSubcategoryEdit}
        isEditingSubcategory={isEditingSubcategory}
        editSubcategoryInput={editSubcategoryInput}
        setEditSubcategoryInput={setEditSubcategoryInput}
        handleEditSubcategory={handleSubcategoryEdit}       
        // cancelEdit={handleCancelEdit}
      />
    </div>
  );
};

export default TagList;
