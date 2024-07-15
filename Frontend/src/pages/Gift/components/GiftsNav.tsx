import React, { useEffect } from 'react';

interface GiftsNavProps {
  title: string;
  color: 'green' | 'red' | 'gray';
  subcategories: any[];
  activeCategoryId: number | null;
  setActiveCategoryId: (subId: number) => void;
}

const GiftsNav: React.FC<GiftsNavProps> = ({ title, color, subcategories, activeCategoryId, setActiveCategoryId }) => {
  let titleStyle = 'text-4xl tracking-wide';
  
  if (color === 'green') {
    titleStyle += ' font-medium text-[30px] lg:text-[40px] border-b-2 lg:border-0 border-green-primary text-green-primary';
  } else if (color === 'red') {
    titleStyle += ' font-medium text-[30px] lg:text-[40px] text-red-primary';
  } else if (color === 'gray') {
    titleStyle += ' font-medium text-base lg:text-[28px] text-darkSecondary';
  }

  useEffect(() => {
    if (subcategories.length > 0 && activeCategoryId === null) {
      setActiveCategoryId(subcategories[0].id);
    }
  }, [subcategories, activeCategoryId, setActiveCategoryId]);

  return (
    <div className="mb-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className={titleStyle}>{title}</h2>
      </div>
      <div className="border border-lightSecondary rounded-xl uppercase text-darkSecondary font-semibold tracking-wider">
        <div className="flex justify-between items-center px-3 lg:px-7 py-0">
          <div className="overflow-x-auto product-nav">
            <ul className="flex gap-5 whitespace-nowrap">
              {subcategories.map((sub) => (
                <li
                  key={sub.id}
                  className={`cursor-pointer font-medium text-[10px] lg:text-fs_8 py-4 border-b-2 ${
                    activeCategoryId === sub.id
                      ? 'border-redPrimary text-redPrimary'
                      : 'border-transparent hover:text-redPrimary'
                  }`}
                  onClick={() => setActiveCategoryId(sub.id)}
                >
                  {sub.name}
                </li>
              ))}
            </ul>
          </div>
          <button className="uppercase text-[10px] font-bold tracking-wide h-7 px-3 border border-red-primary rounded-[8px] text-red-primary hidden ss:block">
            Все топ-товары
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftsNav;
