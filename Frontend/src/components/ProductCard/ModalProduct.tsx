import React from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { ProductCard } from "..";
        //@ts-ignore

const ModalProduct = ({ open, handleClose }) => {
  return (
        //@ts-ignore

    <Dialog open={open} handler={handleClose}>
        

      <DialogHeader>Product Details</DialogHeader>
      <div className="flex">

        <DialogBody>
          <ProductCard/>
        </DialogBody>
        <DialogFooter>
          {/* Footer content */}
        </DialogFooter>
      </div>
    </Dialog>
  );
};

export default ModalProduct;
