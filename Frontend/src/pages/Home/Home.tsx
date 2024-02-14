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
import image1 from "../../assets/article-bg-1.png";
import image2 from "../../assets/article-bg-2.png";
import image3 from "../../assets/article-bg-3.png";
import image4 from "../../assets/article-bg-4.png";

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



};

export default Home;
