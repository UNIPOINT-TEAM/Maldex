import { useEffect, useState, useCallback } from "react";
import { toBlob } from "html-to-image";
import debounce from "lodash.debounce";

const GalleryThumb = ({ containerRef, item }) => {
  const [thumbnail, setThumbnail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const htmlToImageConvert = useCallback(
    debounce(() => {
      if (containerRef?.current) {
        toBlob(containerRef.current, {
          cacheBust: false,
          useCORS: true,
          allowTaint: true,
          quality: 0.92, // Add quality parameter to reduce processing time
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
          .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            console.log(imageUrl);
            setThumbnail(imageUrl);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      }
    }, 500), // Reduce debounce time
    [containerRef, item]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      htmlToImageConvert();
    }, 2000);

    return () => {
      clearTimeout(timer);
      htmlToImageConvert.cancel();
    };
  }, [containerRef, item, htmlToImageConvert]);

  return (
    <div className="thumbnail-container w-full h-full flex justify-center items-center overflow-hidden">
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        thumbnail && (
          <img
            loading="lazy"
            src={thumbnail}
            className="thumbnail w-full h-full object-cover rounded-lg"
            alt="thumbnail"
          />
        )
      )}
    </div>
  );
};

export default GalleryThumb;
