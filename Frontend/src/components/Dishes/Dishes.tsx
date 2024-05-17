import { useEffect, useState } from "react";
import { getData } from "../../services/services";
import { useFetchHook } from "../../hooks/UseFetch";

const Dishes = () => {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    getData("product/home-category").then((res) => {
      setDetail(res);
    });
  }, []);
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/product/home-category" });
  }, []);

  return (
    <div className="w-full mb-[80px]">
      <div className="flex items-center justify-between">
        {/* @ts-expect-error: This */}
        <h3 className="section-title">{response?.name}</h3>
        <button className="mx-3 uppercase text-fs_8 font-bold p-[6px] tracking-wide  border border-redPrimary rounded-lg text-redPrimary block ss:hidden">
          Все товары
        </button>
      </div>
      <div className="grid grid-rows-3  grid-cols-12  gap-4">
        <div className="col-span-12  lg:col-span-9 h-[360px] row-span-3">
          <div className="grid grid-cols-5 md:grid-cols-11 h-full gap-[10px]">
            <div className="col-span-3 bg-white flex items-center justify-center">
              <div style={{ mixBlendMode: "multiply" }}>
                <img
                  src={
                    // @ts-expect-error: This
                    detail?.products &&
                    /*@ts-expect-error: This */
                    detail?.products[0]?.images_set[0]?.image_url
                  }
                  alt=""
                  className="h-[220px] object-contain"
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-4">
              <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 h-full gap-[10px]">
                <div className="bg-white flex items-center justify-center">
                  <div style={{ mixBlendMode: "multiply" }}>
                    <img
                      src={
                        // @ts-expect-error: This
                        detail?.products && detail?.products[1]?.images_set[0]?.image_url
                      }
                      alt=""
                      className="w-[140px] object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white flex items-center justify-center">
                  <div style={{ mixBlendMode: "multiply" }}>
                    <img
                      src={
                        // @ts-expect-error: This
                        detail?.products && detail?.products[2]?.images_set[0]?.image_url
                      }
                      alt=""
                      className="w-[140px] object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white items-center justify-center hidden lg:flex">
                  <div style={{ mixBlendMode: "multiply" }}>
                    <img
                      src={
                        // @ts-expect-error: This
                        detail?.products && detail?.products[3]?.images_set[0]?.image_url
                      }
                      alt=""
                      className="w-[140px] object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white items-center justify-center hidden lg:flex">
                  <div style={{ mixBlendMode: "multiply" }}>
                    <img
                      src={
                        // @ts-expect-error: This
                        detail?.products && detail?.products[4]?.images_set[0]?.image_url
                      }
                      alt=""
                      className="w-[140px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 bg-white  items-center justify-center hidden md:flex">
              <div style={{ mixBlendMode: "multiply" }}>
                <img
                  src={
                    // @ts-expect-error: This
                    detail?.products && detail?.products[5]?.images_set[0]?.image_url
                  }
                  alt=""
                  className="w-[300px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 col-span-3 hidden lg:block">
          <div className="grid grid-rows-2 grid-cols-1 gap-4 ">
            <div className="row-span-2 col-span-1 flex flex-col gap-[3px]">
              {/*@ts-expect-error: This */}
              {detail?.children && detail?.children.map((i) => (
                  <p key={i.id} className="text-[14px] font-medium">
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
