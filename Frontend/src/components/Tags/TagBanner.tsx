import img_tag from "../../assets/images/tagbanner.png";

function TagBanner() {
  return (
    <div className="container_xxl">
      <div className="bg-greenPrimary h-full py-5 mx-3">
        <div className="grid grid-cols-2 place-items-center justify-center h-full  ">
          <div className=" w-full flex lg:pe-10 md:justify-end col-span-1">
            <img
              src={img_tag}
              className="w-[180px] md:w-[430px] md:h-[420px] h-[180px]"
              alt=""
            />
          </div>
          <div className="flex flex-col py-5 lg:py-14  w-full text-[#fff] col-span-1 justify-between items-start h-full lg:text-start">
            <h2 className="leading-tight text-base lg:text-[28px] ">
              Что делает подарок maldex особенным? <br /> Естественно - Вы!
            </h2>
            <p className="text-fs_6 hidden lg:block ">
              Покажите, насколько вы заботитесь, <br /> добавив в избранное
              предметы, <br />
              рассказывающие уникальную историю.
            </p>

            <button className="bg-transparent tracking-wide h-[43px] border border-[#fff] text-[#fff] px-2 text-[12px] rounded-lg  lg:uppercase font-medium lg:font-bold">
              Cоберите свой набор
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagBanner;
