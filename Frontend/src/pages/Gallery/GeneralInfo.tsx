import upload from "../../assets/icons/upload.svg";
import download from "../../assets/icons/rub.svg";
import rub from "../../assets/icons/download.svg";
import deleteIcon from "../../assets/icons/Delete.svg";
import { Switch } from "@material-tailwind/react";
import { useState } from "react";
import { Galleryslider } from "../../components";

interface CheckDataType {
  [key: string]: boolean;
}

const Checkdata = [
  {
    title: "Альбомное КП",
    name: "landscape",
  },
  {
    title: "Стандартное КП",
    name: "standard",
  },
  {
    title: "Цены",
    name: "prices",
  },
  {
    title: "Отправитель",
    name: "sender",
  },
  {
    title: "Код артикула",
    name: "codeArticle",
  },
  {
    title: "Характиристики",
    name: "characteristic",
  },
  {
    title: "Описание",
    name: "description",
  },
  {
    title: "Тираж и сумма",
    name: "circulationAmount",
  },
  {
    title: "Итого",
    name: "total",
  },
];

const GeneralInfo = () => {
  const [checkData, setCheckData] = useState<CheckDataType>({
    landscape: false,
    standard: false,
    prices: false,
    sender: false,
    codeArticle: false,
    characteristic: false,
    description: false,
    circulationAmount: false,
    total: false,
  });

  const handleSwitchChange = (name: string, isChecked: boolean) => {
    setCheckData((prevState) => ({
      ...prevState,
      [name]: isChecked,
    }));
  };

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="px-5 pb-16 col-span-4 py-3 h-full  border-0 border-r border-lightSecondary">
        <h2 className="font-medium text-[20px] pb-7">КП 128087</h2>
        <div className="flex flex-col font-medium text-fs_6 items-start gap-6">
          <button className="flex items-center gap-3">
            <img src={upload} alt="upload-icon" />
            <span>Отправить КП</span>
          </button>
          <button className="flex items-center gap-3">
            <img src={download} alt="download-icon" />
            <span>Скачать XLSXП</span>
          </button>
          <button className="flex items-center gap-3">
            <img src={download} alt="download-icon" />
            <span>Скачать PDF</span>
          </button>
          <button className="flex items-center gap-3">
            <img src={rub} alt="rub-icon" />
            <span>Цены и услуги</span>
          </button>
          <button className="flex items-center gap-3">
            <img src={deleteIcon} alt="delete-icon" />
            Удалить
          </button>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {Checkdata.map((item) => (
            // @ts-expect-error: This
            <Switch
              key={item.name}
              onChange={(e) => handleSwitchChange(item.name, e.target.checked)}
              checked={checkData[item.name]}
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
      <div className="p-3 flex-1 col-span-8">
        <Galleryslider />
      </div>
    </div>
  );
};

export default GeneralInfo;
