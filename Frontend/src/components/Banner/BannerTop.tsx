import image1 from "../../assets/banner-1.png";
const BannerTop = () => {
  return (
    <div className="grid grid-cols-4 gap-3 ">
      <div className="col-span-4 bg-white h-[200px] flex items-center justify-center">
        <img src={image1} alt="" />
      </div>
      <div className=" bg-white h-[130px] flex items-center justify-center">
        02
      </div>
      <div className=" bg-white h-[130px] flex items-center justify-center">
        03
      </div>
      <div className="  bg-white h-[130px] flex items-center justify-center">
        04
      </div>
      <div className=" bg-white h-[130px] flex items-center justify-center">
        05
      </div>
    </div>
  );
};

export default BannerTop;
