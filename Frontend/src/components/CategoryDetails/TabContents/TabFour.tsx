import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const buttons = [
  "В-Шелкография на тек...",
  "DTF-Полноцвет с тран...",
  "DTG-Полноцвет по тек...",
  "D-Шелкография с тран...",
  "F1-Флекс",
  "F2-Флекс",
  "I-Вышивка",
];

const TabFour = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      {buttons.map((item, i) => (
        <Link to={"/applying-type"} key={i}>
          <Button
            placeholder={<button />}
            className="bg-transparent text-greenPrimary p-3 px-4 shadow-none hover:shadow-none border font-normal rounded-full border-greenPrimary"
          >
            <span className="text-fs_7 tracking-wider">{item}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default TabFour;
