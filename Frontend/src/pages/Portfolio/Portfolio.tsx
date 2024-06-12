import {
  CompanyBanner,
  News,
  ProjectsSlider,
  QuestForm,
} from "../../components";

function Portfolio() {
  return (
    <>
      <div className="container_xxl">
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