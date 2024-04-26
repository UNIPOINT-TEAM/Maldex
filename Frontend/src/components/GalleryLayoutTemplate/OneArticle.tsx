import { Rnd } from "react-rnd";
import templateTShirt from "../../assets/Gallery/default-image.png";
const OneArticle = () => {
  return (
    <div className="w-full h-full p-10" id="one-aticle">
      <div className="heading grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 h-[80%] p-1 bg-[#eeede9]">
          <Rnd>
            <div className="heading">
              <input
                type="text"
                name="name"
                defaultValue={"Один артикул"}
                className="text-[36px] font-medium p-[6px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
              />
            </div>
          </Rnd>
        </div>
      </div>
      <div className="body grid grid-cols-8 items-center w-full h-[80%]">
        <div className="col-span-3 h-[90%] flex items-center justify-center bg-[#eeede9]">
          <img
            src={templateTShirt}
            alt="template T-shirt"
            className="object-contain w-[80%] h-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default OneArticle;
