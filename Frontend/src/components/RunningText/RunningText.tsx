import Marquee from "react-fast-marquee";
import runicon from "../../assets/icons/runningtext.svg"

const RunningText = () => {
  return (
    <div className="container_xxl bg-greenPrimary py-4">
<Marquee>
            <span>Эксклюзив на Maldex ➔</span>
            <img src={runicon} alt="" />
            <span>Эксклюзив на Maldex ➔</span>
            <img src={runicon} alt="" />
            <span>Эксклюзив на Maldex ➔</span>
            <img src={runicon} alt="" />
            <span>Эксклюзив на Maldex ➔</span>
            <img src={runicon} alt="" />
</Marquee>
    </div>
  );
};

export default RunningText;
