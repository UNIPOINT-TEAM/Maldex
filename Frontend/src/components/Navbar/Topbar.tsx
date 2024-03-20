import { Link, useLocation } from "react-router-dom";
import MaldexLogo from "../../assets/images/Maldex-logo.png";
import { TopbarLink } from "../../mock/data";
import CardModal from "../Card/Card";

const Topbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="container_xxl">
            <nav className="border-0  lg:border-b border-lightSecondary px-3 ">
                <div className="py-4 container_xxl flex justify-between items-center">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link to="/">
                            <img
                                src={MaldexLogo}
                                alt="maldex-logo"
                                className="mr-5 w-[100px] lg:w-auto"
                            />
                        </Link>

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
            {currentPath === "/admin" ? (
              <div>
                <ul className="hidden items-center md:flex gap-2 pr-2">
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
                  <Link to="/admin">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9 9.4375C9.77876 9.4375 10.54 9.20657 11.1876 8.77391C11.8351 8.34126 12.3398 7.7263 12.6378 7.00682C12.9358 6.28733 13.0138 5.49563 12.8618 4.73183C12.7099 3.96803 12.3349 3.26644 11.7842 2.71577C11.2336 2.1651 10.532 1.79009 9.76817 1.63816C9.00437 1.48623 8.21267 1.56421 7.49318 1.86223C6.7737 2.16025 6.15875 2.66493 5.72609 3.31244C5.29343 3.95996 5.0625 4.72124 5.0625 5.5C5.06369 6.54393 5.47892 7.54475 6.21708 8.28292C6.95525 9.02109 7.95608 9.43631 9 9.4375ZM9 2.6875C9.55626 2.6875 10.1 2.85245 10.5625 3.16149C11.0251 3.47053 11.3855 3.90979 11.5984 4.4237C11.8113 4.93762 11.867 5.50312 11.7585 6.04869C11.6499 6.59426 11.3821 7.0954 10.9887 7.48874C10.5954 7.88207 10.0943 8.14994 9.54869 8.25846C9.00312 8.36698 8.43762 8.31128 7.9237 8.09841C7.40979 7.88554 6.97053 7.52506 6.66149 7.06254C6.35245 6.60003 6.1875 6.05626 6.1875 5.5C6.18839 4.75435 6.485 4.0395 7.01225 3.51225C7.5395 2.985 8.25435 2.68839 9 2.6875Z"
                          fill="black"
                        />
                        <path
                          d="M11.6762 10H6.32385C5.17753 10.0013 4.07857 10.4248 3.268 11.1774C2.45743 11.9301 2.00142 12.9506 2 14.015V16.5C2 16.6326 2.05673 16.7598 2.15771 16.8536C2.25869 16.9473 2.39565 17 2.53846 17H15.4615C15.6043 17 15.7413 16.9473 15.8423 16.8536C15.9433 16.7598 16 16.6326 16 16.5V14.015C15.9986 12.9506 15.5426 11.9301 14.732 11.1774C13.9214 10.4248 12.8225 10.0013 11.6762 10ZM14.9231 16H3.07692V14.015C3.07792 13.2157 3.42033 12.4493 4.02903 11.8841C4.63773 11.3189 5.46301 11.0009 6.32385 11H11.6762C12.537 11.0009 13.3623 11.3189 13.971 11.8841C14.5797 12.4493 14.9221 13.2157 14.9231 14.015V16Z"
                          fill="black"
                        />
                      </svg>
                    </li>
                  </Link>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.5219 17.3413C10.2385 17.4413 9.77188 17.4413 9.48854 17.3413C7.07188 16.5163 1.67188 13.0747 1.67188 7.24134C1.67188 4.66634 3.74688 2.58301 6.30521 2.58301C7.82187 2.58301 9.16354 3.31634 10.0052 4.44967C10.8469 3.31634 12.1969 2.58301 13.7052 2.58301C16.2635 2.58301 18.3385 4.66634 18.3385 7.24134C18.3385 13.0747 12.9385 16.5163 10.5219 17.3413Z"
                        fill="#EC1026"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul className="hidden items-center md:flex">
                  {TopbarLink.Topbar_r.map((item) => (
                    <li>
                      <Link
                        to={item.link}
                        className="text-darkPrimary font-helvetica-neue-bold-condensed text-fs_8 tracking-wider font-medium hover:text-redPrimary px-2"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

                        <CardModal />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Topbar;
