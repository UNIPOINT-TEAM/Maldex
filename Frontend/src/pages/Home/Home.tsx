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
            <div className="dishes container_xxl my-10 hidden lg:block px-3">
                <MainCategory />
            </div>
            <div className="container_xxl px-3">
                <p className="text-4xl text-greenPrimary">hits!</p>
                <div className="my-5">
                    <ProductNav />
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
                <p className="text-4xl text-redPrimary">new!</p>
                <div className="my-5">
                    <ProductNav />
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
