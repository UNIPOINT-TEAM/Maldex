
function ProductNav() {
  return (
    <div className="">
      <div className="border border-darkSecondary rounded-md text-fs_8 uppercase text-darkSecondary font-semibold tracking-wider">
        <div className="flex justify-between items-center px-7 py-0">
          <div className="overflow-auto">
            <ul className="flex gap-5 whitespace-nowrap">
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Одежда
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Сумки, портфели, рюкзаки
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Ручки
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Кухня и бар
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Гаджеты
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Новый год и рождество
              </li>
            </ul>
          </div>
          <div>
            <button className="uppercase font-semibold tracking-wide p-[6px] border border-redPrimary rounded-md text-redPrimary hidden ss:block">
              Все топ-товары
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNav;
