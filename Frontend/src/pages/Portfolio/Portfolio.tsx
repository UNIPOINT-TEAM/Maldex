import { useEffect } from "react";
import {
  CompanyBanner,
  News,
  ProjectsSlider,
  QuestForm,
} from "../../components";
import { Helmet } from "react-helmet";

function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
  return (
    <>
      <div className="container_xxl">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Портфолио - Корпоративные сувениры с логотипом. Изготовление и
            продажа. Каталог сувенирной продукции
          </title>
          <meta
            name="description"
            content="Сувениры с логотипом на заказ. Промоподарки для партнеров, инвесторов, клиентов. Продвинутые технологии брендирования, складирование, логистика. Бесплатный дизайн-макет, скидки до 5—10 %. Бизнес-сувениры из США, Европы, Китая, России
"
          />
        </Helmet>
        <div className="mx-6">
          <CompanyBanner />
        </div>
        <div className="mx-3">
          {/* <PortfolioBanner /> */}
          <News title="Новинки" />
          <div className="container_xxl px-3">
            {/* <ProductNav title="sale!" color="red" /> */}
          </div>
          <ProjectsSlider />
          <QuestForm />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
