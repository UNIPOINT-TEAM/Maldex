import React, { useState } from "react";
import {
  Chip,
  List,
  ListItem,
  ListItemSuffix,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { QuestForm } from "../../components";

function Delivery() {
  const [selectedButton, setSelectedButton] = useState(0);
  //@ts ignor
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const data = [
    {
      label: "доставка",
      value: "html",
      desc: `Доставка 
      Компания «Maldex» бесплатно осуществит доставку заказа и
      образцов продукции: По Москве в пределах МКАД До Транспортной
      компании Самовывоз доступен в центральном офисе в Москве, по
      адресу: м. Нагатинская, Варшавское шоссе 35 стр 1, тел.
      8-800-777-59-19.`,
    },
    {
      label: "оплата",
      value: "react",
      desc: `Оплата
      Мы работаем с юридическими и физическими лицами по безналичному и наличному расчету. 
      Минимальная сумма заказа составляет 30 000 рублей.
      
      При оформлении заказа менеджер ответит на вопросы, рассчитает стоимость, уточнит детали 
      заказа и выставит счет на оплату. Отчетные документы: акт выполненных работ, счет-фактуру, 
      договор мы подготовим и предоставим при отгрузке заказа.`,
    },
    {
      label: "контакты",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      // mapLink: "https://yandex.uz/maps/10330/bukhara/?utm_medium=mapframe&utm_source=maps",
      // mapIframe: `<iframe src="https://yandex.uz/map-widget/v1/?ll=64.439753%2C39.774226&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzMzOTUSFE_Ku3piZWtpc3RvbiwgQnV4b3JvIgoN7NeAQhVmEh9C&z=12.66" width="100%" height="246" frameBorder="1" allowFullScreen={true} style={{ position: "relative" }}></iframe>`,
    },
  ];

  return (
    <>
      <div>
        <div className="container_xxl">
          <div className="mx-3">
            <Tabs
              value={data[selectedButton].value}
              onChange={handleButtonClick}
            >
              <TabsHeader className="tab-header border-0 border-b rounded-none bg-[#fff]">
                {data.map(({ label, value }, index) => (
                  <Tab
                    key={value}
                    value={value}
                    className="text-fs_9 z-0 uppercase w-auto"
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody className="">
                {data.map(({ value, desc }) => (
                  <TabPanel className="px-0" key={value} value={value}>
                    {value === "vue" ? (
                      <>
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/4">
                            <span>
                              <p className="font-extrabold">Наши контакты</p>
                              <p>Наш телефон:</p>
                              <p>8 (800) 777-59-19</p>
                              <p className="mb-4">8 (495) 760-83-28</p>
                            </span>
                            <span>
                              <p>Email:</p>
                              <p className="mb-4"> info@maldex.ru</p>
                            </span>
                            <span>
                              <p>Адрес:</p>
                              <p className="mb-4"> Москва, Варшавское шоссе, 35, стр.1</p>
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
                      <p>{desc}</p>
                    )}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
          <QuestForm />
        </div>
      </div>
    </>
  );
}

export default Delivery;

{
  /* <div className="mx-10">
            <button
              className={`px-4 py-2 mr-2 ${
                selectedButton === 1
                  ? " text-redPrimary border border-x-[#fff] border-t-[#fff]  border-b-redPrimary "
                  : " text-gray-700"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              доставка
            </button>
            <button
              className={`px-4 py-2 mr-2 ${
                selectedButton === 2
                  ? " text-redPrimary border border-x-[#fff] border-t-[#fff]  border-b-redPrimary "
                  : " text-gray-700"
              }`}
              onClick={() => handleButtonClick(2)}
            >
              оплата
            </button>
            <button
              className={`px-4 py-2 ${
                selectedButton === 3
                  ? " text-redPrimary border border-x-[#fff] border-t-[#fff]  border-b-redPrimary "
                  : " text-gray-700"
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
                    <div className="flex ">
                      <div className="w-1/4">
                        <span>
                          <p className="font-extrabold">Наши контакты</p>
                          <p>Наш телефон:</p>
                          <p>8 (800) 777-59-19</p>
                          <p className="mb-4">8 (495) 760-83-28</p>
                        </span>
                        <span>
                          <p>Email:</p>
                          <p className="mb-4"> info@maldex.ru</p>
                        </span>
                        <span>
                          <p>Адрес:</p>
                          <p> Москва, Варшавское шоссе, 35, стр.1</p>
                        </span>
                      </div>
                      <div
                        className="w-3/4"
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
                </div>
              </div>
            </div>
          </div> */
}
