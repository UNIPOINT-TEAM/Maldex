import { input } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
interface DefaultTemplateProps {
  name?: string;
  price?: string;
  circulation?: number;
  total?: string;
  description?: string;
  characteristics?: string;
}
const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
  name,
  price,
  circulation,
  total,
  description,
  characteristics,
}) => {
  const {
    landscape_visible,
    standard_visible,
    prices_visible,
    codeArticle_visible,
    total_visible,
    description_visible,
    characteristic_visible,
  } = useSelector((state) => state.carousel.status);
  const [productData, setProductData] = useState<any>({
    name: name,
    price: price,
    circulation: circulation,
    total: total,
    description: description,
    characteristics: characteristics,
  });

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const inputStyle =
    "text-fs_4 w-full font-medium p-[6px] rounded-lg focus:outline outline-[#e99125]";

  return (
    <div
      className={`grid ${
        landscape_visible ? "w-full" : "w-[400px]"
      }  grid-cols-7 h-full border p-3 rounded-lg border-darkSecondary`}
    >
      <div
        className={`${
          landscape_visible ? "col-span-3" : "col-span-7"
        } p-8 flex items-center w-full`}
      >
        <img
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
          value={productData.name}
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
                  className={inputStyle}
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
                  className={inputStyle}
                  onChange={handleInputChange}
                />
              </>
            )}
          </div>
          <div className="col-span-6">
            {total_visible && (
              <>
                <h3 className="text-[#222220] text-[12px] opacity-70 font-medium mb-2">
                  Итого
                </h3>
                {/* <input
                  name="total"
                  value={productData.total}
                  onChange={handleInputChange}
                  className={inputStyle}
                /> */}
                <div>
                  <p className={inputStyle}>{productData.total}</p>
                </div>
              </>
            )}
          </div>
        </div>
        {characteristic_visible && <input />}
        {description_visible && landscape_visible! && (
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            rows={6}
            className="w-full mt-2 resize-none rounded-lg max-h-[300px] font-normal p-[6px] overflow-hidden leading-tight focus:outline outline-[#e99125]"
          />
        )}
      </div>
    </div>
  );
};

export default DefaultTemplate;
