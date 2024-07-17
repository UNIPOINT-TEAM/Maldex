import Badge from "../Badge/Badge";
import { Input, Button } from "@material-tailwind/react";
import panel_1 from "../../assets/admin_panel/panel1.png";
import panel_2 from "../../assets/admin_panel/panel2.png";
import panel_3 from "../../assets/admin_panel/panel3.png";
import panel_4 from "../../assets/admin_panel/panel4.png";
import panel_5 from "../../assets/admin_panel/panel5.png";
import panel_6 from "../../assets/admin_panel/panel6.png";
import { useEffect, useState } from "react";
import { DeleteData, GetData } from "../../pages/Auth/service";

function Liked() {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        GetData("product/liked/").then((res) => {
            setProducts(res), console.log(res);
        });
    }, [status]);

    const deleteLike = (id: any) => {
        DeleteData(`product/${id}/like/`).then(() => setStatus(!status));
    };

    return (
        <div className="py-[30px] p-2 pl-[70px] w-min">
            <h1 className="tracking-[-4%] text-[28px] text-[#666666]">
                Ваша подборка
            </h1>
            <div className="my-5">
                {/*  @ts-expect-error: This */}
                <Input
                    variant="standard"
                    label="Поиск"
                    placeholder="Поиск"
                    icon={
                        <i className="fas fa-search text-[#EC1026] w-[20px] h-[20px]" />
                    }
                    className="!border-b-[#EC1026] text-[#9D9C98]"
                />
            </div>

            <div className="flex items-center justify-between border-b py-[10px] font-bold flex-wrap gap-2">
                {/* @ts-expect-error: This  */}
                {/* <Button variant="outlined" className="flex items-center gap-2">
                    Все фильтры (2)
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 1H12" stroke="black" strokeWidth="1.5" />
                        <path d="M2 6H10" stroke="black" strokeWidth="1.5" />
                        <path d="M4 11L8 11" stroke="black" strokeWidth="1.5" />
                    </svg>
                </Button> */}
                {/*  @ts-expect-error: This */}
                {/* <Button
                    variant="text"
                    className="flex items-center gap-2 -tracking-[1%]"
                >
                    Популярные
                    <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 8L6.5 2L12 8"
                            stroke="black"
                            strokeWidth="2"
                        />
                    </svg>
                </Button> */}
            </div>

            <div className="grid grid-cols-[270px] md:grid-cols-[repeat(2,_270px)] lg:grid-cols-[repeat(3,_270px)]  gap-x-[10px] gap-y-11 mt-4 mb-20">
                {products?.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            className="text-[#222220] cursor-pointer group"
                        >
                            <div className="w-full h-[270px] bg-[#F7F7F7] relative flex items-center justify-center">
                                <div className="absolute top-0 left-0 p-[13px] flex items-center gap-[5px]">
                                    {index % 2 === 0 && (
                                        <Badge type="NEW" name="NEW" />
                                    )}
                                    <Badge type="HIT" name="HIT" />
                                </div>

                                <img
                                    src={elem?.images_set[0].image_url}
                                    alt={`items ${index + 1}`}
                                />
                            </div>
                            <div className="text-[#222220] text-fs_7 leading-[19px] tracking-[2%] font-medium">
                                <div className="hidden group-hover:block mt-[15px]">
                                    <p className="">{elem.name}</p>
                                    <p>
                                        Коммерческое предложение <br /> К5892926
                                    </p>
                                    {/*@ts-expect-error: This */}
                                    <Button
                                        onClick={() => deleteLike(elem.id)}
                                        variant="filled"
                                        className="bg-[#EC1026] mt-[15px]"
                                    >
                                        Удалить
                                    </Button>
                                </div>

                                <p className="text-[#9D9C98] group-hover:hidden mt-[15px]">
                                    {elem.name}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                {/* @ts-expect-error: This */}
                <Button
                    variant="outlined"
                    className="border-[#9D9C98] text-fs_8 leading-[14.65px] font-bold py-[17px] px-5 rounded-[10px] block mx-auto mt-10 text-[#9D9C98]"
                >
                    сформировать предложение
                </Button>
            </div>
        </div>
    );
}

export default Liked;
