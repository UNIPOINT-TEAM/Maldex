// import Badge from '../Badge/Badge'
// import { Input, Button } from "@material-tailwind/react";
// import panel_1 from "../../assets/admin_panel/panel1.png"
// import panel_2 from "../../assets/admin_panel/panel2.png"
// import panel_3 from "../../assets/admin_panel/panel3.png"
// import panel_4 from "../../assets/admin_panel/panel4.png"
// import panel_5 from "../../assets/admin_panel/panel5.png"
// import panel_6 from "../../assets/admin_panel/panel6.png"

// function ConstructorPanel() {
//     const cards = [panel_1, panel_2, panel_3, panel_4, panel_5, panel_6];

//     return (
//         <div className='py-[30px] p-2 pl-[70px]'>
//             <h1 className="tracking-[-4%] text-[28px] text-[#666666]">Ваша подборка</h1>
//             <div className='my-5'>
//                 <Input variant="standard" label="Поиск" placeholder="Поиск"
//                     icon={<i className="fas fa-search text-[#EC1026]" />}
//                     className='!border-b-[#EC1026] text-[#9D9C98]'
//                 />
//             </div>

//             <div className='flex items-center justify-between border-b py-[10px] font-bold flex-wrap gap-2'>
//                 <Button variant="outlined" className='flex items-center gap-2'>Все фильтры (2)
//                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0 1H12" stroke="black" strokeWidth="1.5" />
//                         <path d="M2 6H10" stroke="black" strokeWidth="1.5" />
//                         <path d="M4 11L8 11" stroke="black" strokeWidth="1.5" />
//                     </svg>
//                 </Button>
//                 <Button variant="text" className='flex items-center gap-2 -tracking-[1%]'>Популярные
//                     <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 8L6.5 2L12 8" stroke="black" strokeWidth="2" />
//                     </svg>

//                 </Button>
//             </div>

//             <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[10px] gap-y-11 mt-4'>
//                 {
//                     cards.map((elem, index) => {
//                         return (
//                             <div key={index} className='text-[#222220] cursor-pointer group'>
//                                 <div className='w-[270px] h-[270px] bg-[#F7F7F7] relative flex items-center justify-center'>
//                                     <div className="absolute top-0 left-0 p-[13px] flex items-center gap-[5px]">
//                                         {index % 2 === 0 && <Badge type='NEW' name='NEW' />}
//                                         <Badge type='HIT' name='HIT' />
//                                     </div>

//                                     <img
//                                         src={elem}
//                                         alt={`items ${index + 1}`}
//                                     />

//                                 </div>
//                                 <div className='text-[#222220] text-[14px] leading-[19px] tracking-[2%] font-medium'>
//                                     <div className='hidden group-hover:block mt-[15px]'>
//                                         <p className="">
//                                             Куликов Вадим <br /> 26.03.2023
//                                         </p>
//                                         <p>
//                                             Коммерческое предложение <br /> К5892926
//                                         </p>
//                                         <Button variant="filled" className='bg-[#EC1026] mt-[15px]'>Удалить</Button>
//                                     </div>

//                                     <p className="text-[#9D9C98] group-hover:hidden mt-[15px]">
//                                         Куликов Вадим <br /> 26.03...
//                                     </p>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//             <div>
//                 <Button variant="outlined" className='border-[#9D9C98] text-[#9D9C98] text-[12px] leading-[14.65px] font-bold py-[17px] px-5 rounded-[10px] block mx-auto mt-10 '>сформировать предложение</Button>
//             </div>
//         </div>
//     )
// }

// export default ConstructorPanel


import Badge from '../Badge/Badge'
import { Input, Button } from "@material-tailwind/react";
import panel_1 from "../../assets/admin_panel/panel1.png"
import panel_2 from "../../assets/admin_panel/panel2.png"
import panel_3 from "../../assets/admin_panel/panel3.png"
import panel_4 from "../../assets/admin_panel/panel4.png"
import panel_5 from "../../assets/admin_panel/panel5.png"
import panel_6 from "../../assets/admin_panel/panel6.png"

function ConstructorPanel() {
    const cards = [panel_1, panel_2, panel_3, panel_4, panel_5, panel_6];

    return (
        <div className='py-[30px] p-2 pl-[70px] w-min'>
            <h1 className="tracking-[-4%] text-[28px] text-[#666666]">Ваша подборка</h1>
            <div className='my-5'>
                <Input variant="standard" label="Поиск" placeholder="Поиск"
                    icon={<i className="fas fa-search text-[#EC1026] w-[20px] h-[20px]" />}
                    className='!border-b-[#EC1026] text-[#9D9C98]'
                />
            </div>

            <div className='flex items-center justify-between border-b py-[10px] font-bold flex-wrap gap-2'>
                <Button variant="outlined" className='flex items-center gap-2'>Все фильтры (2)
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12" stroke="black" strokeWidth="1.5" />
                        <path d="M2 6H10" stroke="black" strokeWidth="1.5" />
                        <path d="M4 11L8 11" stroke="black" strokeWidth="1.5" />
                    </svg>
                </Button>
                <Button variant="text" className='flex items-center gap-2 -tracking-[1%]'>Популярные
                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8L6.5 2L12 8" stroke="black" strokeWidth="2" />
                    </svg>

                </Button>
            </div>

            <div className='grid grid-cols-[270px] md:grid-cols-[repeat(2,_270px)] lg:grid-cols-[repeat(3,_270px)]  gap-x-[10px] gap-y-11 mt-4'>
                {
                    cards.map((elem, index) => {
                        return (
                            <div key={index} className='text-[#222220] cursor-pointer group'>
                                <div className='w-full h-[270px] bg-[#F7F7F7] relative flex items-center justify-center'>
                                    <div className="absolute top-0 left-0 p-[13px] flex items-center gap-[5px]">
                                        {index % 2 === 0 && <Badge type='NEW' name='NEW' />}
                                        <Badge type='HIT' name='HIT' />
                                    </div>

                                    <img
                                        src={elem}
                                        alt={`items ${index + 1}`}
                                    />

                                </div>
                                <div className='text-[#222220] text-fs_7 leading-[19px] tracking-[2%] font-medium'>
                                    <div className='hidden group-hover:block mt-[15px]'>
                                        <p className="">
                                            Куликов Вадим <br /> 26.03.2023
                                        </p>
                                        <p>
                                            Коммерческое предложение <br /> К5892926
                                        </p>
                                        <Button variant="filled" className='bg-[#EC1026] mt-[15px]'>Удалить</Button>
                                    </div>

                                    <p className="text-[#9D9C98] group-hover:hidden mt-[15px]">
                                        Куликов Вадим <br /> 26.03...
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Button variant="outlined" className='border-[#9D9C98] text-fs_8 leading-[14.65px] font-bold py-[17px] px-5 rounded-[10px] block mx-auto mt-10 text-[#9D9C98]'>сформировать предложение</Button>
            </div>
        </div>
    )
}

export default ConstructorPanel