import React from "react";
import { useSelector } from "react-redux";
interface IProps {
  pdfExportComponent: any;
}
const SavePdf: React.FC<IProps> = ({ pdfExportComponent }) => {
  const items = useSelector((state) => state.carousel.items);
  return (
    <div id="rep1" ref={pdfExportComponent}>
      {items.map((item, i) => (
        <h1>Шариковая ручка Tesoro, черная/позолота</h1>
        // <div
        //   key={i}
        //   className="h-full w-full cursor-pointer gallery-slide rounded-lg bg-[#fff]"
        // >
        //   <div className="w-full h-full">
        //     {item.pdfTemplate &&
        //       React.cloneElement(item.pdfTemplate, { ...item })}
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default SavePdf;
