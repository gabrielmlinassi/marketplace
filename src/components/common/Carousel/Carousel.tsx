import styled from "styled-components";
import { useCarousel } from "./useCarousel";

type CarouselProps = {
  slides: React.ReactNode[];

  /** [mobile, tablet, desktop] */
  slidesPerView: [number, number, number];
};

const Carousel = ({ slides, slidesPerView }: CarouselProps) => {
  const carousel = useCarousel();

  return (
    <StyledCarousel ref={carousel.ref} {...{ slidesPerView }}>
      <StyledCarouselContainer>
        {slides.map((slide, i) => (
          <StyledCarouselSlide key={i} {...{ slidesPerView }}>
            {slide}
          </StyledCarouselSlide>
        ))}
      </StyledCarouselContainer>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div<Pick<CarouselProps, "slidesPerView">>`
  overflow: hidden;
  margin-right: -1rem;

  &::before {
    display: none;
    content: ${({ slidesPerView }) =>
      `'{ "slidesToScroll": ${slidesPerView[0]} }'`};
  }

  @media only screen and (min-width: 768px) {
    &::before {
      display: none;
      content: ${({ slidesPerView }) =>
        `'{ "slidesToScroll": ${slidesPerView[1]} }'`};
    }
  }

  @media only screen and (min-width: 1024px) {
    &::before {
      display: none;
      content: ${({ slidesPerView }) =>
        `'{ "slidesToScroll": ${slidesPerView[2]} }'`};
    }
  }
`;

const StyledCarouselContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledCarouselSlide = styled.div<Pick<CarouselProps, "slidesPerView">>`
  position: relative;
  flex: ${({ slidesPerView }) =>
    `0 0 calc((100% / ${slidesPerView[0]}) - 1rem)`};

  @media only screen and (min-width: 768px) {
    flex: ${({ slidesPerView }) =>
      `0 0 calc((100% / ${slidesPerView[1]}) - 1rem)`};
  }

  @media only screen and (min-width: 1024px) {
    flex: ${({ slidesPerView }) =>
      `0 0 calc((100% / ${slidesPerView[2]}) - 1rem)`};
  }
`;

export default Carousel;
