import { TemplateData } from "../../../types";

const NewClients: React.FC<TemplateData> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col gap-6 p-10 border rounded-lg border-darkSecondary">
      <div className="heading  grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 h-full  relative">
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
      <div className="body grid grid-cols-12 gap-6 items-center w-full h-full">
        <div className="col-span-6 relative h-full flex items-center justify-center">
          <div
            className={`w-full h-full ${
              !data?.description ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <p className=" font-normal p-[6px] ">{data?.description}</p>
          </div>
        </div>
        <div className="col-span-6 relative h-full flex items-center justify-center">
          <div
            className={`w-full h-full ${
              !data?.description_2 ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <p className=" font-normal p-[6px] ">{data?.description_2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClients;
