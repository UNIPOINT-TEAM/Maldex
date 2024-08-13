import { useDispatch, useSelector } from "react-redux";
import { CarouselState, updateItem } from "../../store/carouselReducer";
import { TemplateData } from "../../types";
import templateTShirt from "../../assets/Gallery/default-image.png";
import AddAplying from "../Gallery/AddAplying";

const Picture: React.FC<TemplateData> = ({ data }) => {
  const dispatch = useDispatch();

  const { items, activeCaruselIndex } = useSelector(
    (state: { carousel: CarouselState }) => state.carousel
  );

  const handleChangeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const updatedItem = {
      ...items[activeCaruselIndex],
      data: {
        ...items[activeCaruselIndex]?.data,
        images_set: {
          ...items[activeCaruselIndex]?.data?.images_set,
          [0]: {
            image_url: URL.createObjectURL(files[0]),
          },
        },
      },
    };
    dispatch(updateItem(updatedItem));
  };

  return (
    <div className="w-full h-[650px] p-10 border rounded-lg border-darkSecondary">
      <div className="body grid grid-cols-2 gap-10 items-center w-full h-full">
        <div className="col-span-1 h-full relative">
          <div
            className={`h-full ${
              !data?.images_set ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <label
              htmlFor="upload-url"
              className="w-full h-full cursor-pointer  flex items-center justify-center"
            >
              <input
                type="file"
                name="image"
                id="upload-url"
                className="sr-only"
                onChange={handleChangeItem}
              />
              {!data?.images_set && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {data?.images_set && data?.images_set[0]?.image_url && (
                <div className="h-[420px] relative group w-full">
                  <div className="absolute left-0 top-[50%] hidden group-hover:flex justify-center w-full ">
                    <AddAplying productData={data} />
                  </div>
                  <img
                    src={data?.images_set[0]?.image_url}
                    alt="template T-shirt"
                    className="object-contain h-full "
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

export default Picture;
