<<<<<<< HEAD
import { useEffect, useState } from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { QuestForm } from "../../components";
import { useLocation } from "react-router-dom";
const data = [
  {
    label: "доставка",
    value: "delivery",
    desc: `Доставка `,
    desc1: `Компания «Maldex» бесплатно осуществит доставку заказа и образцов продукции: <br />
    <ul>
    <li> &bull; По Москве в пределах МКАД</li>
    <li> &bull; До Транспортной компании</li>
    </ul>
    
    `,
    desc2: `Самовывоз доступен в центральном офисе в Москве, по адресу: м. Нагатинская, <br /> Варшавское шоссе 35 стр 1, тел. 8-800-777-59-19`,
  },
  {
    label: "оплата",
    value: "payment",
    desc: `Оплата`,
    desc1: `Мы работаем с юридическими и физическими лицами  по безналичному и наличному расчету.<br /> 
    Минимальная сумма заказа составляет 30 000 рублей. <br />`,

    desc2: `При оформлении заказа менеджер ответит на вопросы, рассчитает стоимость, уточнит детали <br />
    заказа и выставит счет на оплату. Отчетные документы: акт выполненных работ, счет-фактуру, <br />
    договор мы подготовим и предоставим при отгрузке заказа.`,
  },
  {
    label: "контакты",
    value: "contacts",
    desc: "",
  },
];
function Delivery() {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState(hash.replace("#", ""));

  useEffect(() => {
    setActiveTab(hash.replace("#", ""));
  }, [hash]);
  const handleChangeTab = (value: string) => {
    setActiveTab(value);
    window.location.hash = "#" + value;
  };
=======
import React, { useState } from "react";
import { QuestForm } from "../../components";
import { YMaps, Map } from "react-yandex-maps";

function Delivery() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

>>>>>>> ddec433 (add page 404)
  return (
    <>
      <div>
        <div className="container_xxl">
<<<<<<< HEAD
          <div className="mx-3">
            <Tabs value={activeTab}>
              <TabsHeader
                placeholder={<div />}
                className="bg-transparent"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-4 border-redPrimary shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    placeholder={""}
                    key={value}
                    value={value}
                    onClick={() => handleChangeTab(value)}
                    className="text-[9px] px-0  lg:text-[28px] font-Helvetica-Neue z-0 mr-[15px] lg:mr-[73px] uppercase lg:lowercase w-auto"
                  >
                    <h2
                      className={`font-medium ${
                        activeTab === value
                          ? "text-redPrimary"
                          : "text-darkSecondary"
                      }`}
                    >
                      {label}
                    </h2>
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody className="" placeholder={""}>
                {data.map(({ value, desc, desc1, desc2 }) => (
                  <TabPanel className="px-0" key={value} value={value}>
                    {value === "contacts" ? (
                      <>
                        <div className="flex text-fs_6 text-darkPrimary flex-col lg:flex-row font-Helvetica-Neue">
                          <div className="lg:w-1/4">
                            <span className="font-normal">
                              <p className="font-bold">Наши контакты</p>
                              <p className="">Наш телефон:</p>
                              <p className="m-0 underline">8 (800) 777-59-19</p>
                              <p className="mb-4 underline">
                                8 (495) 760-83-28
                              </p>
                            </span>
                            <span className="font-normal">
                              <p>Email:</p>
                              <p className="mb-4 underline"> info@maldex.ru</p>
                            </span>
                            <span className="font-normal">
                              <p>Адрес:</p>
                              <p className="mb-4">
                                Москва, Варшавское шоссе, 35, стр.1
                              </p>
                            </span>
                          </div>
                          <div
                            className="lg:w-3/4"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <a
                              href="https://yandex.uz/maps/10330/bukhara/?utm_medium=mapframe&utm_source=maps"
                              style={{
                                color: "#eee",
                                fontSize: "12px",
                                position: "absolute",
                                top: "0px",
                              }}
                            >
                              Buxoro
                            </a>
                            <a
                              href="https://yandex.uz/maps/geo/771273395/?ll=64.439753%2C39.774226&utm_medium=mapframe&utm_source=maps&z=12.66"
                              style={{
                                color: "#eee",
                                fontSize: "12px",
                                position: "absolute",
                                top: "14px",
                              }}
                            >
                              Buxoro — Yandex Xarita
                            </a>
                            <iframe
                              src="https://yandex.uz/map-widget/v1/?ll=64.439753%2C39.774226&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzMzOTUSFE_Ku3piZWtpc3RvbiwgQnV4b3JvIgoN7NeAQhVmEh9C&z=12.66"
                              width="100%"
                              height="246"
                              frameBorder="1"
                              allowFullScreen={true}
                              style={{ position: "relative" }}
                            ></iframe>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-darkPrimary text-fs_6">
                        <p className="font-bold font-Helvetica-Neue  ">
                          {desc}
                        </p>
                        {/* @ts-ignore */}
                        <p className="font-Helvetica-Neue font-normal " dangerouslySetInnerHTML={{ __html: desc1 }} />
                        {/* @ts-ignore */}
                        <p className="font-Helvetica-Neue font-normal" dangerouslySetInnerHTML={{ __html: desc2 }} />
                      </div>
                    )}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>

          <QuestForm />
        </div>
=======
          <div className="mx-10">
            <button
              className={`px-4 py-2 mr-2 ${
                selectedButton === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              доставка
            </button>
            <button
              className={`px-4 py-2 mr-2 ${
                selectedButton === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handleButtonClick(2)}
            >
              оплата
            </button>
            <button
              className={`px-4 py-2 ${
                selectedButton === 3
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handleButtonClick(3)}
            >
              контакты
            </button>

            <div className="mt-4">
              {selectedButton === 1 && (
                <span>
                  <span>Доставка</span>
                  Компания «Maldex» бесплатно осуществит доставку заказа и
                  образцов продукции: По Москве в пределах МКАД До Транспортной
                  компании Самовывоз доступен в центральном офисе в Москве, по
                  адресу: м. Нагатинская, Варшавское шоссе 35 стр 1, тел.
                  8-800-777-59-19
                </span>
              )}
              {selectedButton === 2 && (
                <span>
                  Оплата Мы работаем с юридическими и физическими лицами по
                  безналичному и наличному расчету. Минимальная сумма заказа
                  составляет 30 000 рублей. При оформлении заказа менеджер
                  ответит на вопросы, рассчитает стоимость, уточнит детали
                  заказа и выставит счет на оплату. Отчетные документы: акт
                  выполненных работ, счет-фактуру, договор мы подготовим и
                  предоставим при отгрузке заказа.
                </span>
              )}
              <div className="">
                <div>
                  {selectedButton === 3 && (
                    <div>
                      <p>
                        Наши контакты Наш телефон: 8 (800) 777-59-19 8 (495)
                        760-83-28 Email: info@maldex.ru Адрес: Москва,
                        Варшавское шоссе, 35, стр.1
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  {selectedButton === 3 && (
                    <YMaps>
                      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                    </YMaps>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuestForm />
>>>>>>> ddec433 (add page 404)
      </div>
    </>
  );
}

export default Delivery;
