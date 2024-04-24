import { Rnd } from "react-rnd";
import templateTShirt from "../../assets/images/template-T-shirt.svg";
import { useState } from "react";
const OneArticle = () => {
  const [contents, setContents] = useState([
    { id: "1", content: "Content 1", width: 200, height: 200, x: 0, y: 0 },
    { id: "2", content: "Content 1", width: 200, height: 200, x: 100, y: 100 },
    // Boshqa contentlar
  ]);
  const updateContentPosition = (
    index: number,
    position: { x: number; y: number }
  ) => {
    setContents((prevContents) =>
      prevContents.map((content, i) =>
        i === index ? { ...content, x: position.x, y: position.y } : content
      )
    );
  };
  return (
    <div className="w-full h-full">
      <div className="heading grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 h-[80%] p-1 bg-[#eeede9]">
          <Rnd>
            <div className="heading">
              <input
                type="text"
                name="name"
                className="text-[36px] font-medium p-[6px] bg-transparent rounded-lg focus:outline outline-[#e99125]"
              />
            </div>
          </Rnd>
        </div>
      </div>

      <div className="body grid grid-cols-8 items-center w-full h-[80%]">
        <div className="col-span-3 h-[90%] flex items-center justify-center bg-[#eeede9]">
          <img
            src={templateTShirt}
            alt="template T-shirt"
            className="object-contain w-[80%] h-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default OneArticle;
