import { Canvas as LayerhubCanvas } from "@layerhub-io/react";

const Canvas = () => {
  return (
    <div
      className="w-full h-[500px]"
      style={{ flex: 1, display: "flex", position: "relative" }}
    >
      <LayerhubCanvas
        config={{
          background: "#f1f2f6",
          controlsPosition: {
            rotation: "BOTTOM",
          },
          shadow: {
            blur: 4,
            color: "#eb3131",
            offsetX: 0,
            offsetY: 0,
          },
        }}
      />
    </div>
  );
};

export default Canvas;
