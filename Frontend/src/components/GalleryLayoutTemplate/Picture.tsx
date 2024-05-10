import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../store/carouselReducer";
import templateTShirt from "../../assets/Gallery/default-image.png";
import { Rnd } from "react-rnd";
import { TemplateData } from "../../types";

const Picture: React.FC<TemplateData> = ({ data }) => {
  const dispatch = useDispatch();
  // @ts-expect-error: This
  const items = useSelector((state) => state.carousel.items);
  // @ts-expect-error: This
  const activeIndex = useSelector((state) => state.carousel.activeCaruselIndex);

  const handleChangeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = event.target;
    const updatedItem = {
      ...items[activeIndex],
      data: {
        ...data,
        [name]: files ? URL.createObjectURL(files[0]) : value,
      },
    };
    dispatch(updateItem(updatedItem));
  };

  return (
    <div className="w-full h-full p-10">
      <div className="body grid grid-cols-2 gap-10 items-center w-full h-full">
        <div className="col-span-1 h-full relative">
          <Rnd
            className={`${
              !items[activeIndex]?.data?.image
                ? "bg-[#eeede9]"
                : "bg-transparent"
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
              {!items[activeIndex]?.data?.image && (
                <img
                  src={templateTShirt}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
              {items[activeIndex]?.data?.image && (
                <img
                  src={items[activeIndex]?.data?.image}
                  alt="template T-shirt"
                  className="object-contain w-[80%] h-[90%]"
                />
              )}
            </label>
          </Rnd>
        </div>
      </div>
    </div>
  );
};

export default Picture;
