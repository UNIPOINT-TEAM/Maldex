import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { GetActiveCategory, GetMainBannerSlider } from '../../services/main';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from '@material-tailwind/react';
import { PostData } from '../../services/maincatalog';
import { GetProductSearch } from '../../services/product';

const BannerSlider = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    GetMainBannerSlider().then((res) => {
      setSliderData(res);
      console.log(res);
    });
  }, []);
  return (
    <>
      <div className="banner-carusel relative w-full h-full bg-green-primary flex  p-[12px] lg:p-[20px] text-white font-helvetica-neue">
        <Swiper
          centeredSlides
          navigation={{
            prevEl: '.prev-arrow',
            nextEl: '.next-arrow',
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full "
        >
          {sliderData?.map((item) => (
            <SwiperSlide
              className="w-full flex flex-col justify-start"
              key={item?.id}
            >
              <div className="flex w-full">
                <div className="w-[55%] h-full flex flex-col justify-between">
                  <div>
                    <span className="border  font-medium text-[8px] lg:text-[11px] uppercase p-1 tracking-wide rounded-md">
                      корпоративные подарки
                    </span>
                    <h2 className="font-bold lg:font-medium text-base lg:text-[26px] m-0  tracking-wide leading-none lg:leading-none mt-2 lg:mt-4">
                      {item?.name}
                    </h2>
                  </div>
                </div>
                <div className="w-[45%] h-full flex justify-end ps-2">
                  {item?.media_type == 'video' ? (
                    <video width="640" height="360" controls>
                      <source src={item?.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="h-[250px] w-[200px]"
                      src={item?.media}
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div className="w-full py-5 flex gap-2">
                {item?.buttons?.map((btn) => (
                  <button className="border border-white px-5 py-1 rounded-md">
                    {btn.title}
                  </button>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="navigation-box  absolute right-3 lg:right-6 bottom-3 lg:bottom-5 z-[9] flex gap-2">
          <button className="prev-arrow p-2 border border-[#fff] rounded-lg">
            <FaArrowLeft className="text-fs_8 lg:text-fs_7" />
          </button>
          <button className="next-arrow p-2 border border-[#fff]  rounded-lg">
            <FaArrowRight className="text-fs_8 lg:text-fs_7" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;

export const AddBannerCarousel = () => {
  const [addProduct, setAddProduct] = useState([]);
  const [size, setSize] = useState(null);
  const [nameCarousel, setNameCarousel] = useState('');
  const [fileCarousel, setFileCarousel] = useState('');
  const [title1, setTitle1] = useState('');
  const [url1, setUrl1] = useState('');
  const [title2, setTitle2] = useState('');
  const [url2, setUrl2] = useState('');
  const [media, setMedia] = useState(1);
  const [filterCategories, setFilterCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [product, setProduct] = useState('');

  useEffect(() => {
    GetProductSearch('', '', '', categoryId).then((res) => {
      setAddProduct(res.data.results);
      console.log(res.data.results);
    });
    GetActiveCategory().then((res) => {
      setFilterCategories(res);
    });
  }, [categoryId]);

  const AddCarousel = () => {
    const formdata = new FormData();
    formdata.append('name', nameCarousel);
    formdata.append('media', fileCarousel);
    formdata.append('title1', title1);
    formdata.append('url1', url1);
    formdata.append('title2', title2);
    formdata.append('url2', url2);
    formdata.append('product_id', product);

    PostData('/banner/carousel/', formdata).then(() => setSize(null));
  };

  const handleOpen = (value) => setSize(value);

  return (
    <div className="w-full flex justify-end">
      <>
        <Dialog
          open={
            size === 'xs' ||
            size === 'sm' ||
            size === 'md' ||
            size === 'lg' ||
            size === 'xl' ||
            size === 'xxl'
          }
          size={size || 'md'}
          handler={handleOpen}
        >
          <DialogBody>
            <Input
              label="добавить текст"
              onChange={(e) => setNameCarousel(e.target.value)}
            />
            <div className="flex gap-2 mt-5 mb-5">
              <button
                onClick={() => setMedia(1)}
                className={`px-2 py-1 rounded-md ${
                  media == 1 ? 'bg-blue-400 text-white' : 'bg-[grey] text-white'
                }`}
              >
                video
              </button>
              <button
                onClick={() => setMedia(2)}
                className={`px-2 text-white py-1 rounded-md ${
                  media == 2 ? 'bg-blue-400 text-white' : 'bg-[grey] text-white'
                }`}
              >
                product
              </button>
            </div>
            {media == 1 ? (
              <div className="mb-5 mt-5">
                <label className="flex h-[100px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4">
                  <input
                    onChange={(e) => setFileCarousel(e.target.files[0])}
                    required
                    type="file"
                    className="sr-only"
                  />
                  <p className="text-fs-6">Добавить Фото</p>
                </label>
              </div>
            ) : (
              <>
                <Select label="Выберите категорию">
                  {filterCategories?.map((category) => (
                    <Option onClick={() => setCategoryId(category?.id)}>
                      <span>{category?.name} / </span>
                      <span className="text-blue-400">
                        {category?.count} /{' '}
                      </span>
                      <span className="text-red-400 text-xs">
                        {category?.site}{' '}
                      </span>
                    </Option>
                  ))}
                </Select>
                <div className="flex flex-wrap justify-center gap-5 py-5 h-[350px] overflow-y-scroll">
                  {addProduct?.map((item) => (
                    <div
                      key={item.id}
                      className={`w-1/6 shadow-4 p-2 rounded-sm h-[300px] ${
                        product == item.id ? 'bg-blue-400' : ''
                      }`}
                      onClick={() => setProduct(item.id)}
                    >
                      <div className="catalog ">
                        <div className="relative swiper-top-container h-[200px] mb-4 bg-gray-200">
                          <Swiper
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                            className="  h-full"
                          >
                            {item.images_set.map((i) => (
                              <SwiperSlide key={i.id} className="w-full h-full">
                                <div className="relative  h-full">
                                  <div className="flex justify-center items-center h-full">
                                    <img
                                      className="mb-2  object-contain product-img"
                                      src={i.image_url || i.image}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>

                        <div className="default">
                          <div className="mb-2 md:mb-5  min-h-[70px] ">
                            <p className="text-fs_7 tracking-wide">
                              {
                                //@ts-ignore
                                item.name.length > 30
                                  ? //@ts-ignore
                                    item.name.substring(0, 30) + '...'
                                  : //@ts-ignore
                                    item.name
                              }
                            </p>
                          </div>
                          <p className="text-red-400 text-sm">{item.site}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="flex justify-start gap-10 items-center">
              <div className="flex flex-col justify-start items-start w-1/2 border py-5 px-2 rounded-md">
                <div className="mb-3 w-full">
                  <Input
                    label="добавить имя на кнопку"
                    onChange={(e) => setTitle1(e.target.value)}
                  />
                </div>
                <div className="mb-3 w-full">
                  <Input
                    label="добавить ссылку на кнопку"
                    onChange={(e) => setUrl1(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start w-1/2 border py-5 px-2 rounded-md">
                <div className="mb-3 w-full">
                  <Input
                    label="добавить имя на кнопку"
                    onChange={(e) => setTitle2(e.target.value)}
                  />
                </div>
                <div className="mb-3 w-full">
                  <Input
                    label="добавить ссылку на кнопку"
                    onChange={(e) => setUrl2(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={AddCarousel}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>

      <button
        onClick={() => handleOpen('xl')}
        className="bg-blue-400 py-2 px-3 rounded-md text-white"
      >
        добавить карусель
      </button>
    </div>
  );
};
