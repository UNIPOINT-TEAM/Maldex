import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

import { Link, useParams } from 'react-router-dom';
import { GetProductGifts } from '../../services/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const GiftProduct = () => {
  const { id } = useParams();
  const [addProduct, setAddProduct] = useState([]);
  const [receiveId, setReceiveId] = useState(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    GetProductGifts(id).then((res) => {
      setLoader(!loader);
      console.log(res.data.product_set);

      setAddProduct(res.data.product_set);
    });
  }, [status]);

  return (
    <DefaultLayout>
      <div className="container_xxl relative px-3">
        <div className="flex flex-wrap justify-between gap-5 py-5">
          {/* @ts-ignore */}

          {addProduct.length == 0 && <div>нет товаров</div>}
          {addProduct?.map((item) => (
            <div className="catalog shadow-md px-1">
              <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                <Swiper
                  pagination={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                  className="  h-full"
                >
                  {item.gift_basket_images.map((i) => (
                    <SwiperSlide key={i.id} className="w-full h-full">
                      <div className="relative  h-full">
                        <div className="flex justify-center items-center h-full">
                          <img
                            className="mb-2  object-contain product-img"
                            src={i.images}
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
                      item.title.length > 30
                        ? //@ts-ignore
                          item.title.substring(0, 40) + '...'
                        : //@ts-ignore
                          item.title
                    }
                  </p>
                </div>

                <div className="relative mb-2">
                  <p className="text-[16px] md:text-fs_4">
                    {item.price}
                    <span className="text-xs absolute top-0">12</span>
                    <span className="ml-4 mr-1">{item.price_type}</span>
                    <span className="text-xs absolute top-0 line-through text-red-primary">
                      234
                    </span>
                  </p>
                </div>
                <div className="flex justify-between catalog_btns">
                  <Link to={`/product/${item.id}`}>
                    <button className="bg-red-primary flex justify-center items-center uppercase  p-2 text-white rounded-lg font-bold tracking-wider text-fs_8 lg:text-sm gap-1 lg:w-[180px]">
                      узнать больше
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default GiftProduct;
