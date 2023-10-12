import {
  Container,
  Dot,
  DotsWrapper,
  FadeImageWrapper,
  FadeSliderContainer,
  SlideImageWrapper,
  SliderContainer,
  ButtonWrapper,
  PrevButton,
  NextButton,
} from './Carousel.style';
import { useCarousel } from '../../hooks/useCarousel';
import { useEffect } from 'react';

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
  /** 드래그 여부 설정합니다. *
   *
   * @default false
   */
  isDraggable?: boolean;
  /** Carousel 위에 마우스 올렸을 때 화살표 방향 보여줄지 설정합니다.
   *
   * @default false
   */
  showOnHover?: boolean;
  /** Carousel 아래부분에 이미지 갯수만큼 dot navigation을 보여줄지 설정합니다
   *
   * @default false
   */
  showDots?: boolean;
  /** Carousel 화살표 방향 보여줄지 설정합니다.
   *
   * @default true
   */
  showArrow?: boolean;
  /** Carousel 자동 플레이 여부를 설정합니다.
   *
   * @default false
   */
  autoPlay?: boolean;
}

const Carousel = ({
  width,
  height,
  images,
  type = 'slide',
  isDraggable = false,
  showOnHover = false,
  showDots = false,
  showArrow = true,
  autoPlay = false,
}: CarouselProps) => {
  const { slideRef, activeIndex, handleSlider, handleSliderMouseDown, translateX, handleAutoPlay } =
    useCarousel(width, images.length);

  let ImageContainer = SliderContainer;
  let ImageWrapper = SlideImageWrapper;

  if (type === 'fade') {
    ImageContainer = FadeSliderContainer;
    ImageWrapper = FadeImageWrapper;
  }

  useEffect(() => {
    handleAutoPlay(autoPlay);
  }, [autoPlay, handleAutoPlay]);

  return (
    <Container $width={width} $height={height} className="image_carousel_container">
      <ImageContainer
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
      </ImageContainer>
      {showArrow && (
        <ButtonWrapper $showOnHover={showOnHover}>
          {activeIndex !== 0 && (
            <PrevButton onClick={handleSlider(activeIndex - 1)}>{`＜`}</PrevButton>
          )}
          {activeIndex !== images.length - 1 && (
            <NextButton onClick={handleSlider(activeIndex + 1)}>{`＞`}</NextButton>
          )}
        </ButtonWrapper>
      )}
      {showDots && (
        <DotsWrapper $activeIndex={activeIndex} $showOnHover={showOnHover}>
          {Array.from({ length: images.length }, (_, index) => (
            <Dot key={index} onClick={handleSlider(index)} />
          ))}
        </DotsWrapper>
      )}
    </Container>
  );
};

export default Carousel;
