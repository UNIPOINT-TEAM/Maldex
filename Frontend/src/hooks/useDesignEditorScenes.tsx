import React from "react";
import { DesignEditorContext } from "../context/DesignEditor";

const useDesignEditorScenes = () => {
  const { scenes } = React.useContext(DesignEditorContext);
  return scenes;
};

export default useDesignEditorScenes;
