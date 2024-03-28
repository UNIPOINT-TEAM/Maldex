import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { MdEdit, MdDelete } from 'react-icons/md';

const DeleteMainCatalog = () => {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value: any) => setSize(value);

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
        <DialogHeader>Do you want delete this cateogory really?</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>NO</span>
          </Button>
          <Button
            variant="gradient"
            color="red"
            onClick={() => handleOpen(null)}
          >
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DeleteMainCatalog;
