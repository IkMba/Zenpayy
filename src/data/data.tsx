import { Icon, ShieldCheck, Star } from "lucide-react";
import { targetArrow } from "@lucide/lab";
import reviewImg1 from "@/assets/profileF3.jpg";
import reviewImg2 from "@/assets/profileM1.jpg";

export const features = [
  {
    icon: <Star fill="#7ed6df" strokeWidth={5} size={32} />,
    features: {
      title: "Secure Transfer",
      text: "Microloan enables you to get instant loans directlu into your account with no collateral.",
    },
  },
  {
    icon: <ShieldCheck size={32} />,
    features: {
      title: "Seamless Transactions",
      text: "Microloan enables you to get instant loans directlu into your account with no collateral.",
    },
  },
  {
    icon: <Icon iconNode={targetArrow} size={32} />,
    features: {
      title: "Instant Loans",
      text: "Microloan enables you to get instant loans directlu into your account with no collateral.",
    },
  },
];

export const reviews = [
  {
    org: "Atlassian",
    text: "The best payment solution is the best thing that ever happened to me",
    img: reviewImg1,
    firstName: "Harah Sahad",
    occupation: "Finance Consultant",
  },
  {
    org: "Jira",
    text: "The best payment solution is the best thing that ever happened to me",
    img: reviewImg2,
    firstName: "Harah Sahad",
    occupation: "Tech person",
  },
  {
    org: "Loaneer",
    text: "The best payment solution is the best thing that ever happened to me",
    img: reviewImg1,
    firstName: "Harah Sahad",
    occupation: "Finance Consultant",
  },
];
