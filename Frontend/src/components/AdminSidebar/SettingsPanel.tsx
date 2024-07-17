// import { useState } from 'react'
// import { Input, Button } from "@material-tailwind/react";

// function SettingsPanel() {
//     // const [firstName, setFirstName] = useState('');
//     // const [lastName, setLastName] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [number, setNumber] = useState('');

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         number: ''
//     });

//     const { firstName, lastName, email, number } = formData;

//     const onChange = (e) => {
//         setFormData((prevState) => ({
//             ...prevState,
//             [e.target.id]: e.target.value
//         }))
//     }
//     return (
//         <div className="py-[30px] p-2 w-min md:pl-[33px]">
//             <h1 className="tracking-[-4%] text-[28px] text-[#666666] mb-12">Настройки</h1>

//             <div className="flex flex-col gap-y-[60px]">
//                 <div>
//                     <p className="leading-[64px] tracking-[-4%] text-[18px] font-medium text-[#666666]">Персональные данные</p>
//                     <div className="flex gap-5 flex-wrap md:flex-nowrap">
//                         <div className="w-[285px] ">
//                             <Input
//                                 id="firstName"
//                                 type="text"
//                                 // @ts-ignore
//                                 color="lightBlue"
//                                 placeholder="Владимир"
//                                 label="Владимир"
//                                 value={firstName}
//                                 onChange={onChange}
//                             // onChange={(e) => setFirstName(e.target.value)}
//                             />
//                         </div>
//                         <div className="w-[285px] ">
//                             <Input
//                                 id="lastName"
//                                 type="text"
//                                 // @ts-ignore
//                                 color="lightBlue"
//                                 placeholder="Куликов"
//                                 label="Куликов"
//                                 value={lastName}
//                                 onChange={onChange}
//                             // onChange={(e) => setFirstName(e.target.value)}
//                             />
//                         </div>

//                     </div>
//                 </div>

//                 <div>
//                     <p className="leading-[64px] tracking-[-4%] text-[18px] font-medium text-[#666666]">Контактная информация</p>
//                     <div className="flex gap-5 flex-wrap md:flex-nowrap">
//                         <div className="w-[285px]">
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 // @ts-ignore
//                                 color="lightBlue"
//                                 placeholder="v.kulikov@maldex.ru"
//                                 label="v.kulikov@maldex.ru"
//                                 value={email}
//                                 onChange={onChange}
//                             // onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>

//                         <div className="w-[285px]">
//                             <Input
//                                 id="number"
//                                 type="text"
//                                 // @ts-ignore
//                                 color="lightBlue"
//                                 placeholder="8-925-194-50-40"
//                                 label="8-925-194-50-40"
//                                 value={number}
//                                 onChange={onChange}
//                             // onChange={(e) => setNumber(e.target.value)}
//                             />
//                         </div>

//                     </div>

//                     <div>
//                         <Button
//                             variant="outlined"
//                             // @ts-ignore
//                             size="regular"
//                             block={true}
//                             className="block ml-auto text-[#9D9C98] border-[#9D9C98] mt-[67px] w-[210px] text-[12px] leading-[14.65px] font-bold py-[18px] rounded-[10px]"
//                         >
//                             сохранить
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SettingsPanel

import { useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { GetData, PutDataJson } from "../../pages/Auth/service";

function SettingsPanel() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [number, setNumber] = useState('');

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
    });

    // @ts-expect-error: This
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const updateProfile = () => {
        const data = {
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone_number: formData.number,
        };
        PutDataJson("auth/profile/", data).then((res) => console.log(res));
    };

    useEffect(() => {
        GetData("auth/profile/").then((res) => setFormData(res));
    }, []);

    return (
        <div className="py-[30px] p-2 w-min md:pl-[33px]">
            <h1 className="tracking-[-4%] text-[28px] text-[#666666] mb-12">
                Настройки
            </h1>

            <div className="flex flex-col gap-y-[60px]">
                <div>
                    <p className="leading-[64px] tracking-[-4%] text-fs_6 font-medium text-[#666666]">
                        Персональные данные
                    </p>
                    <div className="flex gap-5 flex-wrap md:flex-nowrap">
                        <div className="w-[285px] ">
                            <Input
                                id="firstName"
                                type="text"
                                // @ts-expect-error: This
                                color="lightBlue"
                                placeholder={formData?.first_name}
                                label={formData?.first_name}
                                onChange={onChange}
                                // onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="w-[285px] ">
                            <Input
                                id="lastName"
                                type="text"
                                // @ts-expect-error: This
                                color="lightBlue"
                                placeholder={formData?.last_name}
                                label={formData?.last_name}
                                onChange={onChange}
                                // onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="leading-[64px] tracking-[-4%] text-fs_6 font-medium text-[#666666]">
                        Контактная информация
                    </p>
                    <div className="flex gap-5 flex-wrap md:flex-nowrap">
                        <div className="w-[285px]">
                            <Input
                                id="email"
                                type="email"
                                // @ts-expect-error: This
                                color="lightBlue"
                                placeholder={formData?.email}
                                label={formData?.email}
                                onChange={onChange}
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="w-[285px]">
                            <Input
                                id="number"
                                type="text"
                                // @ts-expect-error: This
                                color="lightBlue"
                                label={formData?.phone_number}
                                onChange={onChange}
                                // onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            onClick={updateProfile}
                            variant="outlined"
                            // @ts-expect-error: This
                            size="regular"
                            block={true}
                            className="block ml-auto !text-[#9D9C98] !border-[#9D9C98] mt-[67px] w-[210px] text-fs_8 leading-[14.65px] font-bold py-[18px] rounded-[10px]"
                        >
                            сохранить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPanel;
