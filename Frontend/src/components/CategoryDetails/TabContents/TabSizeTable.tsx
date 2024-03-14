import sizeProduct from "../../../assets/images/size-product.png";
const TabSizeTable = () => {
  return (
    <div>
      <div className="flex flex-col text-fs_7 gap-1">
        <div className=" flex gap-1 text-fs_8">
          <div className="w-[55px] h-[35px]  flex items-center justify-center text-black"></div>
          <div className=" flex gap-1 flex-wrap">
            <div className="text-center  flex flex-col w-[55px] h-[35px] bg-white  items-center  text-black">
              <span>S</span>
              <span>38-40</span>
            </div>
            <div className="w-[55px] h-[35px] bg-white flex items-center justify-center text-black">
              44
            </div>
          </div>
        </div>
        <div className=" flex gap-1">
          <div className="w-[55px] h-[35px] bg-white flex items-center justify-center text-black">
            A
          </div>
          <div className=" flex gap-1 flex-wrap">
            <div className="w-[55px] h-[35px] bg-white flex items-center justify-center text-black">
              41
            </div>
            <div className="w-[55px] h-[35px] bg-white flex items-center justify-center text-black">
              44
            </div>
          </div>
        </div>
        <div className=" flex gap-1">
          <div className="w-[55px] h-[35px] bg-white flex items-center justify-center text-black">
            B
          </div>
          <div className=" flex gap-1 flex-wrap">
            <div className="w-[55px] h-[35px] bg-white flex items-center justify-center text-black">
              41
            </div>
            <div className="w-[55px] h-[35px] bg-white flex items-center justify-center text-black">
              44
            </div>
          </div>
        </div>
      </div>
      <img src={sizeProduct} alt="" className="h-[105px] pt-3" />
    </div>
  );
};

export default TabSizeTable;
