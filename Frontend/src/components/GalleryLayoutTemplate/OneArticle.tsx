import { Rnd } from "react-rnd";
import templateTShirt from "../../assets/Gallery/default-image.png";
import { TemplateData } from "../../types";
import AddAplying from "../Gallery/AddAplying";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../store/carouselReducer";
const OneArticle: React.FC<TemplateData> = ({ data, background }) => {
  const dispatch = useDispatch();

  /*@ts-expect-error: This */
  const items = useSelector((state) => state.carousel.items);
  // @ts-expect-error: This
  const activeIndex = useSelector((state) => state.carousel.activeCaruselIndex);

  const handleChangeItem = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    /*@ts-expect-error: This */
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
  console.log(items);
  return (
    <div
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className="w-full rounded-lg h-full p-5 relative border border-darkSecondary"
      id="one-aticle"
    >
      <div className="heading grid grid-cols-12 items-center w-full h-[20%]">
        <div
          className={`col-span-12 relative h-[80%] ${
            !data?.name ? "w-[65%]" : "w-full"
          }`}
        >
          <Rnd
            className={` ${!data?.name ? "bg-[#eeede9]" : "bg-transparent"}`}
          >
            <textarea
              name="name"
              value={data?.name}
              onChange={handleChangeItem}
              className="text-[36px] h-full w-full font-medium p-[4px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
            />
          </Rnd>
        </div>
      </div>
      <div className="body grid grid-cols-12 items-center w-full h-[80%]">
        <div className="col-span-5 h-full relative">
          <Rnd className="w-full  ">
            {!data?.images_set && (
              <label
                htmlFor="upload-url"
                className="w-full h-full flex items-center justify-center"
              >
                <input
                  type="file"
                  name="image"
                  id="upload-url"
                  className="sr-only"
                  onChange={(e) => {
                    dispatch(
                      updateItem({
                        ...items[activeIndex],
                        data: {
                          ...items[activeIndex]?.data,

                          images_set: {
                            ...items[activeIndex]?.data?.images_set,
                            [0]: {
                              image_url: URL.createObjectURL(e.target.files[0]),
                            },
                          },
                        },
                      })
                    );
                  }}
                />

                <div className=" h-full flex items-center justify-center bg-[#eeede9]">
                  <img
                    src={templateTShirt}
                    alt="template T-shirt"
                    className="object-contain w-[80%] h-[90%]"
                  />
                </div>
              </label>
            )}
            <div className="h-full ">
              {data?.images_set && data?.images_set[0]?.image_url && (
                <div className="relative h-full col-span-3 flex justify-center items-center">
                  <div className="absolute top-50 ">
                    <AddAplying productData={data} />
                  </div>
                  <img
                    src={
                      data?.images_set[0]?.image_url ||
                      data?.images_set[0]?.image
                    }
                    alt=""
                    className="h-[90%] object-contain"
                  />
                </div>
              )}
            </div>
          </Rnd>
        </div>
      </div>
    </div>
  );
};

export default OneArticle;
