import { Link, useParams } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { GetProjectDetails } from '../../services/maincatalog';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

function PortfolioDetail() {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState({
    description: '',
    mainImg: '',
    miniImgs: [],
    tags: [],
    products: [],
    title: '',
  });

  useEffect(() => {
    GetProjectDetails(id).then((res) => {
      console.log(res);

      setProjectDetails({
        ...projectDetails,
        description: res.description,
        mainImg: res.images_set[0],
        tags: res.tags,
        products: res.products,
        title: res.title,
        miniImgs: res.images_set.slice(1),
      });
    });
  }, []);

  console.log(projectDetails);

  return (
    <>
      <DefaultLayout>
        <div className="container_xxl">
          <div className="mx-3">
            <div
              className="p-3 mb-5 lg:p-5  bg-cover text-white h-[180px] sm:h-[550px] "
              style={{
                backgroundImage: `url(${projectDetails.mainImg})`,
              }}
            >
              <div className="md:w-[65%]">
                <h3 className="text-fs_7 lg:text-[50px] text-[#475259] leading-tight font-medium ">
                  {projectDetails.title}
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              <div
                className="p-3 lg:p-5 bg-cover text-white "
                style={{
                  backgroundImage: `url(${projectDetails.miniImgs[0]})`,
                }}
              >
                <div className="">
                  <h3 className="text-fs_5 lg:text-[28px] opacity-50">2.10</h3>
                  <h2 className="text-[10px] lg:text-[28px] font-medium ">
                    {projectDetails.description}
                  </h2>
                  {/* <Badge name="NEW" />
                  <Badge name="HIT" /> */}
                </div>
              </div>
              {projectDetails?.miniImgs.map((i) => (
                <div>
                  <img src={i} alt="" className="w-full h-full" />
                </div>
              ))}

              <div>
                <div className="bg-white h-full w-full flex flex-col justify-between">
                  <div className="lg:pl-5 pl-1.5 pt-1  lg:pt-16 lg:pr-40 font-Articulat tracking-wider">
                    <span className="font-semibold">Cостав:</span>
                    <br />
                    <div className="text-[12px] lg:text-[14px] tracking-wide font-medium leading-snug">
                      <ul>
                        <li>{projectDetails.description}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center pb-5 gap-3 font-bold text-[11px]">
                    <Link to="/build-set">
                      <button className="border text-white hover:text-greenPrimary  w-auto lg:w-[160px]  h-[55px]  uppercase  rounded-xl bg-greenPrimary  hover:bg-[#ffffff]  duration-300">
                        хочу также
                      </button>
                    </Link>
                    <Link to="/build-set">
                      <button className="border text-greenPrimary hover:text-white  w-auto lg:w-[160px]  h-[55px]  uppercase  rounded-xl bg-[#fff]  hover:bg-greenPrimary border-greenPrimary  duration-300">
                        посмотреть похожее
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="text-[36px] py-10">
                продукты, использованные в этом проекте
              </p>
              <div className="container_xxl relative px-3">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  scrollbar={{ draggable: true }}
                  navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                  // @ts-ignore
                  scrollbar={{ draggable: true }}
                  modules={[Navigation, Scrollbar]}
                  className=" w-full overscroll-x-auto h-[430px] md:h-[500px]"
                >
                  {/* @ts-ignore */}
                  {projectDetails?.products.map((item) => (
                    <SwiperSlide className="w-full" key={item.id}>
                      <div className="catalog ">
                        <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                          <Swiper
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                            className="  h-full"
                          >
                            {item?.images_set?.map((i) => (
                              <SwiperSlide className="w-full h-full">
                                <div
                                  // onClick={() => handleOpen('xl')}
                                  className="relative  h-full"
                                >
                                  <div className="flex justify-center items-center h-full">
                                    <img
                                      className="mb-2  object-contain product-img"
                                      src={i.image_url}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1 swiper-opacity">
                            <button
                              className={`w-[8px] h-[8px] bg-red-primary rounded-[4px]`}
                            ></button>
                            <button
                              className={`w-[8px] h-[8px] bg-orange-600 rounded-[4px]`}
                            ></button>
                            <button
                              className={`w-[8px] h-[8px] bg-green-600 rounded-[4px]`}
                            ></button>
                            <button
                              className={`w-[8px] h-[8px] bg-green-primary rounded-[4px]`}
                            ></button>
                            <button
                              className={`w-[8px] h-[8px] bg-blue-600 rounded-[4px]`}
                            ></button>
                            <button
                              className={`w-[8px] h-[8px] bg-purple-600 rounded-[4px]`}
                            ></button>
                            <button
                              className={`w-[8px] h-[8px] bg-indigo-600 rounded-[4px]`}
                            ></button>
                          </div>

                          <div className="absolute z-[999] top-2 left-2 flex gap-2">
                            <div className="border border-red-primary text-[10px] text-red-primary rounded-lg px-1">
                              NEW
                            </div>
                          </div>
                        </div>
                        {/* {defaultProduct ? ( */}
                        <div className="default">
                          <div className="mb-2 md:mb-5  min-h-[70px] ">
                            <p className="text-fs_7 tracking-wide">
                              {
                                //@ts-ignore
                                item.name.length > 30
                                  ? //@ts-ignore
                                    item.name.substring(0, 40) + '...'
                                  : //@ts-ignore
                                    item.name
                              }
                            </p>
                          </div>
                          <p className="mb-2 text-gray-600 text-fs_8">
                            {item.vendor_code}
                          </p>
                          <div className="relative mb-2">
                            <p className="text-[16px] md:text-fs_4">
                              {item.price}
                              <span className="text-xs absolute top-0">12</span>
                              <span className="ml-4 mr-1">
                                {item.price_type}
                              </span>
                              <span className="text-xs absolute top-0 line-through text-red-primary">
                                234
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="hidden lg:flex prev text-black  hover:text-white">
                  <FaArrowLeftLong />
                </div>
                <div className="hidden lg:flex next text-black hover:text-white">
                  <FaArrowRightLong />
                </div>
                
              </div>
            </div>
            {/* <QuestForm /> */}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default PortfolioDetail;
