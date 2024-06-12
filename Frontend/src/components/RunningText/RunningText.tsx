import Marquee from "react-fast-marquee";
import runicon from "../../assets/icons/runningtext.svg";

const RunningText = () => {
  return (
    <div className=" bg-greenPrimary py-2 lg:py-2">
      <Marquee>
        <span className="text-white text-left text-[18px] lg:text-[32px] font-medium tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" className="h-6 lg:h-12"/>
        <span className="text-white text-left text-[18px] lg:text-[32px] font-medium tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" className="h-6 lg:h-12"/>
        <span className="text-white text-left text-[18px] lg:text-[32px] font-medium tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" className="h-6 lg:h-12"/>
        <span className="text-white text-left text-[18px] lg:text-[32px] font-medium tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" className="h-6 lg:h-12"/>
        <span className="text-white text-left text-[18px] lg:text-[32px] font-medium tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" className="h-6 lg:h-12"/>
      </Marquee>
    </div>
  );
};

export default RunningText;