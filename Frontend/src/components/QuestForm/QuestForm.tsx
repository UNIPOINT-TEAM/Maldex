import { useState, useRef } from "react";
import { Input, Checkbox } from "@material-tailwind/react";
import { gsap } from 'gsap';
import './send.css';

function QuestForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleToggleForm = () => {
    setIsFormVisible(prevState => !prevState);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const button = buttonRef.current;

    if (!button.classList.contains("active")) {
      button.classList.add("active");

      gsap.to(button, {
        keyframes: [
          {
            "--left-wing-first-x": 50,
            "--left-wing-first-y": 100,
            "--right-wing-second-x": 50,
            "--right-wing-second-y": 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button, {
                "--left-wing-first-y": 0,
                "--left-wing-second-x": 40,
                "--left-wing-second-y": 100,
                "--left-wing-third-x": 0,
                "--left-wing-third-y": 100,
                "--left-body-third-x": 40,
                "--right-wing-first-x": 50,
                "--right-wing-first-y": 0,
                "--right-wing-second-x": 60,
                "--right-wing-second-y": 100,
                "--right-wing-third-x": 100,
                "--right-wing-third-y": 100,
                "--right-body-third-x": 60,
              });
            },
          },
          {
            "--left-wing-third-x": 20,
            "--left-wing-third-y": 90,
            "--left-wing-second-y": 90,
            "--left-body-third-y": 90,
            "--right-wing-third-x": 80,
            "--right-wing-third-y": 90,
            "--right-body-third-y": 90,
            "--right-wing-second-y": 90,
            duration: 0.2,
          },
          {
            "--rotate": 50,
            "--left-wing-third-y": 95,
            "--left-wing-third-x": 27,
            "--right-body-third-x": 45,
            "--right-wing-second-x": 45,
            "--right-wing-third-x": 60,
            "--right-wing-third-y": 83,
            duration: 0.25,
          },
          {
            "--rotate": 55,
            "--plane-x": -8,
            "--plane-y": 24,
            duration: 0.2,
          },
          {
            "--rotate": 40,
            "--plane-x": 45,
            "--plane-y": -180,
            "--plane-opacity": 0,
            duration: 0.3,
            onComplete() {
              setTimeout(() => {
                button.removeAttribute("style");
                gsap.fromTo(
                  button,
                  {
                    opacity: 0,
                    y: -8,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: 0.3,
                    onComplete() {
                      button.classList.remove("active");
                    },
                  }
                );
              }, 2000);
            },
          },
        ],
      });

      gsap.to(button, {
        keyframes: [
          {
            "--text-opacity": 0,
            "--border-radius": 0,
            "--left-wing-background":
              getComputedStyle(button).getPropertyValue("--primary-darkest"),
            "--right-wing-background":
              getComputedStyle(button).getPropertyValue("--primary-darkest"),
            duration: 0.1,
          },
          {
            "--left-wing-background":
              getComputedStyle(button).getPropertyValue("--primary"),
            "--right-wing-background":
              getComputedStyle(button).getPropertyValue("--primary"),
            duration: 0.1,
          },
          {
            "--left-body-background":
              getComputedStyle(button).getPropertyValue("--primary-dark"),
            "--right-body-background":
              getComputedStyle(button).getPropertyValue("--primary-darkest"),
            duration: 0.4,
          },
          {
            "--success-opacity": 1,
            "--success-scale": 1,
            duration: 0.25,
            delay: 0.25,
          },
        ],
      });
    }
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
        <div className="lg:w-1/2">
          {isFormVisible && (
            <div>
              <form className="flex flex-col gap-4">
                <div>
                  <h1>
                    Заполните поля для отправки <br /> вопроса и наши менеджеры{" "}
                    <br /> в скором времени ответят на него
                  </h1>
                </div>

                <Input variant="standard" label="Ваше имя" />
                <Input variant="standard" label="Ваш номер телефона" type="text" />
                <Input variant="standard" label="Ваша почта" />
                <Input variant="standard" label="Ваш вопрос" />
                <span className="flex items-center">
                  <Checkbox className="m-0" color="red" defaultChecked />
                  Согласен с обработкой персональных данных и политикой конфиденциальности
                </span>

                <button ref={buttonRef} className="button" onClick={handleClick}>
                  <span className="default">Отправить</span>
                  <span className="success border-[2px] rounded-md p-2">Отправлено</span>
                  <div className="left"></div>
                  <div className="right"></div>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestForm;
