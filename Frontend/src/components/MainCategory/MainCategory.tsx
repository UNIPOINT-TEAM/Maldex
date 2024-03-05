import { CategoryItems } from "../../mock/data";

const MainCategory = () => {
    return (
        <>
            <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center">
                {CategoryItems.map((i) => (
                    <div className="w-1/6 py-5 relative content hover:bg-redPrimary">
                        <img className="w-1/5 mb-5" src={i.logo} alt="" />
                        <p className="text-lg mb-3">{i.name}</p>
                        <p>{i.childCategories[0]}</p>
                        <p>{i.childCategories[1]}</p>
                        <div className="absolute w-full min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
                            <img className="w-1/5 mb-5" src={i.logo} alt="" />
                            <p className="text-lg mb-3">{i.name}</p>
                            {i.childCategories.map((item) => (
                                <div className="rounded hover:bg-greenPrimary hover:text-white py-1 px-2">
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MainCategory;
