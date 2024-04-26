import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import deleteIcon from "../../assets/icons/Delete.svg";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/carouselReducer";
export function AllDeleteModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(!open);
  const handleDelete = () => {
    dispatch(deleteItem());
    handleOpen();
  };
  return (
    <>
      <button className="flex items-center gap-3" onClick={handleOpen}>
        <img src={deleteIcon} alt="delete-icon" />
        Удалить
      </button>
      <Dialog
        placeholder={"Delete"}
        open={open}
        handler={handleOpen}
        className="font-Helvetica-Neue"
      >
        <DialogHeader placeholder={"Delete"}>
          <h2 className="text-center w-full">Delete this item</h2>
        </DialogHeader>
        <DialogBody
          placeholder={"Delete"}
          className="font-Helvetica-Neue font-normal text-fs_6 leading-tight"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          nam, rem exercitationem laudantium amet nisi assumenda magni aliquid
          blanditiis fuga!
        </DialogBody>
        <DialogFooter placeholder={"Delete"} className="text-[#fff] gap-3">
          <button
            onClick={handleOpen}
            className="bg-gray-500 py-2 px-4 tracking-wider rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-redPrimary py-2 px-4 tracking-wider rounded-md"
          >
            Delete
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
