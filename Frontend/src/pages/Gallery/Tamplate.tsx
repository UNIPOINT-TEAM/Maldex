import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { SAMPLE_TEMPLATES } from "../../constants/editor";
import { addNewFilledItem, CarouselState } from "../../store/carouselReducer";

const Tamplate = () => {
  const dispatch = useDispatch();
  const { ref, items } = useSelector(
    (state: { carousel: CarouselState }) => state.carousel
  );
  const handleAddTemplate = async (item: any) => {
    await dispatch(
      addNewFilledItem({
        data: {
          name: "",
        },
        template: item?.template,
        pdfTemplate: item?.pdfTemplate,
        background: {
          color: "",
          image: "",
          allSlider: false,
          currentSlide: true,
        },
      })
    );
    const lastIndex = items.length;
    if (ref?.current) {
      await ref.current?.swiper?.slideTo(lastIndex);
    }
  };

  return (
    <div className="px-5 py-3 h-full min-h-screen  border-0 border-r border-lightSecondary">
      <h2 className="text-darkSecondary text-[10px] font-medium mb-1 uppercase">
        ПОВОД:
      </h2>
      <div className="body flex flex-wrap  gap-3 mt-4">
        {SAMPLE_TEMPLATES.map((item, i) => (
          <div key={i} className="w-[165px]">
            <div className="group relative p-3 h-[105px] rounded-xl">
              <div className="absolute border-lightSecondary top-0 left-0 w-full h-full rounded-xl group-hover:opacity-100 cursor-pointer border-2 group-hover:border-redPrimary duration-300 grid place-items-center">
                <button
                  onClick={() => handleAddTemplate(item)}
                  className="opacity-0 group-hover:opacity-100 duration-300 w-[40px] h-[40px] bg-redPrimary flex items-center justify-center rounded-full"
                >
                  <IoMdAdd className="text-fs_5 text-[#fff]" />
                </button>
              </div>
              <img
                src={item.preview}
                className="w-full h-full object-contain pointer-events-none align-middle"
              />
            </div>
            <h3 className="text-fs_7 font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tamplate;
