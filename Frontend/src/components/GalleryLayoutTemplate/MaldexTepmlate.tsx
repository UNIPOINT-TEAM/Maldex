import React, { useState, useEffect } from "react";
import templateTShirt from "../../assets/Gallery/default-image.png";
import { TemplateData } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { CarouselState, updateItem } from "../../store/carouselReducer";
import AddAplying from "../Gallery/AddAplying";

const MaldexTepmlate: React.FC<TemplateData> = ({ data, background }) => {
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState({ title: false, description: false });
  const [description, setDescription] = useState(data?.description || "");
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
  }, [data?.description]);

  const clampText = (text, maxLines) => {
    const lines = text.split("\n");
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join("\n") + "...";
    }
    return text;
  };

  return (
    <div
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className="w-full h-[650px] flex  flex-col gap-3 p-10 border rounded-lg border-darkSecondary "
    >
      <div className="heading grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 relative h-full">
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
      <div className="body grid grid-cols-12 gap-10 items-center w-full h-full">
        <div className="col-span-5 h-full relative">
          <div className="w-full h-full">
            <label
              htmlFor="upload-url"
              className="w-full h-full flex items-center justify-center"
            >
              <input
                type="file"
                name="image"
                id="upload-url"
                className="sr-only"
                onChange={(e) => {
                  dispatch(
                    updateItem({
                      ...items[activeCaruselIndex],
                      data: {
                        ...items[activeCaruselIndex]?.data,

                        images_set: {
                          ...items[activeCaruselIndex]?.data?.images_set,
                          [0]: {
                            image_url: URL.createObjectURL(e.target.files[0]),
                          },
                        },
                      },
                    })
                  );
                }}
              />
              {!data?.images_set && (
                <div className="h-full flex items-center cursor-pointer justify-center bg-[#eeede9]">
                  <img
                    src={templateTShirt}
                    alt="template T-shirt"
                    className="object-contain w-[80%] h-[90%]"
                  />
                </div>
              )}
              {data?.images_set && data?.images_set[0]?.image_url && (
                <div className=" h-[340px] w-full  cursor-pointer group col-span-3 flex  items-center">
                  <div className="absolute left-0 top-[50%] hidden group-hover:flex justify-center w-full ">
                    <AddAplying productData={data} />
                  </div>
                  <img
                    src={data?.images_set[0]?.image_url}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
            </label>
          </div>
        </div>
        <div className="col-span-7 relative h-full flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default MaldexTepmlate;
