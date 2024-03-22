import { useEffect, useState } from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { QuestForm } from "../../components";

function Delivery() {
  const [selectedButton, setSelectedButton] = useState(0);

  useEffect(() => {
    // Инициализация выбранной вкладки при загрузке страницы
    handleHashChange();

    // Обработка изменения hash
    window.addEventListener("hashchange", handleHashChange);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleHashChange = () => {
    const hash = window.location.hash;
    switch (hash) {
      case "#payment":
        setSelectedButton(1);
        break;
      case "#contacts":
        setSelectedButton(2);
        break;
      default:
        setSelectedButton(0);
        break;
    }
  };
// @ts-ignore
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    switch (buttonIndex) {
      case 0:
        window.location.hash = "";
        break;
      case 1:
        window.location.hash = "payment";
        break;
      case 2:
        window.location.hash = "contacts";
        break;
      default:
        break;
    }
  };

  const data = [
    {
      label: "доставка",
      value: "html",
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
      value: "react",
      desc: `Оплата`,
      desc1: `Мы работаем с юридическими и физическими лицами  по безналичному и наличному расчету.<br /> 
      Минимальная сумма заказа составляет 30 000 рублей. <br />`,

      desc2: `При оформлении заказа менеджер ответит на вопросы, рассчитает стоимость, уточнит детали <br />
      заказа и выставит счет на оплату. Отчетные документы: акт выполненных работ, счет-фактуру, <br />
      договор мы подготовим и предоставим при отгрузке заказа.`,
    },
    {
      label: "контакты",
      value: "vue",
      desc: "",
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
              {/* @ts-ignore */}
              <TabsHeader
                placeholder={<div />}
                className="bg-transparent"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-redPrimary shadow-none rounded-none",
                }}
              >
                {/* @ts-ignore */}
                {data.map(({ label, value }, index) => (
                  // @ts-ignore
                  <Tab
                    key={value}
                    value={value}
                    className="text-[9px] lg:text-[28px] font-Helvetica-Neue z-0 mr-[15px] lg:mr-[73px] uppercase lg:lowercase w-auto"
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              {/* @ts-ignore */}
              <TabsBody className="">
                {data.map(({ value, desc, desc1, desc2 }) => (
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
                      <div>
                        <p className="font-extrabold ">{desc}</p>
                        {/* @ts-ignore */}
                        <div dangerouslySetInnerHTML={{ __html: desc1 }} />
                        {/* @ts-ignore */}
                        <div dangerouslySetInnerHTML={{ __html: desc2 }} />

                        {/* <p>{desc2}</p> */}
                      </div>
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
