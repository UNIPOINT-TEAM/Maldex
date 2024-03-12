import { Link } from "react-router-dom";
import MaldexLogo from "../../assets/images/Maldex-logo.png";
import { TopbarLink } from "../../mock/data";
import CardModal from "../Card/Card";

const Topbar = () => {
  return (
    <nav className="border-0 lg:border-b border-lightSecondary px-3 ">
      <div className="py-4 container_xxl flex justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            src={MaldexLogo}
            alt="maldex-logo"
            className="mr-5 w-[100px] lg:w-auto"
          />
          <ul className="flex items-center gap-1 lg:gap-5 ">
            {TopbarLink?.Topbar_l?.map((item, i) => (
              <li className={`${i == 2 && "hidden lg:block"}`}>
                <Link to={item.path} className="flex items-center">
                  <img src={item.icon} className="mr-2 w-[20px]" />
                  <span className="hidden text-darkPrimary text-fs_8 tracking-wider lg:block ">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-darkSecondary hidden md:block">
          <span className="ml-4 text-fs_8 tracking-wider">
            Минимальная сумма заказа от 30 тыс рублей
          </span>
        </div>
        <div className="flex items-center">
          <ul className="hidden items-center md:flex">
            {TopbarLink.Topbar_r.map((item) => (
              <li>
                <Link
                  to={item.path}
                  className="text-darkPrimary font-helvetica-neue-bold-condensed text-fs_8 tracking-wider font-medium hover:text-redPrimary px-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <CardModal />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
