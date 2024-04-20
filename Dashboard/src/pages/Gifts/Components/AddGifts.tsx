import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  Input,
  Textarea,
  Checkbox,
  Select,
  Option,
} from '@material-tailwind/react';
import { GetGiftsCategory, PostGiftsCategory } from '../../../services/gifts';

const AddGifts = () => {
  const [name, setName] = useState('');
  const [article, setArticle] = useState('');
  const [price, setPrice] = useState('');
  const [price_type, setPrice_type] = useState('');
  const [discount_price, setDiscount_price] = useState('');
  const [barcode, setBarcode] = useState('');
  const [ondemand, setOndemand] = useState(false);
  const [moq, setMoq] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputs, setInputs] = useState(['']); 
  const [giftCategory, setGiftCategory] = useState([]);


  // Для фотографий
  const handleFileInputChange = (index, event) => {
    const files = event.target.files;
    const newInputs = [...inputs];
    newInputs[index] = files[0];
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const addnewProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', name);
    formData.append('article', article);
    formData.append('price', price);
    formData.append('price_type', price_type);
    formData.append('discount_price', discount_price);
    formData.append('description', description);
    formData.append('category_data', JSON.stringify(selectedCategory));

    // Добавление изображений в FormData
    // inputs.forEach((input, index) => {
    //   formData.append(`images_data[${index}]`, input);
    // });

    PostGiftsCategory(formData)
      .then((response) => {
        // Обработка успешного ответа
        console.log(response);
      })
      .catch((error) => {
        // Обработка ошибки
        console.error('Error adding new product:', error);
      });
  };

  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const loadCategories = async () => {
      const data = await GetGiftsCategory();
      setCategories(data);
    };
    loadCategories();
  }, []);


  const getCategoryOptions = () => {
    return categories.map(category => (
      <Option key={category.id} value={category.id} disabled={!category.is_available}>
        {category.name} // основная категория
        {category.children.map(sub => (
          <Option key={sub.id} value={sub.id} disabled={!sub.is_available}>
            {'   --> ' + sub.name} // подкатегории
          </Option>
        ))}
      </Option>
    ));
  };


  return (
    <DefaultLayout>
      <div>
        <div>
          <p className="text-center text-[36px] py-4">Создать новый продукт</p>
          <form
            id="form-post"
            onSubmit={addnewProduct}
            className="flex w-full justify-around items-start px-10 gap-20 mb-5"
          >
            <div className="w-2/3 flex flex-wrap  justify-start items-start">
              <div className="flex items-center justify-between w-1/2 mb-5 pr-10">
                <Input
                  required
                  variant="standard"
                  label="Название"
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
                <Input
                  required
                  variant="standard"
                  label="Артикуль"
                  onChange={(e) => setArticle(e.target.value)}
                  placeholder=""
                />
              </div>

              <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
                <Input
                  required
                  variant="standard"
                  label="Цена"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
                <Input
                  required
                  variant="standard"
                  label="Валюта"
                  onChange={(e) => setPrice_type(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
                <Input
                  required
                  variant="standard"
                  label="Цена со скидкой"
                  onChange={(e) => setDiscount_price(e.target.value)}
                  placeholder=""
                />
              </div>



              <Select label="Выберите Категорию">
              {getCategoryOptions()}
            </Select>

              <div className="flex items-center justify-between w-full mb-5">
                <Textarea
                  required
                  variant="standard"
                  label="Описание"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/3 pt-10">
              <div className="flex items-center justify-between w-full">
                <div className="w-full">
                  {inputs.map((input, index) => (
                    <div key={index}>
                      <div className="mb-5">
                        <label
                          htmlFor={`cover-${index}`}
                          className="flex h-[100px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium hover:bg-opacity-90 xsm:px-4"
                        >
                          <input
                            
                            type="file"
                            name={`cover-${index}`}
                            id={`cover-${index}`}
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => handleFileInputChange(index, e)}
                          />
                          <p className="text-fs-6">Добавить Фото</p>
                        </label>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    className="w-[200px] h-[40px] bg-blue-400 rounded-md float-end text-white"
                    onClick={handleAddInput}
                  >
                    Добавить ещё
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center w-full">
            <button
              form="form-post"
              type="submit"
              className="w-[400px] h-[60px] bg-blue-400 mb-10 text-[24px] text-white rounded-lg"
            >
              Добавить продукт
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddGifts;
