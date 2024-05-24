import { Swiper, SwiperSlide } from 'swiper/react';
import prev from '../../../assets/icons/projectPrev.svg';
import next from '../../../assets/icons/projectNext.svg';

// import { ProductNav } from "..";
import { Link } from 'react-router-dom';
import { Scrollbar } from 'swiper/modules';

import GiftsNav from './GiftsNav';

import { GetGiftsCategory } from '../../../services/services';
import { useEffect, useRef, useState } from 'react';
// @ts-expect-error: This
function GiftsSlider({ category }) {
  const swiperRef = useRef(null);
  const [giftCategory, setGiftCategory] = useState([]);
  // @ts-expect-error: This
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  const goNext = () => {
    // @ts-expect-error: This
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-expect-error: This
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    // @ts-expect-error: This
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-expect-error: This
      swiperRef.current.swiper.slidePrev();
    }
  };
  // @ts-expect-error: This
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
// @ts-expect-error: This
  const selectedCategory = giftCategory.find((cat) => cat.id === category.id);

  // console.log(selectedCategory);

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

        <div className="my-5 lg:h-[400px]">
          <div className="h-full hidden lg:flex">
            <div className="h-[400px] flex items-center">
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
              {/* @ts-expect-error: This */}
              {selectedCategoryData?.product_set.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to={`/gift/${product.id}`}>
                    <div className="relative">
                      {/* @ts-expect-error: This */}
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
