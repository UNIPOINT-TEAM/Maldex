import { DishesCategories } from "../../mock/data";
import Product1 from "../../assets/images/product1.png";
import Product2 from "../../assets/images/product2.png";
import Product3 from "../../assets/images/product3.png";
import Product4 from "../../assets/images/product4.png";

const Dishes = () => {
    return (
        <div className="w-full">
            <div className="grid grid-rows-3 grid-cols-12 grid-flow-col gap-4">
                <div className="row-span-3 col-span-2 h-[450px] bg-white flex justify-center items-center">
                    <img src={Product3} alt="no img" />
                </div>
                <div className="row-span-3 col-span-4 ">
                    <div className="grid grid-rows-2 grid-cols-2 gap-4  h-full">
                        <div className="col-span-1 row-span-1 bg-white flex justify-center items-center">
                            <img src={Product2} alt="no img" />
                        </div>
                        <div className="col-span-1 row-span-1 bg-white flex justify-center items-center">
                            <img src={Product4} alt="no img" />
                        </div>
                        <div className="col-span-1 row-span-1 bg-white flex justify-center items-center">
                            <img src={Product4} alt="no img" />
                        </div>
                        <div className="col-span-1 row-span-1 bg-white flex justify-center items-center">
                            <img src={Product2} alt="no img" />
                        </div>
                    </div>
                </div>
                <div className="row-span-3 col-span-3 bg-white flex justify-center items-center">
                    <img src={Product1} alt="no img" />
                </div>
                <div className="row-span-3 col-span-3">
                    <div className="grid grid-rows-2 grid-cols-1 gap-4 h-full">
                        <div className="row-span-1 col-span-1">
                            {DishesCategories[0].categoryItem.map((i) => (
                                <p className="my-2 text-bs font-normal">
                                    {i.name}
                                    <span className="text-sm text-redPrimary">
                                        {i.number}
                                    </span>
                                </p>
                            ))}
                        </div>
                        <div className="row-span-1 col-span-1">
                            <p className="my-2 text-2xl font-normal">
                                {DishesCategories[1].categoryName}
                            </p>
                            {DishesCategories[1].categoryItem.map((i) => (
                                <p className="my-2 text-base font-normal">
                                    {i.name}
                                    <span className="text-sm text-redPrimary">
                                        {i.number}
                                    </span>
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
