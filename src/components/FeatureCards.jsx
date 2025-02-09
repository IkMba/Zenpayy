import { icons, Star } from "lucide-react";
import { Icon } from "lucide-react";

// type Features = {
//   title: string;
//   text: string;
// };
// type Props = {
//   features: Features;
//   // icon: React.ReactNode | LucideIcon;
//   icon: SVGSVGElement | ;
// };

const FeatureCards = ({ features, icon }) => {
  return (
    <div className="hero-card bg-[--light-shade] max-w-[350px] px-6 py-6 rounded-xl text-left flex  gap-4 flex-col border-[--torq-blue] border ">
      {/* <Icon iconNode={Star} /> */}
      {/* <LucideIcon > */}
      {/* <Star></Star> */}

      {/* <Lucid /> */}
      {icon}
      <h3 className="text-xl font-semibold">{features.title}</h3>
      <h3 className="text-[13px] text-[--light-blue]">{features.text}</h3>
    </div>
  );
};

export default FeatureCards;
