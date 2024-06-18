import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchHook } from "../../hooks/UseFetch";
import { BASE_URL } from "../../services/services";
import "./styleEditor.css";
import { Helmet } from "react-helmet";

function NewsDetail() {
  const { id } = useParams();
  const { fetchData, response } = useFetchHook();

  useEffect(() => {
    fetchData({ method: "GET", url: `/articles/${id}` });
    window.scrollTo(0, 0);
  }, [id, fetchData]);

  if (!response) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container_xxl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {response?.title
            ? `${response.title} . Изготовление и
            продажа. Каталог сувенирной продукции`
            : "Загрузка..."}
        </title>
        <meta
          name="description"
          content="Сувениры с логотипом на заказ. Промоподарки для партнеров, инвесторов, клиентов. Продвинутые технологии брендирования, складирование, логистика. Бесплатный дизайн-макет, скидки до 5—10 %. Бизнес-сувениры из США, Европы, Китая, России
          "
        />
      </Helmet>
      <div className="pb-[50vh] mt-10 mx-[100px]">
        {/*@ts-expect-error: This */}
        {response.body && (
          <div className="article-container ck-__editable">
            <div className="ck-content">
              <div
                // @ts-expect-error: This
                dangerouslySetInnerHTML={{
                  __html: response.body.replace(
                    /src="\/media/g,
                    `src="${BASE_URL}media`
                  ),
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsDetail;
