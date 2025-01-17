// import Nav from "@/components/Nav";
import FeatureCards from "@/components/FeatureCards";
import { Button } from "@/components/ui/button";

import { features } from "@/data/data";
import { Star } from "lucide-react";

// type Props = {};

const Hero = () => {
  return (
    <div className="bg-[--dark-shade] text-[--light-blue] text-center ">
      <div className=" md:max-w-[600px] px-4 mx-auto flex gap-8 flex-col justify-center text-center py-20">
        <Button className="bg-[--light-shade] rounded-[5px] w-fit mx-auto text-[.6rem] md:text-[.7rem]">
          <Star /> Trusted by our clients for 10 years now
        </Button>
        <div>
          <h1 className="text-4xl md:text-5xl my-3 mt-0 font-semibold">
            Revolutionize Your
          </h1>
          <h1 className="text-4xl md:text-5xl my-3 font-semibold">
            <span className="text-[--torq-blue]">Payments Exper</span>ience
          </h1>
          <p className="text-sm">
            Unlock seamless,secure, and instant financial transactions.
            Manage,send and borrow loans instantly with our secure and efficient
            services.
          </p>
        </div>
        <div>
          <Button className="bg-[--torq-blue] text-[--dark-shade] mr-4">
            Start Now
          </Button>
          <Button className="bg-[--light-shade] text-[--torq-blue] border-[--torq-blue] border">
            Explore Microloan
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-8 flex-wrap lg:px-16">
        {features.map((item) => (
          <FeatureCards
            features={item.features}
            icon={item.icon}
            key={item.features.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
