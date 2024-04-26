import templateTShirt from "../../assets/Gallery/default-image.png";
const TwoArticle = () => {
  return (
    <div className="w-full h-full p-10">
      <div className="body grid grid-cols-2 gap-10 items-center w-full h-full">
        <div className="col-span-1 h-full flex items-center justify-center bg-[#eeede9]">
          <img
            src={templateTShirt}
            alt="template T-shirt"
            className="object-contain w-[80%] h-[90%]"
          />
        </div>
        <div className="col-span-1 h-full flex items-center justify-center bg-[#eeede9]">
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

export default TwoArticle;
