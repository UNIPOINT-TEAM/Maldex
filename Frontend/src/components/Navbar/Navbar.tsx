import logo from "../../assets/images/logo.png";
import mobile from "../../assets/icons/mobile.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";

const Navbar = () => {
  return (
    <>
      <header className="container_xxl ">
        <nav className="  py-4 flex justify-around items-center bg-slate-100 border-b border-gray-300">
          {/* Logo and Phone Number */}
          <div className="flex items-center">
            <img src={logo} className="  mr-5" />

            <div className="flex items-center gap-5">
              <div className="flex">
                <img src={mobile} alt="mobile" className="mr-2" />
                <span className="text-darkPrimary text-base ">
                  8-800-333-6784
                </span>
              </div>

              <div className="flex">
                <img src={mail} alt="mail" className="mr-2" />
                <span className="text-darkPrimary text-base ">
                  info@madex.ru
                </span>
              </div>

              <div className="flex">
                <img src={location} alt="location" className="mr-2" />
                <span className="text-darkPrimary text-base">Москва</span>
              </div>
            </div>
          </div>

          {/* City and Minimum Order Info */}
          <div className="text-darkSecondary hidden md:block ">
            <span className="ml-4">Минимальный тираж от 30 шт.</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <a href="#" className="text-darkPrimary hover:text-redPrimary px-2">
              Доставка
            </a>
            <a href="#" className="text-darkPrimary hover:text-redPrimary px-2">
              Оплата
            </a>
            <a href="#" className="text-darkPrimary hover:text-redPrimary px-2">
              Контакты
            </a>

            {/* Shopping Cart */}
            <div className="ml-4 flex items-center">
              <span className="text-redPrimary text-base px-2">3</span>
              <span className="text-darkPrimary text-base">14 619,00 Р</span>
            </div>
          </div>
        </nav>

        <nav className="   flex justify-around items-center ">
          {/* <div className="bg-white flex justify-around  "> */}
          <button className="px-3 py-1 bg-redPrimary text-white focus:outline-none rounded-lg">
            {/* Assuming you use Heroicons for icons */}
            <span className="">☰ Каталог</span>
          </button>
          <button className="px-2 py-1 text-darkSecondary focus:outline-none border border-gray-300 rounded-lg">
            {/* Assuming you use Heroicons for icons */}
            <span className="">☰ </span>
          </button>

          <div className="flex items-center">
            <input
              className="rounded-l-full border-[10px] border-redPrimary py-1 px-2  w-80 text-darkSecondary leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Поиск (Например: термоноски)"
            />
            <div className="p-2">
              <button className="bg-redPrimary text-white rounded-e-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center">
                {/* <SearchIcon className="h-5 w-5" /> */}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm px-2 space-x-4">
            <span className="text-redPrimary font-semibold">new</span>
            <span className="text-gray-500">243</span>
            <span className="text-redPrimary font-semibold">hits</span>
            <span className="text-gray-500">237</span>
          </div>

          {/* </div>
          
          */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
