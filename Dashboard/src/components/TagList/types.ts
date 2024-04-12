// types.ts
export interface Categories {
  [category: string]: string[];
}

export type EditType = 'category' | 'subcategory';

export interface CategoryListProps {
  categories: Categories;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  onCategoryDelete: (category: string) => void;
  onCategoryAdd: (categoryName: string) => void;

}


export interface SubcategoryListProps {
  subcategories: string[];
  selectedCategory: string;
  onSubcategorySelect: (subcategory: string) => void;
  onSubcategoryDelete: (subcategory: string) => void;
  onSubcategoryEdit: (subcategory: string) => void;
  onSubcategoryAdd: (subcategoryName: string) => void;
  isEditingSubcategory: boolean;
  editSubcategoryInput: string;
  setEditSubcategoryInput: React.Dispatch<React.SetStateAction<string>>; 
  handleEditSubcategory: () => void;
  cancelEdit: (type: 'category' | 'subcategory') => void;
}



