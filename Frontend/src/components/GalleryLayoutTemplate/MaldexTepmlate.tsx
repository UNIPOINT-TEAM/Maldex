import templateTShirt from "../../assets/Gallery/default-image.png";
const MaldexTepmlate = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-10" id="one-aticle">
      <div className="heading  grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 h-full p-1 bg-[#eeede9]">
          <div className="heading">
            <input
              type="text"
              name="name"
              className="text-[36px] font-medium p-[6px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
            />
          </div>
        </div>
      </div>
      <div className="body grid grid-cols-12 gap-10 items-center w-full h-full">
        <div className="col-span-5 h-full flex items-center justify-center bg-[#eeede9]">
          <img
            src={templateTShirt}
            alt="template T-shirt"
            className="object-contain w-[80%] h-[90%]"
          />
        </div>
        <div className="col-span-7 h-full flex items-center justify-center bg-[#eeede9]"></div>
      </div>
    </div>
  );
};

export default MaldexTepmlate;
