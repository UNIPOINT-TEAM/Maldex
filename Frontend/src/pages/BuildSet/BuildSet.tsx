import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";
import accordionIcon from "../../assets/icons/accordion-icon.png";
import { CatalogModal } from "../../components";
import GiftBanner from "../../assets/gift_builder_banner.png";
import ProductCart from "../../assets/images/machine.png";
import { IoAddSharp, IoCloseSharp, IoSearchOutline } from "react-icons/io5";
import { useFetchHook } from "../../hooks/UseFetch";
import BuildSetCarusel from "../../components/BuildSetModals/BuildSetCarusel";
import EmptyContant from "../../components/EmptyContant/EmptyContant";
import CaruselCard from "../../components/BuildSetModals/CaruselCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const BuildSet = () => {
  const [open, setOpen] = useState<number>(0);
  const [buildCart] = useState([]);
  const [handleCustomVisible, setHandleCustomVisible] =
    useState<boolean>(false);
  const [quantityVisible, setQuantityVisible] = useState<boolean>(false);
  const { fetchData, response } = useFetchHook();
  const { fetchData: filterFetch, response: filterProduct } = useFetchHook();
  const dispatch = useDispatch();

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    fetchData({ method: "GET", url: "/gifts/baskets/set/catalogs/" });
  }, []);

  const handleFilterProduct = (query: string) => {
    filterFetch({ method: "GET", url: `product/?${query}` });
  };
  const addToCartHandler = (
    product: any,
    quantity: number,
    totalPrice: number
  ) => {
    dispatch(addToCart({ ...product, quantity: quantity, totalPrice }));
  };

  return (
    <div className="">
      <div className="grid grid-cols-10">
        <div className="col-span-10 lg:col-span-8">
          <div className="bg-greenPrimary h-[75px] flex items-center justify-center ">
            <h1 className=" text-[22px] lg:text-[30px] text-[#fff]">
              Создайте идеальный подарок
            </h1>
          </div>
          <div className="w-full">
            {response.map((item, index) => (
              <Accordion
                className=" border border-l-0 px-5 border-lightPrimary my-4"
                open={open === item?.id}
                icon={
                  <img
                    className={`${
                      open === item?.id ? "rotate-180" : ""
                    } transition-transform w-[18px]`}
                    src={accordionIcon}
                  />
                }
                placeholder={<div />}
              >
                <AccordionHeader
                  className="border-0  p-4"
                  onClick={() => handleOpen(item?.id)}
                  placeholder={<div />}
                >
                  <h2 className="font-Helvetica-Neue tracking-wide text-fs_6 font-normal text-greenPrimary ">
                    {index + 1}. {item?.title}
                  </h2>
                </AccordionHeader>
                <AccordionBody className="p-4" placeholder={<div />}>
                  <BuildSetCarusel
                    addToCartHandler={addToCartHandler}
                    buildSetProducts={item?.product_sets}
                  />
                </AccordionBody>
              </Accordion>
            ))}

            <Accordion
              className=" border border-l-0 static border-lightPrimary px-5 my-4"
              open={handleCustomVisible}
              placeholder={<div />}
            >
              <AccordionHeader
                className="border-0 justify-start p-4 static"
                onClick={() => setHandleCustomVisible(!handleCustomVisible)}
                placeholder={<div />}
              >
                <h2 className="font-Helvetica-Neue tracking-wide text-fs_6 font-normal text-greenPrimary ">
                  {response.length + 1}. Добавьте еще что-то
                </h2>
                <div className="ms-16 font-Helvetica-Neue text-base font-normal text-darkPrimary flex gap-4 items-center">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-[300px] h-[33px] flex items-center gap-3 search border border-darkPrimary px-2 rounded-lg"
                  >
                    <IoSearchOutline className="text-fs_4" />
                    <input
                      onFocus={() => setHandleCustomVisible(true)}
                      onChange={(e) =>
                        handleFilterProduct(`search=${e.target.value}`)
                      }
                      type="text"
                      placeholder="Поиск"
                      className="placeholder:text-darkPrimary border-0 outline-none w-full h-full "
                    />
                  </div>
                  <CatalogModal handleFilterProduct={handleFilterProduct} />
                </div>
              </AccordionHeader>
              <AccordionBody className="p-4" placeholder={<div />}>
                {/* @ts-expect-error: This */}
                {filterProduct?.results?.length > 0 ? (
                  <div className="grid grid-cols-4 gap-y-16 gap-3">
                    {/* @ts-expect-error: This */}
                    {filterProduct?.results?.map((item) => (
                      <CaruselCard
                        item={item}
                        addToCartHandler={addToCartHandler}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-[400px]">
                    <EmptyContant />
                  </div>
                )}
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <div className="col-span-2 mb-6 hidden lg:block">
          {buildCart.length < 0 ? (
            <div>
              <img className="w-full" src={GiftBanner} alt="img" />
              <h2 className="p-[20px] text-center text-fs_3 font-extrabold">
                Создайте свой <br />
                подарочный <span className="text-greenPrimary">набор</span>
              </h2>
            </div>
          ) : (
            <div className="ps-6">
              <div className="heading my-4">
                <h2 className="text-[22px] font-medium text-greenPrimary">
                  Собери свой набор
                </h2>
                <span className="text-darkSecondary">
                  минимальный тираж от 30 шт.
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {[0, 0].map(() => (
                  <div className="group grid grid-cols-12  py-5 border-b border-darkSecondary">
                    <div className="col-span-3 h-full">
                      <img
                        src={ProductCart}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 h-full w-full text-fs_8 flex flex-col justify-between ">
                      <h4 className="font-medium">Инновационный очиститель</h4>
                      <p className="font-normal">15 185.55 ₽</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 duration-300 col-span-3 h-full flex justify-end">
                      <div className="flex w-full flex-col justify-between items-end h-full text-darkSecondary ">
                        <IoCloseSharp className="cursor-pointer" />
                        {!quantityVisible && (
                          <IoAddSharp
                            className="cursor-pointer"
                            onClick={() => setQuantityVisible(true)}
                          />
                        )}
                        {quantityVisible && (
                          <input className="w-[50px] px-2 text-black border border-black rounded-lg focus: outline-none" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-between font-bold">
                <h4 className="text-fs_8 uppercase">Итоговая стоимость:</h4>
                <h4 className="text-base ">14 619,00 ₽</h4>
              </div>
              <div className="w-full flex flex-col">
                <Button
                  placeholder={<button />}
                  className="my-2 hover:shadow-none tracking-wider mt-6 bg-greenPrimary h-[50px] text-fs_7 text-[#fff] shadow-none rounded-lg p-2 w-full"
                >
                  оформить
                </Button>
                <div className="flex justify-between text-darkSecondary">
                  <button className="text-[10px] tracking-wider rounded-md border border-darkSecondary px-[10px] py-[5px]">
                    Поделиться корзиной
                  </button>
                  <button className="text-[10px] tracking-wider rounded-md border border-darkSecondary px-[10px] py-[5px]">
                    создать кп
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildSet;
