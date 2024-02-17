<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 89fc5ef (product card 20% _ gift page 10%)
import image1 from "../../assets/article-bg-1.png";
import image2 from "../../assets/article-bg-2.png";
import image3 from "../../assets/article-bg-3.png";
import image4 from "../../assets/article-bg-4.png";
<<<<<<< HEAD
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
=======
import {
  MainCategory,
  QuestForm,
  RunningText,
  SaleSlider,
} from "../../components";
import articleBg1 from "../../assets/article-bg-1.png";
import articleBg2 from "../../assets/article-bg-2.png";
import articleBg3 from "../../assets/article-bg-3.png";
import articleBg4 from "../../assets/article-bg-4.png";
=======

import { MainCategory, QuestForm, FAQ, Banner, Dishes, SliderProduct } from "../../components";
>>>>>>> 89fc5ef (product card 20% _ gift page 10%)

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="banner container_xxl my-10 ">
                    <Banner />
                </div>
                <div className="dishes container_xxl my-10">
                    <h3 className="section-title">посуда</h3>

<<<<<<< HEAD
      <MainCategory />
      <QuestForm />
      <RunningText />
    </>
  );
>>>>>>> bf64a73 (navbar100)
=======
                    <Dishes />
                </div>
                <div className="faq container_xxl flex  ">
                    <h3 className="section-title">FAQ</h3>
                    <FAQ />
                </div>
                <div className="articles container_xxl">
                    <h3 className="section-title">статьи</h3>
                    <div className="home p-4">
                        <div className="">
                            <div className="flex flex-col gap-3 ">
                                <div className="flex-grow flex gap-3">
                                    <div className="w-full md:w-1/2">
                                        <div
                                            className="p-5 bg-cover text-white h-[340px]"
                                            style={{
                                                backgroundImage: `url(${image1})`,
                                            }}
                                        >
                                            <div className="md:w-[65%]">
                                                <h3 className="text-[24px] font-helvetica">
                                                    2.10
                                                </h3>
                                                <h2 className="text-[28px] font-medium ">
                                                    Маска для лица многоразовая
                                                    из хлопка, анатомической
                                                    формы
                                                </h2>
                                                <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                                                    NEW
                                                </span>
                                                <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                                                    HIT
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div
                                            className="p-5 bg-cover text-white h-[340px]"
                                            style={{
                                                backgroundImage: `url(${image2})`,
                                            }}
                                        >
                                            <div className="md:w-[65%]">
                                                <h3 className="text-[24px]">
                                                    2.10
                                                </h3>
                                                <h2 className="text-[28px] font-medium ">
                                                    Маска для лица многоразовая
                                                    из хлопка, анатомической
                                                    формы
                                                </h2>
                                                <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                                                    NEW
                                                </span>
                                                <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                                                    HIT
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-full md:w-1/4">
                                        <div
                                            className="p-5 bg-cover text-white h-[340px]"
                                            style={{
                                                backgroundImage: `url(${image3})`,
                                            }}
                                        >
                                            <h3 className="text-[24px]">
                                                2.10
                                            </h3>
                                            <h2 className="text-[28px] font-medium ">
                                                Маска для лица многоразовая из
                                                хлопка, анатомической формы
                                            </h2>
                                            <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                                                NEW
                                            </span>
                                            <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                                                HIT
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/4">
                                        <div
                                            className="p-5 bg-cover text-white h-[340px]"
                                            style={{
                                                backgroundImage: `url(${image4})`,
                                            }}
                                        >
                                            <h3 className="text-[24px]">
                                                2.10
                                            </h3>
                                            <h2 className="text-[28px] font-medium ">
                                                Маска для лица многоразовая из
                                                хлопка, анатомической формы
                                            </h2>
                                            <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                                                NEW
                                            </span>
                                            <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                                                HIT
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/4">
                                        <div
                                            className="p-5 bg-cover text-white h-[340px]"
                                            style={{
                                                backgroundImage: `url(${image4})`,
                                            }}
                                        >
                                            <h3 className="text-[24px]">
                                                2.10
                                            </h3>
                                            <h2 className="text-[28px] font-medium ">
                                                Маска для лица многоразовая из
                                                хлопка, анатомической формы
                                            </h2>
                                            <span className="border px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                                                NEW
                                            </span>
                                            <span className="border px-1  rounded-[15px] text-[12px] font-bold">
                                                HIT
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/4 ">
                                        <div className="py-10 h-full">
                                            <h2 className="text-[28px] font-medium text-redPrimary">
                                                Все статьи
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SliderProduct/>     
                    <MainCategory />
                    <QuestForm />
                </div>
            </div>
        </>
    );
>>>>>>> 89fc5ef (product card 20% _ gift page 10%)
};

export default Home;
=======
>>>>>>> 7ca5cd3 (commited)
