import React, { useEffect, useState } from 'react';
import { GoArrowDownRight } from 'react-icons/go';
import Badge from '../Badge/Badge';
import image1 from '../../assets/images/article-bg-1.png';
import image2 from '../../assets/images/article-bg-2.png';
import image3 from '../../assets/images/article-bg-3.png';
import image4 from '../../assets/images/article-bg-4.png';
import { Link } from 'react-router-dom';
import { EditNews } from '..';
import { GetArticles } from '../../services/articles';

const News: React.FC<{ title: string }> = ({ title }) => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    GetArticles().then((res) => {
      setResponse(res);
    });
  }, []);

  const EmptyContant = () => {
    return (
      <div className="w-full h-full flex justify-center items-center bg-white ">
        <p className="text-fs_6 text-center text-black">статья пока нет</p>
      </div>
    );
  };

  return (
    <div className="articles container_xxl py-5 px-3  md:mb-[100px]">
      <h3 className="section-title ">{title}</h3>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <Link
            to={`/articles/${response[4]?.id}`}
            className="bg-cover overflow-hidden text-white h-[180px] sm:h-[340px]"
            style={{
              backgroundImage: `url(${response[4]?.image})`,
            }}
          >
            {response[4] ? (
              <div className="p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                  {response[4]?.pub_date}
                </h3>

                <h3 className="text-fs_6 lg:text-[28px]">
                  {response[4]?.title}
                </h3>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>

          <Link
            to={`/articles/${response[3]?.id}`}
            className=" overflow-hidden bg-cover text-white h-[180px] sm:h-[340px]"
            style={{
              backgroundImage: `url(${response[3]?.image})`,
            }}
          >
            {response[3] ? (
              <div className=" p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                  {response[3]?.pub_date}
                </h3>

                <h3 className="text-fs_6 lg:text-[28px]">
                  {response[3]?.title}
                </h3>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 h-[180px] sm:h-[340px]">
          <Link
            to={`/articles/${response[2]?.id}`}
            className=" bg-cover text-white hidden lg:block h-full"
            style={{
              backgroundImage: `url(${response[2]?.image})`,
            }}
          >
            {response[2] ? (
              <div className="p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                  {response[2]?.pub_date}
                </h3>

                <h3 className="text-fs_6 lg:text-[28px]">
                  {response[2]?.title}
                </h3>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>
          <Link
            to={`/articles/${response[1]?.id}`}
            className=" bg-cover text-white hidden lg:block h-full"
            style={{
              backgroundImage: `url(${response[1]?.image})`,
            }}
          >
            {response[1] ? (
              <div className="p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                  {response[1]?.pub_date}
                </h3>

                <h3 className="text-fs_6 lg:text-[28px]">
                  {response[1]?.title}
                </h3>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>
          <Link
            to={`/articles/${response[0]?.id}`}
            className=" bg-cover text-white hidden lg:block h-full"
            style={{
              backgroundImage: `url(${response[0]?.image})`,
            }}
          >
            {response[0] ? (
              <div className="p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                  {response[0]?.pub_date}
                </h3>
                <h2 className="text-fs_6 lg:text-[28px] ">
                  {response[0]?.title}
                </h2>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>
          <Link
            to={'/articles'}
            className="group p-3 lg:p-5 h-full flex flex-col justify-between bg-white hover:bg-redPrimary cursor-pointer duration-300"
          >
            <h2 className="group-hover:text-[#fff] mt-7 text-fs_6 lg:text-[28px] leading-tight font-medium tracking-wide text-redPrimary">
              Все <br /> статьи
            </h2>
            <div className="flex justify-end">
              <button className="bg-redPrimary w-[40px] h-[40px] flex items-center justify-center p-1 rounded-xl group-hover:bg-[#fff]">
                <GoArrowDownRight className="text-fs_6 text-[#fff] group-hover:text-redPrimary" />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
