import onbesh from "../../assets/CompanyIcons/15.png";
import giftRed from "../../assets/CompanyIcons/giftRed.png";
import globus from "../../assets/CompanyIcons/globus.png";
import russia from "../../assets/CompanyIcons/russia.png";
import usa from "../../assets/CompanyIcons/usa.png";

import { whoWe, services, services_two } from "../../mock/data";

function WhoWe() {
  return (
    <>
      <div>
        <div>
          <span className="text-[#0000b0] text-[32px] leading-[64px] font-medium">
            Кто мы ?
          </span>
          <div className="px-0 lg:px-[70px]">
            <span className="text-[22px] leading-[64px] font-normal">
              Позвольте нам представить себя:
            </span>
            <div>
              <ul>
                {/* Используем map для вывода данных */}
                {whoWe?.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px] font-normal leading-5 my-5"
                  >
                    <span
                      style={{
                        color: item.bulletColor,
                        marginRight: "5px", // Расстояние между bullet и текстом
                      }}
                    >
                      &bull;
                    </span>
                    {item.text} <br />
                    <span className="pl-[11px]">{item.text2}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[#E94B67] text-[32px] leading-[64px] font-medium">
            Почему мы? Всё под 1 крышей!
          </span>
          <div className="lg:px-[70px] flex flex-col lg:flex-row lg:gap-[0px] justify-between ">
            <div className="flex lg:gap-28">
              <div className="">
                {services.map((service, index) => (
                  <div key={index} className="">
                    <img src={service.icon} alt="" />{" "}
                    {/* Выводим изображение */}
                    <div>
                      <h1 className="my-5 text-[22px] font-medium text-[#0000B0]">
                        {service.title}
                      </h1>
                      {/* Выводим заголовок */}
                      <ul>
                        {/* Используем map для вывода списка услуг */}
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-4">
                            <span
                              style={{ color: "#0000B0", marginRight: "5px" }}
                            >
                              &bull;
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" flex flex-col gap-5 ">
                {services_two.map((service, index) => (
                  <div key={index} className="">
                    <div>
                      <img src={service.icon} alt="" />
                      <div>
                        <h1
                          className={`my-5 text-[22px] font-medium text-[${service.color}]`}
                        >
                          {service.title}
                        </h1>
                        <ul>
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="mb-4">
                              <span className="flex">
                                <span
                                  style={{
                                    color: service.color,
                                    marginRight: "5px",
                                  }}
                                >
                                  &bull;
                                </span>
                                <div
                                  dangerouslySetInnerHTML={{ __html: item }}
                                />
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className=" flex flex-col gap-10">
                <div>
                  <img src={globus} alt="" />
                  <div>
                    <span className="text-[#F7CE46]">Брендинг</span>
                    <ul>
                      <li>
                        <span style={{ color: "#F7CE46", marginRight: "5px" }}>
                          &bull;
                        </span>{" "}
                        Более 1 000 000 наименований
                      </li>
                    </ul>
                    <div>
                      <div className="flex flex-wrap">
                        <div className="flex items-center gap-3 w-1/2 mb-3">
                          <img src={russia} alt="" />
                          <span> Россия</span>
                        </div>
                        <div className="flex items-center gap-3 w-1/2 mb-3">
                          <img src={usa} alt="" />
                          <span> Россия</span>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                          <img src={usa} alt="" />
                          <span> Россия</span>
                        </div>
                        <div className="flex items-center gap-3 w-1/2">
                          <img src={usa} alt="" />
                          <span> Россия</span>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-10">
                <div>
                  <div>
                    <img src={giftRed} alt="" />
                    <div>
                      <span className="text-[#E94B67]">
                        Дизайн макеты бесплатно
                      </span>
                      {/* <ul>
                        <li> &bull; Тампопечать</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <img src={onbesh} alt="" />
                    <span>лет на рынке</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWe;
