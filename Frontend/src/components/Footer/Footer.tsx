import minilogo from "../../assets/images/mini-logo.png";
import { footerLinks } from "../../mock/data";


function Footer() {
  return (
    <>
      <footer className="container_xxl bg-black">
        <div
          className="text-white flex justify-between mx-10 pt-8
        "
        >
          <div className="">
            <p className="text-darkSecondary">По всем вопросам</p>
            <h1 className="w-[220px] text-fs_1 font-medium leading-[50px] tracking-normal text-left underline">
              maldex @info.com</h1>
          </div>
          <div className="">
            <p className="text-darkSecondary">
              Бесплатный звонок из любой точки России
            </p>
            <h1 className="w-[220px] text-fs_1 font-medium leading-[50px] tracking-normal text-left underline">
              8-800 333-67-84
            </h1>
          </div>
          <div className=" ">
            {/* <p>По всем вопросам</p>
            <h1>maldex @info.com</h1> */}
            <img src={minilogo} alt="" />
          </div>
        </div>

        <div className="border-b border-gray-300 py-14 ">
          <div className="flex justify-between gap-4 mx-10">
            <div className="footer-column w-1/5 ">
              <h3 className="text-darkSecondary uppercase">
                {footerLinks[0].title}
              </h3>
              <ul>
                {footerLinks[0].items.map((item, index) => (
                  <li className="text-white cursor-pointer" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column text-darkSecondary w-1/6">
              <h3 className="text-black uppercase">{footerLinks[1].title}</h3>
              <ul>
                {footerLinks[1].items.map((item, index) => (
                  <li className="text-white cursor-pointer" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column text-white w-1/6">
              <h3 className="text-darkSecondary uppercase">
                {footerLinks[2].title}
              </h3>
              <ul>
                {footerLinks[2].items.map((item, index) => (
                  <li className="cursor-pointer" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column text-white w-1/6">
              <h3 className="text-darkSecondary uppercase">
                {footerLinks[3].title}
              </h3>
              <ul>
                {footerLinks[3].items.map((item, index) => (
                  <li className="cursor-pointer" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column text-white w-1/6">
              <h3 className="text-darkSecondary uppercase">
                {footerLinks[4].title}
              </h3>
              <ul>
                {footerLinks[4].items.map((item, index) => (
                  <li className="cursor-pointer" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-52 justify-between mx-10 py-3 ">
          <p className="text-darkSecondary">
            © 2023 Maldex. Все права защищены.
          </p>
          <div className="flex gap-2">
            <button className="border rounded-md px-1 text-white">
              Правила использования материалов
            </button>
            <button className="border rounded-md px-1 text-white">
              Политика конфиденциальности
            </button>
            <button className="border rounded-md px-1 text-white">
              Написать сообщение
            </button>
          </div>
        </div>
        
      </footer>


    

    </>
  );
}

export default Footer;
