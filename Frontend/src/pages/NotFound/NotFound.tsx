import error from "../../assets/images/box404.png";
import { QuestForm, TagList } from "../../components";

function NotFound() {
  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-24 my-10">
          <div className="px-[84px]">
            <img src={error} alt="" />
          </div>
          <div className="text-center lg:text-start">
            <h1 className="text-greenPrimary text-[80px] lg:text-[140px] font-[700]">
              404
            </h1>
            <p className="text-[28px] font-[500] ">такой страницы нет</p>
            <p>Но есть много других полезных страниц</p>
          </div>
        </div>

        <TagList />

        <QuestForm />
      </div>
    </div>
  );
}

export default NotFound;
