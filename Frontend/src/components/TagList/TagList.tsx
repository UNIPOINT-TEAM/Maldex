function TagList() {
  return (
    <div>
      <div className="container_xxl">
        <div className="flex gap-[21px] justify-center my-8">
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            для неё
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            для него
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            на свадьбу
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            на новый год
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            на корпоратив
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            на день рождения
          </button>
        </div>
      </div>
    </div>
  );
}

export default TagList;
