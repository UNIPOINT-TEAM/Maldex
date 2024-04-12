import { Button } from '@material-tailwind/react';
import { useState } from 'react';

interface SubcategoryInputProps {
  onAddSubcategory: (subcategory: string) => void;
}

const SubcategoryInput: React.FC<SubcategoryInputProps> = ({ onAddSubcategory }) => {
  const [newSubcategory, setNewSubcategory] = useState('');

  const addSubcategory = () => {
    if (newSubcategory) {
      onAddSubcategory(newSubcategory);
      setNewSubcategory('');
    }
  };

  return (
    <div className="mb-8 flex items-center justify-center gap-5">
      <div className="">
        <input
          type="text"
          value={newSubcategory}
          onChange={(e) => setNewSubcategory(e.target.value)}
          placeholder="Новый тег"
          className="border p-2 rounded-lg"
        />
      </div>
      <div>
        <Button color="green" onClick={addSubcategory}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default SubcategoryInput;
