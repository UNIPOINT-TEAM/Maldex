import error from "../../assets/images/box404.png";

function NotFound() {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
}

export default NotFound;
