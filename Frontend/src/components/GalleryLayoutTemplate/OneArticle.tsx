import templateTShirt from "../../assets/Gallery/default-image.png";
import { TemplateData } from "../../types";
import AddAplying from "../Gallery/AddAplying";
import { useDispatch, useSelector } from "react-redux";
import { CarouselState, updateItem } from "../../store/carouselReducer";
const OneArticle: React.FC<TemplateData> = ({ data, background }) => {
  const dispatch = useDispatch();
  console.log(data);

  const { items, activeCaruselIndex } = useSelector(
    (state: { carousel: CarouselState }) => state.carousel
  );

  const handleChangeItem = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    const updatedItem = {
      ...items[activeCaruselIndex],
      data: {
        ...data,
        name: value,
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
      className="w-full flex flex-col  justify-between rounded-lg h-full p-5 relative border "
    >
      <div className="heading grid grid-cols-12 items-center w-full h-[20%] ">
        <div className={`col-span-12 relative h-full  ${"w-[65%]"}`}>
          <div
            className={`h-full ${
              !data?.name ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <textarea
              name="name"
              value={data?.name}
              cols={6}
              rows={2}
              onChange={handleChangeItem}
              className="text-[36px] border-0 resize-none leading-none h-full w-full font-medium p-[4px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
            />
          </div>
        </div>
      </div>
      <div className="body grid grid-cols-12 items-center  w-full h-[75%]">
        <div className="col-span-5 h-full ">
          <div className="w-full h-full">
            {!data?.images_set && (
              <label htmlFor="upload-url" className="">
                <input
                  type="file"
                  name="image"
                  id="upload-url"
                  className="sr-only"
                  onChange={(e) => {
                    dispatch(
                      updateItem({
                        ...items[activeCaruselIndex],
                        data: {
                          ...items[activeCaruselIndex]?.data,

                          images_set: {
                            ...items[activeCaruselIndex]?.data?.images_set,
                            [0]: {
                              image_url: URL.createObjectURL(e.target.files[0]),
                            },
                          },
                        },
                      })
                    );
                  }}
                />

                <div className="h-full flex items-center justify-center  bg-[#eeede9]">
                  <img
                    src={templateTShirt}
                    alt="template T-shirt"
                    className="object-contain w-[80%] "
                  />
                </div>
              </label>
            )}

            {data?.images_set && data?.images_set[0]?.image_url && (
              <div className="w-full group h-full col-span-3 relative">
                <div className="absolute left-0  top-[50%] hidden group-hover:flex justify-center w-full ">
                  <AddAplying productData={data} />
                </div>
                <div className="h-[340px] w-full">
                  <img
                    src={data?.images_set[0]?.image_url}
                    alt=""
                    className="object-contain   h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneArticle;
