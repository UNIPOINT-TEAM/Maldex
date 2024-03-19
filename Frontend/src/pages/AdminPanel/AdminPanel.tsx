import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

function AdminPanel() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
    setShowRegistration(false);
  };

  return (
    <Card color="transparent" shadow={false}>
      <div className="text-center">
        {!showRegistration ? (
          <>
            <Typography variant="h4" color="blue-gray">
              Вход
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Войдите в свою учетную запись
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Input
                  size="lg"
                  placeholder="Логин"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                <Input
                  type="password"
                  size="lg"
                  placeholder="Пароль"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
              </div>
              <Button className="mt-6" fullWidth>
                Войти
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Нет аккаунта?{" "}
                <button
                  className="font-medium text-gray-900"
                  onClick={() => setShowRegistration(true)} // Установить флаг showRegistration в true при нажатии на кнопку
                >
                  Регистрация
                </button>
              </Typography>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h4" color="blue-gray">
              Регистрация
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Создайте свою учетную запись
            </Typography>
            <form
              onSubmit={handleRegistrationSubmit}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
                <Input
                  size="lg"
                  placeholder="Имя"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <Input
                  size="lg"
                  placeholder="Фамилия"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <Input
                  size="lg"
                  placeholder="E-mail"
                  type="email"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input
                  type="password"
                  size="lg"
                  placeholder="Пароль"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <Input
                  type="password"
                  size="lg"
                  placeholder="Повторите пароль"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit" className="mt-6" fullWidth>
                Подтвердить
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Уже есть аккаунт?{" "}
                <button
                  className="font-medium text-gray-900"
                  onClick={() => setShowRegistration(false)} // Установить флаг showRegistration в false при нажатии на кнопку
                >
                  Вход
                </button>
              </Typography>
            </form>
          </>
        )}
      </div>
    </Card>
  );
}

export default AdminPanel;
