import check from "../../assets/CompanyIcons/check.png";
import gift from "../../assets/CompanyIcons/gift-icon.png";
import map from "../../assets/CompanyIcons/map-pin 1.png";
import set from "../../assets/CompanyIcons/sliders 1.png";
import arrowb from "../../assets/linear/longarrow-b.svg";
import arrowt from "../../assets/linear/longarrow-t.svg";

function Steps() {
  return (
    <div>
      <div className="container_xxl">
        <div className="flex justify-around items-center p-28 gap-[120px] hidden lg:flex">
          <div className="flex gap-6 items-center">
            <div className="bg-greenPrimary p-2 rounded-[10px]">
              <img src={gift} alt="" />
            </div>
            <div className="w-[190px]">
              <p>Выбери подарок!</p>
            </div>
            <div className="absolute mt-[120px] ml-6">
              <img src={arrowb} alt="" />
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="bg-greenPrimary p-2 rounded-[10px]">
              <img src={set} alt="" />
            </div>
            <div className="absolute mb-[130px] ml-6">
              <img src={arrowt} alt="" />
            </div>
            <div className="w-[190px]">
              <p>
                Добавьте дополнительные нестандартные элементы упаковки,
                фирменную наклейку или карточку-вкладыш
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="bg-greenPrimary p-2 rounded-[10px]">
              <img src={map} alt="" />
            </div>
            <div className="absolute mt-[120px] ml-6">
              <img src={arrowb} alt="" />
            </div>
            <div className="w-[190px]">
              <p>Отправьте нам адреса получателей</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="bg-greenPrimary p-2 rounded-[10px]">
              <img src={check} alt="" />
            </div>

            <div className="w-[190px]">
              <p>Мы позаботимся об остальном!</p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex text-[10px] flex-col  my-7 lg:hidden">
          <div className="flex">
            <div className="flex   items-center">
              <div className="bg-greenPrimary  p-2 rounded-[10px]">
                <img src={gift} alt="" />
              </div>
              <div className="">
                <p>Выбери подарок!</p>
              </div>
              {/* <div className="absolute mt-[120px] ml-6">
                <img src={arrowb} alt="" />
              </div> */}
            </div>
            <div className="flex  items-center">
             <div className="bg-greenPrimary  p-2 rounded-[10px]">
                <img src={set} alt=""  className=""/>
              </div>
              {/* <div className="absolute mb-[130px] ml-6">
                <img src={arrowt} alt="" />
              </div> */}
              <div className="">
                <p>
                  Добавьте дополнительные нестандартные элементы упаковки,
                  фирменную наклейку или карточку-вкладыш
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex gap-6 items-center">
              <div className="bg-greenPrimary p-2 rounded-[10px]">
                <img src={map} alt="" />
              </div>
              <div className="absolute mt-[120px] ml-6">
                <img src={arrowb} alt="" />
              </div>
              <div className="w-">
                <p>Отправьте нам адреса получателей</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="bg-greenPrimary p-2 rounded-[10px]">
                <img src={check} alt="" />
              </div>

              <div className="">
                <p>Мы позаботимся об остальном!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
