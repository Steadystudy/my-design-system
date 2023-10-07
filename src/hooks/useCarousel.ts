import { MouseEvent, useRef, useState } from 'react';
import { DEFAULT_INTERVAL_DELAY } from '../constants';

export const useCarousel = (width: number, slideLength: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const maxPosition = slideLength - 1;

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

  let _interval = null as ReturnType<typeof setInterval>;

  const stop = () => {
    if (_interval) {
      clearInterval(_interval);
    }
  };

  const play = (interval: number) => {
    if (_interval) {
      clearInterval(_interval);
    }
    _interval = setInterval(() => {
      next();
    }, interval ?? DEFAULT_INTERVAL_DELAY);
  };

  const next = () => {
    stop();
    if (activeIndex === maxPosition) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handleAutoPlay = (autoPlay: boolean, interval?: number) => {
    if (autoPlay) {
      play(interval);
    }
  };

  return {
    slideRef,
    activeIndex,
    translateX,
    handleSlider,
    handleSliderMouseDown,
    handleAutoPlay,
  };
};
