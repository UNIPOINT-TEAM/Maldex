// components/AddArticles.js
import React, { useState, useRef } from 'react';
import { CKEditor } from 'ckeditor4-react';

import DefaultLayout from '../../../layout/DefaultLayout';
import { PostArticles } from '../../../services/articles';
import { Button, Input } from '@material-tailwind/react';
import { PostPrints } from '../../../services/print';

function uploadAdapter(loader: FileLoader): UploadAdapter {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        loader.file.then((file) => {
          resolve({ default: loader.data });
        });
      });
    },
    abort: () => {},
  };
}
function uploadPlugin(editor: Editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}

function AddPrint() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [blogData, setBlogData] = useState(null);

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
      formData.append('body', content); // Добавляем содержимое статьи
      formData.append('image', image);

      // Добавляем заголовок "Content-Type" в multipart/form-data, если необходимо
      const headers = { 'Content-Type': 'multipart/form-data' };

      await PostPrints(formData, { headers }); // Передаем formData и headers в PostArticles
      console.log('Article posted successfully');
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };

  const onEditorInit = (editor) => {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new CustomUploadAdapter(loader);
    };
  };

  const handleCkeditorState = (language, _event, editor) => {
    const data = editor.getData();
    setBlogData((prevState) => ({
      ...prevState,
      [`${language}_content`]: data,
    }));
  };

  return (
    <DefaultLayout>
      <div>
        {/* <label>Image:</label>
        <input type="file" onChange={handleImageChange} /> */}

        <div>
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
        </div>
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

      <div className="w-full">
        <CKEditor data={content} onChange={handleEditorChange} />
      </div>
      <Button className="my-6" color="blue" onClick={handleSubmit}>
        Отправить
      </Button>
    </DefaultLayout>
  );
}

export default AddPrint;
