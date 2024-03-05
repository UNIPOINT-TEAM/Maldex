import {
    MainCategory,
    QuestForm,
    Banner,
    Dishes,
    SliderProduct,
    News,
    Accordion,
    GiftBanner,
    ProjectsSlider,
    ProductNav,
} from "../../components";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="banner container_xxl my-10 ">
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
                    <Dishes />d
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
