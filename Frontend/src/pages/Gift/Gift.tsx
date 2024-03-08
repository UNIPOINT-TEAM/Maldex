import React from "react";
import { GiftBanner, ProjectsSlider } from "../../components";

function Gift() {
  return (
    <>
      <div>
        <div>
          <div>
            <GiftBanner />
            <div>
              <div className="container_xxl">
                <h1 className="text-darkSecondary uppercase text-[28px] font-black px-3 my-1">
                  Проекты
                </h1>
              </div>
              <ProjectsSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gift;
