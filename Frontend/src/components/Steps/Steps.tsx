// import whiteDeliveryIcon from "../../assets/CompanyIcons/free-icon-fast-delivery-3106892 1.svg";
// import whiteDocIcon from "../../assets/CompanyIcons/free-icon-community-manager-5759296 1.svg";
import OnasiniEmsin from "../../assets/CompanyIcons/OnasiniEmsin.svg";
import OnasiniEmsinMob from "../../assets/CompanyIcons/OnasiniEmsinMob.svg";
// import vectorOne from "../../assets/linear/longarrow-b.svg";
// import vectorTow from "../../assets/linear/longarrow-t.svg";
// import vectorTopMob from "../../assets/linear/arrow-mobile-top.svg";
// import vectorBotMob from "../../assets/linear/arrow-mobile-bottom.svg";

function Steps() {
  return (
    <div>
      <div className="container_xxl">
        <div className="OrderInstruction items-center flex flex-col gap-8 ">
          <div className="flex font-Helvetica-Neue font-medium text-[22px] lg:text-[32px] gap-1">
            <p className=" text-[#0000B0] ">С Maldex просто как</p>
            <p className=" text-[#E94B67] ">раз</p>
            <p className=" text-[#F7CE46] ">два</p>
            <p className=" text-[#52B5A1] ">три</p>
          </div>

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
          </div>
        </div>
      </div>
    </div>

  );
}

export default Steps;
