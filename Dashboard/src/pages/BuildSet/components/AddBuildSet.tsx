import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from '@material-tailwind/react';
import { GetProduct} from '../../../services/main'; // Убедитесь, что пути импорта корректны
import { PostGiftSet } from '../../../services/buildset';

function AddBuildSet() {
  const [products, setProducts] = useState([]);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetProduct();
      console.log(data);
      
      if (data && Array.isArray(data.results)) { 
        setProducts(data.results);
      } else {
        console.error('Ожидался массив в свойстве "results", получены данные:', data);
      }
    };
    fetchProducts();
  }, []);

  const handleOpen = () => setOpen(!open);

  const handleCheckboxChange = (id) => {
    const newSelected = selectedProductsIds.includes(id) 
      ? selectedProductsIds.filter(item => item !== id) 
      : [...selectedProductsIds, id];
    setSelectedProductsIds(newSelected);

    const newQuantities = { ...quantities };
    if (!newSelected.includes(id)) {
      delete newQuantities[id];
    } else if (!quantities[id]) {
      newQuantities[id] = 1; // Значение по умолчанию
    }
    setQuantities(newQuantities);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Собираем данные о продуктах и их количествах
    const productData = selectedProductsIds.map(id => ({
      product_sets: id,
      quantity: quantities[id] || 1 // Значение по умолчанию равно 1, если количество не указано
      
      
    }));
  
    // Формируем объект для отправки
    const SetCategoryList = {
      title,
      product_data: productData
    };

  
    console.log('Данные для отправки:', SetCategoryList); // Выводим данные в консоль
  
    try {
      // Отправляем данные
      await PostGiftSet(SetCategoryList);
      // Обработка успешного ответа
      console.log('Данные успешно отправлены:', SetCategoryList);
    } catch (error) {
      // Обработка ошибок при отправке
      console.error('Ошибка при отправке данных:', error);
    }
  };
  
  

  

  return (
    <DefaultLayout>
      <div>Добавление категории для сбора наборов</div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Введите название набора"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="button"
          className="w-[200px] h-[40px] bg-blue-400 rounded-md float-end text-white"
          onClick={handleOpen}
        >
          Добавить товар
        </button>
        <div>Товары в наборы</div>
        <div className="flex flex-wrap">
          {products.filter(item => selectedProductsIds.includes(item.id)).map((item) => (
            <div key={item.id} className="flex flex-col items-center mb-4 w-1/4">
              <div>{item.name.length > 30 ? item.name.substring(0, 40) + '...' : item.name}</div>
              <Input
                type="number"
                min="1"
                name="count"
                value={quantities[item.id] || ''}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
            </div>
          ))}
        </div>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Выберите продукт, который вы хотите увидеть в списке</DialogHeader>
          <DialogBody className="h-[400px] flex flex-wrap overflow-y-scroll">
            {products.map((item) => (
              <div key={item.id} className="flex flex-col items-center mb-4 w-1/4">
                <input
                  type="checkbox"
                  checked={selectedProductsIds.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mb-2"
                />
                {item.name}
              </div>
            ))}
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={handleOpen}>Отмена</Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>Подтвердить</Button>
          </DialogFooter>
        </Dialog>
        <button type="submit" className="w-[200px] h-[40px] bg-blue-500 rounded-md float-end text-white mt-5">Создать набор</button>
      </form>
    </DefaultLayout>
  );
}

export default AddBuildSet;
