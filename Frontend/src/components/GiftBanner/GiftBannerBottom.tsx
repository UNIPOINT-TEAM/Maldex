import React from "react";

const GiftBannerBottom = () => {
  return (
    // <div className="grid grid-cols-3 gap-4">
    //   {/* Первый блок */}
    //   <div className="col-span-1 bg-gray-200 p-4">1 блок 410x410</div>

    //   {/* Второй блок */}
    //   <div className="col-span-1  p-4 bg-gray-200">
    //     <div className="grid grid-cols-1 gap-4 bg-gray-300">
    //       {/* Первый блок во втором блоке */}
    //       <div className="bg-gray-400 h-200">1 блок 410x200</div>
    //       {/* Второй блок во втором блоке */}
    //       <div className="bg-gray-400 h-200">2 блок 410x200</div>
    //       {/* Третий блок во втором блоке */}
    //       <div className="bg-gray-400 h-200">3 блок 410x200</div>
    //     </div>

    //     <div className="col-span-3 row-start-2 grid grid-cols-2 gap-4">
    //     <div className="bg-gray-600 h-200">1 блок 200x200</div>
    //     <div className="bg-gray-600 h-200">2 блок 200x200</div>
    //   </div>
    //   </div>

    //   {/* Третий блок */}
    //   <div className="col-span-1 bg-gray-400 p-4">
    //     <div className="grid grid-rows-2 gap-4">
    //       {/* Первый блок в третьем блоке */}
    //       <div className="bg-gray-500">1 блок 250x200</div>
    //       {/* Второй блок в третьем блоке */}
    //       <div className="bg-gray-500">2 блок 250x200</div>
    //     </div>
    //   </div>

    //   {/* Два блока снизу */}

    // </div>

    <>
      <div>
        <div className="flex gap-[10px] h-[410px]">
          <div className="bg-white w-[410px]">1</div>
          <div className="w-[410px]">
            <div className="bg-white h-[200px]">2</div>
            <div className="flex">
              <div>3</div>
              <div>4</div>
            </div>
          </div>
          <div className="bg-white w-[250px]">5</div>
        </div>
      </div>
    </>
  );
};

export default GiftBannerBottom;
