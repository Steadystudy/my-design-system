import { MouseEvent, useState } from 'react';
import { Container, Dot, DotsWrapper, ImageWrapper, SliderContainer } from './Carousel.style';

interface Image {
  imageUrl: string;
  alt?: string;
}

export interface CarouselProps {
  width: number;
  height: number;
  images: Image[];
}

const Carousel = ({ width, height, images }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleSlider = (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setActiveIndex(index);
    setTranslateX(0);
  };

  return (
    <Container $width={width} $height={height}>
      <SliderContainer $activeIndex={activeIndex} $width={width} $translateX={translateX}>
        {images.map(({ imageUrl, alt }, index) => (
          <ImageWrapper key={index} $width={width} $height={height}>
            <img draggable={false} src={imageUrl} alt={alt || ''} />
          </ImageWrapper>
        ))}
      </SliderContainer>
      <DotsWrapper>
        {Array.from({ length: images.length }, (_, index) => (
          <Dot key={index} onClick={handleSlider(index)} />
        ))}
      </DotsWrapper>
    </Container>
  );
};

export default Carousel;
