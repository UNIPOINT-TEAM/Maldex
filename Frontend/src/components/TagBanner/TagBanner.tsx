import img_tag from "../../assets/images/tagbanner.png";

function TagBanner() {
  return (
    <div>
      <div className="bg-greenPrimary">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-[57px]">
          <div>
            <img src={img_tag} alt="" />
          </div>
          <div className="text-center lg:text-start">
            <div className="text-white text-[28px]  lg:w-[300px] font-[500] mb-5 lg:mb-[76.5px]">
              <p>Что делает подарок maldex особенным? Естественно - Вы!</p>
            </div>
            <div>
              <button className="bg-white p-2 rounded-lg uppercase font-bold">
                соберите свой набор
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagBanner;
