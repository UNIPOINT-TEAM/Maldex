import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import download from "../../assets/icons/rub.svg";
import logo from "../../assets/images/Maldex-logo.svg";
import { CarouselState } from "../../store/carouselReducer";

const SavePdf = () => {
  const items = useSelector((state) => state.carousel.items);
  const wrapperRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const { status } = useSelector(
    (state: { carousel: CarouselState }) => state.carousel
  );

  useEffect(() => {
    if (!items) return;
    const images = wrapperRef.current.querySelectorAll("img");
    const totalImages = images.length;
    let loadedImages = 0;

    console.log("Images to be loaded:", totalImages);

    images.forEach((img) => {
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
  }, [items]);

  const openPDF = async () => {
    if (!isLoaded) return;
    const input = wrapperRef.current;
    const opt = {
      margin: 1,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    try {
      await html2pdf().from(input).set(opt).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
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

          {items &&
            items.map((item, i) => (
              <div key={i} className="w-full cursor-pointer gallery-slide">
                <div className="w-full h-[670px] my-3">
                  {item.pdfTemplate &&
                    React.cloneElement(item.pdfTemplate, { ...item })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SavePdf;
