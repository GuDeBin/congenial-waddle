import React, { useCallback, useState } from "react";
import { Flipped, Flipper } from "../components/Flipper";
import { ListBox, SortBox, SortItem } from "./components/doc-components";
import { useSortProperty } from "./hooks/useSortProperty";

const initialData = [
  {
    id: 1,
    text: "πθΉζ",
  },
  {
    id: 2,
    text: "πθθ",
  },
  {
    id: 3,
    text: "πι¦θ",
  },
  {
    id: 4,
    text: "πθ θ",
  },
  {
    id: 5,
    text: "πζ‘ε­",
  },
  {
    id: 6,
    text: "πζ©ε­",
  },
  {
    id: 7,
    text: "πθ‘θ",
  },
  {
    id: 8,
    text: "πθ₯Ώη",
  },
  {
    id: 9,
    text: "π₯ηη΄ζ‘",
  },
  {
    id: 10,
    text: "πζ¨±ζ‘",
  },
];

const Demo3 = () => {
  const [data, setData] = useState(initialData);

  const handleMove = useCallback((dragIndex: number, hoverIndex: number) => {
    setData((prev) => {
      const next = prev.slice();
      next.splice(dragIndex, 1);
      next.splice(hoverIndex, 0, prev[dragIndex]);
      return next;
    });
  }, []);

  return (
    <Flipper flipKey={data}>
      <ListBox title="ζζ½ζεΊ">
        <SortBox>
          {data.map((item, index) => (
            <DragSortItem
              key={item.id}
              item={item}
              index={index}
              onMove={handleMove}
            />
          ))}
        </SortBox>
      </ListBox>
    </Flipper>
  );

  interface DragSortItemProps {
    item: {
      id: number;
      text: string;
    };
    index: number;
    onMove: (dragIndex: number, hoverIndex: number) => void;
  }

  function DragSortItem({ item, index, onMove }: DragSortItemProps) {
    const dropRef = React.useRef<HTMLDivElement>(null);

    const { drag, drop, style } = useSortProperty({
      id: item.id,
      itemType: "Fruit",
      index,
      onMove,
      dropRef,
      canDrag: true,
    });

    drag(drop(dropRef));

    return (
      <Flipped innerRef={dropRef}>
        <SortItem style={style}>{item.text}</SortItem>
      </Flipped>
    );
  }
};

export default Demo3;
