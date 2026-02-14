import React from "react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import "./css/embla.css";

const EmblaCarousel = (props) => {
  const { slides = [], options } = props;

  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
    ClassNames(),
  ]);

  // Check for empty slides after hooks initialization
  if (!slides || slides.length === 0) {
    return (
      <div className="text-center p-8 text-gray-400">No books available</div>
    );
  }

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((book, index) => (
            <div className="embla__slide" key={book.bookId || index}>
              <div className="embla__slide__card rounded-lg shadow-lg overflow-hidden h-full">
                <img
                  src={book.bookImage?.[0]?.image || ""}
                  alt={book.bookName || "Book"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__live-region" />
    </section>
  );
};

export default EmblaCarousel;
