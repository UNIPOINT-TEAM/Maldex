import React, { useEffect, useRef } from "react";

const GalleryThumbs = ({ item }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = "16px Arial";
    context.fillText(item?.name, 10, 50);
  }, [item]);
  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default GalleryThumbs;
