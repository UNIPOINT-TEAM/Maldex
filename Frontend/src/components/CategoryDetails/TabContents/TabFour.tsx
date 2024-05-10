import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
/*@ts-expect-error: This */
const TabFour = ({ prints }) => {
  console.log(prints);
  return (
    <div className="flex flex-col items-start gap-2">
      {prints &&
        /*@ts-expect-error: This */
        prints.map((item, i) => (
          <Link to={"/applying-type"} key={i}>
            <Button
              placeholder={<button />}
              className="bg-transparent text-greenPrimary p-3 px-4 shadow-none hover:shadow-none border font-normal rounded-full border-greenPrimary"
            >
              <span className="text-fs_7 tracking-wider">
                {item?.name} - {item?.description}
              </span>
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default TabFour;
