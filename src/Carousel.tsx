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
