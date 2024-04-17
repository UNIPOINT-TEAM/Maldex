import React from "react";
import { IScene } from "@layerhub-io/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  isCurrentScene: boolean;
  scene: IScene;
  preview: string;
  index: number;
  changePage: (p: IScene) => void;
}

const SceneItem = ({
  isCurrentScene,
  scene,
  preview,
  index,
  changePage,
}: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: scene.id });
  const sceneRef = React.useRef<HTMLDivElement>(null);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "pointer",
  };

  React.useEffect(() => {
    const timeLineItemDiv = sceneRef.current;
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    if (timeLineItemDiv) {
      timeLineItemDiv.addEventListener("contextmenu", handleContextMenu);
    }
    return () => {
      if (timeLineItemDiv) {
        timeLineItemDiv.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, [sceneRef, scene]);

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        backgroundColor: isCurrentScene ? "#f3f4f6" : "#ffffff",
        padding: "1rem 0.5rem",
        ...style,
      }}
    >
      <div
        ref={sceneRef}
        onClick={() => changePage(scene)}
        style={{
          cursor: "pointer",
          position: "relative",
          border: isCurrentScene
            ? "2px solid #7158e2"
            : "2px solid rgba(0,0,0,.15)",
        }}
      >
        <img
          style={{ maxWidth: "90px", maxHeight: "80px", display: "flex" }}
          src={preview}
        />
        <div
          style={{
            position: "absolute",
            bottom: "4px",
            right: "4px",
            background: "rgba(0,0,0,0.4)",
            color: "#fff",
            fontSize: "10px",
            borderRadius: "2px",
            height: "16px",
            width: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {index + 1}
        </div>
      </div>
    </div>
  );
};

export default SceneItem;
