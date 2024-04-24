import React, { useState } from "react";
import { Rnd } from "react-rnd";
const YourComponent = () => {
  const [contents, setContents] = useState([
    { id: "1", content: "Content 1", width: 200, height: 200, x: 0, y: 0 },
    { id: "2", content: "Content 1", width: 200, height: 200, x: 100, y: 100 },
    // Boshqa contentlar
  ]);

  const handleDragStop = (index, position) => {
    const updatedContents = [...contents];
    updatedContents[index].x = position.x;
    updatedContents[index].y = position.y;
    setContents(updatedContents);
  };

  return (
    <div className="w-full h-[500px]">
      {contents.map((content, index) => (
        <Rnd
          key={content.id}
          default={{
            width: content.width,
            height: content.height,
            x: content.x,
            y: content.y,
          }}
          onDragStop={(e, d) => handleDragStop(index, d)}
          bounds="parent"
        >
          <div className="bg-red-600">
            <p>{content.content}</p>
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default YourComponent;
