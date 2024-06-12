import {
  MainProductFilter,
  ProjectsSlider,
  QuestForm,
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
        <MainProductFilter status="new" />
      </div>
      <QuestForm />
    </>
  );
}

export default Tags;