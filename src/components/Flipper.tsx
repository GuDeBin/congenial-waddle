import React, { useMemo, useRef } from "react";
import { FlipContext, FlipItemType, IFlipContext } from "./FlipContext";

export interface FlipperProps {
  flipKey: unknown;
  animateOptions?: KeyframeAnimationOptions;
  children: React.ReactNode;
}

export default function Flipper({
  flipKey,
  animateOptions,
  children,
}: FlipperProps) {
  const lastRectRef = useRef<Map<number, FlipItemType>>(new Map());
  const uniqueIdRef = useRef(0);

  const fnRef = useRef<IFlipContext>({
    add(item) {
      lastRectRef.current.set(item.flipId, item);
    },
    remove(flipId) {
      lastRectRef.current.delete(flipId);
    },
    nextId() {
      return (uniqueIdRef.current += 1);
    },
  });

  useMemo(() => {
    lastRectRef.current.forEach((item) => {
      item.rect = item.node.getBoundingClientRect();
    });
  }, [flipKey]);
}
