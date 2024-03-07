import image1 from "../../assets/banner-1.png";
const BannerBottomMobile = () => {
  return (
    <div className="grid grid-cols-2 mt-2 gap-3 lg:hidden">
      <div className="grid grid-cols-2 gap-3 ">
        <div className="col-span-2 bg-white h-[65px] flex items-center justify-center py-3">
          <img src={image1} alt="" className="h-full" />
        </div>
        <div className=" bg-white h-[80px] flex items-center justify-center">
          02
        </div>
        <div className=" bg-white h-[80px] flex items-center justify-center">
          03
        </div>
      </div>
      <div className="bg-white">a</div>
    </div>
  );
};

export default BannerBottomMobile;
