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

export const DotsWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 4px;
  transform: translate(-50%);
  display: flex;
  gap: 8px;
`;

export const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  cursor: pointer;
`;
