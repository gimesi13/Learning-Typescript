import { ReactNode } from "react";
import Carousel, { ItemObject } from "react-elastic-carousel";

interface SliderProps {
  breakPoints: {
    width: number;
    itemsToShow: number;
  }[];
  images: {
    img: JSX.Element;
    name: string;
  }[];
  children?: ReactNode
}

//carousel needs fixing
export const Slider: React.FC<SliderProps> = ({
  images,
  breakPoints
}): JSX.Element => {
  return (
    <div className="slider-container">
      <Carousel isRTL={false} className="slider" breakPoints={breakPoints}>
        {images.map((image) => {
          return (
            <div className="slider-image" key={image.img.type}>
              {image.img}
              <div key={image.name} className="slider-image-name">
                {image.name}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
