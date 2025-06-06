import "./Carrousel.css";
import { useState } from "react";

type CarrouselProps = {
  images: string[];
};

export default function Carrousel({ images }: CarrouselProps) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return <div className="carrousel-empty">No images available</div>;
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carrousel">
      <button
        className="carrousel-arrow carrousel-arrow-left"
        onClick={prevSlide}
        aria-label="Previous image"
        disabled={images.length === 1}
      >
        <img
          src="https://img.icons8.com/?size=200&id=9438&format=png&color=FFFFFF"
          alt="Previous"
        />
      </button>
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="carrousel-image"
      />
      <button
        className="carrousel-arrow carrousel-arrow-right"
        onClick={nextSlide}
        aria-label="Next image"
        disabled={images.length === 1}
      >
        <img
          src="https://img.icons8.com/?size=200&id=9432&format=png&color=FFFFFF"
          alt="Next"
        />
      </button>
      <div className="carrousel-indicator">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
