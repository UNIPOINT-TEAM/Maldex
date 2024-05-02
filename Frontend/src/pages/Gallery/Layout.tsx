import { LuListFilter } from "react-icons/lu";
import { Galleryslider, LayoutSideCard } from "../../components";
import { useDispatch } from "react-redux";
import { updateItem } from "../../store/carouselReducer";
import { all } from "axios";
import DefaultTemplate from "../../components/GalleryLayoutTemplate/DefaultTemplate";
const LayoutItems = [
  {
    id: "1",
    name: "Инновационный очиститель, обеззараживатель, озонатор воздуха",
    price: "15 185.52 ₽",
    circulation: 25,
    total: "1 125.00",
    image:
      "https://s3-alpha-sig.figma.com/img/d77d/8e91/1b1b0cbce5edb9f56fa540413c1d843a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OJ67nt-GqeDd-8ZQ6jWXj7Mb~iVYdw62sQ5G4mKkrJmkHUXWm6KkoMJSpdbqICxiT944CwZfxPqaJsfqEDmTn96a-BTVKGclP9V7U4ld3BoSh3702MmowA6KyBxT22t7HxXelUFCLwBLTkeaFFRpXH63lfQMudgZ9OHIUUyjSfr~SSORFkZRblM7O55IHEMtjBXRPn1ShTrNnAstOzRhDuh9uDEC3wZkWsC690zkpKJb7ZWbaASGYZfUxYw4~2dx7VpoBXJTHSypQ1aVi52e4h5Kxzas-pn9pa-qt-Dsxi7nKl4EETB7xzy1FmA6Cn-Gku0-gwYeTbhwjxqt8dfvsQ__",
    characteristics: {
      vendor_code: "47583957",
      size: "20х25х10 см",
      material: "сатин, картон, 120 г/м2",
      width: "(1 шт.): 39,04 г ",
      available_application:
        "DTF-Полноцвет с трансфером, SH-Шелкография (не более 1 цвета)",
    },
    description:
      "Если вы думаете о s'mores как о чем-то, что нельзя отправить по почте, подумайте еще раз! Этот подарочный набор превращает всеми любимую закуску у костра в изысканную форму искусства, и он не для случайных любителей. Конечно, потребуется некоторая сборка, но все знают, что это часть удовольствия.",
  },
];
const Layout = () => {
  const dispatch = useDispatch();
  const updateItems = (item) => {
    dispatch(
      updateItem({
        data: item,
        template: <DefaultTemplate />,
        background: {
          color: "",
          image: "",
          allSlider: false,
          currentSlide: true,
        },
      })
    );
  };
  return (
    <div className="grid grid-cols-12">
      <div className="px-5 col-span-4 py-3 h-full min-h-screen  border-0 border-r border-lightSecondary">
        <div className="heading">
          <div className="border text-darkSecondary text-[9px] font-bold border-lightSecondary rounded-lg px-3 py-2 flex justify-between">
            <div className="flex gap-2">
              <button className="border px-[14px] py-2 border-darkSecondary uppercase rounded-lg">
                объединить
              </button>
              <button className="border px-[14px] py-2 border-darkSecondary uppercase rounded-lg">
                Добавить товар
              </button>
            </div>
            <button className="border px-[14px] py-2 border-darkSecondary uppercase rounded-lg">
              сохранить
            </button>
          </div>
          <div className="grid grid-cols-5">
            <div className="pt-2 col-span-3 relative text-darkSecondary">
              <input
                className="border text-base  border-lightSecondary  placeholder:text-darkSecondary h-[34px] ps-8  rounded-lg font-normal focus:outline-none"
                name="search"
                placeholder="Поиск"
              />
              <button
                type="submit"
                className="absolute left-0 top-0 mt-[17px] ps-3 "
              >
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <div className="col-span-2  pt-2 flex items-center justify-end">
              <button className="flex items-center gap-2 border text-darkSecondary border-lightSecondary h-[34px] rounded-lg font-normal px-3">
                <LuListFilter />
                <span className="text-base">Все фильтры</span>
              </button>
            </div>
          </div>
        </div>
        <div className="body flex flex-wrap gap-y-8 justify-between mt-4">
          {LayoutItems.map((item, index) => (
            <div onClick={() => updateItems(item)} key={index}>
              <LayoutSideCard {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 flex-1 col-span-8">
        <Galleryslider />
      </div>
    </div>
  );
};

export default Layout;
