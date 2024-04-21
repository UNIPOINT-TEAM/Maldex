import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  Input,
  Textarea,
  Checkbox,
  Select,
  Option,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import {
  GetGiftsCategory,
  GetGiftsCategoryDetail,
  PostGiftsCategory,
} from '../../../services/gifts';
import { GetProduct } from '../../../services/main';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const AddGifts = () => {
  const [name, setName] = useState('');
  const [article, setArticle] = useState('');
  const [price, setPrice] = useState('');
  const [price_type, setPrice_type] = useState('');
  const [discount_price, setDiscount_price] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputs, setInputs] = useState<any[]>([]);
  const [giftCategory, setGiftCategory] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [addProduct, setAddProduct] = useState<any[]>([]);
  const handleOpen = () => setOpen(!open);
  const [open, setOpen] = useState(false);
  const [categoryDetail, setCategoryDetail] = useState<any>(null);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleFileInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files?.[0];
    const newInputs = [...inputs];
    newInputs[index] = files;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await GetGiftsCategory();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    GetProduct()
      .then((res) => {
        console.log('GetProduct result:', res);
        if (Array.isArray(res)) {
          setAddProduct(res);
        } else if (res.results) {
          setAddProduct(res.results);
        } else {
          console.error('Unexpected response format:', res);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleChange = async (selectedId: string) => {
    try {
      const details = await GetGiftsCategoryDetail(selectedId);
      setCategoryDetail(details);
      setSubcategories(details.children);
    } catch (error) {
      console.error('Failed to fetch category details', error);
    }
  };

  const addnewProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', name);
    formData.append('article', article);
    formData.append('price', price);
    formData.append('price_type', price_type);
    formData.append('discount_price', discount_price);
    formData.append('description', description);
    formData.append('category_data', JSON.stringify([selectedSubcategory]));
    formData.append('products_data', JSON.stringify(selectedProductsIds));

    inputs.forEach((file) => {
      if (file) {
        formData.append('images_data', file);
      }
    });

    PostGiftsCategory(formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error adding new product:', error);
      });
  };

  const handleSubcategoryChange = (selectedId: string) => {
    setSelectedSubcategory(selectedId);
  };

  const handleConfirm = () => {
    console.log('Selected products:', selectedProducts);
    handleOpen(); // Закрыть диалоговое окно
  };

  const [selectedProductsIds, setSelectedProductsIds] = useState<number[]>([]);

  const handleCheckboxChange = (productId: number) => {
    if (selectedProductsIds.includes(productId)) {
      setSelectedProductsIds((prevIds) =>
        prevIds.filter((id) => id !== productId),
      );
    } else {
      setSelectedProductsIds((prevIds) => [...prevIds, productId]);
    }
  };
  return (
    <DefaultLayout>
      <div>
        <div>
          <p className="text-center text-[36px] py-4">Создать новый набор</p>
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

              <div className="flex w-full gap-5">
                <Select label="Выберите Категорию" onChange={handleChange}>
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
                  onChange={handleSubcategoryChange}
                >
                  {subcategories.map((subcategory, index) => (
                    <Option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="flex items-center justify-between w-full mb-5">
                <Textarea
                  required
                  variant="standard"
                  label="Описание"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <input
                type="hidden"
                name="selectedProductIds"
                value={selectedProductsIds.join(',')}
              />

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
                <div>Товары в наборы</div>
                <div className="flex flex-wrap">
                  {addProduct
                    ?.filter((item) => selectedProductsIds.includes(item.id))
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center mb-4 w-1/4"
                      >
                        {item.name.length > 30
                          ? item.name.substring(0, 40) + '...'
                          : item.name}
                      </div>
                    ))}
                </div>
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
      <div>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>
            Выберете продукт который вы хотите увидеть в списке new!
          </DialogHeader>
          <DialogBody className="h-[400px] flex flex-wrap overflow-y-scroll">
            {addProduct?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-4 w-1/4"
              >
                <input
                  type="checkbox"
                  checked={selectedProductsIds.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mb-2"
                />
                <div className="w-full p-2 rounded-sm">
                  <div className="catalog relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                    <Swiper className="">
                      {item.images_set.map((i, idx) => (
                        <SwiperSlide key={idx} className="w-full h-full">
                          <div
                            onClick={() => handleOpen('xl')}
                            className="relative  h-full"
                          >
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
                    {item.is_new ? (
                      <div className="absolute z-[999] top-2 left-2 flex gap-2">
                        <div className="border border-red-primary text-[10px] text-red-primary rounded-lg px-1">
                          NEW
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="default">
                    <div className="mb-2 md:mb-5  min-h-[70px] ">
                      <p className="text-fs_7 tracking-wide">
                        {item.name.length > 30
                          ? item.name.substring(0, 40) + '...'
                          : item.name}
                      </p>
                    </div>
                    <p className="mb-2 text-gray-600 text-fs_8">
                      {item.vendor_code}
                    </p>
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
              </div>
            ))}
          </DialogBody>

          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                handleOpen();
                handleConfirm();
              }}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </DefaultLayout>
  );
};

export default AddGifts;
