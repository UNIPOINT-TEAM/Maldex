import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import {
  Input,
  Textarea,
  Checkbox,
  Select,
  Option,
} from '@material-tailwind/react';
import { AddWithFormData } from '../../services/product';
import { GetMainCatalog, GetSubSubCatalog } from '../../services/maincatalog';
import { BASE_URL } from '../../utils/BaseUrl';
import { useNavigation } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState(null);
  const [article, setArticle] = useState('');
  const [productSize, setProductSize] = useState('');
  const [material, setMaterial] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(null);
  const [price_type, setPrice_type] = useState('');
  const [discount_price, setDiscount_price] = useState(null);
  const [weight, setWeight] = useState('');
  const [barcode, setBarcode] = useState('');
  const [ondemand, setOndemand] = useState(false);
  const [moq, setMoq] = useState('');
  const [days, setDays] = useState('');
  const [pack, setPack] = useState({
    amount: '',
    weight: '',
    volume: '',
    sizex: '',
    sizey: '',
    sizez: '',
    minpackamount: '',
  });
  const [ishit, setIshit] = useState(false);
  const [isnew, setIsnew] = useState(false);
  const [ispopular, setIspopular] = useState(false);
  const [color, setColor] = useState('');
  const [categoryId, setCategoryId] = useState(null);
  const [subcategoryId, setSubCategoryId] = useState(null);
  const [subSubcategoryId, setSubSubCategoryId] = useState(null);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [subSubcategory, setSubSubCategory] = useState([]);
  const [inputs, setInputs] = useState([{ image: '', color: '' }]);
  const [mainId, setMainId] = useState(null);
  const [fields, setFields] = useState([]);
  const [inputValues, setInputValues] = useState([]);

  const addFields = () => {
    const newFieldIndex = fields.length;
    setFields([...fields, newFieldIndex]);
  };

  const handleInputChange1 = (index, field, value) => {
    const newInputValues = { ...inputValues, [`${index}_${field}`]: value };
    setInputValues(newInputValues);
    console.log(newInputValues);
  };

  const handleSubmit = () => {
    const newArray = fields.map((index) => ({
      count: inputValues[`${index}_count`] || '',
      name: inputValues[`${index}_percent`] || '',
    }));
    console.log(newArray);
  };

  useEffect(() => {
    GetMainCatalog().then((res) => {
      setCategory(res);
    });
    GetSubSubCatalog(
      `/product/categories/get_subcategories/${categoryId}`,
    ).then((res) => {
      setSubCategory(res);
    });
    GetSubSubCatalog(
      `/product/categories/get_tertiary_categories/${subcategoryId}`,
    ).then((res) => {
      setSubSubCategory(res);
    });
    if (!subcategoryId && !subSubcategoryId) {
      setMainId(categoryId);
      setSubCategoryId(null);
      setSubSubCategoryId(null);
    } else if (!subSubcategoryId) {
      setMainId(subcategoryId);
      setSubSubCategoryId(null);
    } else if (subSubcategoryId != null) {
      setMainId(subSubcategoryId);
    }
  }, [categoryId, subcategoryId, subSubcategoryId]);

  const addCategoryId = (id: any) => {
    setCategoryId(id);
    setSubCategoryId(null);
    setSubSubCategoryId(null);
  };
  const addSubCategoryId = (id: any) => {
    setSubCategoryId(id);
    setSubSubCategoryId(null);
  };
  const addSubSubCategoryId = (id: any) => {
    setSubSubCategoryId(id);
  };
  console.log(mainId);

  const addnewProduct = (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', name),
      formdata.append('code', code),
      formdata.append('article', article),
      formdata.append('product_size', productSize),
      formdata.append('material', material),
      formdata.append('description', description),
      formdata.append('brand', brand),
      formdata.append('price', price),
      formdata.append('price_type', price_type),
      formdata.append('discount_price', discount_price),
      formdata.append('weight', weight),
      formdata.append('barcode', barcode),
      formdata.append('ondemand', ondemand),
      formdata.append('moq', moq),
      formdata.append('days', days),
      formdata.append('color', color),
      formdata.append('pack', JSON.stringify(pack)),
      formdata.append('is_popular', ispopular),
      formdata.append('is_hit', ishit),
      formdata.append('is_new', isnew),
      formdata.append('categoryId', mainId);

    for (let i = 0; i < inputs.length; i++) {
      formdata.append(`images[${i}]color`, inputs[i].color);
      formdata.append(`images[${i}]image`, inputs[i].image);
    }
    fields.forEach((index) => {
      formdata.append(
        `items[${index}][count]`,
        inputValues[`${index}_count`] || '',
      );
      formdata.append(
        `items[${index}][name]`,
        inputValues[`${index}_percent`] || '',
      );
    });

    AddWithFormData(`${BASE_URL}/product/`, formdata).then(() =>
      navigate('/product'),
    );
  };

  const handleFileInputChange = (index, event) => {
    const file = event.target.files[0];
    if (!file) return;
    const newInputs = [...inputs];
    newInputs[index]['image'] = file;
    setInputs(newInputs);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { image: '', color: '' }]);
  };

  return (
    <DefaultLayout>
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
                label="Код"
                onChange={(e) => setCode(e.target.value)}
                placeholder=""
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
                label="Цвет"
                onChange={(e) => setColor(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                required
                variant="standard"
                label="Материаль"
                onChange={(e) => setMaterial(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                required
                variant="standard"
                label="Бренд"
                onChange={(e) => setBrand(e.target.value)}
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
              <Select label="Выберите валюту">
                <Option onClick={() => setPrice_type('RUB')}>RUB</Option>
                <Option onClick={() => setPrice_type('USD')}>USD</Option>
              </Select>
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
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                required
                variant="standard"
                label="Весь"
                onChange={(e) => setWeight(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                required
                variant="standard"
                label="Штрих Код"
                onChange={(e) => setBarcode(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Checkbox
                color="blue"
                label="В продаже"
                checked={ondemand}
                onChange={(e) => setOndemand(e.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                required
                variant="standard"
                label="Минимальный заказ"
                onChange={(e) => setMoq(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                required
                variant="standard"
                label="Срок доставки"
                onChange={(e) => setDays(e.target.value)}
                placeholder=""
              />
            </div>

            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                required
                variant="standard"
                label="Размер"
                onChange={(e) => setProductSize(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5 text-black">
              <Checkbox
                color="blue"
                label="Popular"
                checked={ispopular}
                onChange={(e) => setIspopular(e.target.checked)}
              />
              <Checkbox
                color="blue"
                label="NEW"
                checked={isnew}
                onChange={(e) => setIsnew(e.target.checked)}
              />
              <Checkbox
                color="blue"
                label="HIT"
                checked={ishit}
                onChange={(e) => setIshit(e.target.checked)}
              />
            </div>
            <div className="w-full flex items-center justify-between mb-5 pr-5 text-black">
              <Select label="Выберите Категорию">
                {category?.map((i) => (
                  <Option key={i.id} onClick={() => addCategoryId(i.id)}>
                    {i.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="w-full flex items-center justify-between mb-5 pr-5 text-black">
              <Select label="Выберите Категорию">
                {subcategory?.map((i) => (
                  <Option key={i.id} onClick={() => addSubCategoryId(i.id)}>
                    {i.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="w-full flex items-center justify-between mb-5 pr-5 text-black">
              <Select label="Выберите Категорию">
                {subSubcategory?.map((i) => (
                  <Option key={i.id} onClick={() => addSubSubCategoryId(i.id)}>
                    {i.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="flex items-center justify-between w-full">
              <h5 className="mb-3">Упаковка</h5>
            </div>
            <div className="flex flex-wrap items-center justify-between full mb-5 text-black">
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Количество"
                  onChange={(e) => setPack({ ...pack, amount: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Весь упаковки"
                  onChange={(e) => setPack({ ...pack, weight: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Объем упаковки (см.куб)"
                  onChange={(e) => setPack({ ...pack, volume: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Ширина"
                  onChange={(e) => setPack({ ...pack, sizex: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Высота"
                  onChange={(e) => setPack({ ...pack, sizey: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Глубина"
                  onChange={(e) => setPack({ ...pack, sizez: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Минимальный кол-во упаковки"
                  onChange={(e) =>
                    setPack({ ...pack, minpackamount: e.target.value })
                  }
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <button
                onClick={addFields}
                type="button"
                className="bg-blue-400 py-1 px-4 rounded-md text-white mb-5"
              >
                добавить скидку
              </button>

              {fields.map((field, index) => (
                <div
                  key={index}
                  className="input-group flex w-full justify-between gap-10 mb-5"
                >
                  <div className="w-1/2 mb-4">
                    <Input
                      variant="standard"
                      label="количество товаров"
                      onChange={(e) =>
                        handleInputChange1(index, 'count', e.target.value)
                      }
                      className="w-full"
                    />
                  </div>

                  <div className="w-1/2 mb-4">
                    <Input
                      variant="standard"
                      label="
                      процент скидку"
                      onChange={(e) =>
                        handleInputChange1(index, 'percent', e.target.value)
                      }
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
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
                        htmlFor={`${index}`}
                        className="flex h-[100px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4"
                      >
                        <input
                          required
                          label="Фото"
                          type="file"
                          name={`${index}`}
                          id={`${index}`}
                          className="sr-only"
                          accept="image/*"
                          onChange={(e) => handleFileInputChange(index, e)}
                        />
                        <p className="text-fs-6">Добавить Фото</p>
                      </label>
                    </div>

                    {/* <div className="mb-5">
                      <Input
                        required
                        label="Цвет"
                        type="text"
                        placeholder="Enter color"
                        name="color"
                        defaultValue={input?.color ? input?.color : ''}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </div> */}
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
    </DefaultLayout>
  );
};

export default AddProduct;
