import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetchHook } from "../../hooks/UseFetch";

<<<<<<< HEAD
const MainCategory = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/product/categories/?is_available=true" });
  }, []);

  return (
    <>
      <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center">
        {response.map((category) => (
          <div
            key={category.id}
            className="w-1/6 h-[180px] py-5 relative content hover:bg-redPrimary"
          >
            <img
              className="w-[50px] object-cover mb-5"
              src={category.icon}
              alt=""
            />
            <h2 className="text-lg mb-2 font-medium">{category?.name}</h2>
            {category?.children && category?.children?.length > 0 && (
              <>
                <p className="text-fs_7 tracking-wide">
                  {category?.children[0]?.name}
                </p>
                <p className="text-fs_7 font-normal">
                  {category?.children[1]?.name}
                </p>
              </>
            )}
            <div className="absolute w-full py-3 min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
              <img
                className="w-[60px] object-cover mb-5 ps-2"
                src={category?.icon}
                alt="category-img"
              />
              <Link
                to={`catalog/?category_id=${category?.id}`}
                className="text-lg mb-2 font-medium px-2"
              >
                {category?.name}
              </Link>
              {/* @ts-expect-error: This */}
              {category?.children && category?.children.map((childCategory) => (
=======
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
>>>>>>> bf64a73 (navbar100)
                  <div
                    key={childCategory.id}
                    className="rounded px-2 hover:bg-greenPrimary hover:text-white py-1 "
                  >
<<<<<<< HEAD
                    <Link to={`catalog/?category_id=${childCategory.id}`}>
                      <p className="text-fs_7 font-normal">
                        {childCategory.name}
                      </p>
                    </Link>
=======
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
>>>>>>> bf64a73 (navbar100)
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCategory;
