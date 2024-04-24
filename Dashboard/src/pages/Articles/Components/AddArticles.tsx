// components/AddArticles.js
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DefaultLayout from '../../../layout/DefaultLayout';
import { PostArticles } from '../../../services/articles';

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

      await PostArticles(formData);
      console.log('Article posted successfully');
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };

  return (
    <DefaultLayout>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
        />
      </div>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={handleEditorChange}
      />
      <button onClick={handleSubmit}>Отправить</button>
    </DefaultLayout>
  );
}

export default AddArticles;
