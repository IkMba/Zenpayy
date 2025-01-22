import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Testimonial from "./Testimonial";
import { reviews } from "@/data/data";

export function CustomerCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      // stopOnInteraction: true
      
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {reviews.map((item) => (
          <CarouselItem key={item.review}>
            <Testimonial review={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
