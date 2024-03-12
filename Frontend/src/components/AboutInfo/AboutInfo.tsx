import aboutinfo from "../../assets/images/aboutinfo-img.png";
function AboutInfo() {
  return (
    <>
      <div className="container_xxl">
        <div className="flex gap-12 items-center">
          <div className="bg-greenPrimary w-1/3 hidden lg:block">
            <img className="h-full" src={aboutinfo} alt="" />
          </div>
          <div className="lg:w-2/3 mx-3 my-8">
            <div className="lg:text-[44px] lg:leading-[46px] leading-[26px] font-bold">
              <span>
                Позвольте нам <br /> представить себя:
              </span>
            </div>
            <div>
              <p className="my-5 lg:text-[19px] leading-[26px]">
                Maldex– это комплексный сервис по производству сувенирной
                продукции для российских и международных компаний. С нашей
                помощью компании смогут расширить клиентскую базу, повысить
                лояльность аудитории, укрепить позиции на рынке.
              </p>
              <p className="my-5 lg:text-[19px] leading-[26px]">
                Наша команда берет на себя весь спектр задач по ведению сделки,
                Вам нужно предоставить лишь логотип для нанесения. Мы изготовим,
                забрендируем и доставим ваш бизнес сувенир.
              </p>
              <p className="my-8 lg:text-[28px] leading-[34px] font-bold">
                У Вас есть идеи собственных сувениров?
                <br />
                <span className="text-greenPrimary">–Прекрасно!</span>
              </p>
              <p className="my-5 lg:text-[19px] leading-[26px] font-bold">
                С наей помощью вы можете изготовить любой сувенир по
                индивидуальному дизайну. Бизнес-сувениры из России, Европы,
                Америки и Китая. Более{" "}
                <span className="text-greenPrimary">1 000 000</span> подарков со
                всего мира. Нам есть что вам предложить!Нам есть чем вас
                удивить?{" "}
              </p>
              <p className="my-5 lg:text-[19px] leading-[26px] font-bold">
                Maldex – производи правильное впечатление!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutInfo;
