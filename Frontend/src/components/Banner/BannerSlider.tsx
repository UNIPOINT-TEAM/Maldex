const BannerSlider = () => {
  return (
    <div className="w-full h-full bg-greenPrimary flex  p-[20px] text-white">
      <div className="w-[50%]">
        <div className="">
          <span className="border text-[11px] uppercase p-1 tracking-[1px] rounded-md">
            корпоративные подарки
          </span>
          <h2 className="text-[28px] m-0 font-extrabold tracking-[1.5px] mt-4">
            Бизнес сувениры <br /> для брендов{" "}
          </h2>
        </div>
        <div className="">
          <button className="border">Подробнее</button>
          <button className="border">Подробнее</button>
        </div>
      </div>
      <div className="w-[50%]"></div>
    </div>
  );
};

export default BannerSlider;
