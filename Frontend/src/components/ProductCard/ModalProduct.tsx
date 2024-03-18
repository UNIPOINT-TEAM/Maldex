import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ProductCard } from "..";
// @ts-ignore
const ModalProduct = ({ open, handleClose }) => {
  return (
    // @ts-ignore
    <Dialog open={open} handler={handleClose}>
      {/* @ts-ignore */}
      <DialogHeader>Product Details</DialogHeader>
      <div className="flex">
        {/* @ts-ignore */}
        <DialogBody>
          <ProductCard />
        </DialogBody>
        {/* @ts-ignore */}
        <DialogFooter>{/* Footer content */}</DialogFooter>
      </div>
    </Dialog>
  );
};

export default ModalProduct;
