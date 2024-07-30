import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import { Card, List, ListItem } from "@material-tailwind/react";
import {
    SettingsPanel,
    ConstructorPanel,
    FileAndPrice,
} from "../../components";

import lk_icon1 from "../../assets/lk_icons/lk_icon (1).svg";
import lk_icon2 from "../../assets/lk_icons/lk_icon (2).svg";
import lk_icon3 from "../../assets/lk_icons/lk_icon (3).svg";
import lk_icon4 from "../../assets/lk_icons/lk_icon (4).svg";
import lk_icon5 from "../../assets/lk_icons/lk_icon (5).svg";
import lk_icon6 from "../../assets/lk_icons/lk_icon (6).svg";
import Liked from "../../components/AdminSidebar/Liked";

const AdminPanel = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    const navigate = useNavigate();
    return (
        <div className="container_xxl flex flex-col md:flex-row items-start gap-x-[52px] min-h-[400px]">
            {/* @ts-ignore */}
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white hidden md:block">
                {/* <div className="mb-2 p-4"></div> */}
                {/* @ts-ignore */}
                <List>
                    {/* @ts-ignore */}
                    <ListItem
                        className="flex gap-2"
                        onClick={() => navigate("/adminpanel/settings")}
                    >
                        <img
                            src={lk_icon5}
                            alt=""
                            className="h-[24px] w-[24px]"
                        />
                        настройки
                    </ListItem>
                    {/* @ts-ignore */}
                    <ListItem
                        onClick={() => navigate("/adminpanel/constructor")}
                        className="flex gap-2"
                    >
                        <img
                            src={lk_icon1}
                            alt=""
                            className="h-[24px] w-[24px]"
                        />
                        конструктор предложений{" "}
                    </ListItem>
                    {/* @ts-ignore */}
                    <ListItem
                        className="flex gap-2"
                        onClick={() => navigate("/sign-in")}
                    >
                        <img
                            src={lk_icon6}
                            alt=""
                            className="h-[24px] w-[24px]"
                        />
                        регистрация/вход
                    </ListItem>
                    {/* @ts-ignore */}
                    <ListItem className="flex gap-2">
                        <img
                            src={lk_icon4}
                            alt=""
                            className="h-[24px] w-[24px]"
                        />
                        выйти из лк
                    </ListItem>
                    {/* @ts-ignore */}
                    <ListItem
                        className="flex gap-2"
                        onClick={() => navigate("/adminpanel/files")}
                    >
                        <img
                            src={lk_icon3}
                            alt=""
                            className="h-[24px] w-[24px]"
                        />{" "}
                        файлы и прайсы
                    </ListItem>
                    {/* @ts-ignore */}
                    <ListItem
                        className="flex gap-2"
                        onClick={() => navigate("/adminpanel/liked")}
                    >
                        <img
                            src={lk_icon2}
                            alt=""
                            className="h-[24px] w-[24px]"
                        />
                        Любимые товары
                    </ListItem>
                    {/* @ts-ignore */}
                </List>
            </Card>
            <div className="h-[60px] w-full flex items-center justify-between bg-gray-50  md:hidden ">
                <button
                    onClick={() => navigate("/adminpanel/settings")}
                    className={`flex justify-center items-center w-[20%] h-full ${
                        currentUrl == "/adminpanel/settings"
                            ? "bg-redPrimary"
                            : ""
                    }`}
                >
                    <img src={lk_icon5} alt="" className="h-[24px] w-[24px]" />
                </button>
                <button
                    onClick={() => navigate("/adminpanel/constructor")}
                    className={`flex justify-center items-center w-[20%] h-full ${
                        currentUrl == "/adminpanel/constructor"
                            ? "bg-redPrimary"
                            : ""
                    }`}
                >
                    <img src={lk_icon1} alt="" className="h-[24px] w-[24px]" />
                </button>
                <button
                    onClick={() => navigate("/sign-in")}
                    className={`flex justify-center items-center w-[20%] h-full ${
                        currentUrl == "/sign-in" ? "bg-redPrimary" : ""
                    }`}
                >
                    <img src={lk_icon6} alt="" className="h-[24px] w-[24px]" />
                </button>
                <button
                    onClick={() => navigate("/adminpanel/")}
                    className={`flex justify-center items-center w-[20%] h-full ${
                        currentUrl == "/adminpanel/fies" ? "bg-redPrimary" : ""
                    }`}
                >
                    <img src={lk_icon4} alt="" className="h-[24px] w-[24px]" />
                </button>
                <button
                    onClick={() => navigate("/adminpanel/files")}
                    className={`flex justify-center items-center w-[20%] h-full ${
                        currentUrl == "/adminpanel/files" ? "bg-redPrimary" : ""
                    }`}
                >
                    <img src={lk_icon3} alt="" className="h-[24px] w-[24px]" />
                </button>
            </div>

            <Routes>
                <Route path="settings" element={<SettingsPanel />} />
                <Route path="constructor" element={<ConstructorPanel />} />
                <Route path="files" element={<FileAndPrice />} />
                <Route path="liked" element={<Liked />} />
            </Routes>
        </div>
    );
};

export default AdminPanel;
