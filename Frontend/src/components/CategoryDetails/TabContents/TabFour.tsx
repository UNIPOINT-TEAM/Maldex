import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
/*@ts-expect-error: This */
const TabFour = ({ prints }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      {prints?.length > 0 &&
        prints?.map(
          (item, i) =>
            item["@name"] == "Метод нанесения" && (
              <Link to={"/applying-type"} key={i}>
                <Button
                  placeholder={<button />}
                  className="bg-transparent text-greenPrimary p-3 px-4 shadow-none hover:shadow-none border font-normal rounded-full border-greenPrimary"
                >
                  <span className="text-fs_7 tracking-wider">
                    {item["#text"]}
                  </span>
                </Button>
              </Link>
            )
        )}
    </div>
  );
};

export default TabFour;
