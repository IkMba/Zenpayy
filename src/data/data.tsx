import { Icon, ShieldCheck, Star } from "lucide-react";
import { targetArrow } from "@lucide/lab";
import reviewImg1 from "@/assets/profileF3.jpg";
import reviewImg2 from "@/assets/profileM1.jpg";
import user1 from "@/assets/user1.jpg";
import user2 from "@/assets/user2.jpg";
import user3 from "@/assets/user3.jpg";
import user4 from "@/assets/user4.jpg";

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
    text: "This app has made things so much easier. Can transfer immediately to people. The savings tools are simply amazing. I just adore the app.",
    img: user1,
    firstName: "Eric JB",
    occupation: "Consultant",
  },
  {
    org: "Jira",
    text: "Great help. I had a problem that was solved within a few minutes and I'm really satisfied about that. Whenever I need help, there's always someone who'll find a way to give me a solution",
    img: user2,
    firstName: "Harah Sahad",
    occupation: "Product manager",
  },
  {
    // org: "Loaneer",
    text: "Been using Revolut for years and not a bad word to say about them. Always very helpful when things go wrong and easy to contact. Had an issue yesterday where my card was compromised and it was dealt with so quickly with little hinderance to my life. Safety is a top priority and I love the one time use disposable cards for buying things online!",
    img: user3,
    firstName: "Laura AB",
    occupation: "Mom",
  },
  {
    // org: "Busin",
    text: "The best payment solution is the best thing that ever happened to me",
    img: user4,
    firstName: "John Besnner",
    occupation: "Business owner",
  },
  {
    // org: "Loaneer",
    text: "I'm extremely satisfied with Revolut! I've had a great experience using their services: so easy and user-friendly. On top of that, every problem I've encountered was quickly resolved with the help of their kind and effective customer support. 5 stars all the way!",
    img: reviewImg1,
    firstName: "Michelle kulman",
    occupation: "Content creator",
  },
];
