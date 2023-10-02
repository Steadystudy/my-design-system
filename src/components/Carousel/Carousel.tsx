import { MouseEvent, useState } from 'react';
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
  width: number;
  height: number;
  images: Image[];
  effect?: 'fade' | 'slide';
}

const Carousel = ({ width, height, images, effect = 'fade' }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleSlider = (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setActiveIndex(index);
    setTranslateX(0);
  };

  return (
    <Container $width={width} $height={height}>
      {effect === 'slide' && (
        <>
          <SliderContainer $activeIndex={activeIndex} $width={width} $translateX={translateX}>
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
            <PrevButtonWrapper>
              <button onClick={handleSlider(activeIndex - 1)}>{`＜`}</button>
            </PrevButtonWrapper>
          )}
          {activeIndex !== images.length - 1 && (
            <NextButtonWrapper>
              <button onClick={handleSlider(activeIndex + 1)}>{`＞`}</button>
            </NextButtonWrapper>
          )}
        </>
      )}

      {effect === 'fade' && (
        <>
          <FadeSliderContainer $activeIndex={activeIndex}>
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
