import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import mobile from "../../assets/icons/mobile.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";

const Navbar = () => {
  return (
    <header className="container_xxl">
      <nav className="py-4 px-10 flex justify-between items-center  border-b border-gray-300">
        {/* Logo and Contact Info */}
        <div className="flex items-center">
          <img src={logo} className="mr-5" />

          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <img src={mobile} className="mr-2" />
              <span className="text-darkPrimary text-base">8-800-333-6784</span>
            </div>

            <div className="flex items-center">
              <img src={mail} className="mr-2" />
              <span className="text-darkPrimary text-base">info@madex.ru</span>
            </div>

            <div className="flex items-center">
              <img src={location} className="mr-2" />
              <span className="text-darkPrimary text-base">Москва</span>
            </div>
          </div>
        </div>

        {/* City and Minimum Order Info */}
        <div className="text-darkSecondary hidden md:block">
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

      <nav className="flex justify-between items-center py-2 mx-10 gap-14">
        <div className="flex justify-around gap-5">
          <button className="px-3 py-1 bg-redPrimary text-white focus:outline-none rounded-lg">
            ☰ Каталог
          </button>
          <button className="px-2 py-1 text-darkSecondary focus:outline-none border border-gray-300 rounded-lg">
            ☰
          </button>
        </div>

        <div className="inline-flex w-[900px]">
          <input
            className="rounded-l-full border-[2px] border-redPrimary py-1 px-2 w-[100%]  text-darkSecondary leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Поиск (Например: термоноски)"
          />
          <span>
            <button className="bg-redPrimary text-white rounded-r-full p-2 focus:outline-none w-16   h-8 flex items-center justify-center">
              <img src={search} alt="" />
            </button>
          </span>
        </div>

        <div className="flex items-center justify-between text-sm px-2 space-x-6">
          <span className="text-redPrimary font-semibold underline">
            new<sup>243</sup>
          </span>
          <span className="text-greenPrimary font-semibold underline">
            hits<sup>243</sup>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
