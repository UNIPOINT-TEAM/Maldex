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
  
  const Home = () => {
    return (
      <div className="home">
        <GiftItem />
        <div className="banner container_xxl px-3">
          <Banner />
        </div>
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
      </div>
    );
  };
  
  export default Home;
  