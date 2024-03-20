import comment from "../../assets/CompanyIcons/comment.png";
import country from "../../assets/CompanyIcons/country.png";

import giftPurple from "../../assets/CompanyIcons/giftPurple.png";
import guarant from "../../assets/CompanyIcons/guarant.png";

import task from "../../assets/CompanyIcons/task.png";

import partner1 from "../../assets/partners/partner (1).png";
import partner2 from "../../assets/partners/partner (2).png";
import partner3 from "../../assets/partners/partner (3).png";
import partner4 from "../../assets/partners/partner (4).png";
import partner5 from "../../assets/partners/partner (5).png";
import partner6 from "../../assets/partners/partner (6).png";
import partner7 from "../../assets/partners/partner (7).png";
import partner8 from "../../assets/partners/partner (8).png";
import partner9 from "../../assets/partners/partner (9).png";
import partner10 from "../../assets/partners/partner (10).png";
import partner11 from "../../assets/partners/partner (11).png";
import partner12 from "../../assets/partners/partner (12).png";
import partner13 from "../../assets/partners/partner (13).png";
import partner14 from "../../assets/partners/partner (14).png";
import partner15 from "../../assets/partners/partner (15).png";
import partner16 from "../../assets/partners/partner (16).png";
import partner17 from "../../assets/partners/partner (17).png";
import partner18 from "../../assets/partners/partner (18).png";
import partner19 from "../../assets/partners/partner (19).png";
import partner20 from "../../assets/partners/partner (20).png";
import partner21 from "../../assets/partners/partner (21).png";

import {
  BannerBottom,
  BannerBottomMobile,
  BannerSlider,
  BannerTop,
  Printing,
  QuestForm,
  Steps,
  WhoWe,
} from "../../components";
import { useEffect } from "react";
import { useFetchHook } from "../../hooks/UseFetch";

function Company2() {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
    partner15,
    partner16,
    partner17,
    partner18,
    partner19,
    partner20,
    partner21,
  ];

  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/banner" });
  }, []);
  return (
    <>
      <div className="container_xxl">
        <div className="px-3">
          <div className="flex gap-3">
            <div className=" w-2/5 hidden lg:block">
              {/* @ts-ignore */}
              <BannerTop BannerData={response} />
            </div>
            <div className="w-full lg:w-3/5">
              <BannerSlider />
            </div>
          </div>
          <div>
            <BannerBottom BannerData={response} />
            <BannerBottomMobile />
          </div>
          {/* <Brands /> */}
          <div>
            <WhoWe />
          </div>
          <div>
            <h1 className="text-[#0000B0] text-[32px] leading-[64px] font-medium">
              С заботой о клиентах{" "}
            </h1>
            <div className="px-[70px] flex gap-32 justify-between">
              <div className="flex flex-col gap-8 w-1/3">
                <div>
                  <img src={task} alt="" />
                  <h1 className="my-5 text-[22px] font-medium text-[#52B5A1]">
                    Сборные заказы (gifts case)
                  </h1>
                  <ul>
                    <li>
                      <span style={{ color: "#52B5A1", marginRight: "5px" }}>
                        &bull;
                      </span>
                      Разработка для вас индивидуальных <br /> кейсов/подарочных
                      наборов
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={giftPurple} alt="" />
                  <h1 className="my-5 text-[22px] font-medium text-[#BD43F6]">
                    При заказе от 50 000 рублей
                  </h1>
                  <ul>
                    <li>
                      <span style={{ color: "#BD43F6", marginRight: "5px" }}>
                        &bull;
                      </span>
                      10% от стоимости заказа в подарок!
                    </li>
                    <li>
                      <span style={{ color: "#BD43F6", marginRight: "5px" }}>
                        &bull;
                      </span>
                      Подарок из каталога на сумму 5000 рублей
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-8 w-1/3">
                <div>
                  <img src={comment} alt="" />
                  <h1 className="my-5 text-[22px] font-medium text-[#F7CE46]">
                    Персональный менеджер
                  </h1>
                  <ul>
                    <li>
                      <span style={{ color: "#F7CE46", marginRight: "5px" }}>
                        &bull;
                      </span>
                      Обслуживание клиента с учетом его <br /> персональных
                      предпочтений и требований наборов
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={guarant} alt="" />
                  <h1 className="my-5 text-[22px] font-medium text-[#0000B0]">
                    Чем больше заказов, <br /> тем больше скидки
                  </h1>
                  <ul>
                    <li>
                      <span style={{ color: "#0000B0", marginRight: "5px" }}>
                        &bull;
                      </span>
                      Предоставляем дополнительную <br /> скидку на заказ
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-8 w-1/3">
                <div>
                  <img src={country} alt="" />
                  <h1 className="my-5 text-[22px] font-medium text-[#E94B67]">
                    Индивидуальные <br /> заказы в Китае
                  </h1>
                  <ul>
                    <li>
                      <span style={{ color: "#E94B67", marginRight: "5px" }}>
                        &bull;
                      </span>
                      Поможем воплотить любую идею
                    </li>
                    <li>
                      <span style={{ color: "#E94B67", marginRight: "5px" }}>
                        &bull;
                      </span>
                      Разработка макета
                    </li>
                    <li>
                      <span style={{ color: "#E94B67", marginRight: "5px" }}>
                        &bull;
                      </span>
                      Быстро найдем фабрику
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-between">
              {/* @ts-ignore */}
              {partners.map((partner, index) => (
                <div>
                  <img src={partner} alt="Partner" />
                </div>
              ))}
            </div>
          </div>
          <Steps />
          <Printing />
        </div>
          <QuestForm />
      </div>
    </>
  );
}

export default Company2;
