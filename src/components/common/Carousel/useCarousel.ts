import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const useCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    ref: emblaRef,
    prevBtnEnabled,
    nextBtnEnabled,
    scrollNext,
    scrollPrev,
  };
};

export { useCarousel };
