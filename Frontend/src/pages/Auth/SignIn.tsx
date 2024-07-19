import React, { useState } from "react";
import { PostData } from "./service";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = (e: any) => {
        e.preventDefault();
        const data = {
            email: username,
            password: password,
        };
        PostData("auth/login/", data)
            .then((res) => {
                localStorage.setItem("token", res.data.access);
                navigate('/adminpanel')
            })
            .catch((err) => {
                const myObj = err.response.data;
                toast.error(
                    Object.keys(myObj)[0] + ":" + myObj[Object.keys(myObj)[0]]
                );
            });
    };

    return (
        <div className="w-full px-5 md:px-0 container_xxl flex items-start justify-center h-[600px]">
            <div className="card w-full md:w-2/5 py-14">
                <div className="flex w-full items-end gap-3 mb-14">
                    <button className="h-[35px] w-[71px] border border-redPrimary rounded-[6px] text-redPrimary text-[14px] font-[700]">
                        {" "}
                        вход
                    </button>
                    <Link
                        to={"/sign-up"}
                        className="h-[26px] w-[96px] border border-[#9D9C98] rounded-[6px] text-[#9D9C98] text-[10px] font-[700] flex justify-center items-center"
                    >
                        {" "}
                        регистрация
                    </Link>
                </div>
                <form onSubmit={(e) => login(e)}>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-14">
                        <input
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className="border border-[#E1DFDA] w-full md:w-[48%] h-[45px] rounded-[10px] outline-none px-5 text-[12px] text-[#9D9C98] font-[700] mb-5 md:mb-0"
                            placeholder="логин"
                        />
                        <input
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            type="text"
                            className="border border-[#E1DFDA] w-full md:w-[48%] h-[45px] rounded-[10px] outline-none px-5 text-[12px] text-[#9D9C98] font-[700]"
                            placeholder="пароль"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <Link to={"/adminpanel"}>
                            <button
                                className="text-[28px] font-[500] text-[#D3D3D3]"
                                type="button"
                            >
                                Назад
                            </button>
                        </Link>
                        <button className="text-[14px] font-[700] border border-[#9D9C98] rounded-[10px] h-[50px] w-[200px] text-[#9D9C98] bg-[#F7F7F7]">
                            войти
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;
