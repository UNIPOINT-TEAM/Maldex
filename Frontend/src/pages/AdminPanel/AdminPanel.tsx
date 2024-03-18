
function AdminPanel() {
  return (
    <>
      <div className="container_xxl">
        <div>
          <div className="text-center">
            <div className="flex justify-around">
              <button className="uppercase">вход</button>
              <button className="uppercase">регистрация</button>
            </div>
            <div>
              <form action="" className="flex gap-10 justify-center">
                <input type="text" placeholder="логин" />
                <input type="text" placeholder="пароль" />
              </form>
            </div>
            <div className="flex justify-around">
              <button>Назад</button>
              <button>войти</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
