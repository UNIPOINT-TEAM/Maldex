import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import '../../css/main.css';
import { FaCheck } from 'react-icons/fa';
import '../../css/main.css';

import { GoArrowDownRight } from 'react-icons/go';
import Badge from '../Badge/Badge';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/article-bg-1.png';
import image2 from '../../assets/images/article-bg-2.png';
import image3 from '../../assets/images/article-bg-3.png';
import image4 from '../../assets/images/article-bg-4.png';
import { IoMdAdd } from 'react-icons/io';

const EditDishes = () => {
  const [size, setSize] = React.useState(null);
  const [firstDescription, setFirstDescription] = useState(null);
  const [firstNewImg, setFirtImg] = useState(null);
  const [firstNewNumber, setFirtNumber] = useState(null);
  const [firstStatus, setFirtStatus] = useState(false);
  console.log(firstNewImg);

  const handleOpen = (value: any) => setSize(value);

  return (
    <>
      <div className="mb-3 flex gap-3">
        <button
          onClick={() => handleOpen('xl')}
          className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-6 text-center font-medium text-white hover:bg-opacity-90 "
        >
          Добавить категорию
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
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
              {firstStatus ? (
                <Link
                  to={'/articles'}
                  className="p-3 lg:p-5 bg-cover text-white h-[180px] sm:h-[340px]"
                  style={{
                    backgroundImage: `url(${firstNewImg})`,
                  }}
                >
                  <div className="md:w-[65%]">
                    <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                      {firstNewNumber}
                    </h3>
                    <h2 className="text-fs_7 lg:text-fs_3 leading-tight font-medium mt-2">
                      {firstDescription}
                    </h2>

                    <Badge name="NEW" />
                    <Badge name="HIT" />
                  </div>
                </Link>
              ) : (
                <div
                  className="p-3 lg:p-5 bg-cover  h-[180px] sm:h-[340px]"
                  style={{
                    backgroundImage: `url(${firstNewImg})`,
                  }}
                >
                  <div className="md:w-[65%]">
                    <div className="w-full flex items-center mb-2">
                      <input
                        value={firstNewNumber}
                        type="number"
                        onChange={(e) => setFirtNumber(e.target.value)}
                        className="w-1/5 border border-dashed outline-none rounded px-1 h-[30px]"
                      />
                    </div>
                    <div className="w-full flex items-center">
                      <textarea
                        rows={30}
                        value={firstDescription}
                        onChange={(e) => setFirstDescription(e.target.value)}
                        className="w-full border border-dashed outline-none rounded px-1 h-[60px] mb-2"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="cover"
                        className="flex h-[100px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4"
                      >
                        <input
                          type="file"
                          name="cover"
                          id="cover"
                          className="sr-only"
                          onChange={(e) =>
                            setFirtImg(URL.createObjectURL(e.target.files[0]))
                          }
                        />
                        <p className="text-fs-6">Добавить изображение </p>
                      </label>
                    </div>
                    <Badge name="NEW" />
                    <Badge name="HIT" />
                  </div>
                </div>
              )}
              <Link
                to={'/articles'}
                className="p-3 lg:p-5 bg-cover text-white h-[180px] sm:h-[340px]"
                style={{
                  backgroundImage: `url(${image2})`,
                }}
              >
                <div className="md:w-[65%]">
                  <h3 className="text-fs_6 lg:text-fs_3 opacity-50">2.10</h3>
                  <h2 className="text-fs_7 lg:text-[28px] leading-tight font-medium mt-2">
                    Маска для лица многоразовая из хлопка, анатомической формы
                  </h2>
                  <Badge name="NEW" />
                  <Badge name="HIT" />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 h-[180px] sm:h-[340px]">
              <Link
                to={'/articles'}
                className="p-3 lg:p-5 bg-cover text-white hidden lg:block h-full"
                style={{
                  backgroundImage: `url(${image3})`,
                }}
              >
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">2.10</h3>
                <h2 className="text-fs_7 font-medium leading-tight mt-2">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </Link>
              <Link
                to={'/articles'}
                className="p-3 lg:p-5 bg-cover text-white hidden sm:block "
                style={{
                  backgroundImage: `url(${image4})`,
                }}
              >
                <h3 className="text-fs_5 lg:text-fs_3 opacity-50">2.10</h3>
                <p className="text-fs_7 font-medium leading-tight mt-2">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </p>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </Link>
              <Link
                to={'/articles'}
                className="p-3 lg:p-5 bg-cover text-white "
                style={{
                  backgroundImage: `url(${image4})`,
                }}
              >
                <h3 className="text-fs_5 lg:text-fs_3 opacity-50">2.10</h3>
                <h2 className="text-fs_7 font-medium leading-tight mt-2">
                  Маска для лица многоразовая из хлопка
                </h2>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </Link>
              <Link
                to={'/'}
                className="group p-3 lg:p-5 h-full flex flex-col justify-between bg-white hover:bg-red-600 cursor-pointer duration-300"
              >
                <h2 className="group-hover:text-[#fff] mt-7 text-fs_6 lg:text-[28px] leading-tight font-medium tracking-wide text-redPrimary">
                  Все <br /> статьи
                </h2>
                <div className="flex justify-end">
                  <button className="bg-redPrimary w-[40px] h-[40px] flex items-center justify-center p-1 rounded-xl group-hover:bg-[#fff]">
                    <GoArrowDownRight className="text-fs_6 text-[#fff] group-hover:text-red-600" />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" className="mr-1">
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
