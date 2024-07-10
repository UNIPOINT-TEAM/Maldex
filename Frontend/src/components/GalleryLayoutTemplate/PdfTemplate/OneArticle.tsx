import templateTShirt from "../../../assets/Gallery/default-image.png";
import { TemplateData } from "../../../types";
const OneArticle: React.FC<TemplateData> = ({ data, background }) => {
  return (
    <div
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className="w-full flex flex-col  justify-between grid-cols-7 bg-cover bg-center relative  h-full border p-5  border-darkSecondary  "
    >
      <div className="heading grid grid-cols-12 items-center w-full h-[20%] ">
        <div className={`col-span-12 relative h-full  ${"w-[65%]"}`}>
          <div
            className={`h-full ${
              !data?.name ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <h1 className="text-[36px] leading-none font-medium ">
              {data?.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="body grid grid-cols-12 items-center  w-full h-[75%]">
        <div className="col-span-5 h-full ">
          <div className="w-full h-full">
            {!data?.images_set && (
              <div className="">
                <div className="h-full flex items-center justify-center  bg-[#eeede9]">
                  <img
                    src={templateTShirt}
                    alt="template T-shirt"
                    className="object-contain w-[80%] "
                  />
                </div>
              </div>
            )}
            {data?.images_set && data?.images_set[0]?.image_url && (
              <div className="w-full group h-full col-span-3 relative">
                <div className="absolute left-0  top-[50%] hidden group-hover:flex justify-center w-full "></div>
                <div className="h-[340px] w-full">
                  <img
                    src={data?.images_set[0]?.image_url}
                    alt=""
                    className="object-contain  h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneArticle;
