import { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import { Input } from '@material-tailwind/react';
import { GetGiftSetId, EditGiftSet } from '../../../services/buildset'; // Импортируем функцию для редактирования
import { GetProductSearch } from '../../../services/product';
import ProductDialog from './ProductDialog';
import { useParams } from 'react-router-dom';

function EditBuildSet() {
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState([]);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    GetProductSearch(inputVal).then((res) => {
      setProducts(res.data.results);
    });
  }, [inputVal]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetGiftSetId(id); // Получаем данные о категории по id
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Собираем данные о продуктах и их количествах
    const productData = selectedProductsIds.map((id) => ({
      product_sets: id,
      quantity: quantities[id] || 1, // Значение по умолчанию равно 1, если количество не указано
    }));

    // Формируем объект для отправки
    const setCategoryData = {
      title,
      product_data: productData,
    };

    console.log('Данные для отправки:', setCategoryData); // Выводим данные в консоль

    try {
      // Отправляем данные для обновления категории
      await EditGiftSet(id, setCategoryData);
      // Обработка успешного ответа
      console.log('Категория успешно обновлена:', setCategoryData);
    } catch (error) {
      // Обработка ошибок при отправке
      console.error('Ошибка при обновлении категории:', error);
    }
  };

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  };

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
          {products
            .filter((item) => selectedProductsIds.includes(item.id))
            .map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center mb-4 w-1/4"
              >
                <div>
                  {item.name.length > 30
                    ? item.name.substring(0, 40) + '...'
                    : item.name}
                </div>
                {item.product_sets.map((productSet, index) => (
                  <div key={index}>
                    {/* Выводим информацию из product_sets */}
                    <p>{productSet.name}</p>
                    <p>{productSet.description}</p>
                    {/* Добавьте остальные поля из product_sets, которые вам нужны */}
                  </div>
                ))}
                <Input
                  type="number"
                  min="1"
                  name="count"
                  value={quantities[item.id] || ''}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                />
              </div>
            ))}
        </div>

        <ProductDialog
          open={open}
          handleOpen={handleOpen}
          products={products}
          handleCheckboxChange={handleCheckboxChange}
          setInputVal={setInputVal}
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
