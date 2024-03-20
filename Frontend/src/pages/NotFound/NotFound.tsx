import error from "../../assets/images/box404.png";
<<<<<<< HEAD
import { QuestForm, TagList } from "../../components";
=======
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf

function NotFound() {
  return (
    <div>
      <div>
<<<<<<< HEAD
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
=======
        <div className="flex justify-center items-center gap-24 my-10">
          <div>
            <img src={error} alt="" />
          </div>
          <div>
            <h1 className="text-greenPrimary text-[140px] font-[700]">404</h1>
            <p className="text-[28px] font-[500]">такой страницы нет</p>
            <p>Но есть много других полезных страниц</p>
          </div>
        </div>
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
      </div>
    </div>
  );
}

export default NotFound;
