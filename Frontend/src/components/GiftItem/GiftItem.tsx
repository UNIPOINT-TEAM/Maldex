interface GiftProp {
  image: string;
  name: string;
}
const GiftItem: React.FC<GiftProp> = ({ image, name }) => {
  return (
    <div className="w-[70px] flex items-center flex-col justify-center ">
      <div className="border border-lightPrimary p-3 rounded-xl">
        <img src={image} alt={name} />
      </div>
      <p className="text-center px-1 text-fs_8  font-extrabold font-helveticaNeue">
        {name}
      </p>
    </div>
  );
};

export default GiftItem;
