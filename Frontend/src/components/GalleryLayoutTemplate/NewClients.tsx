import { Rnd } from "react-rnd";
import { TemplateData } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../store/carouselReducer";

const NewClients: React.FC<TemplateData> = ({ data }) => {
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
    <div className="w-full h-full flex flex-col gap-3 p-10" id="one-aticle">
      <div className="heading  grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 h-full p-1 relative">
          <Rnd className={`${!data?.name ? "bg-[#eeede9]" : "bg-transparent"}`}>
            <div className="heading w-full h-full">
              <input
                type="text"
                name="name"
                onChange={handleChangeItem}
                value={data?.name}
                className="w-full h-full text-[36px] font-medium p-[6px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
              />
            </div>
          </Rnd>
        </div>
      </div>
      <div className="body grid grid-cols-12 gap-6 items-center w-full h-full">
        <div className="col-span-6 relative h-full flex items-center justify-center">
          <Rnd
            className={`${
              !data?.description ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <textarea
              name="description"
              rows={6}
              /*@ts-expect-error: This */
              onChange={handleChangeItem}
              className="w-full h-full bg-transparent resize-none font-normal p-[6px] overflow-hidden focus:outline outline-[#e99125]"
            />
          </Rnd>
        </div>
        <div className="col-span-6 relative h-full flex items-center justify-center">
          <Rnd
            className={`${
              !data?.description ? "bg-[#eeede9]" : "bg-transparent"
            }`}
          >
            <textarea
              name="characteristics"
              /*@ts-expect-error: This */
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

export default NewClients;
