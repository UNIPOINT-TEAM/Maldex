import upload from "../../assets/icons/upload.svg";
import download from "../../assets/icons/rub.svg";
import rub from "../../assets/icons/download.svg";
import { Switch } from "@material-tailwind/react";
import { Galleryslider } from "../../components";
import { AllDeleteModal } from "../../components/Gallery/AllDeleteModal";
import { updateStatus } from "../../store/carouselReducer";
import { useDispatch, useSelector } from "react-redux";

const Checkdata = [
  {
    title: "Альбомное КП",
    name: "landscape_visible",
  },
  {
    title: "Стандартное КП",
    name: "standard_visible",
  },
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
  // @ts-expect-error: This
  const itemsStatus = useSelector((state) => state.carousel.status);
  const dispatch = useDispatch();

  const handleSwitchChange = (name: string, isChacked: boolean) => {
    // @ts-expect-error: This
    dispatch(updateStatus({ name, isChacked }));
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
      <div className="p-3 flex-1 col-span-8">
        <Galleryslider />
      </div>
    </div>
  );
};

export default GeneralInfo;
