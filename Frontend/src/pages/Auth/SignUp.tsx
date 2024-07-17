import React, { useState } from "react";
import { PostData } from "./service";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const login = (e: any) => {
        e.preventDefault();
        const data = {
            email: username,
            password: password,
            password2: password2,
            first_name: firstname,
            last_name: lastname,
        };
        PostData("auth/register/", data)
            .then((res) => {
                setOpen(true);
                setTimeout(() => {
                    setOpen(false);
                    navigate("/adminpanel");
                }, 2000);
            })
            .catch((err) => {
                const myObj = err.response.data;
                toast.error(
                    Object.keys(myObj)[0] + ":" + myObj[Object.keys(myObj)[0]]
                );
            });
    };

    return (
        <div className="w-full px-5 md:px-0 container_xxl flex items-start justify-center h-[800px]">
            <Dialog
                open={open}
                handler={handleOpen}
                className="signup-modal h-[300px]"
            >
                <DialogHeader className="h-[50px] flex justify-end">
                    <button onClick={handleOpen} className="outline-none">
                        <IoMdClose />
                    </button>
                </DialogHeader>
                <DialogBody className="text-center flex justify-center items-center h-[200px]">
                    Вы успешно зарегистрированы
                </DialogBody>
                <DialogFooter></DialogFooter>
            </Dialog>
            <div className="card w-full md:w-2/5 py-14">
                <div className="flex w-full items-end gap-3 mb-14">
                    <button className="h-[35px] w-[136px] border border-redPrimary rounded-[6px] text-redPrimary text-[14px] font-[700]">
                        {" "}
                        регистрация
                    </button>
                    <Link
                        to={"/sign-in"}
                        className="h-[26px] w-[50px] border border-[#9D9C98] rounded-[6px] text-[#9D9C98] text-[10px] font-[700] flex justify-center items-center"
                    >
                        {" "}
                        вход
                    </Link>
                </div>
                <form onSubmit={(e) => login(e)}>
                    <div className="flex flex-col justify-between items-center mb-14">
                        <input
                            required
                            onChange={(e) => setFirstname(e.target.value)}
                            type="text"
                            className="border border-[#E1DFDA] w-full h-[45px] rounded-[10px] outline-none px-5 text-[12px] text-[#9D9C98] font-[700] mb-5"
                            placeholder="имя"
                        />
                        <input
                            required
                            onChange={(e) => setLastname(e.target.value)}
                            type="text"
                            className="border border-[#E1DFDA] w-full h-[45px] rounded-[10px] outline-none px-5 text-[12px] text-[#9D9C98] font-[700] mb-5"
                            placeholder="фамилия"
                        />
                        <input
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className="border border-[#E1DFDA] w-full h-[45px] rounded-[10px] outline-none px-5 text-[12px] text-[#9D9C98] font-[700] mb-5"
                            placeholder="e-mail"
                        />
                        <input
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            type="text"
                            className="border border-[#E1DFDA] w-full h-[45px] rounded-[10px] outline-none px-5 text-[12px] text-[#9D9C98] font-[700] mb-5"
                            placeholder="пароль"
                        />
                        <input
                            required
                            onChange={(e) => setPassword2(e.target.value)}
                            type="text"
                            className="border border-[#E1DFDA] w-full h-[45px] rounded-[10px] outline-none px-5 text-[12px] text-[#9D9C98] font-[700] mb-5"
                            placeholder="повторение пароля"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-14">
                        <Link to={"/adminpanel"}>
                            <button
                                className="text-[28px] font-[500] text-[#D3D3D3]"
                                type="button"
                            >
                                Назад
                            </button>
                        </Link>
                        <button className="text-[14px] font-[700] border border-[#9D9C98] rounded-[10px] h-[50px] w-[200px] text-[#9D9C98] bg-[#F7F7F7]">
                            подтвердить
                        </button>
                    </div>
                    <p className="text-[14px] text-[#9D9C98]">
                        Нажимая кнопку, я соглашаюсь с{" "}
                        <a
                            className="text-black underline"
                            target="blank"
                            href="https://maldex-gifts.ru/consent.html"
                        >
                            политикой обработки данных.
                        </a>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
