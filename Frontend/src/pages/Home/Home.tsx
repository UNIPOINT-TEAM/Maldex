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
    <>
      <div className="home">
        <div className="gift-category container_xxl py-3 grid grid-cols-12 gap-6 px-3">
          {[0, 0, 0, 0, 0, 0.0, 0, 0, 0, 0, 0, 0].map(() => (
            <GiftItem
              image="https://s3-alpha-sig.figma.com/img/cdfb/a7ee/804eff8cc752b6477223f2a0e3895ab5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XY1TVPc34XboHICyylLs~6t5yxJgpWOd9cSMj8BT1qPEGRJs0iHIxVfqTjcQUcy3W4ZVEbEfHuMgRe1Jyd2TllwVFhPTp4JTXztyMWwkzr6Y0Wd9b7kC9leujXJ0mz2vinyuKiGUoDXuF6PMP1pa6XwHCq2ui7RgvgjX4DRhdWGl3p~q3qcr1vPztt3eZwcvL6fezQldu-GdF5exkrQwn4jkEv7z-OtLk1oyOhepLGpLCKS4FQuKE8JWre7a7CuxMqxpP14lEDyl7aBj1T-VYaSqTghA7-i1BHB4lToYDTbH1TUDkHNVS-ysimb~NP3iGcS9vz9jVm3qeR9FXTJjfg__"
              name="Наборы"
            />
          ))}
        </div>
        <div className="banner container_xxl px-3">
          <Banner />
        </div>
        <div className="dishes container_xxl my-10">
          <MainCategory />
        </div>
        <div className="container_xxl">
          <p className="text-4xl text-greenPrimary">Hits</p>
          <div className="my-5">
            <ProductNav />
          </div>
          <SliderProduct />
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
        <ProjectsSlider />
        <QuestForm />
      </div>
    </>
  );
};

export default Home;
