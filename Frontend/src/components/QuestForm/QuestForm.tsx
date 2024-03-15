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
        <div className="mx-3 my-6 lg:my-[110px] flex flex-col lg:flex-row justify-between">
          <div>
            <h1
              className="text-[16px] lg:text-fs_2 underline  uppercase text-darkSecondary cursor-pointer font-[500]"
              onClick={handleClick}
            >
              {isFormVisible ? <span>Ваш <br /> вопрос</span> : <span>Хочу задать <br /> вопрос</span> }
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
                  <Input variant="standard" label="Ваше имя" />
                  <Input
                    variant="standard"
                    label="Ваш номер телефона"
                    placeholder=""
                  />
                  <Input variant="standard" label="Ваша почта" placeholder="" />
                  <Input variant="standard" label="Ваш вопрос" placeholder="" />

                  {/* <textarea placeholder="Ваш вопрос" /> */}
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
