import Pimg1 from "../../assets/pachat/Pimg1.png";
import Pimg2 from "../../assets/pachat/Pimg2.png";
import Pimg3 from "../../assets/pachat/Pimg3.png";
import Pimg4 from "../../assets/pachat/Pimg4.png";
import Pimg5 from "../../assets/pachat/Pimg5.png";
import Pimg6 from "../../assets/pachat/Pimg6.png";
import Pimg7 from "../../assets/pachat/Pimg7.png";
import Pimg8 from "../../assets/pachat/Pimg8.png";
import Pimg9 from "../../assets/pachat/Pimg9.png";
import Pimg10 from "../../assets/pachat/Pimg10.png";
import Pimg11 from "../../assets/pachat/Pimg11.png";
import Pimg12 from "../../assets/pachat/Pimg12.png";
import Pimg13 from "../../assets/pachat/Pimg13.png";
import Pimg14 from "../../assets/pachat/Pimg14.png";
import { Link } from "react-router-dom";

export default function Printing() {
  return (
    // <div className="ImagesProduct flex flex-col justify-center items-start gap-5 ">
    //   <div className="w-full flex flex-col items-center lg:flex-row gap-5">
    //     <div className="flex flex-col  justify-center items-start gap-6">
    // <div className="flex flex-col justify-center items-start gap-6">
    //   <p className="text-[#E94B67] text-4xl fontMedium">
    //     Сувенирная продукция
    //   </p>
    //   <span className="text-lg fontRoman w-[450px]">
    //     Каталог «от ручки до ракеты» «от промо до VIP» Более
    //     <span className="fontMedium"> 1 000 000 </span>
    //     бизнес сувениров со всего мира
    //   </span>
    // </div>
    //       <img src={Pimg1} alt="" />
    //     </div>
    //     <div className="flex flex-col gap-5">
    //       <img src={Pimg2} alt="" />
    //       <div className="flex gap-5 ">
    //         <img
    //           src={Pimg3}
    //           alt=""

    //         />
    //         <img
    //           src={Pimg4}
    //           alt=""

    //         />
    //       </div>
    //     </div>
    //     <div className="">
    //       <img src={Pimg5} alt=""  className="h-full"/>
    //     </div>
    //   </div>
    //   <div className="w-full flex lg:flex-row flex-col gap-5">
    //     <img src={Pimg6} alt="" />
    //     <img src={Pimg7} alt="" />
    //     <img src={Pimg8} alt="" />
    //   </div>
    //   <div className="w-full flex flex-col lg:flex-row gap-5">
    //     <div className="flex lg:gap-5 gap-3">
    //       <img
    //         src={Pimg9}
    //         alt=""
    //         className="lg:w-[540px] w-[239px] lg:h-full h-[129px]"
    //       />
    //       <div className="flex flex-col gap-5">
    //         <img src={Pimg10} alt="" />
    //         <img src={Pimg14} alt="" />
    //       </div>
    //     </div>
    //     <div className="flex gap-5">
    //       <img
    //         src={Pimg11}
    //         alt=""
    //         className="lg:w-[340px] w-[239px] lg:h-full h-[129px]"
    //       />
    //       <div className="flex flex-col gap-5">
    //         <Link to="/">
    //           <img src={Pimg12} alt="" />
    //         </Link>
    //         <img src={Pimg13} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="flex flex-col gap-3">
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex flex-col justify-center items-start gap-6">
                <p className="text-[#E94B67] text-4xl fontMedium">
                  Сувенирная продукция
                </p>
                <span className="text-lg ">
                  Каталог «от ручки до ракеты» «от промо до VIP» Более
                  <span className="fontMedium"> 1 000 000 </span>
                  бизнес сувениров со всего мира
                </span>
              </div>
            </div>
            <div>
              <img src={Pimg1} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <img src={Pimg2} alt="" />
            </div>
            <div className="lg:flex gap-3 hidden">
              <img src={Pimg3} alt="" />
              <img src={Pimg4} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src={Pimg5} alt="" />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="flex gap-3">
            <div>
              <img src={Pimg6} alt="" />
            </div>
            <div>
              <img src={Pimg7} alt="" />
            </div>
          </div>
          <div>
            <img src={Pimg8} alt="" />
          </div>
        </div>
        <div className="flex items-center lg:flex-row flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div>
              <img src={Pimg9} alt="" />
            </div>
            <div className="flex  flex-col gap-2 lg:gap-3">
              <img src={Pimg10} alt="" />
              <img src={Pimg14} alt="" />
            </div>
          </div>
          <div className="flex gap-3 lg:flex-row flex-row-reverse">
            <div>
              <img src={Pimg11} alt="" />
            </div>
            <div className="flex  flex-col gap-2 lg:gap-3">
              <img src={Pimg12} alt="" />
              <img src={Pimg13} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
