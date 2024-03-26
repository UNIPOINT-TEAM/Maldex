import {
  GiftBanner,
  ProjectsSlider,
  QuestForm,
  TagBanner,
} from "../../components";

function Gift() {
  return (
    <div>
      <GiftBanner />
      <div>
        <ProjectsSlider />
        <TagBanner />
        <QuestForm />
      </div>
    </div>
  );
}

export default Gift;
