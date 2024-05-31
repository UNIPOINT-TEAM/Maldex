import { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import { Button, Input } from '@material-tailwind/react';
import { PostGiftSet } from '../../../services/buildset';
import { GetProductSearch } from '../../../services/product';
import ProductDialog from './ProductDialog';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function AddBuildSet() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [inputVal, setInputVal] = useState(''); // Добавьте это, если требуется значение для поиска продуктов
  const [currentPage, setCurrentPage] = useState(1); // Добавьте это, если требуется текущая страница для поиска продуктов

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = selectedProductsIds.map((id) => ({
      product_sets: id,
      quantity: quantities[id] || 1,
    }));

    const SetCategoryList = {
      title,
      product_data: productData,
    };

    console.log('Данные для отправки:', SetCategoryList);

    try {
      await PostGiftSet(SetCategoryList);
      console.log('Данные успешно отправлены:', SetCategoryList);
      navigate('/build-set');
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  };

  useEffect(() => {
    GetProductSearch(inputVal, currentPage, '').then((res) => {
      setProducts(res.data.results);
      const residual = res.data.count % 10;
      const pages = (res.data.count - residual) / 10;
      const totalPages = pages % 2 === 0 && pages === 1 ? pages : pages + 1;
      // Установите общее количество страниц, если это необходимо
    });
  }, [inputVal, currentPage]);

  return (
    <DefaultLayout>
      <p className="text-center text-[36px] py-4">
        Добавление категории для сбора наборов
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-1/2 mb-5">
          <Input
            required
            label="Введите название набора"
            variant="standard"
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
          <div>Товары в наборе</div>
        </div>
        <div className="flex flex-wrap">
          {products
            .filter((item) => selectedProductsIds.includes(item.id))
            .map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center mb-4 w-1/6"
              >
                <div className="w-[80%] shadow-4 p-2 rounded-sm h-[400px]">
                  <div className="catalog">
                    <div className="relative swiper-top-container h-[200px] mb-4 bg-gray-200">
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="h-full"
                      >
                        {item?.images_set?.map((i, index) => (
                          <SwiperSlide key={index} className="w-full h-full">
                            <div className="relative h-full">
                              <div className="flex justify-center items-center h-full">
                                <img
                                  className="mb-2 object-contain product-img"
                                  src={i.image_url || i.image}
                                  alt=""
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      {item?.is_new && (
                        <div className="absolute z-[999] top-2 left-2 flex gap-2">
                          <div className="border border-red-primary text-[10px] text-red-primary rounded-lg px-1">
                            NEW
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="default">
                      <div className="mb-2 md:mb-5 min-h-[70px]">
                        <p className="text-fs_7 tracking-wide">
                          {item?.name?.length > 30
                            ? item?.name.substring(0, 40) + '...'
                            : item?.name}
                        </p>
                      </div>
                      <p className="mb-2 text-gray-600 text-fs_8">
                        {item?.vendor_code}
                      </p>
                      <div className="relative mb-2 flex items-center justify-between">
                        <p className="text-[16px] md:text-fs_4">
                          {item?.price}
                          <span className="ml-4 mr-1">{item?.price_type}</span>
                        </p>
                      </div>
                      {/* <Input
                        type="number"
                        min="1"
                        name="count"
                        value={quantities[item.id] || ''}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        label="Количество"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <ProductDialog
          open={open}
          handleOpen={handleOpen}
          handleCheckboxChange={handleCheckboxChange}
          setOpen={setOpen}
        />
        <Button
          type="submit"
          color="green"
          className="w-[400px] h-[60px] mb-10 text-[24px] text-white rounded-lg"
        >
          Создать набор
        </Button>
      </form>
    </DefaultLayout>
  );
}

export default AddBuildSet;
