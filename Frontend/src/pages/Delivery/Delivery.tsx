import React, { useState } from "react";
import { QuestForm } from "../../components";
import { YMaps, Map } from "react-yandex-maps";

function Delivery() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <>
      <div>
        <div className="container_xxl">
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
      </div>
    </>
  );
}

export default Delivery;
