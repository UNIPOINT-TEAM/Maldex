import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import '../../css/main.css';
import { IoMdAdd } from 'react-icons/io';
import { Select, Option } from '@material-tailwind/react';

const EditDishes = () => {
  const [size, setSize] = React.useState(null);
  const [defaultheader, setDefaultHeader] = useState(null);
  const [header, setHeader] = useState('');
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);
  const [fourthImage, setFourthImage] = useState(null);
  const [fivesImage, setFivesImage] = useState(null);
  const [sixesImage, setSixesImage] = useState(null);
  const [active, setActive] = useState([]);
  const [items, setItems] = useState([
    { number: 160, name: 'Графины' },
    { number: 42, name: 'Наборы ложек' },
    { number: 28, name: 'Наборы столовых приборов' },
    { number: 40, name: 'Ножи и наборы ножей' },
    { number: 67, name: 'Подставки для бутылок' },
    { number: 67, name: 'Сервизы' },
    { number: 27, name: 'Тарелки' },
  ]);

  const handleOpen = (value: any) => setSize(value);
  const saveHeader = () => {
    setHeader(defaultheader);
    setDefaultHeader(null);
  };
  const clearAll = () => {
    setHeader(''), setDefaultHeader(null);
    setFirstImage(null);
    setSecondImage(null);
    setThirdImage(null);
    setFourthImage(null);
    setFivesImage(null);
    setSixesImage(null);
    setSize(null);
  };

  const addToActive = (i: any) => {
    setActive((prev) => [...prev, i]);
    setItems((prev) => prev.filter((item) => item.name !== i.name));
  };

  return (
    <>
      <div className="mb-3 flex gap-3">
        <button
          onClick={() => handleOpen('xl')}
          className="mx-3 uppercase text-fs_8 font-bold p-[6px] tracking-wide  border border-red-500 rounded-lg text-red-500 block ss:hidden"
        >
          редактировать
        </button>
      </div>
      <Dialog
        open={
          size === 'xs' ||
          size === 'sm' ||
          size === 'md' ||
          size === 'lg' ||
          size === 'xl' ||
          size === 'xxl'
        }
        size={size || 'xl'}
        handler={handleOpen}
      >
        <DialogHeader>редактировать продукт</DialogHeader>
        <DialogBody>
          <div className="flex items-center justify-between mb-5">
            {header ? (
              <h3 className="text-3xl ">{header}</h3>
            ) : (
              <div className="border border-dashed flex items-center px-3 h-[40px] py-2">
                <input
                  type="text"
                  onChange={(e) => setDefaultHeader(e.target.value)}
                  className="bg-white h-full outline-none text-xl py-2"
                />
                <button
                  onClick={saveHeader}
                  className="bg-blue-500 text-white w-[30px] h-[30px] rounded"
                >
                  ok
                </button>
              </div>
            )}
          </div>
          <div className="w-full">
            <div className="grid grid-rows-3 h-[360px] grid-cols-12 grid-flow-col gap-4">
              <div className="col-span-12 lg:col-span-9 h-full row-span-3">
                <div className="grid grid-cols-5 md:grid-cols-11 h-full gap-[10px]">
                  <div className="col-span-3 bg-white flex items-center justify-center border border-dashed">
                    {firstImage ? (
                      <img src={firstImage} alt="" className="w-full h-full" />
                    ) : (
                      <div className="file-input-container">
                        <label
                          htmlFor="file-input"
                          className="file-input-label"
                        >
                          <span className="w-[40px] h-[40px] bg-gray flex justify-center items-center">
                            <IoMdAdd />
                          </span>
                        </label>
                        <input
                          type="file"
                          id="file-input"
                          className="file-input"
                          onChange={(e) =>
                            setFirstImage(
                              URL.createObjectURL(e.target.files[0]),
                            )
                          }
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-span-2 lg:col-span-4">
                    <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 h-full gap-[10px]">
                      <div className="bg-white flex items-center justify-center border border-dashed">
                        {secondImage ? (
                          <img src={secondImage} alt="" />
                        ) : (
                          <div className="file-input-container">
                            <label
                              htmlFor="file-input"
                              className="file-input-label"
                            >
                              <span className="w-[40px] h-[40px] bg-gray flex justify-center items-center">
                                <IoMdAdd />
                              </span>
                            </label>
                            <input
                              type="file"
                              id="file-input"
                              className="file-input"
                              onChange={(e) =>
                                setSecondImage(
                                  URL.createObjectURL(e.target.files[0]),
                                )
                              }
                            />
                          </div>
                        )}
                      </div>
                      <div className="bg-white flex items-center justify-center border border-dashed">
                        {thirdImage ? (
                          <img src={thirdImage} alt="" />
                        ) : (
                          <div className="file-input-container">
                            <label
                              htmlFor="file-input"
                              className="file-input-label"
                            >
                              <span className="w-[40px] h-[40px] bg-gray flex justify-center items-center">
                                <IoMdAdd />
                              </span>
                            </label>
                            <input
                              type="file"
                              id="file-input"
                              className="file-input"
                              onChange={(e) =>
                                setThirdImage(
                                  URL.createObjectURL(e.target.files[0]),
                                )
                              }
                            />
                          </div>
                        )}
                      </div>
                      <div className="bg-white items-center justify-center hidden lg:flex border border-dashed">
                        {fourthImage ? (
                          <img src={fourthImage} alt="" />
                        ) : (
                          <div className="file-input-container">
                            <label
                              htmlFor="file-input"
                              className="file-input-label"
                            >
                              <span className="w-[40px] h-[40px] bg-gray flex justify-center items-center">
                                <IoMdAdd />
                              </span>
                            </label>
                            <input
                              type="file"
                              id="file-input"
                              className="file-input"
                              onChange={(e) =>
                                setFourthImage(
                                  URL.createObjectURL(e.target.files[0]),
                                )
                              }
                            />
                          </div>
                        )}
                      </div>
                      <div className="bg-white items-center justify-center hidden lg:flex border border-dashed">
                        {fivesImage ? (
                          <img src={fivesImage} alt="" />
                        ) : (
                          <div className="file-input-container">
                            <label
                              htmlFor="file-input"
                              className="file-input-label"
                            >
                              <span className="w-[40px] h-[40px] bg-gray flex justify-center items-center">
                                <IoMdAdd />
                              </span>
                            </label>
                            <input
                              type="file"
                              id="file-input"
                              className="file-input"
                              onChange={(e) =>
                                setFivesImage(
                                  URL.createObjectURL(e.target.files[0]),
                                )
                              }
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 bg-white  items-center justify-center hidden md:flex border border-dashed">
                    {sixesImage ? (
                      <img src={sixesImage} alt="" />
                    ) : (
                      <div className="file-input-container">
                        <label
                          htmlFor="file-input"
                          className="file-input-label"
                        >
                          <span className="w-[40px] h-[40px] bg-gray flex justify-center items-center">
                            <IoMdAdd />
                          </span>
                        </label>
                        <input
                          type="file"
                          id="file-input"
                          className="file-input"
                          onChange={(e) =>
                            setSixesImage(
                              URL.createObjectURL(e.target.files[0]),
                            )
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row-span-3 col-span-3 hidden lg:block">
                <div className="w-72">
                  <Select label="Select Version">
                    {items.map((i, index) => (
                      <Option onClick={() => addToActive(i)} key={index}>
                        <p className=" text-fs_7 font-medium">
                          {i.name}
                          <span className="text-sm text-redPrimary  ms-1">
                            {i.number}
                          </span>
                        </p>
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="grid grid-rows-2 grid-cols-1 gap-4 h-full">
                  <div className="row-span-1 col-span-1 flex flex-col gap-[3px]">
                    {active.map((i, index) => (
                      <p
                        key={index}
                        className="text-[14px] text-black font-medium"
                      >
                        {i?.name}
                        <b className="text-sm text-red-500 ms-1 font-medium">
                          {i?.number}
                        </b>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={clearAll}
            className="mr-1"
          >
            <span>Clear</span>
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={() => handleOpen(null)}
          >
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default EditDishes;
