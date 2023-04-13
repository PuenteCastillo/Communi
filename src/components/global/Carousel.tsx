import Image from "next/image";
import { FC } from "react";

interface CarouselProps {
  data: [
    {
      image: {
        src: string;
        alt: string;
      };
      title: string;
      text: string;
    }
  ];
}

const Carousel: FC<CarouselProps> = (props: any) => {
  console.log(props[0]);
  const buttons = props.data.map((item: any, index: number) => {
    return (
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-current="true"
        aria-label={`Slide ${index}`}
      ></button>
    );
  });

  const items = props.data.map((item: any, index: number) => {
    return (
      <div
        className={index === 0 ? "carousel-item active" : "carousel-item"}
        data-bs-interval="10000"
      >
        <div className="carousel_item">
          <div className="carousel_item_image">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={500}
              height={500}
            />
          </div>
          <div className="carousel_item_text">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">{buttons}</div>
      <div className="carousel-inner">{items}</div>
    </div>
  );
};

export default Carousel;
