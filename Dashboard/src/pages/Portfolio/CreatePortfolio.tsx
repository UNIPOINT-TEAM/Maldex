import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import DefaultLayout from '../../layout/DefaultLayout';
import {
  Input,
  Textarea,
  Checkbox,
  Dialog,
  Card,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { AddWithFormData, GetProductSearch } from '../../services/product';

import { BASE_URL } from '../../utils/BaseUrl';
import { GetTags } from '../../services/maincatalog';

function CreatePortfolio() {
  const navigation = useNavigate();
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [inputs, setInputs] = useState([{ image: '', color: '' }]);
  const [addProduct, setAddProduct] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [tags, setTags] = useState([]);
  const [tagIds, setTagIds] = useState([]);

  useEffect(() => {
    GetProductSearch(inputVal,"","").then((res) => {
      setAddProduct(res.data.results);
    });
    GetTags().then((res) => {
      setTags(res);
    });
  }, [inputVal]);

  const addnewProduct = (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('title', name),
      formdata.append('description', description),
      formdata.append('product_ids', checkedItems),
      formdata.append('tags', tagIds);
    for (let i = 0; i < inputs.length; i++) {
      formdata.append(`images[${i}]image`, inputs[i].image);
    }
    AddWithFormData(`${BASE_URL}/projects/`, formdata).then(() =>
      navigation('/portfolio'),
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

  const handleOpen = () => {
    setOpen(!open);
  };
  //@ts-ignore
  const handleCheckboxChange = (itemId) => {
    //@ts-ignore
    setCheckedItems((prevItems) =>
      //@ts-ignore
      prevItems.includes(itemId)
        ? prevItems.filter((id) => id !== itemId)
        : [...prevItems, itemId],
    );
  };
  const handleTags = (itemId: number) => {
    //@ts-ignore
    setTagIds((prevItems) =>
      //@ts-ignore
      prevItems.includes(itemId)
        ? prevItems.filter((id) => id !== itemId)
        : [...prevItems, itemId],
    );
  };

  const handleAddInput = () => {
    setInputs([...inputs, { image: '', color: '' }]);
  };
  return (
    <DefaultLayout>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full font-satoshi">
          <CardBody className="flex flex-col gap-4">
            <p>поиск нужного товара</p>
            <div className="w-1/3">
              <Input
                label="что-нибудь"
                onChange={(e) => setInputVal(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-5 py-5 overflow-y-scroll h-[800px]">
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
                          <span className="text-xs absolute top-0">12</span>
                          <span className="ml-4 mr-1">{item?.price_type}</span>
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
              form="form-post"
              className="inline-flex tracking-wide items-center justify-center rounded-md bg-success py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
            >
              Сохранять
            </button>
          </CardFooter>
        </Card>
      </Dialog>
      <div>
        <p className="text-center text-[36px] py-4">Создать новый проект</p>
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

            <div className="flex items-center justify-between w-full mb-5">
              <Textarea
                required
                variant="standard"
                label="Описание"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-5 items-center justify-start w-full mb-5">
              {tags?.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 justify-between items-center"
                >
                  <Checkbox
                    color="blue"
                    onChange={() => handleTags(item?.id)}
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleOpen}
              className="w-1/3 bg-blue-400 text-white rounded-md py-2"
            >
              добавить товар
            </button>
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
            Добавить проект
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default CreatePortfolio;
