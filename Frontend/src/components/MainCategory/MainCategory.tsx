import { useState, useRef } from "react";
import short from "../../assets/icons/short.svg";

function MainCategory() {
  const options = ["Option 1 , Option 1 , Option 1 , Option 1 , Option 1,"];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Создаем ссылку на элемент выпадающего списка

  const handleOpen = (index: number) => {
    setOpenIndex(index);
  };

  const handleClose = () => {
    // Закрываем список только если курсор ушел с кнопки и списк
    if (!dropdownRef.current?.contains(document.activeElement)) {
      setOpenIndex(null);
    }
  };

  return (
    <>
      <div className="container_xxl my-[110px]">
        <div className="px-10 grid grid-cols-5 justify-between">
          {options.map((option, index) => (
            <div key={index} className="text-left relative w-52">
              <button
                type="button"
                className="border-none p-0 text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                onMouseEnter={() => handleOpen(index)}
                onMouseLeave={handleClose}
              >
                <img src={short} alt="" />
              </button>
              {/* Выпадающий список */}
              {openIndex === index && (
                <div
                  ref={dropdownRef}
                  className="z-10 absolute -top-[10px]  mt-0 ml-0 w-52  shadow-lg bg-[#fff] ring-1 ring-black ring-opacity-5"
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={handleClose}
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                    >
                      <img src={short} alt="" />
                      <h3>Одежда</h3>
                      <ul>
                        {options.map((opt, idx) => (
                          <li
                            key={idx}
                            // className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                          >
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <h1>Одежда</h1>
              <p>Футболки</p>
              <p>Толстовки</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainCategory;
