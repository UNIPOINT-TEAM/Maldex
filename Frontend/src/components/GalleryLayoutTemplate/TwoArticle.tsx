import { useDispatch, useSelector } from "react-redux";
import templateTShirt from "../../assets/Gallery/default-image.png";
import { updateItem } from "../../store/carouselReducer";
import { TemplateData } from "../../types";
import AddAplying from "../Gallery/AddAplying";
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

          images_set: {
            ...items[activeIndex]?.data?.images_set,
            [name]: URL.createObjectURL(files[0]),
          },
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
      className="w-full h-full p-5 border border-darkSecondary rounded-lg"
    >
      <div className="body grid grid-cols-2 gap-5 items-center w-full h-full">
        <div className="col-span-1 h-full relative">
          <div
            className={`w-full  h-full ${
              !data?.images_set ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <label
              htmlFor="upload-url"
              className="w-full h-full flex items-center justify-center"
            >
              <input
                type="file"
                name="image_url"
                id="upload-url"
                className="sr-only"
                onChange={handleChangeItem}
              />
              {!data?.images_set?.image_url && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {data?.images_set && data?.images_set?.image_url && (
                <div className="h-[450px] group w-full relative">
                  <div className="absolute left-0 top-[50%] hidden group-hover:flex justify-center w-full ">
                    <AddAplying
                      name=""
                      onChange={() => null}
                      productData={
                        data?.images_set[0]?.image_url ||
                        data?.images_set[0]?.image
                      }
                    />
                  </div>
                  <img
                    src={data?.images_set?.image_url}
                    className="object-contain w-full  h-full"
                    alt="product image"
                  />
                </div>
              )}
            </label>
          </div>
        </div>
        <div className="col-span-1 h-full relative">
          <div
            className={`w-full h-full ${
              !data?.images_set?.image_url2 ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <label
              htmlFor="upload-url2"
              className="w-full h-full flex items-center justify-center"
            >
              <input
                type="file"
                name="image_url2"
                id="upload-url2"
                className="sr-only"
                onChange={handleChangeItem}
              />
              {!data?.images_set?.image_url2 && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {data?.images_set?.image_url2 && (
                <div className="h-[450px] w-full relative group">
                  <div className="absolute left-0 top-[50%] hidden group-hover:flex justify-center w-full ">
                    <AddAplying
                      name=""
                      onChange={() => null}
                      productData={
                        data?.images_set[0]?.image_url ||
                        data?.images_set[0]?.image
                      }
                    />
                  </div>
                  <img
                    src={data?.images_set?.image_url2}
                    className="object-contain w-full h-full"
                    alt="product image"
                  />
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoArticle;
