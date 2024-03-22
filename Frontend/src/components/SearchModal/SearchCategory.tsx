import { Link } from "react-router-dom";
import category from "../../assets/images/machine.png";

const SearchCategory = () => {
  return (
    <div className="gift-category container_xxl py-3 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-6 gap-6 ">
      <div className="w-full flex items-center justify-center">
        <Link
          to={"/catalog"}
          className="flex items-center flex-col justify-center"
        >
          <div className="border w-[130px] h-[130px] border-lightPrimary p-3 rounded-xl flex items-center  justify-center">
            <img
              src={category}
              alt={""}
              className="w-[60px] h-[60px] object-contain "
            />
          </div>
          <p className="text-center px-1 text-fs_8 font-medium">
            Кружки и стаканы
          </p>
        </Link>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          to={"/catalog"}
          className="flex items-center flex-col justify-center"
        >
          <div className="border w-[130px] h-[130px] border-lightPrimary p-3 rounded-xl flex items-center  justify-center">
            <img
              src={category}
              alt={""}
              className="w-[60px] h-[60px] object-contain "
            />
          </div>
          <p className="text-center px-1 text-fs_8 font-medium">
            Кружки и стаканы
          </p>
        </Link>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          to={"/catalog"}
          className="flex items-center flex-col justify-center"
        >
          <div className="border w-[130px] h-[130px] border-lightPrimary p-3 rounded-xl flex items-center  justify-center">
            <img
              src={category}
              alt={""}
              className="w-[60px] h-[60px] object-contain "
            />
          </div>
          <p className="text-center px-1 text-fs_8 font-medium">
            Кружки и стаканы
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SearchCategory;
