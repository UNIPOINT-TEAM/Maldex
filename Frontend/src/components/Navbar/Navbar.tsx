import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import mobile from "../../assets/icons/mobile.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import filtr from "../../assets/icons/filtr.png";

const Navbar = () => {
  return (
    <header className="">
      <nav className="   border-b border-gray-300">
        {/* Logo and Contact Info */}
        <div className="container_xxl py-4 px-10 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} className="mr-5" />

            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <img src={mobile} className="mr-2" />
                <span className="text-darkPrimary text-fs_8 tracking-wider font-bold ">
                  8-800-333-6784
                </span>
              </div>

              <div className="flex items-center">
                <img src={mail} className="mr-2" />
                <span className="text-darkPrimary text-fs_8 tracking-wider font-bold">
                  info@madex.ru
                </span>
              </div>

              <div className="flex items-center">
                <img src={location} className="mr-2" />
                <span className="text-darkPrimary text-fs_8 tracking-wider font-bold">
                  Москва
                </span>
              </div>
            </div>
          </div>

          {/* City and Minimum Order Info */}
          <div className="text-darkSecondary hidden md:block">
            <span className="ml-4">Минимальный тираж от 30 шт.</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-darkPrimary text-fs_8 tracking-wider font-bold hover:text-redPrimary px-2"
            >
              Доставка
            </a>
            <a
              href="#"
              className="text-darkPrimary text-fs_8 tracking-wider font-bold hover:text-redPrimary px-2"
            >
              Оплата
            </a>
            <a
              href="#"
              className="text-darkPrimary text-fs_8 tracking-wider font-bold hover:text-redPrimary px-2"
            >
              Контакты
            </a>

            {/* Shopping Cart */}
            <div className=" ml-4 flex items-center bg-white w-[118px] h-[36px] rounded-full">
              <span className=" bg-redPrimary text-white text-fs_8 h-[36px] w-[38px] rounded-full text-center ">
                <div className="py-2">3</div>
              </span>
              <span className="text-darkPrimary text-fs_8 font-bold ml-1">14 619,00 ₽</span>
            </div>
          </div>
        </div>
      </nav>

      <nav className="container_xxl ">
        <div className="flex justify-between items-center py-2  gap-14 mx-10">
          <div className=" flex justify-around gap-5 ">
            <button className="px-3 py-1 bg-redPrimary text-white focus:outline-none rounded-lg">
              ☰ Каталог
            </button>
            <button className="px-2 py-0 text-darkSecondary focus:outline-none border border-gray-300 rounded-lg">
              <img src={filtr} alt="" />
            </button>
          </div>

          <div className="inline-flex w-[900px]">
            <input
              className="rounded-l-lg  border-[2px] border-redPrimary py-1 px-2 w-[100%]  text-darkSecondary leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Поиск (Например: термоноски)"
            />
            <span>
              <button className="bg-redPrimary text-white rounded-r-lg p-2 focus:outline-none w-16   h-8 flex items-center justify-center">
                <img src={search} alt="" />
              </button>
            </span>
          </div>

          <div className="flex items-center justify-between text-[24px]  gap-5">
            <div>
              <span className="text-redPrimary font-semibold underline mr-2">
                new
              </span>
              <sup className="text-redPrimary font-bold text-fs_7">243</sup>
            </div>
            <div>
              <span className="text-greenPrimary font-semibold underline mr-2">
                hits
              </span>
              <sup className="text-greenPrimary font-bold text-fs_7">243</sup>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
