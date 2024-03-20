<<<<<<< HEAD
<<<<<<< HEAD
// import whiteDeliveryIcon from "../../assets/CompanyIcons/free-icon-fast-delivery-3106892 1.svg";
// import whiteDocIcon from "../../assets/CompanyIcons/free-icon-community-manager-5759296 1.svg";
import OnasiniEmsin from "../../assets/CompanyIcons/OnasiniEmsin.svg";
import OnasiniEmsinMob from "../../assets/CompanyIcons/OnasiniEmsinMob.svg";
// import vectorOne from "../../assets/linear/longarrow-b.svg";
// import vectorTow from "../../assets/linear/longarrow-t.svg";
// import vectorTopMob from "../../assets/linear/arrow-mobile-top.svg";
// import vectorBotMob from "../../assets/linear/arrow-mobile-bottom.svg";
=======
import check from "../../assets/CompanyIcons/check.png";
import gift from "../../assets/CompanyIcons/gift-icon.png";
import map from "../../assets/CompanyIcons/map-pin 1.png";
import set from "../../assets/CompanyIcons/sliders 1.png";
import arrowb from "../../assets/linear/longarrow-b.svg";
import arrowt from "../../assets/linear/longarrow-t.svg";
>>>>>>> ddec433 (add page 404)
=======
import whiteDeliveryIcon from "../../assets/CompanyIcons/check.png";
import whiteDocIcon from "../../assets/CompanyIcons/gift-icon.png";
import taskList from "../../assets/CompanyIcons/map-pin 1.png";
import vectorOne from "../../assets/linear/longarrow-b.svg";
import vectorTow from "../../assets/linear/longarrow-t.svg";
>>>>>>> 0facdc4 (restart branch 2)

function Steps() {
  return (
    <div>
      <div className="container_xxl">
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="OrderInstruction items-center flex flex-col gap-8 ">
          <div className="flex font-Helvetica-Neue font-medium text-[22px] lg:text-[32px] gap-1">
            <p className=" text-[#0000B0] ">С Maldex просто как</p>
            <p className=" text-[#E94B67] ">раз</p>
            <p className=" text-[#F7CE46] ">два</p>
            <p className=" text-[#52B5A1] ">три</p>
          </div>
=======
      <div className="OrderInstruction flex flex-col gap-8 ">
      <div className="flex fontBlod text-3xl gap-1">
        <p className=" text-[#0000B0]">С Maldex просто как</p>
        <p className=" text-[#E94B67]">раз</p>
        <p className=" text-[#F7CE46]">два</p>
        <p className=" text-[#0000B0]">три</p>
      </div>
>>>>>>> 0facdc4 (restart branch 2)

          {/* <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start  gap-28 mx-10 lg:mx-0 lg:ml-0 my-20 fontRoman relative">
            <div className="flex items-center">
              <img
                src={vectorOne}
                alt=""
                className="lg:absolute -bottom-14 left-[150px] hidden lg:block"
              />
              <img
                src={vectorTow}
                alt=""
                className="lg:absolute -top-14 right-[242px] hidden lg:block"
              />
              <img
                src={vectorBotMob}
                alt=""
                className="absolute bottom-28 left-[50px] lg:hidden block"
              />
              <img
                src={vectorTopMob}
                alt=""
                className="absolute top-60 right-[70px] lg:hidden block"
              />
            </div>
            <div className="flex justify-start items-center gap-6 lg:mr-0 mr-0">
              <div className="flex justify-center items-center w-24 h-24 bg-[#E94B67] rounded-xl">
                <img src={taskList} alt="" />
              </div>
              <div className="flex flex-col justify-center items-start ">
                <p className=" fontMedium text-base text-[#E94B67]">
                  Оставьте заявку <br /> по телефону
                </p>
                <p className="text-base fontMedium">8 (800) 777-59-19</p>
                <span className="text-sm">либо оформите заказ на сайте</span>
              </div>
            </div>

            <div className="flex justify-start lg:flex-row flex-row-reverse items-center gap-6">
              <div className="flex justify-center items-center w-24 h-24 bg-[#F7CE46] rounded-xl">
                <img src={whiteDocIcon} alt="" />
              </div>
              <div className="">
                <p className="text-base lg:text-start text-right  text-[#F7CE46] ">
                  Подтвердите заказ <br /> у менеджера
                </p>
              </div>
            </div>

<<<<<<< HEAD
            <div className="flex justify-start items-center gap-6 ">
              <div className="flex justify-center items-center w-24 h-24 bg-[#52B5A1] rounded-xl">
                <img src={whiteDeliveryIcon} alt="" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <p className=" fontMedium text-base text-[#52B5A1]">
                  Получите товар <br /> курьерской доставкой
                </p>
                <span className=" text-sm">
                  или в нашем офисе: <br /> Варшавское шоссе 35
                </span>
              </div>
            </div>
          </div> */}

          <div className="mb-16">
            <img src={OnasiniEmsin} alt=""  className="hidden lg:block"/>
            <img src={OnasiniEmsinMob} alt="" className="lg:hidden block"/>
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
>>>>>>> ddec433 (add page 404)
          </div>
        </div>
=======
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
>>>>>>> 0facdc4 (restart branch 2)
      </div>
    </div>
  );
}

export default Steps;
