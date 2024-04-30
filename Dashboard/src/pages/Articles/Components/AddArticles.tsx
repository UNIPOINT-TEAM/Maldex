// components/AddArticles.js
import React, { useState, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DefaultLayout from '../../../layout/DefaultLayout';
import { PostArticles } from '../../../services/articles';
import { Button, Input } from '@material-tailwind/react';
import { BASE_URL } from '../../../utils/BaseUrl';
import CustomUploadAdapter from './UploadAdapter';
import {
  UploadAdapter,
  FileLoader
} from "@ckeditor/ckeditor5-upload/src/filerepository";
import { Image, ImageResizeEditing, ImageResizeHandles } from '@ckeditor/ckeditor5-image';





function uploadAdapter(loader: FileLoader): UploadAdapter {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        loader.file.then((file) => {
          resolve({ default: loader.data });
        });
      });
    },
    abort: () => {}
  };
}
function uploadPlugin(editor: Editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}


function AddArticles() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

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
  
      await PostArticles(formData, { headers }); // Передаем formData и headers в PostArticles
      console.log('Article posted successfully');
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };
  
  

  const ref = useRef(null);


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

        <CKEditor
        config={{
          // @ts-ignore
          extraPlugins: [uploadPlugin]
        }}
        data={content}
        editor={ClassicEditor}
        // onReady={(editor) => {
        //   ref.current = editor;
        // }}

        onReady={(editor) => {
          editor.ui.view.editable.element.style.minHeight = "600px";
       }}
        onChange={handleEditorChange}

        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}

        
        
      />
      </div>
      <Button className="my-6" color="blue" onClick={handleSubmit}>
        Отправить
      </Button>
    </DefaultLayout>
  );
}

export default AddArticles;
