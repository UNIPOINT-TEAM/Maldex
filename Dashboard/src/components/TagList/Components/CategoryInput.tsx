import { Button } from '@material-tailwind/react';
import { useState } from 'react';

interface CategoryInputProps {
  onAddCategory: (category: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({ onAddCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const addCategory = () => {
    if (newCategory) {
      onAddCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div className="mt-4 flex items-center justify-center gap-5">
      <div className="">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Новая категория"
          className="border p-2 rounded-lg"
        />
      </div>
      <div>
        <Button color="green" onClick={addCategory}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default CategoryInput;
