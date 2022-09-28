import React, { useState } from "react";
import { Flipped, Flipper } from "../components/Flipper";
import { ListBox, SortBox, SortItem } from "./components/doc-components";
import { useSortProperty } from "./hooks/useSortProperty";

const initialData = [
  {
    id: 1,
    text: "🍎苹果",
  },
  {
    id: 2,
    text: "🍓草莓",
  },
  {
    id: 3,
    text: "🍌香蕉",
  },
  {
    id: 4,
    text: "🍍菠萝",
  },
  {
    id: 5,
    text: "🍑桃子",
  },
  {
    id: 6,
    text: "🍊橙子",
  },
  {
    id: 7,
    text: "🍇葡萄",
  },
  {
    id: 8,
    text: "🍉西瓜",
  },
  {
    id: 9,
    text: "🥝猕猴桃",
  },
  {
    id: 10,
    text: "🍒樱桃",
  },
];

const Demo3 = () => {
  const [data, setData] = useState(initialData);
};
