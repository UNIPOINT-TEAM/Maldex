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
                <form className="flex flex-col">
                  <input type="text" placeholder="Ваше имя" />
                  <input type="text" placeholder="Ваш номер телефона" />
                  <Input
                    variant="standard"
                    label="Standard"
                    placeholder="Standard"
                  />

                  <textarea placeholder="Ваш вопрос" />
                  <button type="submit">Отправить</button>
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
