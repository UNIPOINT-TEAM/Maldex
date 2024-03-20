<<<<<<< HEAD
import {
  CompanyBanner,
  News,
  ProjectsSlider,
  QuestForm,
} from "../../components";
=======
import { Link } from "react-router-dom";
import image1 from "../../assets/portfolio/image1.jpg";
import image2 from "../../assets/portfolio/image2.png";
import image3 from "../../assets/portfolio/image3.png";
import image4 from "../../assets/portfolio/image4.png";
import image5 from "../../assets/portfolio/image5.png";
import image6 from "../../assets/portfolio/image6.png";
import { Badge, News, ProjectsSlider, QuestForm } from "../../components";
>>>>>>> 0facdc4 (restart branch 2)

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
