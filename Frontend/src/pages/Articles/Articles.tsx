import {  Badge, TagList} from "../../components";


import image1 from "../../assets/article-bg-1.png";
import image2 from "../../assets/article-bg-2.png";
import image3 from "../../assets/article-bg-3.png";
import image4 from "../../assets/article-bg-4.png";
import arrowRight from "../../assets/icons/arrow-right.png";

function Articles() {
  return (
    <>
      <TagList />
      <div className="articles container_xxl py-5 px-3">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
            <div
              className="p-3 lg:p-5 bg-cover text-white h-[180px] sm:h-[340px]"
              style={{
                backgroundImage: `url(${image1})`,
              }}
            >
              <div className="md:w-[65%]">
                <h3 className="text-fs_5 lg:text-fs_3  font-helvetica">2.10</h3>
                <h2 className="text-fs_6 lg:text-fs_3  font-medium ">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                {/* @ts-ignore */}

                <Badge name="NEW" />
                {/* @ts-ignore */}

                <Badge name="HIT" />
              </div>
            </div>
            <div
              className="p-3 lg:p-5 bg-cover text-white h-[180px] sm:h-[340px]"
              style={{
                backgroundImage: `url(${image2})`,
              }}
            >
              <div className="md:w-[65%]">
                <h3 className="text-fs_5 lg:text-fs_3  font-helvetica">2.10</h3>
                <h2 className="text-fs_6 lg:text-fs_3  font-medium ">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                {/* @ts-ignore */}
                <Badge name="NEW" />
                {/* @ts-ignore */}
                <Badge name="HIT" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 h-[180px] sm:h-[340px]">
            <div
              className="p-3 lg:p-5 bg-cover text-white hidden lg:block"
              style={{
                backgroundImage: `url(${image3})`,
              }}
            >
              <h3 className="text-[24px]">2.10</h3>
              <h2 className="text-[28px] font-medium ">
                Маска для лица многоразовая из хлопка, анатомической формы
              </h2>
              {/* @ts-ignore */}
              <Badge name="NEW" />
              {/* @ts-ignore */}
              <Badge name="HIT" />
            </div>
            <div
              className="p-3 lg:p-5 bg-cover text-white hidden sm:block "
              style={{
                backgroundImage: `url(${image4})`,
              }}
            >
              <h3 className="text-[24px]">2.10</h3>
              <h2 className="text-[28px] font-medium ">
                Маска для лица многоразовая из хлопка, анатомической формы
              </h2>
              {/* @ts-ignore */}
              <Badge name="NEW" />
              {/* @ts-ignore */}
              <Badge name="HIT" />
            </div>
            <div
              className="p-3 lg:p-5 bg-cover text-white "
              style={{
                backgroundImage: `url(${image4})`,
              }}
            >
              <h3 className="text-fs_5 lg:text-fs_3  font-helvetica">2.10</h3>
              <h2 className="text-fs_6 lg:text-fs_3  font-medium ">
                Маска для лица многоразовая из хлопка
              </h2>
              {/* @ts-ignore */}
              <Badge name="NEW" />
              {/* @ts-ignore */}
              <Badge name="HIT" />
            </div>
            <div
              className="p-3 lg:p-5 bg-cover text-white "
              style={{
                backgroundImage: `url(${image4})`,
              }}
            >
              <h3 className="text-fs_5 lg:text-fs_3  font-helvetica">2.10</h3>
              <h2 className="text-fs_6 lg:text-fs_3  font-medium ">
                Маска для лица многоразовая из хлопка
              </h2>
              {/* @ts-ignore */}
              <Badge name="NEW" />
              {/* @ts-ignore */}
              <Badge name="HIT" />
            </div>
            {/* <div className="p-3 lg:p-5 h-full flex flex-col justify-between bg-white">
              <h2 className="text-fs_6 lg:text-fs_3 font-extrabold tracking-wide text-redPrimary">
                Все <br /> статьи
              </h2>
              <div className="flex justify-end">
                <button className="bg-redPrimary p-1 rounded-xl">
                  <img src={arrowRight} alt="arrow icon" />
                </button>
              </div>
            </div> */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
            <div
              className="p-3 lg:p-5 bg-cover text-white h-[180px] sm:h-[340px]"
              style={{
                backgroundImage: `url(${image1})`,
              }}
            >
              <div className="md:w-[65%]">
                <h3 className="text-fs_5 lg:text-fs_3  font-helvetica">2.10</h3>
                <h2 className="text-fs_6 lg:text-fs_3  font-medium ">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                {/* @ts-ignore */}
                <Badge name="NEW" />
                {/* @ts-ignore */}
                <Badge name="HIT" />
              </div>
            </div>
            <div
              className="p-3 lg:p-5 bg-cover text-white h-[180px] sm:h-[340px]"
              style={{
                backgroundImage: `url(${image2})`,
              }}
            >
              <div className="md:w-[65%]">
                <h3 className="text-fs_5 lg:text-fs_3  font-helvetica">2.10</h3>
                <h2 className="text-fs_6 lg:text-fs_3  font-medium ">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                {/* @ts-ignore */}
                <Badge name="NEW" />
                {/* @ts-ignore */}
                <Badge name="HIT" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 h-[180px] sm:h-[340px]">
            <div
              className="p-3 lg:p-5 bg-cover text-white hidden lg:block"
              style={{
                backgroundImage: `url(${image3})`,
              }}
            >
              <h3 className="text-[24px]">2.10</h3>
              <h2 className="text-[28px] font-medium ">
                Маска для лица многоразовая из хлопка, анатомической формы
              </h2>
              {/* @ts-ignore */}
              <Badge name="NEW" />
              {/* @ts-ignore */}
              <Badge name="HIT" />
            </div>
            <div
              className="p-3 lg:p-5 bg-cover text-white hidden sm:block "
              style={{
                backgroundImage: `url(${image4})`,
              }}
            >
              <h3 className="text-[24px]">2.10</h3>
              <h2 className="text-[28px] font-medium ">
                Маска для лица многоразовая из хлопка, анатомической формы
              </h2>
              {/* @ts-ignore */}
              <Badge name="NEW" />
              {/* @ts-ignore */}
              <Badge name="HIT" />
            </div>
            <div
              className="p-3 lg:p-5 bg-cover text-white "
              style={{
                backgroundImage: `url(${image4})`,
              }}
            >
              <h3 className="text-fs_5 lg:text-fs_3  font-helvetica">2.10</h3>
              <h2 className="text-fs_6 lg:text-fs_3  font-medium ">
                Маска для лица многоразовая из хлопка
              </h2>
              {/* @ts-ignore */}
              <Badge name="NEW" />
              {/* @ts-ignore */}
              <Badge name="HIT" />
            </div>
            <div className="p-3 lg:p-5 h-full flex flex-col justify-between bg-white">
              <h2 className="text-fs_6 lg:text-fs_3 font-extrabold tracking-wide text-redPrimary">
                Все <br /> статьи
              </h2>
              <div className="flex justify-end">
                <button className="bg-redPrimary p-1 rounded-xl">
                  <img src={arrowRight} alt="arrow icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
