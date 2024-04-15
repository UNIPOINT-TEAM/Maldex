import { IoMdAdd } from "react-icons/io";
import { Galleryslider } from "../../components";
import {
  MaldexTepmlate,
  NewClients,
  OneArticle,
  Picture,
  PictureText,
  TwoArticle,
} from "../../components/GalleryLayoutTemplate";
import { useDispatch, useSelector } from "react-redux";
import { pushItem } from "../../store/carouselReducer";
const templates = [
  { name: "один артикул", key: "oneArticle", template: <OneArticle /> },
  { name: "два артикула ", key: "twoArticle", template: <TwoArticle /> },
  { name: "картинка + текст", key: "pictureText", template: <PictureText /> },
  { name: "картинка", key: "picture", template: <Picture /> },
  {
    name: "малдекс для новых клиентов",
    key: "newClients",
    template: <NewClients />,
  },
  { name: "малдекс", key: "maldexTepmlate", template: <MaldexTepmlate /> },
];
const Tamplate = () => {
  const items = useSelector((state) => state.carousel.items);
  const dispatch = useDispatch();

  const handleAddTemplate = (template) => {
    dispatch(pushItem(template));
  };
  return (
    <div className="grid grid-cols-12">
      <div className="px-5 col-span-4 py-3 h-full min-h-screen  border-0 border-r border-lightSecondary">
        <h2 className="text-darkSecondary text-[10px] font-medium mb-1 uppercase">
          ПОВОД:
        </h2>
        <div className="body grid grid-cols-2 gap-3 mt-4">
          {templates.map((item) => (
            <div key={item.key}>
              <div className="group relative p-3 h-[105px] rounded-xl">
                <div className="absolute border-lightSecondary top-0 left-0 w-full h-full rounded-xl group-hover:opacity-100 cursor-pointer border-2 group-hover:border-redPrimary duration-300 grid place-items-center">
                  <button
                    className="opacity-0 group-hover:opacity-100 duration-300 w-[40px] h-[40px] bg-redPrimary flex items-center justify-center rounded-full"
                    onClick={() => handleAddTemplate(item)}
                  >
                    <IoMdAdd className="text-fs_5 text-[#fff]" />
                  </button>
                </div>
                {item.template}
              </div>
              <h3 className="text-fs_6 font-medium">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 flex-1 col-span-8">
        <Galleryslider items={items} />
      </div>
    </div>
  );
};

export default Tamplate;
