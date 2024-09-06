import { ReactNode } from "react";
import CarouselSlide, { type CarouselSlideProps } from "./CarouselSlide";
import CarouselButton from "./CarouselButton";
import { useSlideIndex } from "./useSlideIndex";

type Slide = {
  imgUrl?: string;
  description?: ReactNode;
  attribution?: ReactNode;
};

export type CarouselProps = {
  slides?: Slide[];
  slideIndex?: number;
  onSlideIndexChange?: (newSlideIndex: number) => void;
  autoAdvanceInterval?: number;
  defaultImgHeight?: CarouselSlideProps["imgHeight"];
  DefaultImgComponent?: CarouselSlideProps["ImgComponent"];
};

/**
 * A carousel component that displays a series of slides.
 * @param slides - An array of objects containing slide information.
 * @param slideIndex - The index of the currently displayed slide.
 * @param onSlideIndexChange - A callback function that is called when the slide index changes.
 * @param autoAdvanceInterval - The interval (in milliseconds) at which the carousel should automatically advance to the next slide.
 * @param defaultImgHeight - The default height of the image displayed in the carousel.
 * @param DefaultImgComponent - The default component used to render the image in the carousel.
 * @returns A carousel component.
 */
const Carousel = ({
  slides,
  slideIndex: slideIndexProp,
  onSlideIndexChange,
  autoAdvanceInterval,
  defaultImgHeight,
  DefaultImgComponent,
}: CarouselProps) => {
  const [slideIndex, decrementSlideIndex, incrementSlideIndex] = useSlideIndex(
    slides,
    slideIndexProp,
    onSlideIndexChange,
    autoAdvanceInterval,
  );

  return (
    <div data-testid="carousel">
      <CarouselSlide
        imgHeight={defaultImgHeight}
        ImgComponent={DefaultImgComponent}
        {...slides?.[slideIndex]}
      />
      <CarouselButton data-testid="prev-button" onClick={decrementSlideIndex}>
        Prev
      </CarouselButton>
      <CarouselButton data-testid="next-button" onClick={incrementSlideIndex}>
        Next
      </CarouselButton>
    </div>
  );
};

export default Carousel;
