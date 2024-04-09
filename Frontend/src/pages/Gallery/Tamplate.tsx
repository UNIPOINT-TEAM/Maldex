import { Galleryslider } from "../../components";

const Tamplate = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="px-5 col-span-4 py-3 h-full min-h-screen  border-0 border-r border-lightSecondary">
        <h2 className="text-darkSecondary text-[10px] font-medium mb-1 uppercase">
          ПОВОД:
        </h2>
        <div className="body grid grid-cols-2 gap-x-3 mt-4">
          <div className="border-2 border-lightSecondary p-3 h-[105px] rounded-xl"></div>
        </div>
      </div>
      <div className="p-3 flex-1 col-span-8">
        <Galleryslider />
      </div>
    </div>
  );
};

export default Tamplate;
