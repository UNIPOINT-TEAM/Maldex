import { useState } from 'react';
import { Dialog, Card, CardBody, CardFooter } from '@material-tailwind/react';
import { MdDelete } from 'react-icons/md';

const DeleteCategory = ({ newCategoryData, setNewCategoryData, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleDelete = () => {
    const newData = newCategoryData.filter((item) => item.id !== id);
    setNewCategoryData(newData);
    handleOpen();
  };
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
            <h2 className="font-satoshi text-title-lg font-medium text-center text-danger">
              Удалить этот элемент
            </h2>
            <div className=" flex items-center gap-5 py-2">
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sapiente blanditiis adipisci provident laudantium sunt
                repudiandae
              </p>
            </div>
          </CardBody>
          <CardFooter className="pt-0 font-satoshi flex justify-end gap-4">
            <button
              onClick={handleOpen}
              className="inline-flex items-center justify-center rounded-md border text-body border-body py-2 px-6 text-center font-medium  hover:bg-opacity-90 "
            >
              Отмена
            </button>
            <button
              onClick={handleDelete}
              className="inline-flex tracking-wide items-center justify-center rounded-md bg-danger py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
            >
              Удалить
            </button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default DeleteCategory;
