import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Button } from '@material-tailwind/react';

import {
  DelLinkTags,
  DelLinkTagsCategory,
  GetLinkTags,
  GetLinkTagsCategory,
  PostLinkTags,
  PostLinkTagsCategory,
  UpgradeLinkTags,
  UpgradeLinkTagsCategory,
} from '../../services/taglinks';
import { Link } from 'react-router-dom';

function LinkTags() {
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
  const [newTagTitle, setNewTagTitle] = useState('');
  const [newTagLink, setNewTagLink] = useState('');

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const data = await GetLinkTags();
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
      const data = await GetLinkTagsCategory();
      setTagsCategory(data);
    } catch (error) {
      console.error('Ошибка при загрузке тэгов:', error);
    }
  };

  const addTagCategory = async () => {
    if (newTagCategory.trim()) {
      const order = tagsCategory.length + 1; // Assumes order starts at 1 and increments
      try {
        const addedTagCategory = await PostLinkTagsCategory({
          title: newTagCategory,
        });
        setTagsCategory([...tagsCategory, addedTagCategory]);
        setNewTagCategory('');
      } catch (error) {
        console.error('Ошибка при добавлении тэга:', error);
      }
    } else {
      console.error('The name field is empty.');
    }
  };

  const startEditTag = (tag) => {
    setIsEditingTag(true);
    setEditTagInput(tag.title);
    setEditTagId(tag.id);
  };

  const startEditTagCategory = (tag) => {
    setIsEditingTagCategory(true);
    setEditTagInputCategory(tag.name);
    setEditTagIdCategory(tag.id);
  };

  const handleEditTag = async () => {
    if (editTagInput && editTagId && activeCategory) {
      try {
        const updatedTag = await UpgradeLinkTags(editTagId, {
          title: editTagInput,
          category_id: activeCategory.id,
        });
        setTags(tags.map((tag) => (tag.id === editTagId ? updatedTag : tag)));
        setIsEditingTag(false);
        setEditTagInput('');
        setEditTagId(null);
        window.location.reload();
      } catch (error) {
        console.error('Ошибка при редактировании тэга:', error);
      }
    }
  };
  // const handleEditTagCategory = async () => {
  //   if (editTagInput && editTagId) {
  //     try {
  //       const updatedTagCategory = await UpgradeTagsCategory(editTagId, {
  //         name: editTagInput,
  //       });
  //       setTagsCategory(
  //         tags.map((tag) => (tag.id === editTagId ? updatedTag : tag)),
  //       );
  //       setIsEditingTagCategory(false);
  //       setEditTagInputCategory('');
  //       setEditTagIdCategory(null);
  //     } catch (error) {
  //       console.error('Ошибка при редактировании тэга:', error);
  //     }
  //   }
  // };

  const deleteTag = async (tagId) => {
    try {
      await DelLinkTags(tagId);
      setTags(tags.filter((tag) => tag.id !== tagId));
      window.location.reload();
    } catch (error) {
      console.error('Ошибка при удалении тэга:', error);
    }
  };

  const deleteTagCategory = async (categoryId) => {
    try {
      await DelLinkTagsCategory(categoryId);
      setTagsCategory(
        tagsCategory.filter((category) => category.id !== categoryId),
      );
    } catch (error) {
      console.error('Ошибка при удалении категории тэгов:', error);
    }
  };

  const handleCategoryClick = (category) => {
    // console.log('Clicked category:', category);
    setActiveTags(category.tags);
    setActiveCategory(category);
  };

  const addTag = async () => {
    if (newTagTitle && newTagLink && activeCategory) {
      try {
        const addedTag = await PostLinkTags({
          title: newTagTitle,
          link: newTagLink,
          category_id: activeCategory.id,
          order: activeCategory.id,
        });
        setActiveTags([...activeTags, addedTag]);
        setNewTagTitle('');
        setNewTagLink('');
      } catch (error) {
        console.error('Ошибка при добавлении тега:', error);
      }
    } else {
      alert(
        'Необходимо выбрать категорию и заполнить поля "Новый тэг" и "Новая ссылка".',
      );
    }
  };

  const handleEditTagCategory = async () => {
    if (editTagInputCategory && editTagIdCategory) {
      try {
        const updatedTagCategory = await UpgradeLinkTagsCategory(
          editTagIdCategory,
          { title: editTagInputCategory },
        );
        setTagsCategory(
          tagsCategory.map((category) =>
            category.id === editTagIdCategory ? updatedTagCategory : category,
          ),
        );
        setIsEditingTagCategory(false);
        setEditTagInputCategory('');
        setEditTagIdCategory(null);
      } catch (error) {
        console.error('Ошибка при редактировании категории тэгов:', error);
      }
    }
  };

  const handleNewTagLinkChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.startsWith('https://') || inputValue === '') {
      setNewTagLink(inputValue);
    } else {
      // Если введенное значение не начинается с 'https://', можно либо ничего не делать, либо предложить пользователю начать со 'https://'.
      // Например, можно вывести сообщение об ошибке или предупреждение пользователю:
      alert('Ссылка должна начинаться с "https://".');
      // или просто проигнорировать введенное значение:
      // setNewTagLink('');
    }
  };

  return (
    <>
      <DefaultLayout>
        <div>
          <div className="tagsCategory">
            <div className="mt-4 flex items-center justify-center gap-5">
              <input
                type="text"
                value={newTagCategory}
                onChange={(e) => setNewTagCategory(e.target.value)}
                placeholder="Новая категория тегов"
                className="border p-2 rounded-lg"
              />
              <Button color="green" onClick={addTagCategory}>
                Добавить
              </Button>
            </div>

            {isEditingTagCategory && (
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
                <Button
                  color="red"
                  onClick={() => setIsEditingTagCategory(false)}
                >
                  Отмена
                </Button>
              </div>
            )}

            <div className="mt-10 mb-6 flex flex-wrap justify-around">
              {tagsCategory.map((tagCategory) => (
                <div
                  key={tagCategory.id}
                  className={`flex flex-col justify-center items-center `}
                >
                  <div
                    onClick={() => handleCategoryClick(tagCategory)}
                    className={`relative p-2 m-2 border cursor-pointer rounded-lg ${
                      activeCategory && activeCategory.id === tagCategory.id
                        ? 'bg-red-primary text-white'
                        : ' '
                    }
                    `}
                  >
                    {tagCategory.title}
                  </div>
                  <div className="top-0 right-0 flex gap-2">
                    <Button
                      onClick={() => startEditTagCategory(tagCategory)}
                      className="p-2 text-white bg-warning"
                    >
                      <MdEdit />
                    </Button>
                    <Button
                      color="red"
                      onClick={() => deleteTagCategory(tagCategory.id)}
                      className="p-2 text-white "
                    >
                      <MdDelete />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tags">
            <div className="mt-4 flex items-center justify-center gap-5">
              <input
                type="text"
                value={newTagTitle}
                onChange={(e) => setNewTagTitle(e.target.value)}
                placeholder={`Новый тэг для категории: ${
                  activeCategory ? activeCategory.title : 'Выберите категорию'
                }`}
                className="border p-2 rounded-lg"
                disabled={!activeCategory}
              />
              <input
                type="text"
                value={newTagLink}
                onChange={handleNewTagLinkChange}
                placeholder="Новый тег"
                className="border p-2 rounded-lg"
                disabled={!activeCategory}
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
              {activeTags &&
                activeTags.map((tag) => (
                  <>
                    <div className="flex flex-col justify-center items-center">
                      <Link to={tag.link} target="_blank">
                        <div
                          key={tag.id}
                          className="relative p-2 m-2 border rounded-lg"
                        >
                          {tag.title}
                        </div>
                      </Link>
                      <div className=" top-0 right-0 flex gap-2">
                        <Button
                          onClick={() => startEditTag(tag)}
                          className="p-2 text-white bg-warning"
                        >
                          <MdEdit />
                        </Button>
                        <Button
                          color="red"
                          onClick={() => deleteTag(tag.id)}
                          className="p-2 text-white "
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default LinkTags;
