import { DragEvent, useState } from "react";

const DragAndDropList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  let dragItem: number | undefined = undefined;

  const handleDragStart = (
    _e: DragEvent<HTMLLIElement>,
    index: number | undefined
  ) => {
    dragItem = index;
  };

  const handleDrop = (_e: DragEvent<HTMLLIElement>, index: number) => {
    const newItems = [...items];
    const [removedItem] = newItems.splice(dragItem as number, 1);
    newItems.splice(index, 0, removedItem);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={(e) => e.preventDefault()}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DragAndDropList;
