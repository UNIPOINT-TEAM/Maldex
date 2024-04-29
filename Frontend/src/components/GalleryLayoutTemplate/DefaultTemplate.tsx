import { useState } from "react";
import { useSelector } from "react-redux";
import { Rnd } from "react-rnd";
import { TemplateData } from "../../types";

const DefaultTemplate: React.FC<TemplateData> = ({ data, background }) => {
  const {
    landscape_visible,
    prices_visible,
    codeArticle_visible,
    description_visible,
    characteristic_visible,
  } = useSelector((state) => state.carousel.status);
  const [productData, setProductData] = useState({
    name: data?.name,
    price: data?.price,
    circulation: data?.circulation,
    total: data?.total,
    description: data?.description,
    characteristics: data?.characteristics,
    image: data?.image,
  });
  console.log(landscape_visible);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };
  const inputStyle =
    "bg-transparent font-medium p-[6px] rounded-lg focus:outline outline-[#e99125]";

  return (
    <div
      style={{ backgroundColor: background?.color }}
      className={`grid ${
        landscape_visible ? "w-full" : "w-[400px]"
      }  grid-cols-7 h-full border p-3 rounded-lg border-darkSecondary 
      }]`}
    >
      <div
        className={`${
          landscape_visible ? "col-span-3" : "col-span-7"
        } p-8 flex items-center w-full`}
      >
        <img
          src={data?.image}
          alt="slider-img"
          className="w-[500px] object-contain object-center h-auto"
        />
      </div>
      <div
        className={`${
          landscape_visible ? "col-span-4" : "col-span-7"
        } flex flex-col`}
      >
        <input
          name="name"
          onChange={handleInputChange}
          value={data?.name}
          className={`${inputStyle} text-[36px]`}
        />
        <div className="grid grid-cols-12 gap-4 w-full my-2">
          <div className="col-span-3">
            {prices_visible && (
              <>
                <h3 className="text-[#222220] text-[12px] opacity-70 font-medium mb-2">
                  Цена (руб)
                </h3>
                <input
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  className={`${inputStyle} text-fs_4`}
                />
              </>
            )}
          </div>
          <div className="col-span-3">
            {codeArticle_visible && (
              <>
                <h3 className="text-[#222220] text-[12px] opacity-70 font-medium mb-2">
                  Тираж (шт)
                </h3>
                <input
                  name="circulation"
                  value={productData.circulation}
                  className={`${inputStyle} text-fs_4`}
                  onChange={handleInputChange}
                />
              </>
            )}
          </div>
          <div className="col-span-6 flex flex-col items-end">
            {codeArticle_visible && (
              <div>
                <h3 className="text-[#222220] text-[12px] opacity-70 font-medium mb-2">
                  Тираж (шт)
                </h3>
                <input
                  name="circulation"
                  value={data?.total + " ₽"}
                  className={`${inputStyle} text-fs_4 w-[150px]`}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        </div>
        {characteristic_visible && (
          <div className="relative w-full h-[150px]">
            <Rnd>
              <div className="flex items-center gap-1">
                <label htmlFor="vendor-code">Артикул:</label>
                <input
                  id="vendor-code"
                  name="vendor-code"
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.characteristics.vendor_code}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="size">Размер:</label>
                <input
                  id="size"
                  name="size"
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.characteristics.size}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="material">Материал:</label>
                <input
                  id="material"
                  name="material"
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.characteristics.material}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="color">Вес:</label>
                <input
                  id="color"
                  name="color"
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.characteristics.width}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="color">Доступное нанесение:</label>
                <input
                  id="available_application"
                  name="available_application"
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.characteristics.available_application}
                />
              </div>
            </Rnd>
          </div>
        )}
        {description_visible && landscape_visible! && (
          <div className="relative w-full">
            <Rnd style={{ width: "100%", height: "100%" }} className="w-full">
              <textarea
                name="description"
                value={data?.description}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-transparent mt-2 resize-none rounded-lg max-h-[300px] font-normal p-[6px] overflow-hidden leading-tight focus:outline outline-[#e99125]"
              />
            </Rnd>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultTemplate;
