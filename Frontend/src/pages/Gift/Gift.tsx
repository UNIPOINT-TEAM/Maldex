
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
            <div data-aos="fade">
              <GiftBanner />
            </div>
            <div>
              <div className="container_xxl flex justify-between">
                <h1 className="section-title px-3">
                  Проекты
                </h1>
                <button className="mx-3 uppercase font-extrabold tracking-wider p-[6px] border border-redPrimary rounded-md text-redPrimary block ss:hidden">
                  Все проекты
                </button>
              </div>
              <ProjectsSlider />
              <TagBanner /> {/* Пример использования анимации */}
              <QuestForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gift;
