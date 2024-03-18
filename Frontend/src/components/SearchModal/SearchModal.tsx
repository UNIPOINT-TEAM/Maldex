import { useEffect, useState } from "react";
import searchIcon from "../../assets/images/search.svg";
import SearchCategory from "./SearchCategory";
import { Button } from "@material-tailwind/react";

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalVisible]);

  const handleSearch = () => {};
  return (
    <>
      <div className="flex items-center w-full rounded-xl bg-redPrimary h-[36px] relative">
        <input
          className="rounded-xl w-full h-full border-2 border-redPrimary px-3 text-darkPrimary focus:outline-none font-medium text-fs_9 lg:text-fs_7 tracking-wide"
          id="search"
          type="text"
          placeholder="Поиск (Например: термоноски)"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setModalVisible(true)}
          onBlur={() => setModalVisible(false)}
        />
        <span>
          <button
            className="text-white rounded-r-lg p-2 focus:outline-none w-auto lg:w-16  h-8 flex items-center justify-center"
            onClick={handleSearch}
          >
            <img src={searchIcon} alt="search-icon" />
          </button>
        </span>
        {modalVisible && (
          <>
            <div className="absolute left-0 max-w-[855px] w-full  bg-[#fff] top-[40px] z-[999] border border-darkSecondary rounded-lg p-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-fs_6 tracking-wide text-darkSecondary">
                  Кружка
                </h2>
                <h2 className="text-fs_6 tracking-wide text-redPrimary">
                  Термокружка
                </h2>
              </div>
              <div className="w-full h-[1px] bg-lightSecondary my-6"></div>
              <div className="text-fs_6 tracking-wide ">
                <h3>Категории</h3>
                <SearchCategory />
              </div>
              <Button
                className="bg-redPrimary shadow-none hover:shadow-none text-fs_8 text-[#fff]"
                placeholder={<button />}
              >
                все результаты поиска
              </Button>
            </div>
            <div className="bg-[#00000058] w-full h-full top-[130px]  left-0 z-[9] fixed"></div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchModal;
