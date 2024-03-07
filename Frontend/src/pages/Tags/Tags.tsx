import React from "react";
import {
  ProjectsSlider,
  QuestForm,
  TagBanner,
  TagList,
} from "../../components";

function Tags() {
  return (
    <div>
      <div>
        <TagBanner />
        <TagList />
        <ProjectsSlider />
      </div>
    </div>
  );
}

export default Tags;
