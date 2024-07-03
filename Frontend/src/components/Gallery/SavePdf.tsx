import { usePDF } from "react-to-pdf";
import download from "../../assets/icons/rub.svg";
import { useSelector } from "react-redux";
import React from "react";

const SavePdf = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const items = useSelector((state) => state.carousel.items);
  return (
    <div>
      <button className="flex items-center gap-3" onClick={() => toPDF()}>
        <img src={download} alt="download-icon" />
        <span>Скачать PDF</span>
      </button>
      <div className="absolute w-full top-0 -left-[1000%]">
        <div className="p-3" ref={targetRef}>
          {items.map((item, i) => (
            <div
              key={i}
              className="h-[650px] w-full cursor-pointer gallery-slide  "
            >
              <div className="w-full h-full ">
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
