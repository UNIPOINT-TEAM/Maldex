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
import { Helmet } from "react-helmet";

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
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Доставка и оплата - Корпоративные сувениры с логотипом.
                    Изготовление и продажа. Каталог сувенирной продукции
                </title>
                <meta
                    name="description"
                    content="Сувениры с логотипом на заказ. Промоподарки для партнеров, инвесторов, клиентов. Продвинутые технологии брендирования, складирование, логистика. Бесплатный дизайн-макет, скидки до 5—10 %. Бизнес-сувениры из США, Европы, Китая, России
          "
                />
            </Helmet>
            <div>
                <div className="container_xxl">
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
                                            className={`font-medium hover-position ${
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
                                    <TabPanel
                                        className="px-0"
                                        key={value}
                                        value={value}
                                    >
                                        {value === "contacts" ? (
                                            <>
                                                <div className="flex text-fs_6 text-darkPrimary flex-col lg:flex-row font-Helvetica-Neue">
                                                    <div className="lg:w-1/4">
                                                        <span className="font-normal">
                                                            <p className="font-bold hover-position hover-position">
                                                                Наши контакты
                                                            </p>
                                                            <p className="hover-position hover-position">
                                                                Наш телефон:
                                                            </p>
                                                            <p className="m-0 underline hover-position hover-position">
                                                                8 (800)
                                                                777-59-19
                                                            </p>
                                                            <p className="mb-4 underline hover-position hover-position">
                                                                8 (495)
                                                                760-83-28
                                                            </p>
                                                        </span>
                                                        <span className="font-normal hover-position">
                                                            <p>Email:</p>
                                                            <p className="mb-4 underline hover-position">
                                                                {" "}
                                                                info@maldex.ru
                                                            </p>
                                                        </span>
                                                        <span className="font-normal hover-position">
                                                            <p>Адрес:</p>
                                                            <p className="mb-4">
                                                                Москва,
                                                                Варшавское
                                                                шоссе, 35, стр.1
                                                            </p>
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="lg:w-3/4"
                                                        style={{
                                                            position:
                                                                "relative",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <a
                                                            href="https://yandex.uz/maps/10330/bukhara/?utm_medium=mapframe&utm_source=maps"
                                                            style={{
                                                                color: "#eee",
                                                                fontSize:
                                                                    "12px",
                                                                position:
                                                                    "absolute",
                                                                top: "0px",
                                                            }}
                                                        >
                                                            Buxoro
                                                        </a>
                                                        <a
                                                            href="https://yandex.uz/maps/geo/771273395/?ll=64.439753%2C39.774226&utm_medium=mapframe&utm_source=maps&z=12.66"
                                                            style={{
                                                                color: "#eee",
                                                                fontSize:
                                                                    "12px",
                                                                position:
                                                                    "absolute",
                                                                top: "14px",
                                                            }}
                                                        >
                                                            Buxoro — Yandex
                                                            Xarita
                                                        </a>
                                                        <iframe
                                                            src="https://yandex.uz/map-widget/v1/?ll=64.439753%2C39.774226&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzMzOTUSFE_Ku3piZWtpc3RvbiwgQnV4b3JvIgoN7NeAQhVmEh9C&z=12.66"
                                                            width="100%"
                                                            height="246"
                                                            frameBorder="1"
                                                            allowFullScreen={
                                                                true
                                                            }
                                                            style={{
                                                                position:
                                                                    "relative",
                                                            }}
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-darkPrimary text-fs_6">
                                                <p className="font-bold font-Helvetica-Neue hover-position ">
                                                    {desc}
                                                </p>
                                                {/* @ts-ignore */}
                                                <p
                                                    className="font-Helvetica-Neue font-normal hover-position"
                                                    dangerouslySetInnerHTML={{
                                                        __html: desc1,
                                                    }}
                                                />
                                                {/* @ts-ignore */}
                                                <p
                                                    className="font-Helvetica-Neue font-normal hover-position"
                                                    dangerouslySetInnerHTML={{
                                                        __html: desc2,
                                                    }}
                                                />
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
