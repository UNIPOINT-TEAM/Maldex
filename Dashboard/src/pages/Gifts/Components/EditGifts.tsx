import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import { GetGiftsDetail } from '../../../services/gifts';
import { Card, CardBody, CardFooter, Checkbox, Dialog, Input, Option, Select, Textarea } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function EditGifts() {
  const { id } = useParams();
  const [giftDetails, setGiftDetails] = useState({});
  const [name, setName] = useState('');
  const [article, setArticle] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [addProduct, setAddProduct] = useState<any[]>([]);
  const handleOpen = () => setOpen(!open);



  useEffect(() => {
    const fetchGiftDetails = async () => {
      try {
        const data = await GetGiftsDetail(id);
        setGiftDetails(data);
      } catch (error) {
        console.error('Ошибка при получении данных подарка:', error);
        // Вы можете выбрать оставить объект giftDetails пустым при ошибке
        setGiftDetails({});
      }
    };

    fetchGiftDetails();
  }, [id]);

  console.log(giftDetails);

  return (
    <DefaultLayout>
 
      <div>
        <form
          id="form-post"
          // onSubmit={addnewProduct}
          className="flex w-full justify-around items-start px-10 gap-20 my-5"
        >
          <div className="w-2/3 flex flex-wrap  justify-start items-start">
            <div className="flex items-center justify-between w-1/2 mb-5 pr-10">
              <Input
                defaultValue={giftDetails?.title}
                required
                variant="standard"
                label="Название"
                placeholder=""
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                defaultValue={giftDetails?.article}
                required
                variant="standard"
                label="Артикуль"
                placeholder=""
                onChange={(e) => setArticle(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                required
                variant="standard"
                defaultValue={giftDetails?.price}
                label="Цена"
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                defaultValue={giftDetails?.price_type}
                required
                variant="standard"
                label="Валюта"
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                defaultValue={giftDetails?.discount_price}
                required
                variant="standard"
                label="Цена со скидкой"
                placeholder=""
              />
            </div>

            <div className="flex w-full gap-5">
              <Select label="Выберите Категорию">
                {categories.map((category) => (
                  <Option key={category.id} value={category.id}>
                    {category.name}
                  </Option>
                ))}
              </Select>

              <Select
                label="Выберите подКатегорию"
                // onChange={(event) =>
                //   handleSubcategoryChange(event.target.id)
                // }
                // onChange={handleSubcategoryChange}
              >
                {subcategories.map((subcategory, index) => (
                  <Option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="flex items-center justify-between w-full my-6">
              <Textarea
                defaultValue={giftDetails?.description}
                required
                variant="standard"
                label="Описание"
              />
            </div>
            <input type="hidden" name="selectedProductIds" />

            <div className="flex items-center justify-between w-full mb-5">
              <button
                type="button"
                className="w-[200px] h-[40px] bg-blue-400 rounded-md float-end text-white"
                onClick={handleOpen}
              >
                Добавить товар
              </button>
            </div>
            <div>
              <div>Товары в наборе</div>
              <div className="flex flex-wrap">
                {giftDetails?.gift_basket_product?.map((item, index) => (
                  <div
                  key={item.id}
                  className="flex flex-col items-center mb-4 w-FULL"
                >
                  <div className="w-[80%] shadow-4 p-2 rounded-sm h-[400px]">
                    <div className="catalog ">
                      <div className="relative swiper-top-container h-[200px] mb-4 bg-gray-200">
                        <Swiper
                          pagination={{ clickable: true }}
                          modules={[Navigation, Pagination]}
                          className="  h-full"
                        >
                          {item?.images_set?.map((i) => (
                            <SwiperSlide className="w-full h-full">
                              <div
                                onClick={() => handleOpen('xl')}
                                className="relative  h-full"
                              >
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

                        {item?.is_new ? (
                          <div className="absolute z-[999] top-2 left-2 flex gap-2">
                            <div className="border border-red-primary text-[10px] text-red-primary rounded-lg px-1">
                              NEW
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      {/* {defaultProduct ? ( */}
                      <div className="default">
                        <div className="mb-2 md:mb-5  min-h-[70px] ">
                          <p className="text-fs_7 tracking-wide">
                            {
                              //@ts-ignore
                              item?.name?.length > 30
                                ? //@ts-ignore
                                  item?.name?.substring(0, 40) + '...'
                                : //@ts-ignore
                                  item?.name
                            }
                          </p>
                        </div>
                        <p className="mb-2 text-gray-600 text-fs_8">
                          {item?.vendor_code}
                        </p>
                        <div className="relative mb-2 flex items-center justify-between">
                          <p className="text-[16px] md:text-fs_4">
                            {item?.price}
                            <span className="text-xs absolute top-0">
                              12
                            </span>
                            <span className="ml-4 mr-1">
                              {item?.price_type}
                            </span>
                            <span className="text-xs absolute top-0 line-through text-red-primary">
                              234
                            </span>
                          </p>
                        </div>
       
                      </div>
                    </div>
                  </div>


                </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/3 pt-10">
            <div className="flex items-center justify-between w-full">

            </div>
          </div>
        </form>
        <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full font-satoshi">
          <CardBody className="flex flex-col gap-4">
            <p>поиск нужного товара</p>
            <div className="w-1/3">
              <Input
                label="что-нибудь"
                onChange={(e) => setInputVal(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-5 py-5 overflow-y-scroll h-[800px]">
              {/* @ts-ignore */}
              {addProduct?.map((item) => (
                <div className="w-1/6 shadow-4 p-2 rounded-sm h-[400px]">
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
                              onClick={() => handleOpen('xl')}
                              className="relative  h-full"
                            >
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

                      {item?.is_new ? (
                        <div className="absolute z-[999] top-2 left-2 flex gap-2">
                          <div className="border border-red-primary text-[10px] text-red-primary rounded-lg px-1">
                            NEW
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    {/* {defaultProduct ? ( */}
                    <div className="default">
                      <div className="mb-2 md:mb-5  min-h-[70px] ">
                        <p className="text-fs_7 tracking-wide">
                          {
                            //@ts-ignore
                            item?.name?.length > 30
                              ? //@ts-ignore
                                item?.name?.substring(0, 40) + '...'
                              : //@ts-ignore
                                item?.name
                          }
                        </p>
                      </div>
                      <p className="mb-2 text-gray-600 text-fs_8">
                        {item?.vendor_code}
                      </p>
                      <div className="relative mb-2 flex items-center justify-between">
                        <p className="text-[16px] md:text-fs_4">
                          {item?.price}
                          <span className="text-xs absolute top-0">12</span>
                          <span className="ml-4 mr-1">{item?.price_type}</span>
                          <span className="text-xs absolute top-0 line-through text-red-primary">
                            234
                          </span>
                        </p>
                        <Checkbox
                          defaultChecked={false}
                          color="blue"
                          onChange={() => handleCheckboxChange(item?.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
          <CardFooter className="pt-0 font-satoshi flex justify-end gap-4">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="inline-flex items-center justify-center rounded-md border text-danger border-danger py-2 px-10 text-center font-medium  hover:bg-opacity-90 "
            >
              Отмена
            </button>
            <button
              form="form-post"
              className="inline-flex tracking-wide items-center justify-center rounded-md bg-success py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
            >
              Сохранять
            </button>
          </CardFooter>
        </Card>
      </Dialog>
      </div>
    </DefaultLayout>
  );
}

export default EditGifts;
