import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import {
  Input,
  Textarea,
  Checkbox,
  Select,
  Option,
} from '@material-tailwind/react';
import {
  DeleteItem,
  GetProductDetail,
  UpdateWithFormData,
} from '../../services/product';
import { GetMainCatalog, GetSubSubCatalog } from '../../services/maincatalog';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/BaseUrl';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { MdDelete } from 'react-icons/md';

const EditProduct = () => {
  const { id } = useParams();
  const naviagte = useNavigate();
  const [name, setName] = useState('');
  const [code, setCode] = useState(0);
  const [article, setArticle] = useState('');
  const [productSize, setProductSize] = useState('');
  const [material, setMaterial] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(0);
  const [price_type, setPrice_type] = useState('');
  const [discount_price, setDiscount_price] = useState(0);
  const [weight, setWeight] = useState('');
  const [barcode, setBarcode] = useState('');
  const [ondemand, setOndemand] = useState(false);
  const [moq, setMoq] = useState('');
  const [days, setDays] = useState('');
  const [sales, setSales] = useState([]);
  const [color, setColor] = useState('');
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
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryId, setSubCategoryId] = useState(null);
  const [subSubcategoryId, setSubSubCategoryId] = useState(null);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [subSubcategory, setSubSubCategory] = useState([]);
  const [inputs, setInputs] = useState([{ image: '', color: '', fake: null }]);
  const [mainId, setMainId] = useState(null);
  const [productDetail, setProductDetail] = useState({});
  const [deletedIds, setDeletedIds] = useState([]);
  const [status, setStatus] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warehouse, setWarehouse] = useState([]);
  const [sizes, setSizes] = useState([]);

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
    GetProductDetail(id).then((res) => {
      console.log(res);
      setColor(res.data.colorID.name);
      setSales(res.data.discounts != null ? res.data.discounts : []);
      setWarehouse(res.data.warehouse);
      setSizes(res?.data?.sizes);
      setProductDetail(res.data);
      setIshit(res.data.is_hit);
      setIsnew(res.data.is_new);
      setIspopular(res.data.is_popular);
      setOndemand(res.data.ondemand);
      setPrice(res.data.price);
      setDiscount_price(res.data.discount_price);
      setCode(res.data.code);
    });
  }, [categoryId, subcategoryId, subSubcategoryId, status]);

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
      formdata.append('pack', JSON.stringify(pack)),
      formdata.append('is_popular', ispopular),
      formdata.append('is_hit', ishit),
      formdata.append('is_new', isnew),
      formdata.append('deleted_images', deletedIds),
      formdata.append('color', color),
      formdata.append('categoryId', mainId);
    for (let i = 0; i < inputs.length; i++) {
      formdata.append(`images[${i}]color`, inputs[i].color);
      formdata.append(`images[${i}]image`, inputs[i].image);
    }
    {
      sales.length < 0
        ? sales.forEach((item, index) => {
            formdata.append(`items[${index}][count]`, item.count);
            formdata.append(`items[${index}][name]`, item.name);
          })
        : formdata.append('items', null);
    }

    UpdateWithFormData(`${BASE_URL}/product/${id}/`, formdata).then(() => {
      setStatus(!status), setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    });
  };

  const handleFileInputChange = (index, event) => {
    const { name } = event;
    console.log(event.target);
    const file = event.target.files[0];
    if (!file) return;
    const newInputs = [...inputs];
    newInputs[index]['image'] = file;
    newInputs[index]['fake'] = URL.createObjectURL(file);
    setInputs(newInputs);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const handleInputChange1 = (index, field, value) => {
    const newSales = [...sales];
    newSales[index][field] = value;
    console.log(newSales);

    setSales(newSales);
  };

  const deleteItem = (index) => {
    const newSales = sales.filter((_, i) => i !== index);
    setSales(newSales);
  };

  const addNewItem = () => {
    const newItem = { count: '', name: '' };
    setSales([...sales, newItem]);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { image: '', color: '' }]);
  };

  const handleItemClick = (id: any) => {
    DeleteItem(`${BASE_URL}/product/image/${id}/`).then(() => console.log('s'));
  };

  const deleteProduct = () => {
    DeleteItem(`/product/${id}/`).then(() => naviagte('/product'));
  };

  return (
    <DefaultLayout>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-center text-[36px] py-4">Изменить продукт</p>
          <button
            onClick={deleteProduct}
            className="bg-red-400 text-white rounded-md px-5 py-2"
          >
            удалить
          </button>
        </div>
        <form
          id="form-post"
          onSubmit={addnewProduct}
          className="flex w-full justify-around items-start px-10 gap-20 mb-5"
        >
          <div className="w-2/3 flex flex-wrap  justify-start items-start">
            <div className="w-full py-3 mb-5 flex">
              {warehouse?.map((ware) => (
                <div className="flex w-1/2 h-[20px] justify-between pr-10">
                  <p>Cклад : {ware.name}</p>
                  <p>количество : {ware.quantity}</p>
                </div>
              ))}
            </div>
            {sizes?.length > 0 ? (
              <div className="w-2/3 py-3 mb-5 flex flex-col">
                {sizes?.map((ware) => (
                  <div className="flex w-full  justify-between  border-b  py-3">
                    <p>
                      <span className="text-blue-400">{ware?.name}</span>
                    </p>
                    <p>
                      количество :{' '}
                      <span className="text-red-400">{ware?.quantity}</span>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}

            <div className="flex items-center justify-between w-1/2 mb-5 pr-10">
              <Input
                variant="standard"
                label="Название"
                placeholder=""
                defaultValue={productDetail?.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Код"
                defaultValue={productDetail?.code}
                onChange={(e) => setCode(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Артикуль"
                defaultValue={productDetail?.article}
                onChange={(e) => setArticle(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Цвет"
                defaultValue={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Материаль"
                defaultValue={productDetail?.material}
                onChange={(e) => setMaterial(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Бренд"
                defaultValue={productDetail?.brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Цена"
                defaultValue={productDetail?.price}
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
                variant="standard"
                label="Цена со скидкой"
                defaultValue={productDetail?.discount_price}
                onChange={(e) => setDiscount_price(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Весь"
                defaultValue={productDetail?.weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Штрих Код"
                defaultValue={productDetail?.barcode}
                onChange={(e) => setBarcode(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Checkbox
                color="blue"
                label="В продаже"
                defaultChecked={productDetail?.ondemand}
                onChange={(e) => setOndemand(e.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Минимальный заказ"
                defaultValue={productDetail?.moq}
                onChange={(e) => setMoq(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Срок доставки"
                defaultValue={productDetail?.days}
                onChange={(e) => setDays(e.target.value)}
                placeholder=""
              />
            </div>

            <div className="flex items-center justify-between w-1/2 mb-5 pr-5">
              <Input
                variant="standard"
                label="Размер"
                defaultValue={productDetail?.product_size}
                onChange={(e) => setProductSize(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between w-1/2 mb-5 pr-5 text-black">
              <Checkbox
                color="blue"
                label="популярный"
                defaultChecked={productDetail?.is_popular}
                onChange={(e) => setIspopular(e.target.checked)}
              />
              <Checkbox
                color="blue"
                label="новый"
                defaultChecked={productDetail?.is_new}
                onChange={(e) => setIsnew(e.target.checked)}
              />
              <Checkbox
                color="blue"
                label="хит"
                defaultChecked={productDetail?.is_hit}
                onChange={(e) => setIshit(e.target.checked)}
              />
            </div>
            <div className="w-full flex gap-1 mb-5">
              Категория :
              {productDetail?.categories?.map((i) => (
                <p className="text-blue-400">
                  {i?.name} <span className="text-black">/</span>
                </p>
              ))}
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
                  defaultValue={productDetail?.pack?.amount}
                  onChange={(e) => setPack({ ...pack, amount: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Весь упаковки"
                  defaultValue={productDetail?.pack?.weight}
                  onChange={(e) => setPack({ ...pack, weight: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Объем упаковки (см.куб)"
                  defaultValue={productDetail?.pack?.volume}
                  onChange={(e) => setPack({ ...pack, volume: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Ширина"
                  defaultValue={productDetail?.pack?.sizex}
                  onChange={(e) => setPack({ ...pack, sizex: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Высота"
                  defaultValue={productDetail?.pack?.sizey}
                  onChange={(e) => setPack({ ...pack, sizey: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Глубина"
                  defaultValue={productDetail?.pack?.sizez}
                  onChange={(e) => setPack({ ...pack, sizez: e.target.value })}
                  placeholder=""
                />
              </div>
              <div className="px-2 mb-5">
                <Input
                  variant="standard"
                  label="Минимальный кол-во упаковки"
                  defaultValue={productDetail.pack?.minpackamount}
                  onChange={(e) =>
                    setPack({ ...pack, minpackamount: e.target.value })
                  }
                  placeholder=""
                />
              </div>
            </div>
            <button
              onClick={addNewItem}
              className="bg-blue-400 mb-5 px-4 py-1 rounded-md text-white"
            >
              добавить скидку
            </button>
            {sales?.map((item, index) => (
              <div
                key={index}
                className="input-group flex w-full justify-between items-center gap-10 mb-5"
              >
                <div className="w-1/2 mb-4">
                  <Input
                    variant="standard"
                    label="количество товаров"
                    defaultValue={item.count}
                    className="w-full"
                    onChange={(e) =>
                      handleInputChange1(index, 'count', e.target.value)
                    }
                  />
                </div>

                <div className="w-1/2 mb-4">
                  <Input
                    variant="standard"
                    onChange={(e) =>
                      handleInputChange1(index, 'name', e.target.value)
                    }
                    label="
                  процент скидку"
                    defaultValue={item.name}
                    className="w-full"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => deleteItem(index)}
                  className="h-[40px] w-[40px] bg-red-400 text-white rounded-md flex justify-center items-center"
                >
                  <MdDelete />
                </button>
              </div>
            ))}

            <div className="flex items-center justify-between w-full mb-5">
              <Textarea
                variant="standard"
                label="Описание"
                defaultValue={productDetail?.description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[200px]"
              />
            </div>
          </div>
          <div className="w-1/3 pt-10">
            <div className="flex flex-wrap items-center justify-start w-full gap-3">
              {productDetail?.images_set?.map((images) => (
                <div className="w-[150px]  min-h-[150px]  items-end gap-5 mb-5">
                  <div className="">
                    <img
                      src={
                        images.image_url != null
                          ? images.image_url
                          : images.image
                      }
                      alt=""
                      className="w-[150px] h-[140px] rounded-md object-cover mb-3"
                    />
                    <div className="flex flex-col w-full h-full justify-between items-end">
                      <button
                        onClick={() => handleItemClick(images.id)}
                        className="w-full bg-red-400 text-white h-[40px] rounded-md"
                      >
                        удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-full">
                <p className="text-2xl mb-5">добавить новое изображение</p>
                {inputs.map((input, index) => (
                  <div key={index}>
                    <div className="mb-5">
                      <label
                        htmlFor={`${index}`}
                        className="flex h-[100px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4"
                      >
                        <input
                          label="Фото"
                          type="file"
                          name={`${index}`}
                          id={`${index}`}
                          className="sr-only"
                          accept="image/*"
                          onChange={(e) => handleFileInputChange(index, e)}
                        />
                        <p className="text-fs-6">Добавить Фото</p>
                        <img
                          src={inputs[index].fake}
                          alt="no img"
                          className="w-[50px] h-[50px]"
                        />
                      </label>
                    </div>

                    {/* <div className="mb-5">
                      <Input
                        label="Цвет"
                        type="text"
                        placeholder="Enter color"
                        name="color"
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
        <div className="flex flex-col justify-center items-center w-full">
          {success ? (
            <p className="bg-green-500 text-white px-5 py-2 rounded-md mb-5">
              продукт изменился
            </p>
          ) : (
            ''
          )}
          <button
            form="form-post"
            type="submit"
            className="w-[400px] h-[60px] bg-blue-400 mb-10 text-[24px] text-white rounded-lg"
          >
            Изменить продукт
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default EditProduct;
