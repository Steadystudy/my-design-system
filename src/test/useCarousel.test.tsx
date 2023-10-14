import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useCarousel } from '../hooks/useCarousel';
import { userEvent } from '@testing-library/user-event';

describe('useCarousel 커스텀 훅 테스트', () => {
  test('handleSliderButton으로 버튼 클릭시 해당 index로 activeIndex 전환 및 translateX를 0으로 변경', async () => {
    const { result } = renderHook(({ width, slideLength }) => useCarousel(width, slideLength), {
      initialProps: {
        width: 300,
        slideLength: 30,
      },
    });

    expect(result.current.activeIndex).toBe(0);

    render(<button onClick={result.current.handleSliderButton(3)}>3으로 갑니다</button>);
    const btn = screen.getByText('3으로 갑니다');
    await userEvent.click(btn);

    expect(result.current.activeIndex).toBe(3);
    expect(result.current.translateX).toBe(0);
  });
});
