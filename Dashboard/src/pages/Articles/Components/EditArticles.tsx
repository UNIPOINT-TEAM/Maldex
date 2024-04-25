import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DefaultLayout from '../../../layout/DefaultLayout';
import { GetArticlesDetail, UpgradeArticles } from '../../../services/articles';
import { useParams } from 'react-router-dom';
import { Button, Input } from '@material-tailwind/react';

function EditArticles() {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const article = await GetArticlesDetail(Number(id));
        setTitle(article.title);
        setContent(article.body);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('body', content);
      formData.append('image', image);

      await UpgradeArticles(Number(id), formData);
      console.log('Article updated successfully');
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  return (
    <DefaultLayout>
      <div className="my-5">
        <label
          // htmlFor={`${index}`}
          className="flex w-1/2 h-[190px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4"
        >
          <input
            required
            label="Фото"
            type="file"
            // name={`${index}`}
            // id={`${index}`}
            className="sr-only"
            accept="image/*"
            onChange={handleImageChange}
          />
          <p className="text-fs-6">Добавить Фото</p>
        </label>
      </div>
      <div className="my-10 w-1/3">
        <Input
          value={title}
          required
          variant="standard"
          label="Название"
          placeholder=""
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="w-1/2">
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={handleEditorChange}
        />
      </div>
      <Button className="my-6" color="blue" onClick={handleSubmit}>
        Отправить
      </Button>
    </DefaultLayout>
  );
}

export default EditArticles;
