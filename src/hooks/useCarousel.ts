import { MouseEvent, useRef, useState } from 'react';

export const useCarousel = (width: number, slideLength: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleSlider = (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setActiveIndex(index);
    setTranslateX(0);
  };

  const limitToRange = (value: number, minValue: number, maxValue: number) => {
    if (value < minValue) return minValue;

    if (value > maxValue) return maxValue;

    return value;
  };

  const handleDragChange = (offsetX: number) => {
    setTranslateX(limitToRange(offsetX, -width, width));
  };

  const handleDragEnd = (offsetX: number) => {
    const maxPosition = slideLength - 1;

    if (offsetX < -50) setActiveIndex(limitToRange(activeIndex + 1, 0, maxPosition));
    if (offsetX > 50) setActiveIndex(limitToRange(activeIndex - 1, 0, maxPosition));

    setTranslateX(0);
  };

  const handleSliderMouseDown = (clickEvent: MouseEvent<HTMLDivElement>) => {
    const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
      const offsetX = moveEvent.pageX - clickEvent.pageX;
      handleDragChange(offsetX);
    };

    const handleMouseUp = (moveEvent: globalThis.MouseEvent) => {
      const offsetX = moveEvent.pageX - clickEvent.pageX;
      handleDragEnd(offsetX);

      slideRef.current?.removeEventListener('mousemove', handleMouseMove);
    };

    slideRef.current?.addEventListener('mousemove', handleMouseMove);
    slideRef.current?.addEventListener('mouseup', handleMouseUp, { once: true });
  };

  return {
    slideRef,
    activeIndex,
    translateX,
    handleSlider,
    handleSliderMouseDown,
  };
};
