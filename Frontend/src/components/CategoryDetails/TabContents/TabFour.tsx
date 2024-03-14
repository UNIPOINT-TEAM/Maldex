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
      {buttons.map((item) => (
        <Link to={"/applying-type"}>
          <Button
            placeholder={<button />}
            className="bg-transparent text-greenPrimary p-3 px-4 shadow-none hover:shadow-none border font-medium rounded-full border-greenPrimary"
          >
            <span className="text-fs_7 tracking-wide">{item}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default TabFour;
