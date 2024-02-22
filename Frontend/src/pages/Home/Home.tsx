import {
  MainCategory,
  QuestForm,
  FAQ,
  Banner,
  Dishes,
  SliderProduct,
  News,
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
          <FAQ />
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
