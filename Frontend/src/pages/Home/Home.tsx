import {
  MainCategory,
  QuestForm,
  Banner,
  Dishes,
  SliderProduct,
  News,
  Accordion,
} from "../../components";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="banner container_xxl my-10 ">
          <Banner />
        </div>
        <div className="dishes container_xxl my-10">
          <h3 className="section-title">посуда</h3>
          <Dishes />
        </div>
        <div className="faq container_xxl flex  ">
          <h3 className="section-title">FAQ</h3>
          <Accordion />
        </div>
        <News />
        <SliderProduct />
        <MainCategory />
        <QuestForm />
      </div>
    </>
  );
};

export default Home;
