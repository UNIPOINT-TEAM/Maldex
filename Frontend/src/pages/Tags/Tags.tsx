import {
    ProductNav,
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
      <div className="container_xxl px-3 mt-10">
        <ProductNav title="new!" color="red" />
      </div>
      <div className="w-full">
        { /*@ts-expect-error: This */}
        <SliderProduct />
      </div>
      <QuestForm />
    </>
  );
}

export default Tags;
