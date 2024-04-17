import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import useDesignEditorPages from "../../hooks/useDesignEditorScenes";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import SceneItem from "./SceneItem";
import { IScene } from "@layerhub-io/types";
import {
  restrictToFirstScrollableAncestor,
  restrictToHorizontalAxis,
} from "@dnd-kit/modifiers";
import { DesignEditorContext } from "../../context/DesignEditor";
import React from "react";
import { useEditor, useFrame } from "@layerhub-io/react";
import { nanoid } from "nanoid";
import { getDefaultTemplate } from "../../constants/design-editor";

const CanvasFooter = () => {
  const scenes = useDesignEditorPages();
  const {
    setScenes,
    setCurrentScene,
    currentScene,
    setCurrentDesign,
    currentDesign,
  } = React.useContext(DesignEditorContext);
  const editor = useEditor();
  const [currentPreview, setCurrentPreview] = React.useState("");
  const frame = useFrame();
  const [draggedScene, setDraggedScene] = React.useState<IScene | null>(null);

  const sensors = [
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  ];

  React.useEffect(() => {
    if (editor && scenes && currentScene) {
      const isCurrentSceneLoaded = scenes.find(
        (s) => s.id === currentScene?.id
      );
      if (!isCurrentSceneLoaded) {
        setCurrentScene(scenes[0]);
      }
    }
  }, [editor, scenes, currentScene]);

  React.useEffect(() => {
    let watcher = async () => {
      const updatedTemplate = editor.scene.exportToJSON();
      const updatedPreview = (await editor.renderer.render(
        updatedTemplate
      )) as string;
      setCurrentPreview(updatedPreview);
    };
    if (editor) {
      editor.on("history:changed", watcher);
    }
    return () => {
      if (editor) {
        editor.off("history:changed", watcher);
      }
    };
  }, [editor]);

  React.useEffect(() => {
    if (editor) {
      if (currentScene) {
        updateCurrentScene(currentScene);
      } else {
        const defaultTemplate = getDefaultTemplate({
          width: 1200,
          height: 1200,
        });
        setCurrentDesign({
          id: nanoid(),
          frame: defaultTemplate.frame,
          metadata: {},
          name: "Untitled Design",
          preview: "",
          scenes: [],
          type: "PRESENTATION",
        });
        editor.scene
          .importFromJSON(defaultTemplate)
          .then(() => {
            const initialDesign = editor.scene.exportToJSON() as any;
            editor.renderer.render(initialDesign).then((data) => {
              console.log(data);
              setCurrentScene({ ...initialDesign, preview: data });
              setScenes([{ ...initialDesign, preview: data }]);
            });
          })
          .catch(console.log);
      }
    }
  }, [editor, currentScene]);

  const updateCurrentScene = React.useCallback(
    async (design: IScene) => {
      await editor.scene.importFromJSON(design);
      const updatedPreview = (await editor.renderer.render(design)) as string;
      setCurrentPreview(updatedPreview);
    },
    [editor, currentScene]
  );

  const addScene = React.useCallback(async () => {
    setCurrentPreview("");
    const updatedTemplate = editor.scene.exportToJSON();
    const updatedPreview = await editor.renderer.render(updatedTemplate);

    const updatedPages = scenes.map((p) => {
      if (p.id === updatedTemplate.id) {
        return { ...updatedTemplate, preview: updatedPreview };
      }
      return p;
    });

    const defaultTemplate = getDefaultTemplate(currentDesign.frame);
    const newPreview = await editor.renderer.render(defaultTemplate);
    const newPage = {
      ...defaultTemplate,
      id: nanoid(),
      preview: newPreview,
    } as any;
    const newPages = [...updatedPages, newPage] as any[];
    setScenes(newPages);
    setCurrentScene(newPage);
  }, [scenes, currentDesign]);

  const changePage = React.useCallback(
    async (page: any) => {
      setCurrentPreview("");
      if (editor) {
        const updatedTemplate = editor.scene.exportToJSON();
        const updatedPreview = await editor.renderer.render(updatedTemplate);

        const updatedPages = scenes.map((p) => {
          if (p.id === updatedTemplate.id) {
            return { ...updatedTemplate, preview: updatedPreview };
          }
          return p;
        }) as any[];

        setScenes(updatedPages);
        setCurrentScene(page);
      }
    },
    [editor, scenes, currentScene]
  );

  const handleDragStart = (event: any) => {
    const draggedScene = scenes.find((s) => s.id === event.active.id);
    if (draggedScene) {
      setDraggedScene(draggedScene);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setScenes((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setDraggedScene(null);
  };

  return (
    <DndContext
      modifiers={[restrictToFirstScrollableAncestor, restrictToHorizontalAxis]}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="bg-[#ffff] p-2">
        <div className="flex items-center">
          <SortableContext
            items={scenes}
            strategy={horizontalListSortingStrategy}
          >
            {scenes.map((page, index) => (
              <SceneItem
                key={index}
                isCurrentScene={page.id === currentScene?.id}
                scene={page}
                index={index}
                changePage={changePage}
                preview={
                  currentPreview && page.id === currentScene?.id
                    ? currentPreview
                    : page.preview
                    ? page.preview
                    : ""
                }
              />
            ))}
            <div
              style={{
                background: "#ffffff",
                padding: "1rem 1rem 1rem 0.5rem",
              }}
            >
              <div
                onClick={addScene}
                className="w-[56px] h-[56px] cursor-pointer bg-[#f3f4f6] flex items-center justify-center"
              >
                Add
              </div>
            </div>
          </SortableContext>
          <DragOverlay>
            {draggedScene ? (
              <div
                style={{
                  backgroundImage: `url(${draggedScene.preview})`,
                  backgroundSize: `${
                    frame ? (frame.width * 70) / frame.height : 70
                  }px 70px`,
                  height: "80px",
                  opacity: 0.75,
                }}
              />
            ) : null}
          </DragOverlay>
        </div>
      </div>
    </DndContext>
  );
};
export default CanvasFooter;
