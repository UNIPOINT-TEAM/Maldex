import Marquee from "react-fast-marquee";
import runicon from "../../assets/icons/runningtext.svg";

const RunningText = () => {
  return (
    <div className=" bg-greenPrimary py-4">
      <Marquee>
        <span className="text-white text-left text-[32px] font-[800] tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" />
        <span className="text-white text-left text-[32px] font-[800] tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" />
        <span className="text-white text-left text-[32px] font-[800] tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" />
        <span className="text-white text-left text-[32px] font-[800] tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" />
        <span className="text-white text-left text-[32px] font-[800] tracking-wide uppercase m-5">
          Эксклюзив на Maldex ➔
        </span>
        <img src={runicon} alt="" />
      </Marquee>
    </div>
  );
};

export default RunningText;
