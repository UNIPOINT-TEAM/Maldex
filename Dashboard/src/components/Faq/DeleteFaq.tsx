import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { MdEdit, MdDelete } from 'react-icons/md';

const DeleteFaq = ({ id, onRemove }) => {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value: any) => setSize(value);
  const handleDelete = () => {
    onRemove(id);
    handleOpen();
  };

  return (
    <>
      <div className="flex gap-3">
        <button
          onClick={() => handleOpen('sm')}
          className="p-1 bg-red-600 h-[30px] w-[30px] rounded flex justify-center items-center"
        >
          <MdDelete color="white" />
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
        size={size || 'md'}
        handler={handleOpen}
      >
        <Card className="mx-auto w-full font-satoshi">
          <CardBody className="flex flex-col gap-4 ">
            <h2 className="font-satoshi text-title-lg font-medium text-center text-danger">
              Удалить этот элемент
            </h2>
            <div className=" flex items-center gap-5 py-2"></div>
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

export default DeleteFaq;
