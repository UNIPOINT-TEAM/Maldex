import {
    ProjectsSlider,
    QuestForm,
    SliderProduct,
    TagBanner,
    TagList,
} from "../../components";

function Tags() {
    return (
        <>
            <TagBanner />
            <TagList />
            <ProjectsSlider />
            <div className="mb-16">
                <SliderProduct />
            </div>
            <QuestForm />
        </>
    );
}

export default Tags;
