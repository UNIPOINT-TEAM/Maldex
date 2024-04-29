import { Rnd } from "react-rnd";
import templateTShirt from "../../assets/Gallery/default-image.png";
import { TemplateData } from "../../types";
const OneArticle: React.FC<TemplateData> = ({ data, background }) => {
  return (
    <div className="w-full h-full p-10" id="one-aticle">
      <div className="heading grid grid-cols-12 items-center w-full h-[20%]">
        {!data?.name && (
          <div className="col-span-7 h-[80%] p-1 bg-[#eeede9]"></div>
        )}
        {data?.name && (
          <Rnd>
            <input
              type="text"
              value={data?.name}
              name="name"
              className="text-[36px] col-span-7 font-medium p-[4px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
            />
          </Rnd>
        )}
      </div>
      <div className="body grid grid-cols-8 items-center w-full h-[80%]">
        {!data?.image && (
          <div className="col-span-3 h-[90%] flex items-center justify-center bg-[#eeede9]">
            <img
              src={templateTShirt}
              alt="template T-shirt"
              className="object-contain w-[80%] h-[90%]"
            />
          </div>
        )}
        <div className="relative col-span-3 flex items-center">
          <img src={data?.image} alt="" className=" h-[90%] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default OneArticle;
