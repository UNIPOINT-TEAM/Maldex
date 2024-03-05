import React, { useState } from "react";
import { Input } from "@material-tailwind/react";

function QuestForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <div>
      <div className="container_xxl">
        <div className="mx-10 my-[110px] flex justify-between">
          <div>
            <h1
              className="text-fs_2 underline w-[259px] uppercase text-darkSecondary cursor-pointer font-[800]"
              onClick={handleClick}
            >
              {isFormVisible ? "Ваш Вопрос" : "Хочу задать вопрос"}
            </h1>
          </div>
          <div>
            {isFormVisible && (
              <div>
                <form className="flex flex-col gap-4">
                  <div>
                    <h1>
                      Заполните поля для отправки вопроса и наши менеджеры в
                      скором времени ответят на него
                    </h1>
                  </div>
                  <Input variant="standard" label="Ваше имя" placeholder="" />
                  <Input
                    variant="standard"
                    label="Ваш номер телефона"
                    placeholder=""
                  />
                  <Input variant="standard" label="Ваша почта" placeholder="" />

                  <textarea placeholder="Ваш вопрос" />
                  <button
                    className="bg-redPrimary text-white py-3 rounded-md"
                    type="submit"
                  >
                    Отправить
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestForm;
