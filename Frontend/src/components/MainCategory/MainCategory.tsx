// import { CategoryItems } from "../../mock/data";

// const MainCategory = () => {
//     return (
//         <>
//             <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center">
//                 {CategoryItems.map((i) => (
//                     <div className="w-1/6 py-5 relative content hover:bg-redPrimary">
//                         <img className="w-1/5 mb-5" src={i.logo} alt="" />
//                         <p className="text-lg mb-3">{i.name}</p>
//                         <p>{i.childCategories[0]}</p>
//                         <p>{i.childCategories[1]}</p>
//                         <div className="absolute w-full min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
//                             <img className="w-1/5 mb-5" src={i.logo} alt="" />
//                             <p className="text-lg mb-3">{i.name}</p>
//                             {i.childCategories.map((item) => (
//                                 <div className="rounded hover:bg-greenPrimary hover:text-white py-1 px-2">
//                                     <p>{item}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default MainCategory;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../services/services";

const MainCategory = () => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        getData("product/categories/?is_available=true").then((res) =>
            setResponse(res)
        );
    }, []);

    return (
        <>
            <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center">
                {response.map((category) => (
                    <div
                    // @ts-expect-error: This
                        key={category.id}
                        className="w-1/6 py-5 relative content hover:bg-redPrimary"
                    >
                        <img
                            className="w-1/5 mb-5"
                            // @ts-expect-error: This
                            src={category.icon}
                            alt=""
                        />
                        <p className="text-lg mb-3">
                            {/*  @ts-expect-error: This */}
                            {category?.name}</p>
                            {/* @ts-expect-error: This */}
                        {category?.children &&
                        // @ts-expect-error: This
                            category?.children?.length > 0 && (
                                <>
                                    <p className="h-[50px]">
                                        {category?.
                                        // @ts-expect-error: This
                                        children[0]?.name}
                                    </p>
                                    <p className="h-[50px]">
                                        {category?.
                                        // @ts-expect-error: This
                                        children[1]?.name}
                                    </p>
                                </>
                            )}
                        <div className="absolute w-full min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
                            <img
                                className="w-1/5 mb-5"
                                // @ts-expect-error: This
                                src={category?.icon}
                                alt=""
                            />
                            {/* @ts-expect-error: This */}
                            <p className="text-lg mb-3">{category?.name}</p>
                            {/* @ts-expect-error: This */}
                            {category?.children &&
                                // @ts-expect-error: This
                                category?.children.map((childCategory) => (
                                    <div
                                        key={childCategory.id}
                                        className="rounded hover:bg-greenPrimary hover:text-white py-1 "
                                    >
                                        <Link to="/catalog">
                                            <p>{childCategory.name}</p>
                                        </Link>
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
