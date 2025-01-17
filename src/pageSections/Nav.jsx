// type Props = {};

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6 bg-[--dark-shade] py-4 ">
      <div className="logo">
        <h3 className="text-[--light-blue] text-2xl">MicroLoan</h3>
      </div>
      <div className=" hidden lg:flex gap-8 text-[--torq-blue]">
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/support">Support</Link>
      </div>
      <div className="text-[--torq-blue] flex gap-4 items-center">
        <Link to="/contact">Contact</Link>
        <Button
          asChild
          variant="secondary"
          className="rounded-xl bg-[--light-blue] text-[--dark-shade] py-2 px-4"
        >
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Nav;
