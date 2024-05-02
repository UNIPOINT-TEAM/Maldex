import React, { useState } from 'react';
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { BiSolidEditAlt } from 'react-icons/bi';
import { IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
const BannerEditModal: React.FC<any> = ({ bannberItems, onImageChange }) => {
  console.log(bannberItems?.product_set);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleEdit = () => {
    onImageChange();
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className="rounded-md bg-warning py-2 px-3 text-center font-medium text-white hover:bg-opacity-90"
      >
        <BiSolidEditAlt />
      </button>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full font-satoshi">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray" className="font-satoshi">
              Изменить баннер
            </Typography>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Typography className="mb-2">
                  <span className="font-satoshi text-fs-6 font-medium">
                    Название категории
                  </span>
                </Typography>
                <input
                  placeholder="Название категории"
                  className="w-full text-boxdark placeholder:font-normal font-medium border border-boxdark     rounded-md px-2 py-2 outline-0"
                />
              </div>
            </div>
            <h2 className="font-medium text-title-sm mt-4">
              Изображения в карусели
            </h2>
            <div className="grid grid-cols-4 gap-2">
              {bannberItems?.product_set.map((item) => (
                <Link to={`/banner/${item.id}`}>
                  <img
                    src={item?.productID?.images_set[0]?.image_url}
                    alt=""
                    className="w-[200px] h-[200px] rounded-xl object-cover"
                  />
                  <p>
                    {item?.productID?.name.length > 20
                      ? item?.productID?.name.slice(0, 20) + '...'
                      : item?.productID?.name}
                  </p>
                </Link>
              ))}
            </div>
          </CardBody>
          <CardFooter className="pt-0 font-satoshi flex justify-end gap-4">
            <button
              onClick={handleOpen}
              className="inline-flex items-center justify-center rounded-md border text-danger border-danger py-2 px-10 text-center font-medium  hover:bg-opacity-90 "
            >
              Отмена
            </button>
            <button
              onClick={handleOpen}
              className="inline-flex tracking-wide items-center justify-center rounded-md bg-success py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
            >
              Сохранять
            </button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default BannerEditModal;
