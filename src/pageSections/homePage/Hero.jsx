// import Nav from "@/components/Nav";
import FeatureCards from "@/components/FeatureCards";
import { Button } from "@/components/ui/button";

import { features } from "@/data/data";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

// type Props = {};

const Hero = () => {
  return (
    <div className="bg-[--dark-shade] text-[--light-blue] text-center pt-12 pb-8">
      <div className=" md:max-w-[600px] px-4 mx-auto flex gap-8 flex-col justify-center text-center py-20">
        <Button className="bg-[--light-shade] rounded-[5px] w-fit mx-auto text-[.7rem] md:text-[.8rem]">
          <Star /> Trusted by our clients for 5 years now.
          
        </Button>
        <div>
          <h1 className="text-[2.6rem] md:text-6xl my-3 mt-0 font-bold hero-header">
            <span className="text-[--torq-blue]">Re</span>volutionize Your Pa<span className="text-[--torq-blue]">yments Exper</span>ience.
          </h1>
          {/* <h1 className="text-5xl md:text-5xl my-3 font-semibold">
            <span className="text-[--torq-blue]">Payments Exper</span>ience
          </h1> */}
          <p className="text-sm">
            Unlock seamless, secure, and instant financial transactions with our efficient
            services.
          </p>
        </div>
        <div>
          <Button className="bg-[--torq-blue] text-[--dark-shade] mr-4 ">
            <Link to='/register'>  Start Now</Link>
          
          </Button>
          <Button className="bg-[--light-shade] text-[--torq-blue] border-[--torq-blue] border">
            <Link to='about'>  Explore Microloan</Link>
          
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-8 flex-wrap lg:px-16 ">
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
