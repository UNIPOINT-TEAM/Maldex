import templateTShirt from "../../assets/images/template-T-shirt.svg";
const OneArticle = ({ text_size }) => {
  console.log(text_size);
  return (
    <div className="w-full h-full">
      <div className="heading grid grid-cols-12 items-center w-full h-[20%]">
        <div className="col-span-7 h-[80%] p-1 bg-[#eeede9]">
          <h3 className="text-[7px]">Один артикул</h3>
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
