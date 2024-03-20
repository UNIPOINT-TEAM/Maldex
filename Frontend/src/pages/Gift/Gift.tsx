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
<<<<<<< HEAD
            <div>
              <GiftBanner />
            </div>
            <div>
              <ProjectsSlider />
              <TagBanner />
              <QuestForm />
=======
            <GiftBanner />
            <div>
              <div className="container_xxl">
                <h1 className="text-darkSecondary uppercase text-[28px] font-black px-10 my-1">
                  Проекты
                </h1>
              </div>
              <ProjectsSlider />
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gift;
