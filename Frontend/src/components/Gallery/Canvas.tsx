import { Canvas as LayerhubCanvas } from "@layerhub-io/react";

const Canvas = () => {
  return (
    <div
      className="w-full h-[500px]"
      style={{ flex: 1, display: "flex", position: "relative" }}
    >
      <LayerhubCanvas
        config={{
          background: "#6577bd",
          controlsPosition: {
            rotation: "BOTTOM",
          },
          shadow: {
            blur: 4,
            color: "#fcfcfc",
            offsetX: 0,
            offsetY: 0,
          },
        }}
      />
    </div>
  );
};

export default Canvas;
