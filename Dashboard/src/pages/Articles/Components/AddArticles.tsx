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
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

// import CKEditor, { CKEditorEventAction } from "ckeditor4-react";








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
      formData.append('body', content);
      formData.append('image', image);

      const headers = { 'Content-Type': 'multipart/form-data' };

      await PostArticles(formData, { headers });
      console.log('Article posted successfully');
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };
  
  

  const ref = useRef(null);


  const onEditorInit = (editor) => {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new CustomUploadAdapter(loader);
    };
  };

  const handleCkeditorState = (language, _event, editor) => {
    const data = editor.getData();
    setBlogData(prevState => ({
      ...prevState,
      [`${language}_content`]: data
    }));
  };

  

  return (
    <DefaultLayout>
      <div className="w-[1000px] m-auto">
      <div>
        <div>
          <div className="my-5">
            <label className="flex w-1/2 h-[190px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4">
              <input
                required
                label="Фото"
                type="file"
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

      
        <CKEditor data={content} onChange={handleEditorChange} />
      
      <div className='my-10 mx-auto text-[26px]'>
        <h1>Предпросмотр:</h1>
      </div>
      </div>
      <div className='w-[1000px] m-auto'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Button className="my-6" color="blue" onClick={handleSubmit}>
        Отправить
      </Button>
    </DefaultLayout>
  );
}

export default AddArticles;