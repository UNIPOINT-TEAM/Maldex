import img_tag from "../../assets/images/tagbanner.png";

function TagBanner() {
  return (
    <div>
      <div className="bg-greenPrimary">
        <div className="flex justify-center items-center gap-[57px]">
          <div>
            <img src={img_tag} alt="" />
          </div>
          <div>
            <div className="text-white text-[28px] w-[300px] font-[500] mb-[76.5px]">
              <p>Что делает подарок maldex особенным?Естественно - Вы!</p>
            </div>
            <div>
              <button className="bg-white p-2 rounded-lg">
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
