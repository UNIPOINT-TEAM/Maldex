import React from "react";
import templateTShirt from "../../../assets/Gallery/default-image.png";
import { TemplateData } from "../../../types";

const PictureText: React.FC<TemplateData> = ({ data, background }) => {
  return (
    <div
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className="w-full h-full flex flex-col gap-3 p-10 border rounded-lg border-darkSecondary "
    >
      <div className="heading grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 relative h-full">
          <div
            className={`h-full ${
              !data?.name ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <h1 className=" leading-none text-[36px] h-full w-full font-medium ">
              {data?.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="body grid grid-cols-12 gap-10 items-center w-full h-full">
        <div className="col-span-5 h-full relative">
          <div className="w-full h-full ">
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
              <div className="h-[340px]  w-full relative group  cursor-pointer  col-span-3 flex  items-center">
                <img
                  src={data?.images_set[0]?.image_url}
                  alt=""
                  className="h-full   object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="col-span-7 relative h-full flex items-center justify-center">
          <div
            className={`w-full h-full ${
              !data?.description ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <p className=" w-full h-full bg-transparent text-[16px] font-normal">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureText;
