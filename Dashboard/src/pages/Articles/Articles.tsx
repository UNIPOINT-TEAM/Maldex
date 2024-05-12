import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { GetArticles } from '../../services/articles';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    GetArticles()
      .then((data) => {
        setArticles(data);
        console.log(data);
      })
      .catch((err) => {
        console.error('Error fetching articles:', err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <DefaultLayout>
              <link rel="stylesheet" href="path/to/assets/content-styles.css" type="text/css" />

      <div className="articles container_xxl py-5 px-3">
        <div className="mb-3">
        <Link to={`http://5.35.82.80:8000/admin/blog/article/add/`} target='_blank'>
 
          {/* <Link to={`/articles/add`}> */}
            <Button color="blue">Добавить статью</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
            {articles.map((article, index) => (
              <Link to={`/articles/${article.id}`}>
                <div
                  key={index}
                  className="p-3 lg:p-5 bg-cover text-white h-[180px] sm:h-[340px]"
                  style={{ backgroundImage: `url(${article.image})` }}
                >
                  <div className="md:w-[65%]">
                    <h3 className="text-fs_5 lg:text-fs_3 font-helvetica">
                      {article.pub_date}
                    </h3>
                    <h2 className="text-fs_6 lg:text-fs_3 font-medium">
                      {article.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 my-5">
          <button className="text-gray-500">
            <FaArrowLeftLong />
          </button>
          <p className="text-gray-400">страница</p>
          <button className="text-gray-400 border border-gray-400 rounded px-4 m-0">
            1
          </button>
          <p className="text-gray-400">из 10</p>
          <button className="text-gray-500">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Articles;
