import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Help() {
  return (
    <div className="flex flex-col md:flex-row p-6 md:gap-16 md:p-16 lg:p-24">
      <div className="text-3xl font-semibold">
        <h2 className="my-4">Need Help?</h2>
        <Button variant="outline" className="border-2 border-[--dark-shade]">
          Contact Support
        </Button>
      </div>
      <div className="my-6 md:my-0 flex-1 bg-blue-400">
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <div>
                <AccordionTrigger>
                  Do I need to link all bank acounts to use?
                </AccordionTrigger>
              </div>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-4 px-2 hover:bg-[--light-blue] rounded-lg">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
