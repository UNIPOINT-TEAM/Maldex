import img_tag from "../../assets/images/tagbanner.png";

function TagBanner() {
  return (
<<<<<<< HEAD
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
=======
    <div className="container_xxl">
      <div className="bg-greenPrimary py-5 mx-3">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-[57px]">
          <div className="px-[81px] lg:px-0">
            <img src={img_tag} alt="" />
          </div>
          <div className="text-center lg:text-start">
            <div className="text-white text-[16px] lg:text-[28px] px-[81px] lg:px-0 lg:w-[300px] font-[500] mb-5 lg:mb-[76.5px]">
              <p>Что делает подарок maldex особенным? Естественно - Вы!</p>
            </div>
            <div className="px-[80px] lg:px-0">
              <button className="bg-white p-2 text-[12px]  rounded-lg uppercase font-bold">
>>>>>>> 0facdc4 (restart branch 2)
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
