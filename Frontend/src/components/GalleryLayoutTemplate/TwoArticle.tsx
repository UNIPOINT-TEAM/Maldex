import { useDispatch, useSelector } from "react-redux";
import { Rnd } from "react-rnd";
import templateTShirt from "../../assets/Gallery/default-image.png";
import { updateItem } from "../../store/carouselReducer";
import { TemplateData } from "../../types";
const TwoArticle: React.FC<TemplateData> = ({ data, background }) => {
  const dispatch = useDispatch();
  // @ts-expect-error: This
  const items = useSelector((state) => state.carousel.items);
  // @ts-expect-error: This
  const activeIndex = useSelector((state) => state.carousel.activeCaruselIndex);

  const handleChangeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    dispatch(
      updateItem({
        ...items[activeIndex],
        data: {
          ...items[activeIndex]?.data,
          /*@ts-expect-error: This */
          [name]: URL.createObjectURL(files[0]),
        },
      })
    );
  };

  return (
    <div
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className="w-full h-full p-10 border border-darkSecondary rounded-lg"
    >
      <div className="body grid grid-cols-2 gap-10 items-center w-full h-full">
        <div className="col-span-1 h-full relative">
          <Rnd
            className={`w-full h-full ${
              !data?.image ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <label
              htmlFor="upload-url"
              className="w-full h-full flex items-center justify-center"
            >
              <input
                type="file"
                name="image"
                id="upload-url"
                className="sr-only"
                onChange={handleChangeItem}
              />
              {!data?.image && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {data?.image && (
                <img
                  src={data?.image}
                  className="object-contain w-full h-full"
                  alt="product image"
                />
              )}
            </label>
          </Rnd>
        </div>
        <div className="col-span-1 h-full relative">
          <Rnd
            className={`w-full h-full ${
              !data?.image2 ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <label
              htmlFor="upload-url2"
              className="w-full h-full flex items-center justify-center"
            >
              <input
                type="file"
                name="image2"
                id="upload-url2"
                className="sr-only"
                onChange={handleChangeItem}
              />
              {!data?.image2 && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {data?.image2 && (
                <img
                  src={data?.image2}
                  className="object-contain w-full h-full"
                  alt="product image"
                />
              )}
            </label>
          </Rnd>
        </div>
      </div>
    </div>
  );
};

export default TwoArticle;
