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
                <AccordionTrigger>
                What is Zenpay?
                </AccordionTrigger>
              </div>
              <AccordionContent>
              A fully integrated suite of financial and payments products.Everything you need for better money management in one place.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How Secure is my Money?</AccordionTrigger>
              <AccordionContent>
                The funds in your Account are warehoused and managed by PV
                Capital Limited - RC No. 1760152 (“PV Capital”). All its
                operations are in compliance with applicable regulations. In
                addition, we enforce bank-grade security levels and provide you
                with the option to set up two-factor authentication for key
                transactions, as an extra layer of protection, over your
                PiggyVest Account.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Are there bank charges when you deduct from my account?</AccordionTrigger>
              <AccordionContent>
              There are no bank charges for transferring money to your Zenpay account.
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
                Does Zenpay have an office?
              </AccordionTrigger>
              <AccordionContent>
                Yes! We are located at Tesmot House Zurich Switzerland You can
                also reach us on our email: Email: contact@zenpay.com
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
