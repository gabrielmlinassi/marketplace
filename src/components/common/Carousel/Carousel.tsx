import cn from "classnames";

import s from "./Carousel.module.scss";
import { useCarousel } from "./useCarousel";
import IconButton from "@components/ui/IconButton";
import { ArrowLeftIcon, ArrowRightIcon } from "@components/icons";

type CarouselProps = {
  slides: React.ReactNode[];
  /* Values are fixed for now */
  slidesPerViewDesktop: 3 | 4;
};

const Carousel = ({ slides, slidesPerViewDesktop }: CarouselProps) => {
  const carousel = useCarousel();

  const classes = {
    [s["slidesPerViewDesktop--3"]]: slidesPerViewDesktop === 3,
    [s["slidesPerViewDesktop--4"]]: slidesPerViewDesktop === 4,
  };

  return (
    <>
      <div ref={carousel.ref} className={cn(s.embla, classes)}>
        <div className={s.emblaContainer}>
          {slides.map((slide, i) => (
            <div key={i} className={s.emblaSlide}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className={cn(s.emblaNavigation)}>
        <>
          <IconButton
            variant="outline"
            color="secondary"
            disabled={!carousel.prevBtnEnabled}
            onClick={carousel.scrollPrev}
            icon={<ArrowLeftIcon />}
          />
          <IconButton
            variant="outline"
            color="secondary"
            disabled={!carousel.nextBtnEnabled}
            onClick={carousel.scrollNext}
            icon={<ArrowRightIcon />}
            style={{ marginLeft: "1.5rem" }}
          />
        </>
      </div>
    </>
  );
};

export default Carousel;
