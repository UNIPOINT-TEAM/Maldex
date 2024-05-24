import { useEffect, useState } from "react";
import filtr from "../../assets/icons/filtr.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Radio,
} from "@material-tailwind/react";
import Close from "../../assets/icons/close.png";
import { useFetchHook } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";
const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
// @ts-ignore
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

const MoreFilter = () => {
  const [activeCard, setActiveCard] = useState(false);
  const [filter, setFilter] = useState(false);
  const [open, setOpen] = useState(1);
  //@ts-ignore
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleFilter = () => setFilter(!filter);
  const { fetchData: fetchBrands, response: brands } = useFetchHook();
  const { fetchData: fetchMaterials, response: materials } = useFetchHook();
  const { fetchData: fetchColors, response: colors } = useFetchHook();
  const [filterData, setFilteData] = useState({
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
  });
  useEffect(() => {
    fetchBrands({ method: "GET", url: "/product/brands/" });
    fetchMaterials({ method: "GET", url: "/product/materials/" });
    fetchColors({ method: "GET", url: "/product/colors/" });
  }, []);
  const generateQueryString = () => {
    const queryParameters = [];

    if (filterData.materials) {
      const selectedMaterials = Object.keys(filterData.materials).filter(
        /* @ts-expect-error: This */
        (key) => filterData.materials[key]
      );
      if (selectedMaterials.length > 0) {
        queryParameters.push(`material=${selectedMaterials.join(",")}`);
      }
    }

    if (filterData.brands) {
      const selectedBrands = Object.keys(filterData.brands).filter(
        /* @ts-expect-error: This */
        (key) => filterData.brands[key]
      );
      if (selectedBrands.length > 0) {
        queryParameters.push(`brand=${selectedBrands.join(",")}`);
      }
    }
    if (filterData.colors) {
      queryParameters.push(`colors=${filterData.colors}`);
    }
    if (filterData.size) {
      queryParameters.push(`size=${filterData.size}`);
    }
    if (filterData.location == "Москва") {
      queryParameters.push(`warehouse=Москва`);
    } else if (filterData.location == "Европа") {
      queryParameters.push(`warehouse=Европа`);
    }
    if (filterData.quantity) {
      queryParameters.push(`quantity=${filterData.quantity}`);
    }

    if (filterData.price.min_price || filterData.price.max_price) {
      if (filterData.price.min_price === "") {
        return queryParameters.push(`price=${filterData.price?.min_price}`);
      }
      queryParameters.push(
        `price=${filterData.price?.min_price},${filterData.price?.max_price}`
      );
    }
    return `?${queryParameters.join("&")}`;
  };

  const handleChange = (e: any, type: string) => {
    setFilteData((prev) => ({
      ...prev,
      /* @ts-expect-error: This */
      [type]: { ...prev[type], [e.target.name]: e.target.value },
    }));
  };

  return (
    <>
      <div className="">
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
        <button className="filter-btn w-8 border h-full border-gray-300 rounded-lg hidden lg:block relative">
          <div
            onClick={handleFilter}
            className="w-full px-2 h-full flex justify-center items-center"
          >
            <img src={filtr} alt="filtr-icon" className="mx-auto" />
          </div>
          {!filter && (
            <div className=" hidden md:block w-[70px] h-[30px] border border-gray-400 z-50 absolute bg-white rounded-lg shadow-md top-[45px] left-0 filter-opac">
              <span className="w-[20px] h-[20px] bg-white border border-gray-400 rotate-45 top-[-4px] left-[5px] absolute"></span>
              <div className="absolute w-full h-full bg-white rounded-lg flex justify-center items-center ">
                <p className="text-[12px]">Фильтры</p>
              </div>
            </div>
          )}

          {filter && (
            <div className="min-w-[380px] h-[250px] border border-gray-500 z-50 absolute bg-[#fff] rounded-xl  top-[50px] left-0 ">
              <span className="w-[20px] h-[20px] bg-white border -z-10 border-gray-500 rotate-45  top-[-4px] left-[8px] absolute"></span>
              <div className="absolute w-full h-full bg-[#ffff] rounded-2xl flex flex-col justify-start items-start p-5">
                <h2 className="mb-2 text-fs_6 font-medium">Цена</h2>
                <div className="flex w-full gap-3 items-center mb-4">
                  <input
                    name="min_price"
                    onChange={(e) => handleChange(e, "price")}
                    placeholder="150 RUB"
                    className="w-[100px] border text-darkSecondary placeholder:text-darkSecondary border-darkSecondary  rounded-md outline-none px-2 font-bold text-sm py-1"
                    type="text"
                    value={filterData.price.min_price}
                  />
                  <span>-</span>
                  <input
                    onChange={(e) => handleChange(e, "price")}
                    name="max_price"
                    value={filterData.price.max_price}
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
                        /*@ts-expect-error: This */
                        setFilteData((prev) => ({
                          ...prev,
                          quantity: e.target.value,
                        }))
                      }
                      /*@ts-expect-error: This */
                      value={filterData.quantity}
                      placeholder="20"
                      className="border  placeholder:text-darkSecondary border-darkSecondary font-bold text-center rounded-lg w-1/2 px-2 text-sm py-[2px]"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-start w-1/3">
                    <p className=" text-fs_6 font-medium">Склад</p>
                    <div className="flex gap-1 items-center">
                      <Radio
                        crossOrigin={""}
                        name="type"
                        onChange={() =>
                          setFilteData((prev) => ({
                            ...prev,
                            location: "Москва",
                          }))
                        }
                        checked={filterData.location === "Москва"}
                        label={<p className="font-medium">Москва</p>}
                      />
                      <Radio
                        crossOrigin={""}
                        name="type"
                        onChange={() =>
                          setFilteData((prev) => ({
                            ...prev,
                            location: "Европа",
                          }))
                        }
                        checked={filterData.location === "Европа"}
                        label={<p className="font-medium">Европа </p>}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full gap-3 py-3">
                  <button
                    onClick={() => {
                      setActiveCard(!activeCard), setFilter(false);
                    }}
                    className="border font-medium border-black rounded-md px-4 py-2 text-base"
                  >
                    Расширенные фильтры
                  </button>
                  <Link
                    onClick={() => setFilter(false)}
                    className="font-medium border border-black rounded-md px-4 py-2 text-base"
                    to={`/catalog${generateQueryString()}`}
                  >
                    Найти
                  </Link>
                </div>
              </div>
            </div>
          )}
        </button>
        {activeCard && (
          <div className="absolute w-[400px] z-[99999] min-h-[600px] bg-[#fff] top-0 right-0">
            <div className="w-full h-full p-5 mb-5">
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
              <div className="h-full pr-2 mb-5 ">
                <Accordion
                  placeholder={""}
                  open={open === 1}
                  icon={<Icon id={1} open={open} />}
                >
                  <AccordionHeader
                    placeholder={""}
                    className="border-none font-Helvetica-Neue font-medium"
                    onClick={() => handleOpen(1)}
                  >
                    <p className="text-fs_6 text-black">Цена</p>
                  </AccordionHeader>
                  <AccordionBody className={"p-0 mb-4"}>
                    <div className="flex w-full gap-3 items-center mb-4">
                      <input
                        value={filterData.price.min_price}
                        placeholder="150 RUB"
                        className="w-[90px] border border-gray-400 font-medium rounded-lg outline-none px-2 py-1 text-fs_8 "
                        type="text"
                        name="min_price"
                        onChange={(e) => handleChange(e, "price")}
                      />
                      <p>-</p>
                      <input
                        value={filterData.price.max_price}
                        onChange={(e) => handleChange(e, "price")}
                        placeholder="20 000 RUB"
                        className="w-[90px] border font-medium border-gray-400 rounded-lg outline-none px-2 py-1 text-fs_8 "
                        type="text"
                        name="max_price"
                      />
                    </div>
                    <div className="flex items-center">
                      <div className="w-[12px] h-[12px] border border-black rounded-[6px]"></div>
                      <div className="w-[100px] h-[2px] bg-black"></div>
                      <div className="w-[12px] h-[12px] border border-black rounded-[6px]"></div>
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
                        /*@ts-expect-error: This */
                        setFilteData((prev) => ({
                          ...prev,
                          quantity: e.target.value,
                        }))
                      }
                      /*@ts-expect-error: This */
                      value={filterData.quantity}
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
                    {/*@ts-expect-error: This */}
                    {colors.colors.map((item) => (
                      <div className="">
                        <Radio
                          crossOrigin={""}
                          name="color"
                          onChange={() =>
                            setFilteData((prev) => ({
                              ...prev,
                              colors: item?.name,
                            }))
                          }
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
                      onChange={() =>
                        setFilteData((prev) => ({
                          ...prev,
                          location: "Москва",
                        }))
                      }
                      checked={filterData.location === "Москва"}
                      label={<p className="font-medium">Европа</p>}
                    />
                    <Radio
                      crossOrigin={""}
                      name="type"
                      onChange={() =>
                        setFilteData((prev) => ({
                          ...prev,
                          location: "Европа",
                        }))
                      }
                      checked={filterData.location === "Европа"}
                      label={<p className="font-medium"> Москва</p>}
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
                    {/* @ts-expect-error: This */}
                    {materials.materials.map((item) => (
                      <div className="">
                        <Checkbox
                          onChange={(e) => handleChange(e, "materials")}
                          name={item?.material}
                          crossOrigin={"anonymous"}
                          ripple={false}
                          label={
                            <p className="font-normal m-0 font-Helvetica-Neue text-base text-darkPrimary">
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
                    {/* @ts-expect-error: This */}
                    {brands &&
                      brands.brands.map((brand) => (
                        <div className="">
                          <Checkbox
                            onChange={(e) => handleChange(e, "brands")}
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
                    <div className="flex gap-2 items-center ml-5 mb-2">
                      <div className="p-2 rounded-md border border-gray-400"></div>
                      <p className="text-sm text-black">Acros</p>
                    </div>
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
                      label={<p className="font-medium">Мужской</p>}
                    />
                    <Radio
                      crossOrigin={""}
                      name="gender"
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
                          name="color"
                          onChange={() =>
                            setFilteData((prev) => ({
                              ...prev,
                              size: size,
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
                <div className="flex justify-center items-center w-full mt-6 gap-6">
                  <button className="text-base font-bold">Сбросить</button>
                  <Link
                    onClick={() => setActiveCard(false)}
                    to={`catalog/${generateQueryString()}`}
                    className="bg-white  h-[48px] w-[160px] capitalize  flex items-center justify-center font-bold rounded-lg border border-darkPrimary"
                  >
                    показать
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MoreFilter;
