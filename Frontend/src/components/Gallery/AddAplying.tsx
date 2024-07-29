  import React, { useState } from "react";
  import { Dialog } from "@material-tailwind/react";
  import { IoAddOutline } from "react-icons/io5";
  import { Rnd } from "react-rnd";
  import { IoMdClose } from "react-icons/io";
  import uploadIcon from "../../assets/icons/upload-img-icon.svg";
  import textLeftIcon from "../../assets/icons/text-left.svg";
  import textCenterIcon from "../../assets/icons/text-center.svg";
  import textRightIcon from "../../assets/icons/text-right.svg";

  const editorConfig = {
    fontFamily: "Times New Roman",
    fontSize: "11px",
    fontWeight: [
      { label: "Ж", value: "bold" },
      { label: "К", value: "italic" },
      { label: "Ч", value: "underline" },
      { label: "T", value: "line-through" },
    ],
    textAlign: [
      { label: textLeftIcon, value: "left" },
      { label: textCenterIcon, value: "center" },
      { label: textRightIcon, value: "right" },
    ],
  };

  interface IProps {
    productData: any;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  const AddAplying: React.FC<IProps> = ({ productData, name, onChange }) => {
    const [open, setOpen] = useState(false);

    const [apllyingData, setApllyingData] = useState({
      image: null,
      imagePosition: { x: 0, y: 0, width: 200, height: 200 },
      textPosition: { x: 0, y: 0, width: 200, height: 100 },
      content: {
        text: "",
        fontFamily: "Times New Roman",
        fontSize: "11px",
        fontWeight: [],
        textAlign: "left",
      },
    });
    const [selectedElement, setSelectedElement] = useState<string | null>(null);

    const handleOpen = () => setOpen(!open);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setApllyingData((prev) => ({
        ...prev,
        image: URL.createObjectURL(event.target.files[0]),
      }));
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setApllyingData((prev) => ({
        ...prev,
        content: { ...prev.content, text: event.target.value },
      }));
    };

    const handleFontFamilyChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setApllyingData((prev) => ({
        ...prev,
        content: { ...prev.content, fontFamily: event.target.value },
      }));
    };

    const handleFontSizeChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setApllyingData((prev) => ({
        ...prev,
        content: { ...prev.content, fontSize: event.target.value },
      }));
    };

    const handleFontWeightChange = (value: string) => {
      setApllyingData((prev) => ({
        ...prev,
        content: {
          ...prev.content,
          fontWeight: prev.content.fontWeight.includes(value)
            ? prev.content.fontWeight.filter((w) => w !== value)
            : [...prev.content.fontWeight, value],
        },
      }));
    };

    const handleTextAlignChange = (value: string) =>
      setApllyingData((prev) => ({
        ...prev,
        content: { ...prev.content, textAlign: value },
      }));

    const handleSaveInfo = () => {
      setOpen(false);
      onChange(apllyingData, name);
    };

    const handleCancelInfo = () => {
      setApllyingData({
        image: null,
        imagePosition: { x: 0, y: 0, width: 200, height: 200 },
        textPosition: { x: 0, y: 0, width: 200, height: 100 },
        content: {
          text: "",
          fontFamily: "Times New Roman",
          fontSize: "11px",
          fontWeight: [],
          textAlign: "left",
        },
      });
      setOpen(false);
    };

    return (
      <div>
        <button
          onClick={handleOpen}
          className=" bg-greenPrimary flex  items-center tracking-wide gap-1 px-2 py-1 font-bold text-white rounded-[5px] uppercase text-[12px]"
        >
          <IoAddOutline className="text-fs_6 font-bold" /> Добавить нанесение
        </button>
        <Dialog
          size="xl"
          className="h-[550px] p-6 rounded-none"
          placeholder={""}
          open={open}
          handler={handleOpen}
        >
          <div className="grid grid-cols-12 gap-5 h-full font-Helvetica-Neue">
            <div className="col-span-8 relative border border-[#9d9c98] flex justify-center items-center h-full rounded-md ">
              <div className="absolute top-0 left-0">
                <Rnd
                  size={{
                    width: apllyingData.imagePosition.width,
                    height: apllyingData.imagePosition.height,
                  }}
                  position={{
                    x: apllyingData.imagePosition.x,
                    y: apllyingData.imagePosition.y,
                  }}
                  onDragStop={(e, d) => {
                    setApllyingData((prev) => ({
                      ...prev,
                      imagePosition: { ...prev.imagePosition, x: d.x, y: d.y },
                    }));
                  }}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setApllyingData((prev) => ({
                      ...prev,
                      imagePosition: {
                        ...prev.imagePosition,
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                      },
                    }));
                  }}
                  enableResizing={{
                    top: true,
                    right: true,
                    bottom: true,
                    left: true,
                    topRight: true,
                    bottomRight: true,
                    bottomLeft: true,
                    topLeft: true,
                  }}
                  onClick={() => setSelectedElement("image")}
                  className="min-w-[200px] min-h-[200px] border border-[#9d9c98] cursor-move"
                  style={{
                    border:
                      selectedElement === "image"
                        ? "2px solid red"
                        : "2px solid transparent",
                  }}
                >
                  {apllyingData.image && (
                    <img
                      src={apllyingData.image}
                      alt="aplying-img"
                      className="w-full h-full object-contain"
                    />
                  )}
                </Rnd>
              </div>

              <div className="absolute top-0 left-0">
                <Rnd
                  size={{
                    width: apllyingData.textPosition.width,
                    height: apllyingData.textPosition.height,
                  }}
                  position={{
                    x: apllyingData.textPosition.x,
                    y: apllyingData.textPosition.y,
                  }}
                  onDragStop={(e, d) => {
                    setApllyingData((prev) => ({
                      ...prev,
                      textPosition: { ...prev.textPosition, x: d.x, y: d.y },
                    }));
                  }}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setApllyingData((prev) => ({
                      ...prev,
                      textPosition: {
                        ...prev.textPosition,
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                      },
                    }));
                  }}
                  enableResizing={{
                    top: true,
                    right: true,
                    bottom: true,
                    left: true,
                    topRight: true,
                    bottomRight: true,
                    bottomLeft: true,
                    topLeft: true,
                  }}
                  onClick={() => setSelectedElement("text")}
                  style={{}}
                >
                  <span
                    style={{
                      border:
                        selectedElement === "text"
                          ? "2px solid red"
                          : "2px solid transparent",
                      fontFamily: apllyingData.content.fontFamily,
                      fontSize: apllyingData.content.fontSize,
                      textAlign: apllyingData.content.textAlign,
                      fontWeight: apllyingData.content.fontWeight.includes("bold")
                        ? "bold"
                        : "normal",
                      fontStyle: apllyingData.content.fontWeight.includes(
                        "italic"
                      )
                        ? "italic"
                        : "normal",
                      textDecoration: apllyingData.content.fontWeight
                        .filter((weight) =>
                          ["underline", "line-through"].includes(weight)
                        )
                        .join(" "),
                    }}
                  >
                    {apllyingData.content.text}
                  </span>
                </Rnd>
              </div>
              <img
                src={productData}
                alt="product-image"
                className="w-[300px] object-contain"
              />
            </div>
            <div className="col-span-4 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center">
                  <h2 className="text-black text-[28px] font-medium flex-1">
                    Нанесение
                  </h2>
                  <IoMdClose
                    className="cursor-pointer text-fs_2 text-darkPrimary"
                    onClick={handleOpen}
                  />
                </div>
                <label htmlFor="upload-url" className="relative w-full h-full ">
                  <span className="text-[10px] uppercase font-medium tracking-wide text-darkSecondary">
                    Загрузка файла
                  </span>
                  <input
                    type="file"
                    name="upload-url"
                    id="upload-url"
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                  <div className="h-[40px] cursor-pointer rounded-lg w-full border gap-2 flex justify-center items-center border-greenPrimary">
                    <img
                      width={20}
                      height={20}
                      className="object-contain"
                      src={uploadIcon}
                      alt="upload-input-img"
                    />
                    <span className="text-[10px]  tracking-wider text-greenPrimary font-medium uppercase">
                      загрузить картинку
                    </span>
                  </div>
                </label>
                <div className="mt-4">
                  <label
                    htmlFor="text"
                    className="text-[10px] uppercase font-medium tracking-wide text-darkSecondary"
                  >
                    Добавление текста
                  </label>
                  <textarea
                    name="text"
                    id="text"
                    placeholder="Введите текст..."
                    value={apllyingData.content.text}
                    onChange={handleTextChange}
                    className="w-full text-[11px] placeholder:text-darkSecondary text-darkPrimary font-normal h-[65px] border border-darkSecondary rounded-lg resize-none py-1 px-2 outline-0"
                  ></textarea>
                </div>
                <label
                  htmlFor="font-family"
                  className="text-[10px] mt-4 uppercase text-darkSecondary font-medium tracking-wide"
                >
                  Добавить
                </label>
                <div className="grid grid-cols-12 gap-3 text-darkSecondary">
                  <div className=" col-span-9">
                    <select
                      id="font-family"
                      value={apllyingData.content.fontFamily}
                      onChange={handleFontFamilyChange}
                      className="w-full border border-darkSecondary rounded-lg p-2 h-8 text-fs_9 "
                    >
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Arial">Arial</option>
                      <option value="Courier New">Courier New</option>
                    </select>
                  </div>
                  <div className=" col-span-3">
                    <select
                      id="font-size"
                      value={apllyingData.content.fontSize}
                      onChange={handleFontSizeChange}
                      className="w-full border text-fs_9 border-darkSecondary rounded-lg p-2"
                    >
                      <option value="11px">11 px</option>
                      <option value="14px">14 px</option>
                      <option value="18px">18 px</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between mt-2">
                  <div className="flex items-center gap-2">
                    {editorConfig.textAlign.map((item, i) => (
                      <button
                        onClick={() => handleTextAlignChange(item.value)}
                        key={i}
                        className="text-[10px] h-8 w-8 rounded-[6px] uppercase text-darkSecondary border border-darkSecondary flex items-center justify-center"
                      >
                        <img src={item.label} alt={item.value} />
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {editorConfig.fontWeight.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleFontWeightChange(item.value)}
                        style={{
                          fontWeight: item.value === "bold" ? "bold" : "normal",
                          fontStyle:
                            item.value === "italic" ? "italic" : "normal",
                          textDecoration: item.value,
                        }}
                        className={`text-[10px] h-8 w-8 rounded-[6px] uppercase text-darkSecondary border ${
                          apllyingData.content.fontWeight.includes(item.value)
                            ? "border-greenPrimary text-greenPrimary"
                            : "border-darkSecondary"
                        } `}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={handleCancelInfo}
                  className="text-fs_6 text-[#d3d3d3] font-medium"
                >
                  Сбросить
                </button>
                <button
                  onClick={handleSaveInfo}
                  className="uppercase border border-darkSecondary text-darkSecondary w-[170px] h-[50px] font-Articulat -tracking-tight rounded-xl text-fs_8 font-semibold"
                >
                  сохранить
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  };

  export default AddAplying;
