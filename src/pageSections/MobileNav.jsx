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
    <Sheet >
      <SheetTrigger asChild className="bg-[--dark-shade] text-white">
        <Menu  size={32}/>
      </SheetTrigger>
      <SheetContent className=" bg-[--light-blue]">
        <SheetHeader>
          {/* <SheetTitle>Edit profile</SheetTitle> */}
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="flex flex-col mt-16 gap-8 text-xl hover:*:text-[--blue]">
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
        <Button
          asChild
          variant="secondary"
         className="w-fit text-xl bg-[--dark-shade] text-white"
        >
          <Link to="/login">Login</Link>
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
