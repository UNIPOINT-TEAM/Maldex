import { Rnd } from "react-rnd";
import templateTShirt from "../../assets/Gallery/default-image.png";
import { TemplateData } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../store/carouselReducer";
const MaldexTepmlate: React.FC<TemplateData> = ({ data, background }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.carousel.items);
  // @ts-expect-error: This
  const activeIndex = useSelector((state) => state.carousel.activeCaruselIndex);

  const handleChangeItem = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <div
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className="w-full h-full flex flex-col gap-3 p-10"
      id="one-aticle"
    >
      <div className="heading grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 relative h-full">
          <Rnd className={`${!data?.name ? "bg-[#eeede9]" : "bg-transparent"}`}>
            <input
              onChange={handleChangeItem}
              type="text"
              value={data?.name}
              name="name"
              className="text-[36px] h-full w-full font-medium p-[4px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
            />
          </Rnd>
        </div>
      </div>
      <div className="body grid grid-cols-12 gap-10 items-center w-full h-full">
        <div className="col-span-5 h-full relative">
          <Rnd position={{ x: 0, y: 0 }} className="w-full h-full">
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
                <div className="h-full flex items-center justify-center bg-[#eeede9]">
                  <img
                    src={templateTShirt}
                    alt="template T-shirt"
                    className="object-contain w-[80%] h-[90%]"
                  />
                </div>
              )}
              <div className="relative h-full col-span-3 flex justify-center items-center">
                <img
                  src={data?.image}
                  alt=""
                  className="h-[90%] object-contain"
                />
              </div>
            </label>
          </Rnd>
        </div>
        <div className="col-span-7 relative h-full flex items-center justify-center">
          <Rnd
            className={`w-full h-full ${
              !data?.description ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <textarea
              name="description"
              value={data?.description}
              onChange={handleChangeItem}
              rows={6}
              className="w-full h-full bg-transparent resize-none font-normal p-[6px] overflow-hidden focus:outline outline-[#e99125]"
            />
          </Rnd>
        </div>
      </div>
    </div>
  );
};

export default MaldexTepmlate;
