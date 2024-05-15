import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Badge, News, QuestForm, SliderProduct } from "../../components";
import { useFetchHook } from "../../hooks/UseFetch";

function PortfolioDetail() {
  const { id } = useParams();
  const { fetchData, response } = useFetchHook();

  useEffect(() => {
    fetchData({ method: "GET", url: `projects/${id}/` });
  }, [id, fetchData]);

  console.log(response.products);

  return (
    <>
      <div className="container_xxl">
        <div className="mx-3">
          {response?.images_set?.[0] && (
            <div
              className="p-3 mb-5 lg:p-5 bg-cover text-white h-[180px] sm:h-[550px]"
              style={{
                backgroundImage: `url(${response.images_set[0]})`,
              }}
            >
              <div className="md:w-[65%]">
                <Badge name="NEW" type="NEW" />
                <Badge name="HIT" type="HIT" />
                <h3 className="text-fs_7 lg:text-[50px] text-[#475259] leading-tight font-medium">
                  {response?.title}
                </h3>
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 ">
            {response?.images_set?.slice(1).map((article, index) => (
              <div
                key={index}
                className="p-3 lg:p-5 bg-cover text-white h-[400px]"
                style={{
                  backgroundImage: `url(${article})`,
                }}
              >
                <div>
                  <h3 className="text-fs_5 lg:text-[28px] opacity-50">2.10</h3>
                  {/* <h2 className="text-[10px] lg:text-[28px] font-medium">
                    Маска для лица <br /> многоразовая из хлопка, <br /> анатомической формы
                  </h2> */}
                  <Badge name="NEW" />
                  <Badge name="HIT" />
                </div>
              </div>
            ))}
            <div>
              <div className="bg-white h-full w-full flex flex-col justify-between ">
                <div className="lg:pl-5 pl-1.5 pt-1 lg:pt-16 lg:pr-40 font-Articulat tracking-wider h-[350px]">
                  <span className="font-semibold">Состав:</span>
                  <br />
                  <div className="text-[12px] lg:text-[14px] tracking-wide font-medium leading-snug">
                  {response?.description}
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center pb-5 gap-3 font-bold text-[11px]">
                  <Link to="/build-set">
                    <button className="border text-white hover:text-greenPrimary w-auto lg:w-[160px] h-[55px] uppercase rounded-xl bg-greenPrimary hover:bg-[#ffffff] duration-300">
                      хочу также
                    </button>
                  </Link>
                  <Link to="/build-set">
                    <button className="border text-greenPrimary hover:text-white w-auto lg:w-[160px] h-[55px] uppercase rounded-xl bg-[#fff] hover:bg-greenPrimary border-greenPrimary duration-300">
                      посмотреть похожее
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <News title="Новинки" />
          <div className="container_xxl px-3">
            {/* <ProductNav title="sale!" color="red" /> */}
          </div>
          <div className="w-full">
            {/*@ts-expect-error: This */}
            <SliderProduct products={response?.products}/>
          </div>
          <QuestForm />
        </div>
      </div>
    </>
  );
}

export default PortfolioDetail;
