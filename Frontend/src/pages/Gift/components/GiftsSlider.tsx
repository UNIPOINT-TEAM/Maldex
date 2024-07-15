import { Swiper, SwiperSlide } from 'swiper/react';
import prev from '../../../assets/icons/projectPrev.svg';
import next from '../../../assets/icons/projectNext.svg';
import { Link } from 'react-router-dom';
import { Scrollbar } from 'swiper/modules';
import GiftsNav from './GiftsNav';
import { GetGiftsCategory } from '../../../services/services';
import { useEffect, useRef, useState } from 'react';

function GiftsSlider({ category }) {
  const swiperRef = useRef(null);
  const [giftCategory, setGiftCategory] = useState([]);
  const [activeCategoryIds, setActiveCategoryIds] = useState({});
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    GetGiftsCategory()
      .then((res) => {
        const nonEmptyCategories = res.map(cat => ({
          ...cat,
          children: cat.children.filter(sub => sub.product_set.length > 0),
        })).filter(cat => cat.children.length > 0);

        setGiftCategory(nonEmptyCategories);

        const initialActiveCategoryIds = nonEmptyCategories.reduce((acc, cat) => {
          if (cat.children.length > 0) {
            acc[cat.id] = cat.children[0].id;
          }
          return acc;
        }, {});

        setActiveCategoryIds(initialActiveCategoryIds);
      })
      .catch((error) => {
        console.error('Error fetching gift categories:', error);
      });
  }, []);

  useEffect(() => {
    if (activeCategoryIds[category.id] !== undefined) {
      const selectedCategory = giftCategory.find(cat => cat.id === category.id);
      const subCategory = selectedCategory?.children.find(sub => sub.id === activeCategoryIds[category.id]);
      setSelectedCategoryData(subCategory);
    }
  }, [activeCategoryIds, category.id, giftCategory]);

  const handleSetActiveCategoryId = (catId, subId) => {
    setActiveCategoryIds(prevState => ({ ...prevState, [catId]: subId }));
  };

  return (
    <div className="container_xxl px-3 md:mb-[100px]">
      <div>
        <GiftsNav
          title={category.name}
          color="gray"
          subcategories={category.children}
          activeCategoryId={activeCategoryIds[category.id] || null}
          setActiveCategoryId={(subId) => handleSetActiveCategoryId(category.id, subId)}
        />

        <div className="my-5 lg:h-[400px]">
          <div className="h-full hidden lg:flex">
            <div className="h-[400px] flex items-center">
              <button className="absolute z-50 -ml-[16px]" onClick={goPrev}>
                <img src={prev} alt="" className="w-[32px]" />
              </button>
            </div>
            <Swiper
              ref={swiperRef}
              className="w-full p-0"
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
                  <Link to={`/gift/${product.id}`}>
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
