import minilogo from "../../assets/images/mini-logo.png";
import { footerLinks } from "../../mock/data";

function Footer() {
  return (
    <>
<<<<<<< HEAD
      <footer className="bg-black">
        <div className="container_xxl px-3">
          <div className="text-white flex justify-between  lg:mx-0 pt-8">
            <div>
              <p className="text-darkSecondary mb-8 lg:mb-0 text-fs_8 font-medium">
                По всем вопросам
              </p>
              <h1 className="lg:w-[220px] text-fs_8 lg:text-fs_1 font-medium lg:leading-[50px] tracking-normal text-left underline">
                maldex <br /> @info.com
              </h1>
            </div>
            <div className="mr-24">
              <p className="text-darkSecondary  text-fs_8 font-medium">
                Бесплатный звонок <br /> из любой точки России
              </p>
              <h1 className="lg:w-[220px] text-fs_8 lg:text-fs_1 font-medium leading-[50px] tracking-normal text-left underline">
                8-800 333-67-84
              </h1>
            </div>
            <div className="hidden lg:block ">
=======
      <footer className=" bg-black">
        <div className="container_xxl">
          <div
            className="text-white flex justify-between mx-10 pt-8
        "
          >
            <div className="">
              <p className="text-darkSecondary">По всем вопросам</p>
              <h1 className="w-[220px] text-fs_1 font-medium leading-[50px] tracking-normal text-left underline">
                maldex @info.com
              </h1>
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
>>>>>>> bf64a73 (navbar100)
              {/* <p>По всем вопросам</p>
            <h1>maldex @info.com</h1> */}
              <img src={minilogo} alt="" />
            </div>
          </div>
<<<<<<< HEAD
          <div className="border-b border-gray-300 py-14 ">
            <div className="flex justify-between gap-4  lg:mx-0 text-fs_8">
              <div className="w-[168px] footer-column hidden lg:block">
                <h3 className="text-darkSecondary opacity-30 uppercase font-bold mb-5">
                  {footerLinks[0].title}
                </h3>
                <ul>
                  {footerLinks[0].items.map((item, index) => (
                    <li
                      className={`text-white cursor-pointer font-medium ${
                        index === 7 ? "mb-10" : ""
                      }`}
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-[146px] footer-column text-darkSecondary hidden lg:block">
                <h3 className="text-black uppercase ">
                  {footerLinks[1].title}
                </h3>
                <ul>
                  {footerLinks[1].items.map((item, index) => (
                    <li
                      className="text-white cursor-pointer font-medium"
                      key={index}
                    >
=======

          <div className="border-b border-gray-300 py-14 ">
            <div className="flex justify-between gap-4 mx-10 text-fs_8">
              <div className="w-[168px] footer-column w-1/5 ">
                <h3 className="text-darkSecondary uppercase">
                  {footerLinks[0].title}
                </h3>
                <ul>
                  {footerLinks[0].items.map((item, index) => (
                    <li className="text-white cursor-pointer" key={index}>
>>>>>>> bf64a73 (navbar100)
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

<<<<<<< HEAD
              <div className="w-[111px] mr-16 footer-column text-white hidden lg:block">
                <h3 className="text-darkSecondary opacity-30 uppercase font-bold mb-5">
=======
              <div className="w-[146px] footer-column text-darkSecondary ">
                <h3 className="text-black uppercase">{footerLinks[1].title}</h3>
                <ul>
                  {footerLinks[1].items.map((item, index) => (
                    <li className="text-white cursor-pointer" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-[111px] mr-16 footer-column text-white ">
                <h3 className="text-darkSecondary uppercase">
>>>>>>> bf64a73 (navbar100)
                  {footerLinks[2].title}
                </h3>
                <ul>
                  {footerLinks[2].items.map((item, index) => (
<<<<<<< HEAD
                    <li
                      className={`cursor-pointer ${index === 6 ? "mb-10" : ""}`}
                      key={index}
                    >
=======
                    <li className="cursor-pointer" key={index}>
>>>>>>> bf64a73 (navbar100)
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[156px] footer-column text-white ">
<<<<<<< HEAD
                <h3 className="text-darkSecondary opacity-30 uppercase font-bold mb-5">
=======
                <h3 className="text-darkSecondary uppercase">
>>>>>>> bf64a73 (navbar100)
                  {footerLinks[3].title}
                </h3>
                <ul>
                  {footerLinks[3].items.map((item, index) => (
<<<<<<< HEAD
                    <li
                      className={`cursor-pointer font-medium ${
                        index === 0 ? "mb-10" : ""
                      }`}
                      key={index}
                    >
                      {/* @ts-expect-error: This */}
                      {item.title}
=======
                    <li className="cursor-pointer" key={index}>
                      {item}
>>>>>>> bf64a73 (navbar100)
                    </li>
                  ))}
                </ul>
              </div>
<<<<<<< HEAD
              <div className=" footer-column text-white block lg:hidden">
                <img src={minilogo} alt="" />
              </div>
              <div className="footer-column text-white hidden lg:block">
                <h3 className="text-darkSecondary opacity-30     uppercase font-bold mb-5">
=======
              <div className="footer-column text-white ">
                <h3 className="text-darkSecondary uppercase">
>>>>>>> bf64a73 (navbar100)
                  {footerLinks[4].title}
                </h3>
                <ul>
                  {footerLinks[4].items.map((item, index) => (
<<<<<<< HEAD
                    <li className="cursor-pointer font-medium" key={index}>
=======
                    <li className="cursor-pointer" key={index}>
>>>>>>> bf64a73 (navbar100)
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex gap-10 lg:gap-52 flex-col-reverse lg:flex-row lg:justify-between  lg:mx-0 py-3 ">
            <p className="text-darkSecondary">
              © 2023 Maldex. Все права защищены.
            </p>
            <div className="flex gap-2 flex-col items-start lg:flex-row">
=======

          <div className="flex gap-52 justify-between mx-10 py-3 ">
            <p className="text-darkSecondary">
              © 2023 Maldex. Все права защищены.
            </p>
            <div className="flex gap-2">
>>>>>>> bf64a73 (navbar100)
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
