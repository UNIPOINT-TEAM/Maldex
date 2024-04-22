import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import { GetGiftsDetail } from '../../../services/gifts';
import { Input, Option, Select, Textarea } from '@material-tailwind/react';

function EditGifts() {
  const { id } = useParams();
  const [giftDetails, setGiftDetails] = useState({});
  const [name, setName] = useState('');
  const [article, setArticle] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any[]>([]);


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

  return (
    <DefaultLayout>
      <div>
        <h1>Детали Подарка</h1>
        <p>Название: {giftDetails.title || 'Название не указано'}</p>
        <p>Описание: {giftDetails.description || 'Описание отсутствует'}</p>
        {/* Можно добавить другие детали по мере необходимости */}
      </div>
      <div>
        <form
          id="form-post"
          // onSubmit={addnewProduct}
          className="flex w-full justify-around items-start px-10 gap-20 mb-5"
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
              <Select label="Выберите Категорию" >
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

            <div className="flex items-center justify-between w-full mb-5">
                
              <Textarea defaultValue={giftDetails?.description} required variant="standard" label="Описание" />
            </div>
            <input type="hidden" name="selectedProductIds" />

            <div className="flex items-center justify-between w-full mb-5">
              <button
                type="button"
                className="w-[200px] h-[40px] bg-blue-400 rounded-md float-end text-white"
                // onClick={handleOpen}
              >
                Добавить товар
              </button>
            </div>
            <div>
              <div>Товары в наборы</div>
              <div className="flex flex-wrap">
                {/* {addProduct */}
                {/* ?.filter((item) => selectedProductsIds.includes(item.id))
                  .map((item, index) => ( */}
                <div
                  // key={index}
                  className="flex flex-col items-center mb-4 w-1/4"
                >
                  <div>
                    {/* {item.name.length > 30
                          ? item.name.substring(0, 40) + '...'
                          : item.name} */}
                  </div>
                  <div>
                    <input
                      className="w-13"
                      type="text"
                      name="count"
                      // value={quantities[item.id] || ''}
                      // onChange={(e) =>
                      //   handleQuantityChange(item.id, e.target.value)
                      // }
                    />
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
          <div className="w-1/3 pt-10">
            <div className="flex items-center justify-between w-full">
              {/* <div className="w-full">
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
                          // onChange={(e) => handleFileInputChange(index, e)}
                        />
                        <p className="text-fs-6">Добавить Фото</p>
                      </label>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  className="w-[200px] h-[40px] bg-blue-400 rounded-md float-end text-white"
                  // onClick={handleAddInput}
                >
                  Добавить ещё
                </button>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default EditGifts;
