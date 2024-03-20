<<<<<<< HEAD
import { useNavigate, Routes, Route } from "react-router-dom";
import { Card, List, ListItem } from "@material-tailwind/react";
import { SettingsPanel, ConstructorPanel, FileAndPrice } from '../../components'

import lk_icon1 from "../../assets/lk_icons/lk_icon (1).svg";
import lk_icon2 from "../../assets/lk_icons/lk_icon (2).svg";
import lk_icon3 from "../../assets/lk_icons/lk_icon (3).svg";
import lk_icon4 from "../../assets/lk_icons/lk_icon (4).svg";
import lk_icon5 from "../../assets/lk_icons/lk_icon (5).svg";
import lk_icon6 from "../../assets/lk_icons/lk_icon (6).svg";

=======
import  { useState } from "react";
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
// @ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
// @ts-ignore
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
>>>>>>> db87467 (restart branch 3)

const AdminPanel = () => {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
    <div className="container_xxl flex items-start gap-x-[52px]">
      {/* @ts-ignore */}
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        {/* <div className="mb-2 p-4"></div> */}
        {/* @ts-ignore */}
        <List>
          {/* @ts-ignore */}
          <ListItem onClick={() => navigate('/adminpanel/settings')}><img src={lk_icon2} alt="" />настройки</ListItem>
          {/* @ts-ignore */}
          <ListItem onClick={() => navigate('/adminpanel/constructor')}><img src={lk_icon3} alt="" />конструктор предложений </ListItem>
          {/* @ts-ignore */}
          <ListItem><img src={lk_icon4} alt="" />выйти из лк</ListItem>
          {/* @ts-ignore */}
          <ListItem onClick={() => navigate('/adminpanel/files')}><img src={lk_icon5} alt="" /> файлы и прайсы</ListItem>
          {/* @ts-ignore */}
          <ListItem><img src={lk_icon1} alt="" />выйти из лк</ListItem>
          {/* @ts-ignore */}
          <ListItem><img src={lk_icon6} alt="" />выйти из лк</ListItem>
        </List>
      </Card>

      <Routes>
        <Route path="settings" element={<SettingsPanel />} />
        <Route path="constructor" element={<ConstructorPanel />} />
        <Route path="files" element={<FileAndPrice />} />
      </Routes>
    </div>
=======
    // @ts-ignore
    <Card color="transparent" shadow={false}>
      <div className="text-center">
        {!showRegistration ? (
          <>
          {/* @ts-ignore */}
            <Typography variant="h4" color="blue-gray">
              Вход
            </Typography>
            {/*@ts-ignore */}
            <Typography color="gray" className="mt-1 font-normal">
              Войдите в свою учетную запись
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
              {/* @ts-ignore */}
                <Input
                  size="lg"
                  placeholder="Логин"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                {/* @ts-ignore */}
                <Input
                  type="password"
                  size="lg"
                  placeholder="Пароль"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
              </div>
              {/* @ts-ignore */}
              <Button className="mt-6" fullWidth>
                Войти
              </Button>
              {/* @ts-ignore */}
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
          {/*@ts-ignore */}
            <Typography variant="h4" color="blue-gray">
              Регистрация
            </Typography>
            {/*@ts-ignore */}
            <Typography color="gray" className="mt-1 font-normal">
              Создайте свою учетную запись
            </Typography>
            <form
              onSubmit={handleRegistrationSubmit}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
                {/* @ts-ignore */}
                <Input
                  size="lg"
                  placeholder="Имя"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {/* @ts-ignore */}
                <Input
                  size="lg"
                  placeholder="Фамилия"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {/* @ts-ignore */}
                <Input
                  size="lg"
                  placeholder="E-mail"
                  type="email"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {/* @ts-ignore */}
                <Input
                  type="password"
                  size="lg"
                  placeholder="Пароль"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {/* @ts-ignore */}
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
              {/* @ts-ignore */}
              <Button type="submit" className="mt-6" fullWidth>
                Подтвердить
              </Button>
              {/* @ts-ignore */}
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
>>>>>>> db87467 (restart branch 3)
  );
};

export default AdminPanel;
