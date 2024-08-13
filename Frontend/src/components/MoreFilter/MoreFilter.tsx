import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Radio,
} from "@material-tailwind/react";
import Close from "../../assets/icons/close.svg";
import { useFetchHook } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";
import { resetFilters, setFilterData } from "../../store/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const MoreFilter: React.FC<any> = ({ FilterBtn, type }) => {
  const [activeCard, setActiveCard] = useState(false);
  const [filter, setFilter] = useState(false);
  const [open, setOpen] = useState(1);
  const [inputs, setInputs] = useState({
    materials: {},
    brands: {},
    colors: "",
    size: "",
    price: {
      min_price: "",
      max_price: "",
    },
    location: "",
    quantity: null,
    gender: "",
    print_type: "",
  });
  const { fetchData: fetchBrands, response: brands } = useFetchHook();
  const { fetchData: fetchMaterials, response: materials } = useFetchHook();
  const { fetchData: fetchColors, response: colors } = useFetchHook();
  const { fetchData: fetchPrint, response: prints } = useFetchHook();

  const filterData = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBrands({ method: "GET", url: "/product/brands/" });
    fetchMaterials({ method: "GET", url: "/product/materials/" });
    fetchColors({ method: "GET", url: "/product/colors/" });
    fetchPrint({ method: "GET", url: "/product/prints/" });
  }, []);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const handleFilter = () => {
    setFilter(type === "LESS_FILTER");
    setActiveCard(type === "ALL_FILTR" && !activeCard);
  };

  const handleChange = (e: any, type: string) => {
    setInputs((prev) => ({
      ...prev,
      [type]: { ...prev[type], [e.target.name]: e.target.value },
    }));
  };
  const handleCheckboxChange = (e, type) => {
    const { name, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [name]: checked,
      },
    }));
  };

  const handleSubmit = () => {
    dispatch(setFilterData(inputs));
  };

  const countFilters = () => {
    let filterCount = 0;
    filterCount += Object.values(filterData.materials).filter(Boolean).length;
    filterCount += Object.values(filterData.brands).filter(Boolean).length;
    ["colors", "size", "location", "quantity", "gender", "print_type"].forEach(
      (key) => {
        if (filterData[key]) filterCount++;
      }
    );
    if (filterData.price?.min_price || filterData.price?.max_price)
      filterCount++;
    return filterCount;
  };

  const resetAllFilters = () => dispatch(resetFilters());

  const combinetShow = () => {
    handleSubmit();
    setActiveCard(false);
  };
  return (
    <>
      <div onClick={(e) => e.stopPropagation()}>
        <div
          className={`overLay fixed w-full h-full bg-[#00000083] ${
            activeCard ? "block" : "hidden"
          } top-0 right-0 z-[999]`}
          onClick={() => setActiveCard(false)}
        ></div>
        <div
          className={`overLay fixed w-full h-full ${
            filter ? "block" : "hidden"
          } top-0 right-0 z-10`}
          onClick={() => setFilter(false)}
        ></div>
        <button className="filter-btn h-full rounded-lg relative">
          <div onClick={handleFilter}>
            {React.cloneElement(FilterBtn, { filterCount: countFilters() })}
          </div>
          {filter && (
            <div className="min-w-[380px] h-[250px] border border-gray-500 z-50 absolute bg-[#fff] rounded-xl top-[50px] left-0">
              <span className="w-[20px] h-[20px] bg-white border -z-10 border-gray-500 rotate-45 top-[-4px] left-[8px] absolute"></span>
              <div className="absolute w-full h-full bg-[#ffff] rounded-2xl flex flex-col justify-start items-start p-5">
                <h2 className="mb-2 text-fs_6 font-medium">Цена</h2>
                <div className="flex w-full gap-3 items-center mb-4">
                  <input
                    name="min_price"
                    onChange={(e) => handleChange(e, "price")}
                    placeholder="150 RUB"
                    className="w-[100px] border text-darkSecondary placeholder:text-darkSecondary border-darkSecondary  rounded-md outline-none px-2 font-bold text-sm py-1"
                    type="text"
                    value={inputs.price.min_price}
                  />
                  <span>-</span>
                  <input
                    onChange={(e) => handleChange(e, "price")}
                    name="max_price"
                    value={inputs.price.max_price}
                    placeholder="20 000 RUB"
                    className="w-[100px] border text-darkSecondary placeholder:text-darkSecondary border-darkSecondary rounded-md outline-none font-bold px-2 text-sm py-1"
                    type="text"
                  />
                </div>
                <div className="flex gap-5 items-center w-full mb-3">
                  <div className="flex flex-col items-start w-1/3">
                    <p className="mb-4 text-fs_6 font-medium">Количество</p>
                    <input
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          quantity: e.target.value,
                        }))
                      }
                      value={inputs.quantity}
                      placeholder="20"
                      className="border placeholder:text-darkSecondary border-darkSecondary font-bold text-center rounded-lg w-1/2 px-2 text-sm py-[2px]"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-start w-1/3">
                    <p className="text-fs_6 font-medium">Склад</p>
                    <div className="flex gap-1 items-center">
                      <Radio
                        crossOrigin={""}
                        name="type"
                        onChange={() =>
                          setInputs((prev) => ({
                            ...prev,
                            location: "Москва",
                          }))
                        }
                        checked={inputs.location === "Москва"}
                        label={<p className="font-medium">Москва</p>}
                      />
                      <Radio
                        crossOrigin={""}
                        name="type"
                        onChange={() =>
                          setInputs((prev) => ({
                            ...prev,
                            location: "Европа",
                          }))
                        }
                        checked={inputs.location === "Европа"}
                        label={<p className="font-medium">Европа</p>}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full gap-3 py-3">
                  <button
                    onClick={() => {
                      setActiveCard(!activeCard);
                      setFilter(false);
                    }}
                    className="border font-medium border-black rounded-md px-4 py-2 text-base"
                  >
                    Расширенные фильтры
                  </button>
                  <Link
                    onClick={() => {
                      setFilter(false);
                      handleSubmit();
                    }}
                    className="font-medium border border-black rounded-md px-4 py-2 text-base"
                    to={`/catalog/`}
                  >
                    Найти
                  </Link>
                </div>
              </div>
            </div>
          )}
        </button>
        {activeCard && (
          <div className="absolute w-[400px] z-[99999] bg-[#fff] top-0 right-0">
            <div className="relative bg-white w-full h-full p-4">
              <div className="flex justify-between items-center pr-3 pt-2">
                <p className="text-xl mb-3">Фильтр каталога</p>
                <button
                  onClick={() => {
                    setActiveCard(!activeCard);
                  }}
                >
                  <img src={Close} alt="" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-none font-Helvetica-Neue font-medium"
                  >
                    <p className="text-fs_6 text-black">Цена</p>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    <div className="flex w-full gap-3 items-center mb-4">
                      <input
                        name="min_price"
                        onChange={(e) => handleChange(e, "price")}
                        placeholder="150 RUB"
                        className="w-[100px] border text-darkSecondary placeholder:text-darkSecondary border-darkSecondary  rounded-md outline-none px-2 font-bold text-sm py-1"
                        type="text"
                        value={inputs.price.min_price}
                      />
                      <span>-</span>
                      <input
                        onChange={(e) => handleChange(e, "price")}
                        name="max_price"
                        value={inputs.price.max_price}
                        placeholder="20 000 RUB"
                        className="w-[100px] border text-darkSecondary placeholder:text-darkSecondary border-darkSecondary rounded-md outline-none font-bold px-2 text-sm py-1"
                        type="text"
                      />
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  placeholder={""}
                  open={open === 2}
                  icon={<Icon id={2} open={open} />}
                  className=""
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none font-Helvetica-Neue font-medium"
                    onClick={() => handleOpen(2)}
                  >
                    <p className="text-fs_6 text-black ">Количество</p>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    <input
                      placeholder="20"
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          quantity: e.target.value,
                        }))
                      }
                      value={inputs.quantity}
                      className="border border-gray-400 rounded-md w-1/3 px-2 text-sm py-1"
                      type="text"
                    />
                  </AccordionBody>
                </Accordion>

                <Accordion
                  placeholder={""}
                  open={open === 3}
                  icon={<Icon id={3} open={open} />}
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none font-Helvetica-Neue font-medium"
                    onClick={() => handleOpen(3)}
                  >
                    <h2 className="text-fs_6 text-black">Цвет</h2>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    {colors?.colors?.map((item) => (
                      <div className="">
                        <Radio
                          crossOrigin={""}
                          name="color"
                          onChange={(e) =>
                            setInputs((prev) => ({
                              ...prev,
                              colors: e.target.value,
                            }))
                          }
                          value={item?.name}
                          checked={inputs.colors === item?.name}
                          label={
                            <p className="font-normal lowercase m-0 font-Helvetica-Neue text-base text-darkPrimary">
                              {item?.name}
                            </p>
                          }
                        />
                      </div>
                    ))}
                  </AccordionBody>
                </Accordion>
                <Accordion
                  placeholder={""}
                  open={open === 4}
                  icon={<Icon id={4} open={open} />}
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none font-Helvetica-Neue font-medium"
                    onClick={() => handleOpen(4)}
                  >
                    <p className="text-fs_6 text-black">Склад</p>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    <Radio
                      crossOrigin={""}
                      name="type"
                      value={"Москва"}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          location: e.target.value,
                        }))
                      }
                      checked={inputs.location === "Москва"}
                      label={<p className="font-medium"> Москва</p>}
                    />
                    <Radio
                      crossOrigin={""}
                      name="type"
                      value={"Европа"}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          location: e.target.value,
                        }))
                      }
                      checked={inputs.location === "Европа"}
                      label={<p className="font-medium">Европа</p>}
                    />
                  </AccordionBody>
                </Accordion>
                <Accordion
                  placeholder={""}
                  open={open === 5}
                  icon={<Icon id={5} open={open} />}
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none font-Helvetica-Neue font-medium"
                    onClick={() => handleOpen(5)}
                  >
                    <p className="text-fs_6 text-black">Материал</p>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    {materials?.materials?.map((item) => (
                      <div className="">
                        <Checkbox
                          onChange={(e) => handleCheckboxChange(e, "materials")}
                          name={item?.material}
                          className=""
                          crossOrigin={"anonymous"}
                          ripple={false}
                          label={
                            <p className="font-normal m-0 font-Helvetica-Neue text-base capitalize text-darkPrimary">
                              {item?.material}
                            </p>
                          }
                        />
                      </div>
                    ))}
                  </AccordionBody>
                </Accordion>

                <Accordion
                  placeholder={""}
                  open={open === 6}
                  icon={<Icon id={6} open={open} />}
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none font-Helvetica-Neue font-medium"
                    onClick={() => handleOpen(6)}
                  >
                    <h2 className="text-fs_6 text-black">Бренд</h2>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    {brands &&
                      brands?.brands?.map((brand) => (
                        <div className="">
                          <Checkbox
                            onChange={(e) => handleCheckboxChange(e, "brands")}
                            name={brand?.brand}
                            crossOrigin={"anonymous"}
                            ripple={false}
                            label={
                              <p className="flex font-normal m-0 font-Helvetica-Neue text-base text-darkPrimary">
                                {brand?.brand}
                              </p>
                            }
                          />
                        </div>
                      ))}
                  </AccordionBody>
                </Accordion>

                <Accordion
                  placeholder={""}
                  open={open === 7}
                  icon={<Icon id={7} open={open} />}
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none"
                    onClick={() => handleOpen(7)}
                  >
                    <p className="text-fs_6 text-black font-Helvetica-Neue font-medium">
                      Вид нанесения
                    </p>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    {prints.map((item) => (
                      <div className="">
                        <Radio
                          crossOrigin={""}
                          name="print"
                          onChange={(e) =>
                            setInputs((prev) => ({
                              ...prev,
                              print_type: e.target.value,
                            }))
                          }
                          value={item?.name}
                          checked={inputs.print_type === item?.name}
                          label={
                            <p className="font-normal lowercase m-0 font-Helvetica-Neue text-base text-darkPrimary">
                              {item?.name}
                            </p>
                          }
                        />
                      </div>
                    ))}
                  </AccordionBody>
                </Accordion>

                <Accordion
                  placeholder={""}
                  open={open === 8}
                  icon={<Icon id={8} open={open} />}
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none"
                    onClick={() => handleOpen(8)}
                  >
                    <p className="text-fs_6 text-black font-Helvetica-Neue font-medium">
                      Пол
                    </p>
                  </AccordionHeader>
                  <AccordionBody
                    className={"p-0 mb-4 font-Helvetica-Neue font-medium"}
                  >
                    <Radio
                      crossOrigin={""}
                      name="gender"
                      value={"Мужский"}
                      checked={inputs?.gender === "Мужский"}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          gender: e.target.value,
                        }))
                      }
                      label={<p className="font-medium">Мужской</p>}
                    />
                    <Radio
                      crossOrigin={""}
                      name="gender"
                      value={"Женский"}
                      checked={inputs?.gender === "Женский"}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          gender: e.target.value,
                        }))
                      }
                      label={<p className="font-medium">Женский</p>}
                    />
                  </AccordionBody>
                </Accordion>

                <Accordion
                  placeholder={""}
                  open={open === 9}
                  icon={<Icon id={9} open={open} />}
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none"
                    onClick={() => handleOpen(9)}
                  >
                    <p className="text-fs_6 text-black font-Helvetica-Neue font-medium">
                      Размер
                    </p>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    {sizes.map((size) => (
                      <div className="">
                        <Radio
                          crossOrigin={""}
                          name="size"
                          value={size}
                          checked={inputs?.size === size}
                          onChange={(e) =>
                            setInputs((prev) => ({
                              ...prev,
                              size: e.target.value,
                            }))
                          }
                          label={
                            <p className="font-normal uppercase m-0 font-Helvetica-Neue text-base text-darkPrimary">
                              {size}
                            </p>
                          }
                        />
                      </div>
                    ))}
                  </AccordionBody>
                </Accordion>
              </div>
              <div className="flex justify-center items-center w-full mt-6 gap-6">
                <button
                  className="text-base font-bold"
                  onClick={resetAllFilters}
                >
                  Сбросить
                </button>
                <button
                  onClick={combinetShow}
                  className="bg-white  h-[48px] w-[160px] capitalize  flex items-center justify-center font-bold rounded-lg border border-darkPrimary"
                >
                  показать {countFilters() > 0 && `(${countFilters()})`}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoreFilter;
