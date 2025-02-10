import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function MobileNav() {
  return (
    <Sheet className='bg-[--dark-shade]' >
      <SheetTrigger asChild className="bg-inherit text-[--torq-blue]">
        <Menu  size={32}/>
      </SheetTrigger>
      <SheetContent className=" bg-[--light-blue]">
        <SheetHeader>
          {/* <SheetTitle>Edit profile</SheetTitle> */}
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="flex flex-col mt-16 gap-8 text-xl hover:*:text-[--blue] ">
        <Link to="/about">About</Link>
        <Link to="/save">Save</Link>
        <Link to="/invest">Invest</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Button
          asChild
          variant="secondary"
         className="w-fit text-xl bg-[--dark-shade] text-white hover:!text-white"
        >
          <Link to="/register">Get Started</Link>
          </Button>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
