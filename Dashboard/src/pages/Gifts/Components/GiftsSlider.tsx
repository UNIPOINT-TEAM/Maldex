import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import prev from '../../../assets/icons/projectPrev.svg';
import next from '../../../assets/icons/projectNext.svg';

// import { ProductNav } from "..";
import { Link } from 'react-router-dom';
import { Scrollbar } from 'swiper/modules';
import { FaArrowRightLong } from 'react-icons/fa6';
import { ProductNav } from '../../../components';
import GiftsNav from './GiftsNav';
import { GetGiftsCategory, delGiftsCategory } from '../../../services/gifts';
import BannerEditModal from '../../../components/MainBanner/BannerEditModal';
import DeteleteItem from '../../../components/DeleteModal';
import { MdEdit } from 'react-icons/md';

function GiftsSlider({ category }) {
  const swiperRef = useRef(null);
  const [giftCategory, setGiftCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  const goNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedCategoryData(subCategory);
  };

  useEffect(() => {
    GetGiftsCategory()
      .then((res) => {
        setGiftCategory(res);
        console.log(res);
      })
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  const selectedCategory = giftCategory.find((cat) => cat.id === category.id);

  // console.log(selectedCategory);

  const handleDelete = async (productId: number) => {
    try {
      await delGiftsCategory(productId);
      window.location.reload();

    } catch (error) {
      console.error('Ошибка при удалении аккордеона:', error);
    }
  };

  return (
    <div className="container_xxl px-3 md:mb-[100px]">
      <div>
        {/* <h2 className="text-2xl mb-4">{category.name}</h2> */}
        <GiftsNav
          title={category.name}
          color="gray"
          subcategories={category.children}
          onSubCategoryClick={handleSubCategoryClick}
        />

        <div className="my-5 lg:h-[460px]">
          <div className="h-full hidden lg:flex">
            <div className="h-[410px] flex items-center">
              <button className="absolute z-50 -ml-[16px] " onClick={goPrev}>
                <img src={prev} alt="" className="w-[32px]" />
              </button>
            </div>
            <Swiper
              ref={swiperRef}
              className="w-full p-0 "
              slidesPerView={3.5}
              loop={true}
              spaceBetween={10}
              navigation
              pagination={{ clickable: true }}
              modules={[Scrollbar]}
              scrollbar={{ draggable: true }}
            >
              {selectedCategoryData?.product_set.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to="/portfolio">
                    <div className="relative">
                      {product.gift_basket_images?.map((image) => (
                        <img
                          key={image.id}
                          src={image.images}
                          alt={product.title}
                          className=""
                        />
                      ))}
                      <p className="z-[999999] text-fs_6 left-0 ps-5 absolute bottom-2 text-[#fff]">
                        {product.title}
                      </p>
                    </div>
                  </Link>
                  <div className="flex w-full justify-center items-center ">
                    <div className="flex gap-2">
                      {/* <Link to={`/gifts/${product.id}`}>
                        <button className="bg-warning px-3 text-white rounded  h-[40px] flex justify-center items-center">
                          Изменить
                        </button>
                      </Link> */}
                      <button
                        className="bg-red-500 px-3 text-white rounded  h-[40px] flex justify-center items-center"
                        onClick={() => handleDelete(product.id)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="h-[410px] flex items-center">
              <button className="absolute z-50 -ml-[15px]" onClick={goNext}>
                <img src={next} alt="" className="w-[32px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftsSlider;
