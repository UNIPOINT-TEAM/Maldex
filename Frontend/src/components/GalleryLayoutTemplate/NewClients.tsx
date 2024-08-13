import { TemplateData } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { CarouselState, updateItem } from "../../store/carouselReducer";
import { useEffect, useState } from "react";

const NewClients: React.FC<TemplateData> = ({ data }) => {
  const [isFocus, setIsFocus] = useState({
    title: false,
    description: false,
    description_2: false,
  });
  const [description, setDescription] = useState(data?.description || "");
  const [description_2, setDescription_2] = useState(data?.description || "");
  const dispatch = useDispatch();
  const { items, activeCaruselIndex } = useSelector(
    (state: { carousel: CarouselState }) => state.carousel
  );

  const handleChangeItem = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, files, value } = event.target;
    if (name === "description") {
      setDescription(value);
    }
    if (name === "description_2") {
      setDescription_2(value);
    }
    const updatedItem = {
      ...items[activeCaruselIndex],
      data: {
        ...data,
        [name]: files ? URL.createObjectURL(files[0]) : value,
      },
    };
    dispatch(updateItem(updatedItem));
  };
  useEffect(() => {
    if (data?.description) {
      setDescription(data.description);
    }
    if (data?.description_2) {
      setDescription_2(data.description_2);
    }
  }, [data?.description]);
  const clampText = (text: string, maxLines: number) => {
    const lines = text.split("\n");
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join("\n") + "...";
    }
    return text;
  };
  return (
    <div className="w-full h-[650px] flex flex-col gap-6 p-10 border rounded-lg border-darkSecondary">
      <div className="heading  grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 h-full  relative">
          <div
            className={`h-full ${
              !data?.name ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <textarea
              onFocus={() => setIsFocus({ title: true })}
              onBlur={() => setIsFocus({ title: false })}
              onChange={handleChangeItem}
              value={
                isFocus.title
                  ? data?.name
                  : `${data?.name?.slice(0, 20)}${
                      data?.name?.length > 20 ? "..." : ""
                    }`
              }
              name="name"
              className="resize-none leading-none text-[36px] h-full w-full font-medium p-[4px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
            />
          </div>
        </div>
      </div>
      <div className="body grid grid-cols-12 gap-6 items-center w-full h-full">
        <div className="col-span-6 relative h-full flex items-center justify-center">
          <div
            className={`w-full h-full ${
              !data?.description ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <textarea
              name="description"
              value={
                isFocus.description ? description : clampText(description, 13)
              }
              onFocus={() => setIsFocus({ description: true })}
              onBlur={() => setIsFocus({ description: false })}
              onChange={handleChangeItem}
              rows={13}
              className=" w-full h-full bg-transparent resize-none font-normal p-[6px] overflow-auto focus:outline outline-[#e99125]"
            />
          </div>
        </div>
        <div className="col-span-6 relative h-full flex items-center justify-center">
          <div
            className={`w-full h-full ${
              !data?.description_2 ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <textarea
              name="description_2"
              value={
                isFocus.description_2 ? description_2 : clampText(description_2, 13)
              }
              onFocus={() => setIsFocus({ description_2: true })}
              onBlur={() => setIsFocus({ description_2: false })}
              onChange={handleChangeItem}
              rows={13}
              className=" w-full h-full bg-transparent resize-none font-normal p-[6px] overflow-auto focus:outline outline-[#e99125]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClients;
