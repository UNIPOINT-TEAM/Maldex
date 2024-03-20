
function PortfolioBannerLeft() {
  return (
    <>
      <div>
        {/* <div className="flex gap-[10px]">
          <div className="w-[339px] h-[402px] bg-white">1</div>
          <div>
            <div className="w-[200px] h-[177px] bg-white mb-[25.3px]">2</div>
            <div className="w-[200px] h-[200px] bg-white">3</div>
          </div>
        </div> */}
            <div className="grid grid-cols-4 h-[198px] lg:grid-cols-5 gap-4 lg:h-[410px]">
      {/* Первый блок */}
      <div className="col-span-2 bg-gray-200 p-4">1 блок 410x410</div>

      {/* Второй блок */}
      <div className="col-span-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-4  h-full">
          <div className="bg-gray-400 col-span-2 h-full">1 блок 410x200</div>
          <div className="bg-gray-300">ved</div>
          <div className="bg-gray-300">ved</div>
      
        </div>

      </div>

      {/* Третий блок */}
      <div className="col-span-1 bg-gray-400 p-4 hidden lg:block">
        <div className="grid grid-rows-2 gap-4">

        </div>
      </div>

      {/* Два блока снизу */}
    </div>
      </div>
    </>
  );
}

export default PortfolioBannerLeft;
