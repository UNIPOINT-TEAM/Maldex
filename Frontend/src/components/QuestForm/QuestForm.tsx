import { useState, useRef } from "react";

import "./send.css";
import SendForm from "./SendForm";

function QuestForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <div className="container_xxl px-3 mb-16">
      <div className="lg:mx-0 my-6 lg:my-[0px] flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2">
          <h1
            className="text-[16px] lg:text-fs_2 underline uppercase text-darkSecondary cursor-pointer font-[500]"
            onClick={handleToggleForm}
          >
            {isFormVisible ? (
              <span>
                Ваш <br /> вопрос
              </span>
            ) : (
              <span>
                Хочу задать <br /> вопрос
              </span>
            )}
          </h1>
        </div>
        <div className="lg:w-1/2">{isFormVisible && <SendForm />}</div>
      </div>
    </div>
  );
}

export default QuestForm;
