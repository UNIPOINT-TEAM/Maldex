import { useState, useEffect } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  DeleteArticle,
  GetArticlesDetail,
  UpgradeArticles,
} from '../../../services/articles';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Input } from '@material-tailwind/react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { BASE_URL } from '../../../utils/BaseUrl';
import './styleEditor.css';

function EditArticles({ htmlContent }) {
  // import { CKEditor } from 'ckeditor4-react';
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState(null);
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

  useEffect(() => {
    if (editor && content) {
      editor.setData(content);
    }
  }, [editor, content]);

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

  const handleDelete = async () => {
    try {
      await DeleteArticle(Number(id));
      console.log('Article deleted successfully');
      // Redirect to articles list or home page after deletion
      navigate('/articles'); // Example redirect
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <DefaultLayout>
      <div className="w-[1000px] m-auto">
        <div className="my-5 flex gap-4">
          <Link
            to={`http://5.35.82.80:8000/admin/blog/article/${id}/change`}
            target="_blank"
          >
            <Button
              className="my-6 image image-style-side bg-warning"
              onClick={handleSubmit}
            >
              Изменить
            </Button>
          </Link>
          <Button
            className="my-6 image image-style-side bg-danger"
            onClick={handleDelete}
          >
            Удалить
          </Button>
        </div>

        <div className="w-[1200px] mx-auto mb-100">
          <div className="article-container ck-__editable">
            <div class="ck-content">
              <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default EditArticles;
