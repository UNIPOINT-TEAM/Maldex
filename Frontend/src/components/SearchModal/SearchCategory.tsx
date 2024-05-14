import { Link } from "react-router-dom";
import category from "../../assets/images/machine.png";
import React from "react";

const SearchCategory: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Link to={"/catalog"} className="flex items-center flex-col justify-center">
      <div className="border w-[130px] h-[130px] border-lightPrimary p-3 rounded-xl flex items-center  justify-center">
        <img
          src={category}
          alt={"category-img"}
          className="w-[60px] h-[60px] object-contain "
        />
      </div>
      <p className="text-center px-1 text-fs_8 font-medium">{name}</p>
    </Link>
  );
};

export default SearchCategory;
