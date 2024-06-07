import { PDFExport } from "@progress/kendo-react-pdf";
import React from "react";
import { useSelector } from "react-redux";
interface IProps {
  pdfExportComponent: any;
}
const SavePdf: React.FC<IProps> = ({ pdfExportComponent }) => {
  const items = useSelector((state) => state.carousel.items);
  return (
    <PDFExport paperSize="A4" margin="1cm" ref={pdfExportComponent}>
      {items.map((item, i) => (
        <div
          key={i}
          className="h-full w-full cursor-pointer gallery-slide rounded-lg bg-[#fff]"
        >
          <div className="w-full h-full">
            {item.template && React.cloneElement(item.template, { ...item })}
          </div>
        </div>
      ))}
    </PDFExport>
  );
};

export default SavePdf;
