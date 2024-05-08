import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DefaultLayout from '../../../layout/DefaultLayout';
import { GetArticlesDetail, UpgradeArticles } from '../../../services/articles';
import { useParams } from 'react-router-dom';
import { Button, Input } from '@material-tailwind/react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { BASE_URL } from '../../../utils/BaseUrl';
import './styleEditor.css';

function EditArticles({ htmlContent }) {
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
        console.log(article);
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

  const modifiedContent = content.replace(
    /src="\/media/g,
    `src="${BASE_URL}/media`,
  );

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
        {/* <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={handleEditorChange}
        /> */}
      </div>

      <div className='w-[1200px] mx-auto mb-100'>
        <img src={image} alt="" />
        {/* <h1>{title}</h1> */}
        {/* <p>{content}</p> */}

        <div className="article-container ck-__editable">
          <div class="ck-content">
            <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
          </div>
          {/* <div>{parse(content)}</div> */}
        </div>
      </div>
      <Button
        className="my-6 image image-style-side"
        color="blue"
        onClick={handleSubmit}
      >
        Отправить
      </Button>
    </DefaultLayout>
  );
}

export default EditArticles;
