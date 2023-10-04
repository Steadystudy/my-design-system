import { MouseEvent, useRef, useState } from 'react';
import {
  Container,
  Dot,
  DotsWrapper,
  FadeImageWrapper,
  FadeSliderContainer,
  ImageWrapper,
  NextButtonWrapper,
  PrevButtonWrapper,
  SliderContainer,
} from './Carousel.style';

interface Image {
  imageUrl: string;
  alt?: string;
}

export interface CarouselProps {
  /** Carousel 너비를 설정합니다.*/
  width: number;
  /** Carousel 높이를 설정합니다.*/
  height: number;
  /** Carousel에 넣을 이미지들을 설정합니다.*/
  images: Image[];
  /** Carousel의 type을 설정합니다. */
  type?: 'fade' | 'slide';
  /** 드래그 여부 설정합니다. */
  isDraggable?: boolean;
  /** Carousel 위에 마우스 올렸을 때 화살표 방향 보여줄 지 설정합니다. */
  showOnHover?: boolean;
}

const Carousel = ({
  width,
  height,
  images,
  type = 'fade',
  isDraggable = false,
  showOnHover = false,
}: CarouselProps) => {
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
    const maxPosition = images.length - 1;

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

  return (
    <Container $width={width} $height={height} className="image_carousel_container">
      {type === 'slide' && (
        <>
          <SliderContainer
            ref={slideRef}
            onMouseDown={isDraggable ? handleSliderMouseDown : undefined}
            $activeIndex={activeIndex}
            $width={width}
            $translateX={translateX}
          >
            {images.map(({ imageUrl, alt }, index) => (
              <ImageWrapper key={index} $width={width} $height={height}>
                <img
                  draggable={false}
                  src={imageUrl}
                  alt={alt || ''}
                  loading={index > 2 ? 'lazy' : undefined}
                />
              </ImageWrapper>
            ))}
          </SliderContainer>
          {activeIndex !== 0 && (
            <PrevButtonWrapper $showOnHover={showOnHover}>
              <button onClick={handleSlider(activeIndex - 1)}>{`＜`}</button>
            </PrevButtonWrapper>
          )}
          {activeIndex !== images.length - 1 && (
            <NextButtonWrapper $showOnHover={showOnHover}>
              <button onClick={handleSlider(activeIndex + 1)}>{`＞`}</button>
            </NextButtonWrapper>
          )}
        </>
      )}

      {type === 'fade' && (
        <>
          <FadeSliderContainer
            onMouseDown={isDraggable ? handleSliderMouseDown : undefined}
            $activeIndex={activeIndex}
          >
            {images.map(({ imageUrl, alt }, index) => (
              <FadeImageWrapper key={index} $width={width} $height={height}>
                <img
                  draggable={false}
                  src={imageUrl}
                  alt={alt || ''}
                  loading={index > 2 ? 'lazy' : undefined}
                />
              </FadeImageWrapper>
            ))}
          </FadeSliderContainer>
          <DotsWrapper $activeIndex={activeIndex}>
            {Array.from({ length: images.length }, (_, index) => (
              <Dot key={index} onClick={handleSlider(index)} />
            ))}
          </DotsWrapper>
        </>
      )}
    </Container>
  );
};

export default Carousel;
