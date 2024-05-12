import { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import { Input } from '@material-tailwind/react';
import { GetGiftSetId, EditGiftSet } from '../../../services/buildset'; // Импортируем функцию для редактирования
import { GetProductSearch } from '../../../services/product';
import ProductDialog from './ProductDialog';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function EditBuildSet() {
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState([]);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [giftDetails, setGiftDetails] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const addToGiftDetails = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  useEffect(() => {
    GetProductSearch(inputVal, '', '').then((res) => {
      setProducts(res.data.results);
    });
  }, [inputVal]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetGiftSetId(id); // Получаем данные о категории по id
        setGiftDetails(data.product_sets);
        console.log('Данные о категории:', data);

        // Устанавливаем название категории
        setTitle(data.title);

        // Устанавливаем выбранные продукты и их количество
        const selectedIds = [];
        const quantities = {};
        data.product_sets.forEach((product) => {
          selectedIds.push(product.id);
          quantities[product.id] = product.quantity;
        });
        setSelectedProductsIds(selectedIds);
        setQuantities(quantities);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchData();
  }, [id]); // Добавляем id в зависимости, чтобы запрос отправлялся при изменении id

  const handleOpen = () => setOpen(!open);

  const handleCheckboxChange = (id) => {
    const newSelected = selectedProductsIds.includes(id)
      ? selectedProductsIds.filter((item) => item !== id)
      : [...selectedProductsIds, id];
    setSelectedProductsIds(newSelected);

    const newQuantities = { ...quantities };
    if (!newSelected.includes(id)) {
      delete newQuantities[id];
    } else if (!quantities[id]) {
      newQuantities[id] = 1;
    }
    setQuantities(newQuantities);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   // Собираем данные о продуктах и их количествах
  //   const productData = selectedProductsIds.map((id) => ({
  //     product_sets: id,
  //     quantity: quantities[id] || 1, // Значение по умолчанию равно 1, если количество не указано
  //   }));

  //   // Формируем объект для отправки
  //   const setCategoryData = {
  //     title,
  //     product_data: productData,
  //   };

  //   console.log('Данные для отправки:', setCategoryData); // Выводим данные в консоль

  //   try {
  //     // Отправляем данные для обновления категории
  //     await EditGiftSet(id, setCategoryData);
  //     // Обработка успешного ответа
  //     console.log('Категория успешно обновлена:', setCategoryData);
  //   } catch (error) {
  //     // Обработка ошибок при отправке
  //     console.error('Ошибка при обновлении категории:', error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Отправляем данные для обновления категории
      await EditGiftSet(id, setCategoryData);
      // Обновляем данные о продуктах в состоянии giftDetails
      const updatedGiftDetails = { ...giftDetails };
      // Обновляем продукты и их количество в состоянии giftDetails
      setGiftDetails(updatedGiftDetails);
    } catch (error) {
      console.error('Ошибка при обновлении категории:', error);
    }
  };
  
  
  // В функции handleOpen добавьте логику для открытия диалогового окна и выбора новых продуктов


  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  };

  console.log(giftDetails);

  return (
    <DefaultLayout>
      <div>Редактирование категории для сбора наборов</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-1/2 mb-5">
          <Input
            placeholder="Введите название набора"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-8">
          <button
            type="button"
            className="w-[200px] h-[40px] bg-blue-400 rounded-md float-end text-white"
            onClick={handleOpen}
          >
            Добавить товар
          </button>
          <div>Товары в наборы</div>
        </div>
        <div className="flex flex-wrap">
          {Array.isArray(giftDetails) &&
            giftDetails.map((item, index) => (
              <div key={item.id} className="flex flex-col items-center mb-4 ">
                <div className=" shadow-4 p-2 rounded-sm h-[400px]">
                  <div className="catalog w-[200px]">
                    <div className="relative swiper-top-container h-[200px] mb-4 bg-gray-200">
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="  h-full"
                      >
                        {item?.product_sets?.images_set?.map((i) => (
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
                          {item?.product_sets?.name?.length > 30
                            ? item?.product_sets?.name?.substring(0, 40) + '...'
                            : item?.product_sets?.name}
                        </p>
                      </div>
                      <p className="mb-2 text-gray-600 text-fs_8">
                        {item?.product_sets?.vendor_code}
                      </p>
                      <div className="relative mb-2 flex items-center justify-between">
                        <p className="text-[16px] md:text-fs_4">
                          {item?.product_sets?.price}
                          <span className="text-xs absolute top-0">12</span>
                          <span className="ml-4 mr-1">
                            {item?.product_sets?.price_type}
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
          <div>
          </div>
        </div>

        <ProductDialog
          open={open}
          handleOpen={handleOpen}
          products={products}
          handleCheckboxChange={handleCheckboxChange}
          setInputVal={setInputVal}
          addToGiftDetails={addToGiftDetails} 
        />
        <button
          type="submit"
          className=" w-[200px] h-[40px] bg-blue-500 rounded-md float-end text-white mt-5"
        >
          Обновить категорию
        </button>
      </form>
    </DefaultLayout>
  );
}

export default EditBuildSet;
