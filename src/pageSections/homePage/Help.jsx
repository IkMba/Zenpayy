import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="flex flex-col md:flex-row p-6 md:gap-16 md:p-16 lg:p-24">
      <div className="text-lg font-semibold">
        <h2 className="my-4">Need Help?</h2>
        <Link
          variant="outline"
          to="/contact"
          className="border-2 border-[--dark-shade]  px-4 py-2"
        >
          Contact Support
        </Link>
      </div>
      <div className="my-6 md:my-0 flex-1 ">
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <div>
                <AccordionTrigger>What is Trustbanky?</AccordionTrigger>
              </div>
              <AccordionContent>
                A fully integrated suite of financial and payments
                products.Everything you need for better money management in one
                place.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How Secure is my Money?</AccordionTrigger>
              <AccordionContent>
                All our operations are in compliance with applicable
                regulations. In addition, we enforce bank-grade security levels
                and provide you with the option to set up two-factor
                authentication for key transactions, as an extra layer of
                protection, over your Trustbanky Account.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Are there bank charges when you deduct from my account?
              </AccordionTrigger>
              <AccordionContent>
                There are no bank charges for transferring money to your
                Trustbanky account.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Are my card details safe?</AccordionTrigger>
              <AccordionContent>
                Yes! We work with PCIDSS-compliant payment processors to handle
                your card details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Does Trustbanky have an office?
              </AccordionTrigger>
              <AccordionContent>
                Yes! We are located atWhitworth Street West, Deansgate,
                Manchester, U.K You can also reach us on our email: Email:
                contact@Trustbanky.com
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
