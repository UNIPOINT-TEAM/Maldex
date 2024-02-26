import React from "react";

function ProductNav() {
  return (
    <div>
      <div className="border border-darkSecondary rounded-md text-fs_8 uppercase text-darkSecondary font-extrabold tracking-wider">
        <div className="flex justify-between items-center px-7 py-0">
          <div className="">
            <ul className="flex gap-5">
              <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                Одежда
              </li>
              <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                Сумки, портфели, рюкзаки
              </li>
              <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                Ручки
              </li>
              <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                Кухня и бар
              </li>
              <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                Гаджеты
              </li>
              <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                Новый год и рождество
              </li>
            </ul>
          </div>
          <div>
            <button className="uppercase font-extrabold tracking-wider p-[6px] border border-redPrimary rounded-md text-redPrimary">
              Все проекты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNav;
