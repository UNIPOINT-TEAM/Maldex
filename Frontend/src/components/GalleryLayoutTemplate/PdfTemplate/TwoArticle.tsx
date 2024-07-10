import templateTShirt from "../../../assets/Gallery/default-image.png";
import { TemplateData } from "../../../types";

const TwoArticle: React.FC<TemplateData> = ({ data, background }) => {
  return (
    <div
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className="w-full h-full p-5 border border-darkSecondary rounded-lg"
    >
      <div className="body grid grid-cols-2 gap-5 items-center w-full h-full">
        <div className="col-span-1 h-full relative">
          <div
            className={`w-full  h-full ${
              !data?.images_set ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              {!data?.images_set?.image_url && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {data?.images_set && data?.images_set?.image_url && (
                <div className="h-[450px] group w-full relative">
                  <img
                    src={data?.images_set?.image_url}
                    className="object-contain  w-full  h-full"
                    alt="product image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full relative">
          <div
            className={`w-full h-full ${
              !data?.images_set?.image_url2 ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              {!data?.images_set?.image_url2 && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {data?.images_set?.image_url2 && (
                <div className="h-[450px] w-full relative group">
                  <img
                    src={data?.images_set?.image_url2}
                    className="object-contain w-full h-full"
                    alt="product image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoArticle;
