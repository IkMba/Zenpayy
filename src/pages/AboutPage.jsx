import AboutBanner from "@/pageSections/aboutpage/AboutBanner";
import AboutWhy from "@/pageSections/aboutpage/AboutWhy";
import Features from "@/pageSections/homePage/Features";
import Partners from "@/pageSections/homePage/Partners";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <AboutWhy />
      <Partners />
      <Features />
    </div>
  );
};

export default AboutPage;
