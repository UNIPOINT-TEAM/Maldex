import { useEffect, useState } from "react";
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
import {
    GetCategory,
    GetProductHit,
    GetProductNew,
} from "../../services/services";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const [newProducts, setNewProducts] = useState([]);
    const [hitProducts, setHitProducts] = useState([]);

    useEffect(() => {
        GetCategory().then((res) => setCategories(res));
        GetProductNew(
            `product/all/?category_id=${categoryId}&is_new=true`
        ).then((res: any) => {
            setNewProducts(res);
        });
        GetProductHit(
            `product/all/?category_id=${categoryId}&is_hit=true`
        ).then((res: any) => {
            setHitProducts(res);
        });
    }, [categoryId]);

    const updateCategoryId = (newCategoryId: any) => {
        setCategoryId(newCategoryId);
    };

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
                <ProductNav
                // @ts-expect-error: This         

                    categories={categories}
                    updateCategoryId={updateCategoryId}
                    categoryId={categoryId}
                    title="hits!"
                    color="green"
                />
            </div>
            <div className="w-full">
                <SliderProduct products={hitProducts} status="hit" />
            </div>
            <div className="dishes container_xxl my-5 lg:my-10 px-3">

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
                <ProductNav
                // @ts-expect-error: This         

                    categories={categories}
                    updateCategoryId={updateCategoryId}
                    categoryId={categoryId}
                    title="new!"
                    color="red"
                />
            </div>
            <div className="w-full">
                <SliderProduct products={newProducts} status="new" />
            </div>
            <QuestForm />
        </div>
    );
};

export default Home;
