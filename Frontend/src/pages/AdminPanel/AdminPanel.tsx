import  { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true); // Флаг для отображения формы входа или регистрации
  const [loginButtonActive, setLoginButtonActive] = useState(true);
  const [registerButtonActive, setRegisterButtonActive] = useState(false);

  const handleLogin = () => {
    // Обработка входа
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegister = () => {
    // Обработка регистрации
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Здесь вы можете добавить логику для регистрации нового пользователя
  };

  const handleLoginButtonClick = () => {
    setIsLoginMode(true);
    setLoginButtonActive(true);
    setRegisterButtonActive(false);
  };

  const handleRegisterButtonClick = () => {
    setIsLoginMode(false);
    setLoginButtonActive(false);
    setRegisterButtonActive(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4">
        <div className="flex gap-10">
          <Button
            color="indigo"
            buttonType="filled"
            // @ts-ignore
            size="regular"
            block={true}
            onClick={handleLoginButtonClick}
            className={
              loginButtonActive
                ? "bg-transparent border border-redPrimary text-redPrimary"
                : "bg-transparent border border-darkSecondary text-darkSecondary"
            }
          >
            Войти
          </Button>
          <Button
            color="indigo"
            buttonType="filled"
            // @ts-ignore
            size="regular"
            block={true}
            onClick={handleRegisterButtonClick}
            className={
              registerButtonActive
                ? "bg-transparent border border-redPrimary text-redPrimary"
                : "bg-transparent border border-darkSecondary text-darkSecondary"
            }
          >
            Регистрация
          </Button>
        </div>
        <div className="mb-4"></div>
        {!isLoginMode && (
          <>
            <div className="mb-4">
              <Input
                type="text"
                // @ts-ignore
                color="lightBlue"
                placeholder="Имя"
                label="Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                // @ts-ignore
                color="lightBlue"
                placeholder="Фамилия"
                label="Фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </>
        )}
        <div className="mb-4">
          <Input
            type="email"
            // @ts-ignore
            color="lightBlue"
            placeholder="Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            // @ts-ignore
            color="lightBlue"
            placeholder="Пароль"
            label="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isLoginMode && (
          <div className="mb-4">
            <Input
              type="password"
              // @ts-ignore
              color="lightBlue"
              placeholder="Повторите пароль"
              label="Повторите Пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <div className="mb-4 text-end">
          <Link to="/adminpanel">
            <Button
              color="indigo"
              buttonType="filled"
              // @ts-ignore
              size="regular"
              block={true}
              className="bg-transparent border border-redPrimary text-redPrimary"
              onClick={isLoginMode ? handleLogin : handleRegister}
            >
              {isLoginMode ? "Войти" : "Зарегистрироваться"}
            </Button>
          </Link>
        </div>
        <div>
          <span>
            Нажимая кнопку, я соглашаюсь с{" "}
            <span className="font-bold ">политикой обработки данных.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;