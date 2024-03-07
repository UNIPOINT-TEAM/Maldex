const BannerBottom = () => {
  return (
    <div className="hidden lg:grid grid-rows-9 grid-cols-5 grid-flow-col gap-3 my-3">
      <div className="row-span-9 bg-white h-[670px]">01</div>
      <div className=" col-span-4 row-span-5">
        <div className="grid grid-cols-12 h-full gap-3">
          <div className="col-span-5 bg-white">a</div>
          <div className="col-span-2 bg-white">a</div>
          <div className="col-span-3 bg-white">a</div>
          <div className="col-span-2 ">
            <div className="grid grid-rows-2 h-full gap-3">
              <div className="bg-white">a</div>
              <div className="bg-white">a</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-4 ">
        <div className="grid grid-cols-2 h-full gap-3">
          <div className="bg-white">a</div>
          <div className="bg-white">a</div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
