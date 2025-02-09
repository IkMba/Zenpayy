// type Props = {};

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6 bg-inherit py-4 md:px-12 absolute top-0 left-0 right-0">
      <div className="logo">
        <Link to='/' className="text-[--torq-blue] text-2xl md:text-3xl">Zenpay</Link>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className=" hidden lg:flex gap-8 text-[--torq-blue]">
        <Link to="/about">About</Link>
        <Link to="/save">Save</Link>
        <Link to="/invest">Invest</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hidden text-[--torq-blue] md:flex gap-4 items-center">
        <Link to="/login">Login</Link>
        <Button
          asChild
          variant="secondary"
          className="rounded-xl bg-[--light-blue] text-[--dark-shade] py-2 px-4"
        >
          <Link to="/register">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Nav;
