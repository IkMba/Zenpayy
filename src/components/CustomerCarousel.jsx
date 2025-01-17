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

// export function CustomerCarousel() {
//   const plugin = React.useRef;
//   Autoplay({ delay: 2000, stopOnInteraction: true });

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full max-w-xs"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {/* {Array.from({ length: 5 }).map((_, index) => ( */}
//         {/* <div className="p-1">
//               <Card>
//               <CardContent className="flex aspect-square items-center justify-center p-6">
//               <span className="text-4xl font-semibold">{index + 1}</span>
//               </CardContent>
//               </Card>
//               </div> */}
//         {reviews.map((item) => (
//           <CarouselItem>
//             <Testimonial review={item} />
//           </CarouselItem>
//         ))}
//         {/* ))} */}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

export function CustomerCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
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
