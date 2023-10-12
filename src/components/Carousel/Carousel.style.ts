import styled from 'styled-components';

export const Container = styled.div<{ $width: number; $height: number }>`
  position: relative;

  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;

  overflow: hidden;
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

export const FadeSliderContainer = styled(SliderContainer)`
  transform: none;

  & > div:nth-child(${(props) => props.$activeIndex + 1}) {
    opacity: 1;
  }
`;

export const SlideImageWrapper = styled.div<{ $width: number; $height: number }>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;

  & > img {
    width: ${(props) => props.$width}px;
    height: ${(props) => props.$height}px;

    object-fit: cover;
  }
`;

export const FadeImageWrapper = styled(SlideImageWrapper)`
  position: absolute;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

export const ButtonWrapper = styled.div<{ $showOnHover?: boolean }>`
  opacity: ${(props) => (props.$showOnHover ? '0' : '1')};

  .image_carousel_container:hover & {
    opacity: 1;
  }

  & > button {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    outline: 0;
    opacity: 0.7;

    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;

export const PrevButton = styled.button`
  left: 0.5rem;
`;

export const NextButton = styled.button`
  right: 0.5rem;
`;

export const DotsWrapper = styled.div<{ $activeIndex: number; $showOnHover?: boolean }>`
  opacity: ${(props) => (props.$showOnHover ? '0' : '1')};

  .image_carousel_container:hover & {
    opacity: 1;
  }

  position: absolute;
  display: flex;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%);
  gap: 8px;

  &:nth-child(${(props) => props.$activeIndex + 1}) {
    opacity: 1;
  }

  & > button {
    &:nth-child(${(props) => props.$activeIndex + 1}) {
      background-color: black;
    }
  }
`;

export const Dot = styled.button`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  opacity: 0.7;
  cursor: pointer;
`;
