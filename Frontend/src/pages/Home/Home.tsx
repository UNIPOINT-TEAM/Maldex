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
      <div className="gift-category container_xxl py-3 grid grid-cols-3   sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 ">
        <div className="w-full  flex items-center justify-center">
          <GiftItem
            image="https://s3-alpha-sig.figma.com/img/cdfb/a7ee/804eff8cc752b6477223f2a0e3895ab5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XY1TVPc34XboHICyylLs~6t5yxJgpWOd9cSMj8BT1qPEGRJs0iHIxVfqTjcQUcy3W4ZVEbEfHuMgRe1Jyd2TllwVFhPTp4JTXztyMWwkzr6Y0Wd9b7kC9leujXJ0mz2vinyuKiGUoDXuF6PMP1pa6XwHCq2ui7RgvgjX4DRhdWGl3p~q3qcr1vPztt3eZwcvL6fezQldu-GdF5exkrQwn4jkEv7z-OtLk1oyOhepLGpLCKS4FQuKE8JWre7a7CuxMqxpP14lEDyl7aBj1T-VYaSqTghA7-i1BHB4lToYDTbH1TUDkHNVS-ysimb~NP3iGcS9vz9jVm3qeR9FXTJjfg__"
            name="Наборы"
          />
        </div>
      </div>
      <div className="banner container_xxl px-3">
        <Banner />
      </div>
      <div className="dishes container_xxl my-10">
        <MainCategory />
      </div>
      <div className="container_xxl">
        <p className="text-4xl text-greenPrimary">hits!</p>
        <div className="my-5">
          <ProductNav />
        </div>
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
      <div>
        <div className="container_xxl flex justify-between">
          <h1 className="text-darkSecondary uppercase text-[28px] leading-[64px] font-medium px-3 my-1">
            Проекты
          </h1>
          <button className="mx-3 uppercase font-medium tracking-wider p-[6px] border border-redPrimary rounded-md text-redPrimary block ss:hidden">
            Все проекты
          </button>
        </div>
        <ProjectsSlider />
      </div>

      <div className="container_xxl">
        <p className="text-4xl text-redPrimary">new!</p>
        <div className="my-5">
          <ProductNav />
        </div>
        <SliderProduct />
      </div>
      <QuestForm />
    </div>
  );
};

export default Home;
