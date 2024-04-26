// import { DishesCategories } from "../../mock/data";
// import Product1 from "../../assets/images/product1.png";
// import Product2 from "../../assets/images/product2.png";
// import Product3 from "../../assets/images/product3.png";
// import Product4 from "../../assets/images/product4.png";
import { useEffect, useState } from "react";
import { getData } from "../../services/services";

const Dishes = () => {
    const [detail, setDetail] = useState(null);
    useEffect(() => {
        getData("product/home-category").then((res) => {
            setDetail(res);
        });
    }, []);

    return (
        <div className="w-full mb-[80px]">
            <div className="flex items-center justify-between">
                {/* @ts-expect-error: This */}
                <h3 className="section-title">{detail?.name}</h3>
                <button className="mx-3 uppercase text-fs_8 font-bold p-[6px] tracking-wide  border border-redPrimary rounded-lg text-redPrimary block ss:hidden">
                    Все товары
                </button>
            </div>
            <div className="grid grid-rows-3 h-[360px] grid-cols-12 grid-flow-col gap-4">
                <div className="col-span-12 lg:col-span-9 h-full row-span-3">
                    <div className="grid grid-cols-5 md:grid-cols-11 h-full gap-[10px]">
                        <div className="col-span-3 bg-white flex items-center justify-center">
                            <img
                                src={
                                    // @ts-expect-error: This
                                    detail?.products[0]?.images_set[0]
                                        ?.image_url
                                }
                                alt=""
                            />
                        </div>
                        <div className="col-span-2 lg:col-span-4">
                            <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 h-full gap-[10px]">
                                <div className="bg-white flex items-center justify-center">
                                    <img
                                        src={
                                            // @ts-expect-error: This
                                            detail?.products[1]?.images_set[0]
                                                ?.image_url
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="bg-white flex items-center justify-center">
                                    <img
                                        src={
                                            // @ts-expect-error: This
                                            detail?.products[2]?.images_set[0]
                                                ?.image_url
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="bg-white items-center justify-center hidden lg:flex">
                                    <img
                                        src={
                                            // @ts-expect-error: This
                                            detail?.products[3]?.images_set[0]
                                                ?.image_url
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="bg-white items-center justify-center hidden lg:flex">
                                    <img
                                        src={
                                            // @ts-expect-error: This
                                            detail?.products[4]?.images_set[0]
                                                ?.image_url
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 bg-white  items-center justify-center hidden md:flex">
                            <img
                                src={
                                    // @ts-expect-error: This
                                    detail?.products[5]?.images_set[0]
                                        ?.image_url
                                }
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="row-span-3 col-span-3 hidden lg:block">
                    <div className="grid grid-rows-2 grid-cols-1 gap-4 h-full">
                        <div className="row-span-1 col-span-1 flex flex-col gap-[3px]">
                        {/*@ts-expect-error: This */}
                            {detail?.children.map((i) => (
                                <p
                                    key={i.id}
                                    className="text-[14px] font-medium"
                                >
                                    {i.name}
                                    <b className="text-sm text-redPrimary ms-1 font-medium">
                                        {i.count}
                                    </b>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dishes;
