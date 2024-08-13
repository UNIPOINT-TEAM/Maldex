import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

const GalleryThumb = ({ containerRef, item }) => {
  const [thumbnail, setThumbnail] = useState("");

  const generateThumbnail = () => {
    if (containerRef) {
      html2canvas(containerRef, {
        scale: 2, // Increase scale for higher resolution
        useCORS: true, // Handle cross-origin images if needed
        backgroundColor: null, // Transparent background
        logging: false, // Disable logging for performance
      })
        .then((canvas) => {
          setThumbnail(canvas.toDataURL("image/png"));
        })
        .catch((err) => {
          console.log("Error generating thumbnail:", err);
        });
    }
  };

  useEffect(() => {
    generateThumbnail();
  }, [item]);

  return (
    <div className="thumbnail-container w-full h-full flex justify-center items-center overflow-hidden">
      <img
        loading="lazy"
        src={thumbnail}
        className="thumbnail w-full h-full object-cover rounded-lg"
        alt="thumbnail"
      />
    </div>
  );
};

export default GalleryThumb;
