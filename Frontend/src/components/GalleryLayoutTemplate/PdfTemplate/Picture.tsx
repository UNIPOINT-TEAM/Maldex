import templateTShirt from "../../../assets/Gallery/default-image.png";
import { TemplateData } from "../../../types";

const Picture: React.FC<TemplateData> = ({ data }) => {
  return (
    <div className="w-full h-full p-10 border rounded-lg border-darkSecondary">
      <div className="body grid grid-cols-2 gap-10 items-center w-full h-full">
        <div className="col-span-1 h-full relative">
          <div
            className={`h-full ${
              !data?.images_set ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              {!data?.images_set && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {data?.images_set && data?.images_set[0]?.image_url && (
                <div className="h-[420px] relative group w-full">
                  <img
                    src={data?.images_set[0]?.image_url}
                    alt="template T-shirt"
                    className="object-contain h-full "
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

export default Picture;
