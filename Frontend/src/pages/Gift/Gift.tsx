import {
  GiftBanner,
  ProjectsSlider,
  QuestForm,
  TagBanner,
} from "../../components";

function Gift() {
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <GiftBanner />
            </div>
            <div className="">
              <ProjectsSlider />
              <TagBanner />
              <QuestForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gift;
