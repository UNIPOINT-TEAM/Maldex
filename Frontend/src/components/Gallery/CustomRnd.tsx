import React from "react";
import { Rnd } from "react-rnd";

const CustomRnd = ({ children }) => {
  return (
    <Rnd
     //  style={{ backgroundColor: "red" }}
     //  dragHandleClassName="w-4 h-4 bg-white border-2 border-black rounded-full"
     //  resizeHandles={["n", "s"]}
     //  lockedAspectRatio={1}
      onDragStop={(e, d) => console.log(d)}
      onDrag={(e) => console.log(e)}
      onResize={(e) => console.log(e)}
      onResizeStart={(e) => console.log(e)}
      onResizeStop={(e) => console.log(e)}
      onDragStart={(e) => console.log(e)}
    >
      {children}
    </Rnd>
  );
};

export default CustomRnd;
