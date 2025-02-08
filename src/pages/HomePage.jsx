import { useIsLoggedIn, useLogin } from "@/api/MyUserApi";
import Customer from "@/pageSections/homePage/Customer";
import Features from "@/pageSections/homePage/Features";
import Help from "@/pageSections/homePage/Help";
import Hero from "@/pageSections/homePage/Hero";
import How from "@/pageSections/homePage/How";
import Partners from "@/pageSections/homePage/Partners";
import Ready from "@/pageSections/homePage/Ready";
import Systems from "@/pageSections/homePage/Systems";

const HomePage = () => {

  return (
    <>
      <Hero />
      <Features />
      <Systems />
      <Customer />
      <Partners />
      <How />
      <Help />
      <Ready />
    </>
  );
};
export default HomePage;
