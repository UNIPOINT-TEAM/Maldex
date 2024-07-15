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
  CardFooter,
  Card,
  CardBody,
} from '@material-tailwind/react';
import {
  GetGiftsCategory,
  GetGiftsCategoryDetail,
  PostGiftsCategory,
  PostGiftsProduct,
} from '../../../services/gifts';
import { GetProduct } from '../../../services/main';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GetProductSearch } from '../../../services/product';
import PaginationCard from '../../../components/Pagination/Pagination';
import SearchComponent from './SearchComponent ';

const AddGifts = () => {
  const navigate = useNavigate();
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
  const [quantities, setQuantities] = useState({});
  const [inputVal, setInputVal] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const handleFileInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files?.[0];
    const newInputs = [...inputs];
    newInputs[index] = files;
    setInputs(newInputs);

    // Assuming you have a function to generate a URL for the uploaded file
    const url = URL.createObjectURL(files);
    setUploadedPhotos((prevPhotos) => [...prevPhotos, url]);
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

  // useEffect(() => {
  //   GetProduct()
  //     .then((res) => {
  //       console.log('GetProduct result:', res);
  //       if (Array.isArray(res)) {
  //         setAddProduct(res);
  //       } else if (res.results) {
  //         setAddProduct(res.results);
  //       } else {
  //         console.error('Unexpected response format:', res);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching products:', error);
  //     });
  // }, []);

  useEffect(() => {
    GetProductSearch(inputVal, currentPage, '').then((res) => {
      setAddProduct(res.data.results);
      const residual = res.data.count % 10;
      const pages = (res.data.count - residual) / 10;
      setTotalPages(pages % 2 == 0 && pages === 1 ? pages : pages + 1);
    });
  }, [inputVal, currentPage]);

  // const debouncedSearch = useCallback(
  //   debounce(async (searchTerm, page) => {
  //     if (searchTerm) {
  //       try {
  //         const res = await GetProductSearch(searchTerm, page);
  //         setSearchResults(res.data.results);
  //         const residual = res.data.count % 10;
  //         const pages = (res.data.count - residual) / 10;
  //         setTotalPages(pages % 2 === 0 && pages === 1 ? pages : pages + 1);
  //       } catch (error) {
  //         console.error('Error fetching search results', error);
  //       }
  //     } else {
  //       setSearchResults([]);
  //     }
  //   }, 1000),
  //   []
  // );

  // useEffect(() => {
  //   debouncedSearch(inputVal, currentPage);
  // }, [inputVal, currentPage, debouncedSearch]);

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

    const productData = selectedProductsIds
      .map((id) => ({
        product_sets: id,
        quantity: quantities[id] || 0, // Если не указано количество, по умолчанию 0
      }))
      .filter((item) => item.quantity > 0); // Отфильтровываем, если количество равно 0

    const formData = new FormData();

    formData.append('title', name);
    formData.append('article', article);
    formData.append('price', price);
    formData.append('price_type', price_type);
    formData.append('discount_price', discount_price);
    formData.append('description', description);
    formData.append('category_data', JSON.stringify([selectedSubcategory]));
    // formData.append('products_data', JSON.stringify(selectedProductsIds));
    formData.append('products_data', JSON.stringify(productData));

    inputs.forEach((file) => {
      if (file) {
        formData.append('images_data', file);
      }
    });

    PostGiftsProduct(formData)
      .then((response) => {
        console.log(response);
        navigate('/gifts');
        // window.location.reload();
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

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  };
  return (
    <DefaultLayout>
      <div>
        <div>
          <p className="text-center text-[36px] py-4">Создать новый набор</p>
          <form
            id="form-post"
            onSubmit={addnewProduct}
            className="flex flex-col justify-around items-start px-10 gap-20 mb-5"
          >
            <div className="flex justify-between w-full">
              <div className="   justify-start items-start">
                <div className="flex items-center justify-between w-1/2 mb-5 pr-10">
                  <Input
                    required
                    variant="standard"
                    label="Название"
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between  mb-5 pr-5">
                  <Input
                    required
                    variant="standard"
                    label="Артикуль"
                    onChange={(e) => setArticle(e.target.value)}
                    placeholder=""
                  />
                </div>
                <div className="flex items-center justify-between  mb-5 pr-5">
                  <Select
                    required
                    label="Валюта"
                    value={price_type}
                    onChange={(value) => setPrice_type(value)}
                  >
                    <Option value="₽">₽</Option>
                    <Option value="$">$</Option>
                  </Select>
                </div>

                <div className="flex items-center justify-between  mb-5 pr-5">
                  <Input
                    required
                    variant="standard"
                    label="Цена"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder=""
                  />
                </div>

                <div className="flex items-center justify-between  mb-5 pr-5">
                  <Input
                    // required
                    variant="standard"
                    label="Цена со скидкой"
                    onChange={(e) => setDiscount_price(e.target.value)}
                    placeholder=""
                  />
                </div>

                <div className="flex  gap-5">
                  <Select
                    label="Выберите Категорию"
                    onChange={handleChange}
                    required
                  >
                    {categories.map((category) => (
                      <Option key={category.id} value={category.id}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>

                  <Select
                    label="Выберите подКатегорию"
                    required
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

                <div className="flex items-center justify-between  my-5">
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
              </div>
              <div className="w-1/3 pt-10">
                {' '}
                <div className="flex flex-col">
                  {uploadedPhotos.map((photoUrl, index) => (
                    <div key={index} className="mr-3 mb-3 ">
                      <img
                        src={photoUrl}
                        alt={`Uploaded ${index + 1}`}
                        className="w-full h-65 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className=" w-full">
                  <div className="">
                    {/* Conditionally render input field for photo upload */}
                    {uploadedPhotos.length === 0 && (
                      <div className="mb-5">
                        <label
                          htmlFor={`cover-0`}
                          className="flex w-full h-65 cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium hover:bg-opacity-90 xsm:px-4"
                        >
                          <input
                            required
                            type="file"
                            name={`cover-0`}
                            id={`cover-0`}
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => handleFileInputChange(0, e)}
                          />
                          <p className="text-fs-6">Добавить Фото</p>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  items-center justify-between  mb-5">
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
                      key={item.id}
                      className="flex flex-col items-center mb-4 "
                    >
                      <div className=" shadow-4 p-2 rounded-sm h-[400px]">
                        <div className="catalog w-[200px]">
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
                            <Input
                              type="number"
                              min="1"
                              name="count"
                              value={
                                quantities[item.id] !== undefined
                                  ? quantities[item.id]
                                  : 1
                              }
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </form>
          <div className="flex justify-center w-full">
            <Button
              form="form-post"
              type="submit"
              color="green"
              className="w-[400px] h-[60px]  mb-10 text-[24px] text-white rounded-lg"
            >
              Добавить продукт
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          size="xxl"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full font-satoshi">
            <CardBody className="flex flex-col gap-4">
              <p>поиск нужного товара</p>
              <div className="w-1/3">
                {/* <Input
                  label="что-нибудь"
                  onChange={(e) => setInputVal(e.target.value)}
                /> */}
                  <SearchComponent 
              setAddProduct={setAddProduct} 
              setTotalPages={setTotalPages} 
            />
              </div>
              <div className="flex flex-wrap justify-center gap-5 py-5 overflow-y-scroll h-[700px]">
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
                              <div className="relative  h-full">
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
                            <span className="ml-4 mr-1">
                              {item?.price_type}
                            </span>
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
                <PaginationCard
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
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
                onClick={() => {
                  setOpen(!open);
                }}
                // form="form-post"
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
};

export default AddGifts;
