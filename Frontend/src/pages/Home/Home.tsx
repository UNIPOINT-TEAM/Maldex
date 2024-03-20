import {
<<<<<<< HEAD
    MainCategory,
    QuestForm,
    Banner,
    Dishes,
    SliderProduct,
    News,
    Accordion,
    ProjectsSlider,
    ProductNav,
    GiftItem,
} from "../../components";

const Home = () => {
    return (
        <div className="home">
            <GiftItem />
            <div className="banner container_xxl px-3">
                <Banner />
            </div>
            <div className="dishes container_xxl my-10 hidden lg:block px-3">
                <MainCategory />
            </div>
            <div className="container_xxl px-3">
                <div className="">
                    <ProductNav title="hits!" color="green" />
                </div>
            </div>
            <div className="w-full">
                <SliderProduct />
            </div>
            <div className="dishes container_xxl my-10 px-3">
                <div className="flex items-center justify-between">
                    <h3 className="section-title">посуда</h3>
                    <button className="border block md:hidden rounded-lg border-redPrimary py-1 px-2 text-redPrimary font-extrabold">
                        Все товары
                    </button>
                </div>
                <Dishes />
            </div>
            <div className="faq container_xxl flex flex-col px-3">
                <h3 className="section-title">FAQ</h3>
                <Accordion />
            </div>
            <News />
            <ProjectsSlider />
            <div className="container_xxl px-3">
                <div className="">
                    <ProductNav title="new!" color="red"/>
                </div>
            </div>
            <div className="w-full">
                <SliderProduct />
            </div>
            <QuestForm />
        </div>
    );
=======
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
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
};

export default Home;
