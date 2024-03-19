import image1 from "../../assets/portfolio/image1.jpg";
import image2 from "../../assets/portfolio/image2.png";
import image3 from "../../assets/portfolio/image3.png";
import image4 from "../../assets/portfolio/image4.png";
import image5 from "../../assets/portfolio/image5.png";
import image6 from "../../assets/portfolio/image6.png";
import { Badge, News, ProjectsSlider, QuestForm } from "../../components";

function Portfolio() {
  return (
    <>
      <div className="container_xxl">
        <div className="mx-3">
          <div
            className="p-3 mb-5 lg:p-5  bg-cover text-white h-[180px] sm:h-[550px]"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className="md:w-[65%]">
            {/* @ts-ignore */}
              <Badge name="NEW" type="NEW"/>
              {/* @ts-ignore */}
              <Badge name="HIT" type="HIT"/>
              <h3 className="text-fs_6 lg:text-fs_3 text-darkPrimary font-medium ">
                welcome pack, <br /> для милых дам
              </h3>
            </div>
          </div>
          {/* <div className="flex flex-wrap gap-3 justify-between"> */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              className="p-3 lg:p-5 bg-cover text-white "
              style={{
                backgroundImage: `url(${image2})`,
              }}
            >
              <div className="">
                <h3 className="text-fs_5 lg:text-fs_3  font-helvetica">2.10</h3>
                <h2 className="text-[10px] lg:text-fs_3   font-medium ">
                  Маска для лица <br /> многоразовая из хлопка,
                  <br /> анатомической формы{" "}
                </h2>
                {/* @ts-ignore */}
                <Badge name="NEW" />
                {/* @ts-ignore */}
                <Badge name="HIT" />
              </div>
            </div>
            <div>
              <img src={image3} alt="" className="w-full h-full" />
            </div>
            <div>
              <img src={image4} alt="" className="w-full h-full"/>
            </div>
            <div>
              <img src={image5} alt="" className="w-full h-full"/>
            </div>
            <div>
              <img src={image6} alt="" className="w-full h-full"/>
            </div>
            <div>
              <div className="bg-blue-gray-200"></div>
            </div>
          </div>
          {/* <PortfolioBanner /> */}
          <News />
          <ProjectsSlider />
          <QuestForm />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
