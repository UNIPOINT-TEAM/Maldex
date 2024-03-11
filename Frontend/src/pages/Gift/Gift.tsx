import React from "react";
import { GiftBanner, ProjectsSlider, QuestForm, TagBanner } from "../../components";

function Gift() {
  return (
    <>
      <div>
        <div>
          <div>
            <GiftBanner />
            <div>
              <div className="container_xxl flex justify-between">
                <h1 className="text-darkSecondary uppercase text-[28px] font-black px-3 my-1">
                  Проекты
                </h1>
                <button className="mx-3 uppercase font-extrabold tracking-wider p-[6px] border border-redPrimary rounded-md text-redPrimary block ss:hidden">
                  Все проекты
                </button>
              </div>
              <ProjectsSlider />
              <TagBanner/>
              <QuestForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gift;
