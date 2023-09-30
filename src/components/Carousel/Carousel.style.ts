import styled from 'styled-components';

export const Container = styled.div<{ $width: number; $height: number }>`
  position: relative;

  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;

  overflow: hidden;
`;

export const FadeSliderContainer = styled.div<{ $activeIndex: number }>`
  position: relative;

  width: 100%;
  height: 100%;

  & > div:nth-child(${(props) => props.$activeIndex + 1}) {
    opacity: 1;
  }
`;

export const SliderContainer = styled.div<{
  $activeIndex: number;
  $width: number;
  $translateX: number;
}>`
  display: flex;
  width: 100%;
  height: 100%;

  transform: translateX(${(props) => -props.$activeIndex * props.$width + props.$translateX}px);
  transition: transform 300ms ease-in-out;
`;

export const ImageWrapper = styled.div<{ $width: number; $height: number }>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;

  & > img {
    width: ${(props) => props.$width}px;
    height: ${(props) => props.$height}px;

    object-fit: cover;
  }
`;

export const FadeImageWrapper = styled(ImageWrapper)`
  position: absolute;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

export const DotsWrapper = styled.div<{ $activeIndex: number }>`
  position: absolute;
  display: flex;
  bottom: 4px;
  left: 50%;
  transform: translate(-50%);
  gap: 8px;

  :nth-child(${(props) => props.$activeIndex + 1}) {
    opacity: 1;
  }
`;

export const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0.7;
  cursor: pointer;
`;
