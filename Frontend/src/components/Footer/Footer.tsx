import minilogo from '../../assets/images/mini-logo.png'
function Footer() {
  return (
    <>
      <footer className="container_xxl bg-black">
        <div className="text-white flex justify-around
        ">
          <div className="w-1/3">
            <p>По всем вопросам</p>
            <h1>maldex @info.com</h1>
          </div>
          <div className="w-1/3">
            <p>По всем вопросам</p>
            <h1>maldex @info.com</h1>
          </div>
          <div className="w-1/12">
            {/* <p>По всем вопросам</p>
            <h1>maldex @info.com</h1> */}
            <img src={minilogo} alt="" />
          </div>
        </div>


        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
