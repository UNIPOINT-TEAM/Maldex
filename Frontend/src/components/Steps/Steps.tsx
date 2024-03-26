import whiteDeliveryIcon from "../../assets/CompanyIcons/check.png";
import whiteDocIcon from "../../assets/CompanyIcons/gift-icon.png";
import taskList from "../../assets/CompanyIcons/map-pin 1.png";
import vectorOne from "../../assets/linear/longarrow-b.svg";
import vectorTow from "../../assets/linear/longarrow-t.svg";

function Steps() {
  return (
    <div>
      <div className="container_xxl">
      <div className="OrderInstruction flex flex-col gap-8 ">
      <div className="flex fontBlod text-3xl gap-1">
        <p className=" text-[#0000B0]">С Maldex просто как</p>
        <p className=" text-[#E94B67]">раз</p>
        <p className=" text-[#F7CE46]">два</p>
        <p className=" text-[#0000B0]">три</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-28 ml-24 my-20 fontRoman relative">
        <img src={vectorOne} alt="" className="lg:absolute -bottom-14 left-[115px] hidden lg:block" />
        <img src={vectorTow} alt="" className="lg:absolute -top-14 right-[326px] hidden lg:block" />
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
      </div>
    </div>
  );
}

export default Steps;
