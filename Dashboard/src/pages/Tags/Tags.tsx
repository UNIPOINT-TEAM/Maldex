import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Button } from '@material-tailwind/react';
import {
  GetTags,
  PostTags,
  DelTags,
  UpgradeTags,
  GetTagsCategory,
} from '../../services/tags';

function Tags() {
  const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [newTag, setNewTag] = useState('');
  const [isEditingTag, setIsEditingTag] = useState(false);
  const [editTagInput, setEditTagInput] = useState('');
  const [editTagId, setEditTagId] = useState(null);
  const [tagsCategory, setTagsCategory] = useState([]);
  const [newTagCategory, setNewTagCategory] = useState('');
  const [isEditingTagCategory, setIsEditingTagCategory] = useState(false);
  const [editTagInputCategory, setEditTagInputCategory] = useState('');
  const [editTagIdCategory, setEditTagIdCategory] = useState(null);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const data = await GetTags();
      setTags(data);
    } catch (error) {
      console.error('Ошибка при загрузке тэгов:', error);
    }
  };

  useEffect(() => {
    fetchTagsCategory();
  }, []);

  const fetchTagsCategory = async () => {
    try {
      const data = await GetTagsCategory();
      setTagsCategory(data);
    } catch (error) {
      console.error('Ошибка при загрузке тэгов:', error);
    }
  };

  // const addTag = async () => {
  //   if (newTag) {
  //     try {
  //       const addedTag = await PostTags({ name: newTag });
  //       setTags([...tags, addedTag]);
  //       setNewTag('');
  //     } catch (error) {
  //       console.error('Ошибка при добавлении тэга:', error);
  //     }
  //   }
  // };

  const addTagCategory = async () => {
    if (newTagCategory) {
      try {
        const addedTagCategory = await PostTags({ name: newTag });
        setTagsCategory([...tagsCategory, addedTagCategory]);
        setNewTagCategory('');
      } catch (error) {
        console.error('Ошибка при добавлении тэга:', error);
      }
    }
  };

  const startEditTag = (tag) => {
    setIsEditingTag(true);
    setEditTagInput(tag.name);
    setEditTagId(tag.id);
  };
  
  const startEditTagCategory = (tag) => {
    setIsEditingTagCategory(true);
    setEditTagInputCategory(tag.name);
    setEditTagIdCategory(tag.id);
  };

  const handleEditTag = async () => {
    if (editTagInput && editTagId) {
      try {
        const updatedTag = await UpgradeTags(editTagId, { name: editTagInput });
        setTags(tags.map((tag) => (tag.id === editTagId ? updatedTag : tag)));
        setIsEditingTag(false);
        setEditTagInput('');
        setEditTagId(null);
      } catch (error) {
        console.error('Ошибка при редактировании тэга:', error);
      }
    }
  };
  const handleEditTagCategory = async () => {
    if (editTagInput && editTagId) {
      try {
        const updatedTagCategory = await UpgradeTagsCategory(editTagId, { name: editTagInput });
        setTagsCategory(tags.map((tag) => (tag.id === editTagId ? updatedTag : tag)));
        setIsEditingTagCategory(false);
        setEditTagInputCategory('');
        setEditTagIdCategory(null);
      } catch (error) {
        console.error('Ошибка при редактировании тэга:', error);
      }
    }
  };

  const deleteTag = async (tagId) => {
    try {
      await DelTags(tagId);
      setTags(tags.filter((tag) => tag.id !== tagId));
    } catch (error) {
      console.error('Ошибка при удалении тэга:', error);
    }
  };

  // const handleCategoryClick = (category) => {
  //   setActiveTags(category.tag_set);
  // };

  const handleCategoryClick = (category) => {
    setActiveTags(category.tag_set);
    setActiveCategory(category); // Сохраняем всю категорию как активную
  };

  const addTag = async () => {
    if (newTag && activeCategory) {
      // Проверяем, что введено имя тега и выбрана категория
      try {
        const addedTag = await PostTags({
          name: newTag,
          tag_category: activeCategory.id, // Используем ID активной категории
          order: activeCategory.id, // Используем ID активной категории
        });
        setActiveTags([...activeTags, addedTag]); // Добавляем тег к активным тегам
        setNewTag(''); // Очищаем поле ввода
      } catch (error) {
        console.error('Ошибка при добавлении тэга:', error);
      }
    } else {
      alert('Необходимо выбрать категорию и ввести имя тега');
    }
  };

  return (
    <>
      <DefaultLayout>
        <div className="tagsCategory">
          <div className="mt-4 flex items-center justify-center gap-5">
            <input
              type="text"
              value={newTagCategory}
              onChange={(e) => setNewTagCategory(e.target.value)}
              placeholder="Новый тэг"
              className="border p-2 rounded-lg"
            />
            <Button color="green" onClick={addTagCategory}>
              Добавить
            </Button>
          </div>

          {isEditingTag && (
            <div className="mt-4 flex items-center justify-center gap-5">
              <input
                type="text"
                value={editTagInputCategory}
                onChange={(e) => setEditTagInputCategory(e.target.value)}
                className="border p-2 rounded-lg"
              />
              <Button color="blue" onClick={handleEditTagCategory}>
                Сохранить
              </Button>
              <Button color="red" onClick={() => setIsEditingTagCategory(false)}>
                Отмена
              </Button>
            </div>
          )}

          <div className="mt-10 mb-6 flex flex-wrap justify-around">
            {tagsCategory.map((tagCategory) => (
              <div
                key={tagCategory.id}
                onClick={() => handleCategoryClick(tagCategory)}
                className="relative p-2 m-2 border rounded-lg"
              >
                {tagCategory.name}
                <div className=" top-0 right-0 flex gap-2">
                  <button
                    onClick={() => startEditTag(tag)}
                    className="p-2 text-white bg-yellow-400"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => deleteTag(tag.id)}
                    className="p-2 text-white bg-red-500"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tags">
          <div className="mt-4 flex items-center justify-center gap-5">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder={`Новый тэг для категории: ${
                activeCategory ? activeCategory.name : 'Выберите категорию'
              }`}
              className="border p-2 rounded-lg"
              disabled={!activeCategory} // Делаем поле неактивным, если не выбрана категория
            />
            <Button color="green" onClick={addTag} disabled={!activeCategory}>
              Добавить
            </Button>
          </div>

          {isEditingTag && (
            <div className="mt-4 flex items-center justify-center gap-5">
              <input
                type="text"
                value={editTagInput}
                onChange={(e) => setEditTagInput(e.target.value)}
                className="border p-2 rounded-lg"
              />
              <Button color="blue" onClick={handleEditTag}>
                Сохранить
              </Button>
              <Button color="red" onClick={() => setIsEditingTag(false)}>
                Отмена
              </Button>
            </div>
          )}

          <div className="mt-10 mb-6 flex flex-wrap justify-around">
            {/* {tags.map((tag) => ( */}
            {activeTags.map((tag) => (
              <div key={tag.id} className="relative p-2 m-2 border rounded-lg">
                {tag.name}
                <div className=" top-0 right-0 flex gap-2">
                  <button
                    onClick={() => startEditTag(tag)}
                    className="p-2 text-white bg-yellow-400"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => deleteTag(tag.id)}
                    className="p-2 text-white bg-red-500"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Tags;
