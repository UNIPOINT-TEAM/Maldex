<<<<<<< HEAD
import whiteDeliveryIcon from "../../assets/CompanyIcons/check.png";
import whiteDocIcon from "../../assets/CompanyIcons/gift-icon.png";
import taskList from "../../assets/CompanyIcons/map-pin 1.png";
import vectorOne from "../../assets/linear/longarrow-b.svg";
import vectorTow from "../../assets/linear/longarrow-t.svg";
=======
import check from "../../assets/CompanyIcons/check.png";
import gift from "../../assets/CompanyIcons/gift-icon.png";
import map from "../../assets/CompanyIcons/map-pin 1.png";
import set from "../../assets/CompanyIcons/sliders 1.png";
import arrowb from "../../assets/linear/longarrow-b.svg";
import arrowt from "../../assets/linear/longarrow-t.svg";
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf

function Steps() {
  return (
    <div>
      <div className="container_xxl">
<<<<<<< HEAD
      <div className="OrderInstruction flex flex-col gap-8 ">
      <div className="flex fontBlod text-3xl gap-1">
        <p className=" text-[#0000B0]">С Maldex просто как</p>
        <p className=" text-[#E94B67]">раз</p>
        <p className=" text-[#F7CE46]">два</p>
        <p className=" text-[#0000B0]">три</p>
      </div>

      <div className="flex justify-center items-start gap-28 ml-24 my-20 fontRoman relative">
        <img src={vectorOne} alt="" className="absolute -bottom-14 left-[125px]" />
        <img src={vectorTow} alt="" className="absolute -top-14 right-[336px]" />
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center w-24 h-24 bg-[#E94B67] rounded-xl">
            <img src={taskList} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start ">
            <p className="w-32 fontMedium text-base text-[#E94B67]">
              Оставьте заявку по телефону
            </p>
            <p className="text-base fontMedium">8 (800) 777-59-19</p>
            <span className="text-sm">либо оформите заказ на сайте</span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center w-24 h-24 bg-[#F7CE46] rounded-xl">
            <img src={whiteDocIcon} alt="" />
          </div>
          <div className="">
            <p className="text-base  text-[#F7CE46] w-60">
              Подтвердите заказ у менеджера
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 -ml-8">
          <div className="flex justify-center items-center w-24 h-24 bg-[#52B5A1] rounded-xl">
            <img src={whiteDeliveryIcon} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="w-48 fontMedium text-base text-[#52B5A1]">
              Получите товар курьерской доставкой
            </p>
            <span className="w-48 text-sm">
              или в нашем офисе: Варшавское шоссе 35
            </span>
          </div>
        </div>
      </div>
    </div>
=======
        <div className="flex justify-around items-center p-28 gap-[120px]">
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
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
      </div>
    </div>
  );
}

export default Steps;
