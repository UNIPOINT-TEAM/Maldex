import upload from "../../assets/icons/upload.svg";
import download from "../../assets/icons/rub.svg";
import { Switch } from "@material-tailwind/react";
import { jsPDF } from "jspdf";
import { AllDeleteModal } from "../../components/Gallery/AllDeleteModal";
import { updateStatus } from "../../store/carouselReducer";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import SavePdf from "../../components/Gallery/SavePdf";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

const Checkdata: {
  title: string;
  name:
    | "landscape_visible"
    | "standard_visible"
    | "prices_visible"
    | "sender_visible"
    | "codeArticle_visible"
    | "characteristic_visible"
    | "description_visible"
    | "circulationAmount_visible"
    | "total_visible";
}[] = [
  {
    title: "Альбомное КП",
    name: "landscape_visible",
  },
  // {
  //   title: "Стандартное КП",
  //   name: "standard_visible",
  // },
  {
    title: "Цены",
    name: "prices_visible",
  },
  {
    title: "Отправитель",
    name: "sender_visible",
  },
  {
    title: "Код артикула",
    name: "codeArticle_visible",
  },
  {
    title: "Характиристики",
    name: "characteristic_visible",
  },
  {
    title: "Описание",
    name: "description_visible",
  },
  {
    title: "Тираж и сумма",
    name: "circulationAmount_visible",
  },
  {
    title: "Итого",
    name: "total_visible",
  },
];

const GeneralInfo = () => {
  /*@ts-expect-error: This */
  const itemsStatus = useSelector((state) => state.carousel.status);
  const items = useSelector((state) => state.carousel.items);
  console.log(items[0]?.data);
  const dispatch = useDispatch();
  console.log(items);
  const handleSwitchChange = (
    name:
      | "landscape_visible"
      | "standard_visible"
      | "prices_visible"
      | "sender_visible"
      | "codeArticle_visible"
      | "characteristic_visible"
      | "description_visible"
      | "circulationAmount_visible"
      | "total_visible",
    isChacked: boolean
  ) => {
    dispatch(updateStatus({ name, isChacked }));
  };

  const pdfExportComponent = React.useRef(null);
  const generatePDF = () => {
    const input = pdfExportComponent;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };

  const exportToExcel = async () => {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet("Sheet1");
    ws.addRow([`Коммерческое предложение №126417`]);
    ws.addRow([]);
    ws.addRow([
      "Имя",
      "Цвет",
      "Артикул",
      "Изображение",
      "Цена",
      "Всего",
      "Материал",
      "Сайт",
    ]);

    for (let product of items) {
      const productRow = ws.addRow([
        product?.data?.name,
        product?.data?.colorID?.name,
        product?.data?.article,
        "",
        product?.data?.discount_price > 0
          ? product?.data?.discount_price
          : product?.data?.price,
        product?.data?.totalPrice,
        product?.data?.material,
        product?.data?.site,
      ]);
      if (product?.data?.images_set[0]?.image_url) {
        try {
          const imageUrl = product?.data?.images_set[0]?.image_url;
          const response = await fetch(imageUrl, { mode: "cors" });
          if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
          }
          const imageBlob = await response.blob();
          const imageBuffer = await imageBlob.arrayBuffer();
          const imageId = wb.addImage({
            buffer: imageBuffer,
            extension: "jpeg",
          });
          ws.addImage(imageId, {
            tl: { col: 3, row: productRow.number - 1 },
            ext: { width: 100, height: 100 },
          });
          ws.getRow(productRow.number).height = 100;
          ws.getRow(productRow.number).alignment = {
            vertical: "middle",
          };
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
    }
    ws.getRow(1).font = {
      size: 17,
      bold: true,
      color: { argb: "FFFFFFFF" },
    };
    ws.getRow(1).height = 60;
    ws.getRow(1).alignment = {
      vertical: "middle",
    };
    ws.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "EC1026" },
    };

    // Set column widths
    ws.columns = [
      { width: 30 },
      { width: 15 },
      { width: 15 },
      { width: 25 },
      { width: 10 },
      { width: 10 },
      { width: 15 },
    ];

    // Merge cells for the title
    ws.mergeCells("A1:F1");

    // Generate the Excel file
    const buffer = await wb.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "Коммерческое предложение.xlsx");
  };

  return (
    <div className="px-5 pb-16 col-span-4 py-3 h-full  border-0 border-r border-lightSecondary">
      <h2 className="font-medium text-[20px] pb-7">КП 128087</h2>
      <div className="flex flex-col font-medium text-fs_6 items-start gap-6">
        <button className="flex items-center gap-3">
          <img src={upload} alt="upload-icon" />
          <span>Отправить КП</span>
        </button>
        <button onClick={exportToExcel} className="flex items-center gap-3">
          <img src={download} alt="download-icon" />
          <span>Скачать XLSXП</span>
        </button>
        <SavePdf />
        {/* <button className="flex items-center gap-3">
          <img src={rub} alt="rub-icon" />
          <span>Цены и услуги</span>
        </button> */}
        <AllDeleteModal />
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {Checkdata.map((item) => (
          <Switch
            crossOrigin={""}
            key={item.name}
            onChange={(e) => handleSwitchChange(item.name, e.target.checked)}
            checked={itemsStatus[item.name]}
            name={item.name}
            id={`custom-switch-${item.name}`}
            ripple={false}
            className="h-full bg-[#9d9c98] w-full checked:bg-redPrimary"
            containerProps={{
              className: "w-[48px] h-[26px]",
            }}
            label={
              <h3 className="text-black text-fs_6 font-medium font-Helvetica-Neue">
                {item.title}
              </h3>
            }
            circleProps={{
              className: "before:hidden bg-[#fff] left-[4px] border-none",
            }}
          />
        ))}
      </div>
      <button className="w-[210px] text-fs_8 font-bold   text-darkSecondary rounded-[10px] h-[50px] mt-8 bg-white border border-darkSecondary outline-none uppercase">
        сохранить
      </button>
    </div>
  );
};

export default GeneralInfo;
