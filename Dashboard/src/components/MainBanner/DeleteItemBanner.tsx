import { useState } from 'react';
import { Dialog, Card, CardBody, CardFooter } from '@material-tailwind/react';
import { MdDelete } from 'react-icons/md';

const DeleteItemBanner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="rounded-md bg-danger py-2 px-3 text-center font-medium text-white hover:bg-opacity-90"
      >
        <MdDelete />
      </button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full font-satoshi">
          <CardBody className="flex flex-col gap-4 ">
            <h2 className="text-title-md2 text-center text-danger">
              Удалить элементы
            </h2>
            <div className="grid grid-cols-4 mt-4">
              <div className="flex group relative col-span-1 w-full h-[120px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border  text-sm font-medium  hover:bg-opacity-90 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUzn7-qinvq-jbUgQWNL-OfnXUFXfxbtwMs6-Utey3A&s"
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
                <div className="absolute opacity-0 duration-300 group-hover:opacity-100 rounded-xl flex items-center justify-center w-full h-full bg-white">
                  <MdDelete className="text-title-xl text-danger" />
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 font-satoshi flex justify-end gap-4">
            <button
              onClick={handleOpen}
              className="inline-flex items-center justify-center rounded-md border text-body border-body py-2 px-6 text-center font-medium  hover:bg-opacity-90 "
            >
              Отмена
            </button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default DeleteItemBanner;
