import { Link } from "react-router-dom";

interface GiftProp {
  image: string;
  name: string;
}
const GiftItem: React.FC<GiftProp> = ({ image, name }) => {
  return (
    <Link
      to={"/catalog"}
      className="w-[70px] flex items-center flex-col justify-center "
    >
      <div className="border border-lightPrimary p-3 rounded-xl">
        <img src={image} alt={name} />
      </div>
      <p className="text-center px-1 text-fs_8 font-semibold">{name}</p>
    </Link>
  );
};

export default GiftItem;
