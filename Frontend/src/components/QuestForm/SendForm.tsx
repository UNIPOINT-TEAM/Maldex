import { Checkbox, Input } from "@material-tailwind/react";
import { gsap } from "gsap";
import { useRef } from "react";

const SendForm = ({ productDetails = false }) => {
  const buttonRef = useRef(null);
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
    <div>
      <form
        className={`flex ${
          productDetails ? "flex-row items-center justify-between" : "flex-col"
        } gap-4`}
      >
        <div>
          <h2 className="text-[16px] font-medium  leading-normal">
            Заполните поля для отправки <br /> вопроса и наши менеджеры <br /> в
            скором времени ответят на него
          </h2>
        </div>

        <div className="flex flex-col gap-2 max-w-[550px] w-full">
          <Input
            variant="standard"
            label="Ваше имя"
            className="text-darkPrimary placeholder:text-darkPrimary"
          />
          <Input variant="standard" label="Ваш номер телефона" type="text" />
          <Input variant="standard" label="Ваша почта" />
          <Input variant="standard" label="Ваш вопрос" />
          <span className="flex items-center">
            <Checkbox className="m-0" color="red" defaultChecked />
            <span className="text-fs_8">
              Согласен с обработкой персональных данных и политикой
              конфиденциальности
            </span>
          </span>

          <button ref={buttonRef} className="button px-4" onClick={handleClick}>
            <span className="default">Отправить</span>
            <span className="success border-[2px] rounded-md p-2">
              Отправлено
            </span>
            <div className="left"></div>
            <div className="right"></div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendForm;
