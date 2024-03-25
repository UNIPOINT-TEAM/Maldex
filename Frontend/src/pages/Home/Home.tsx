import {
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
      <div className="dishes container_xxl mt-10 hidden lg:block px-3">
        <MainCategory />
      </div>
      <div className="container_xxl px-3  mt-16">
        <ProductNav title="hits!" color="green" />
      </div>
      <div className="w-full">
        <SliderProduct />
      </div>
      <div className="dishes container_xxl my-10 px-3">
        <div className="flex items-center justify-between">
          <h3 className="section-title">посуда</h3>
          <button className="mx-3 uppercase text-fs_8 font-bold p-[6px] tracking-wide  border border-redPrimary rounded-lg text-redPrimary block ss:hidden">
            Все товары
          </button>
        </div>
        <Dishes />
      </div>
      <div className="faq container_xxl flex flex-col px-3 md:mb-[80px]">
        <h3 className="section-title">FAQ</h3>
        <Accordion />
      </div>
      <div className="mb-10">
        <News title="статьи" />
      </div>
      <ProjectsSlider />
      <div className="container_xxl px-3 mt-10">
        <ProductNav title="new!" color="red" />
      </div>
      <div className="w-full">
        <SliderProduct />
      </div>
      <QuestForm />
    </div>
  );
};

export default Home;
