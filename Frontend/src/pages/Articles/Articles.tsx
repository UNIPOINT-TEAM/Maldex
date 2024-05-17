import { Badge } from "../../components";
import { useEffect } from "react";
import { useFetchHook } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";
import EmptyContant from "../../components/EmptyContant/EmptyContant";

function Articles() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/articles/" });
  }, []);
  return (
    <>
      {/* <TagList /> */}
      <div className="articles container_xxl py-5 px-3">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
          {response && response.length > 0 ? (
              response.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.id}`}
                  className="bg-cover overflow-hidden text-white h-[180px] sm:h-[340px]"
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                >
                  <div className="p-3 lg:p-5">
                    <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                      {article.pub_date}
                    </h3>

                    <h3 className="text-fs_6 lg:text-[28px]">
                      {article.title}
                    </h3>
                    {article.is_new && <Badge name="NEW" />}
                    {article.is_hit && <Badge name="HIT" />}
                  </div>
                </Link>
              ))
            ) : (
              <EmptyContant />
            )}
          </div>
        </div>
        {/* <div className="flex justify-center items-center gap-3 my-5">
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
        </div> */}
      </div>
    </>
  );
}

export default Articles;
