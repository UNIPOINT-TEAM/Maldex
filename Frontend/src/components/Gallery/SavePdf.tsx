import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import download from "../../assets/icons/rub.svg";
import logo from "../../assets/images/Maldex-logo.svg";
import { CarouselState } from "../../store/carouselReducer";

const SavePdf = () => {
  const items = useSelector((state) => state.carousel.items);
  const wrapperRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { status } = useSelector(
    (state: { carousel: CarouselState }) => state.carousel
  );

  useEffect(() => {
    if (!items) return;

    const images = wrapperRef?.current?.querySelectorAll("img");
    const totalImages = images.length;
    let loadedImages = 0;

    images?.forEach((img) => {
      img.onload = () => {
        loadedImages += 1;
        console.log(`Image loaded: ${loadedImages}/${totalImages}`);
        if (loadedImages === totalImages) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedImages += 1;
        console.log(`Image load error: ${loadedImages}/${totalImages}`);
        if (loadedImages === totalImages) {
          setIsLoaded(true);
        }
      };
    });

    // If there are no images, consider the loading as complete
    if (totalImages === 0) {
      setIsLoaded(true);
    }
  }, [items]);

  const openPDF = async () => {
    if (!isLoaded) {
      console.log("Images are not fully loaded yet.");
      return;
    }

    const input = wrapperRef.current;

    if (!input) {
      console.error("PDF wrapper element not found.");
      return;
    }

    const opt = {
      margin: 1,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: false },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: `${status.landscape_visible ? "landscape" : "portrait"}`,
      },
    };

    try {
      console.log("Generating PDF...");
      await html2pdf()?.from(input)?.set(opt)?.save();
      console.log("PDF generated successfully.");
    } catch (error) {
      console.error("Error generating PDF:", error);
      // If an error occurs, log the message to help diagnose the problem
      if (error.message) {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div>
      <button className="flex items-center gap-3" onClick={openPDF}>
        <img src={download} alt="download-icon" />
        <span>Скачать PDF</span>
      </button>
      <div className="absolute w-full top-0 -left-[1000%]">
        <div className="p-3" id="wrapper" ref={wrapperRef}>
          {status.sender_visible && (
            <div className="h-[100px]">
              <div className="h-full flex justify-end items-center gap-5">
                <img
                  src={logo}
                  alt="logo"
                  className="object-contain h-[35px]"
                />
                <div className="text-fs_6 text-center">
                  <p>Дмитрий</p>
                  <p>email: shestpsov@gmail.com</p>
                  <p>т.89262559026</p>
                </div>
              </div>
            </div>
          )}

          {items?.map((item, i) => {
            console.log(item); // Log the item to inspect its properties
            return (
              item && (
                <div key={i} className="w-full cursor-pointer gallery-slide">
                  <div className="w-full  my-3">
                    {item?.pdfTemplate &&
                      React.cloneElement(item?.pdfTemplate, { ...item })}
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SavePdf;
