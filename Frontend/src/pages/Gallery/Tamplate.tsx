import { IoMdAdd } from "react-icons/io";
import { SAMPLE_TEMPLATES } from "../../constants/editor";
import Canvas from "../../components/Gallery/Canvas";
import CanvasFooter from "../../components/Gallery/CanvasFooter";
import { useEditor } from "@layerhub-io/react";
import useDesignEditorContext from "../../hooks/useDesignEditorContext";
import React from "react";

const Tamplate = () => {
  const editor = useEditor();

  const { setCurrentScene, currentScene } = useDesignEditorContext();

  const loadTemplate = React.useCallback(
    async (template: any) => {
      if (editor) {
        const fonts: any[] = [];
        template.layers.forEach((object: any) => {
          if (object.type === "StaticText" || object.type === "DynamicText") {
            fonts.push({
              name: object.fontFamily,
              url: object.fontURL,
              options: { style: "normal", weight: 400 },
            });
          }
        });
        const filteredFonts = fonts.filter((f) => !!f.url);
        // if (filteredFonts.length > 0) {
        //   await loadFonts(filteredFonts);
        // }

        setCurrentScene({ ...template, id: currentScene?.id });
      }
    },
    [editor, currentScene]
  );
  return (
    <div className="grid grid-cols-12">
      <div className="px-5 col-span-4 py-3 h-full min-h-screen  border-0 border-r border-lightSecondary">
        <h2 className="text-darkSecondary text-[10px] font-medium mb-1 uppercase">
          ПОВОД:
        </h2>
        <div className="body flex flex-wrap justify-between gap-3 mt-4">
          {SAMPLE_TEMPLATES.map((item) => (
            <div key={item.id} className="w-[185px]">
              <div className="group relative p-3 h-[105px] rounded-xl">
                <div className="absolute border-lightSecondary top-0 left-0 w-full h-full rounded-xl group-hover:opacity-100 cursor-pointer border-2 group-hover:border-redPrimary duration-300 grid place-items-center">
                  <button
                    onClick={() => loadTemplate(item)}
                    className="opacity-0 group-hover:opacity-100 duration-300 w-[40px] h-[40px] bg-redPrimary flex items-center justify-center rounded-full"
                  >
                    <IoMdAdd className="text-fs_5 text-[#fff]" />
                  </button>
                </div>
                <img
                  src={item.preview}
                  className="w-full h-full object-contain pointer-events-none align-middle"
                />
              </div>
              <h3 className="text-fs_6 font-medium">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 flex-1 col-span-8">
        <Canvas />
        <CanvasFooter />
      </div>
    </div>
  );
};
export default Tamplate;
