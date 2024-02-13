<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {
  MainCategory,
  QuestForm,
  Banner,
  Dishes,
  News,
  Accordion,
  ProjectsSlider,
  GiftItem,
  MainProductFilter,
} from "../../components";
=======
<<<<<<< HEAD
import MainCategory from "../../components/MainCategory/MainCategory";
>>>>>>> 391284e (runnigtext3)
import image1 from "../../assets/article-bg-1.png";
import image2 from "../../assets/article-bg-2.png";
import image3 from "../../assets/article-bg-3.png";
import image4 from "../../assets/article-bg-4.png";
=======
import { MainCategory, RunningText } from "../../components";
>>>>>>> cad4d44 (RunnigText)
=======
import { MainCategory, RunningText } from "../../components";
>>>>>>> cad4d44 (RunnigText)

const Home = () => {
  return (
    <div className="home">
      <GiftItem />
      <div className="banner container_xxl px-3">
        <Banner />
      </div>
<<<<<<< HEAD
      <div className="dishes container_xxl mt-10 hidden lg:block px-3">
        <MainCategory />
      </div>
      <div className="container_xxl px-3 mt-16">
        <MainProductFilter status="hit" />
      </div>
      <div className="dishes container_xxl my-5 lg:my-10 px-3">
        <Dishes />
      </div>
      <div className="faq container_xxl flex  px-3 md:mb-[80px]">
        <h3 className="section-title">FAQ</h3>
        <Accordion />
      </div>
      <div className="mb-10">
        <News title="статьи" />
      </div>
      <ProjectsSlider />
      <div className="container_xxl px-3">
        <MainProductFilter status="new" />
      </div>
      <QuestForm />
=======

      <MainCategory />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 391284e (runnigtext3)
    </div>
  );
=======
=======
>>>>>>> cad4d44 (RunnigText)
      <RunningText />
    </>
  )
>>>>>>> cad4d44 (RunnigText)
};

export default Home;
=======
>>>>>>> 7ca5cd3 (commited)
